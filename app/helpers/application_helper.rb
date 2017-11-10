module ApplicationHelper
  require 'uri'

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
    elsif url.hostname == "www.nytimes.com"
      host = '.story-body-text'
    elsif url.hostname == "www.foxnews.com"
      host = 'p'
    end

    content = []
    page.search(host).each do |div|
      content << div.text.strip
    end
    content
  end

end
