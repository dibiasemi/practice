module ApplicationHelper

  def title(article_url)
    mechanize = Mechanize.new
    page = mechanize.get(article_url)
    page.title
  end

  def content(article_url)
    url = URI.parse(article_url)
    mechanize = Mechanize.new
    page = mechanize.get(article_url)
    if url.hostname == "www.cnn.com"
      host = 'div .zn-body__paragraph'
    end
    content = page.search(host).each do |div|
      div.text.strip
    end
  end

end
