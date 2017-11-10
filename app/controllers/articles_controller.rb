class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def new
    @skroll = Skroll.find(params[:skroll_id])
    @article = Article.new
  end

  def create
    puts "LKJDFLKJFLKDSJLKDJFLKDSJFLKSDJFLKj"
    p params
    @skroll = Skroll.find(params[:skroll_id])

    @article = Article.new(skroll: @skroll, url: params[:article][:url])
    if @article.save
      p @article
      redirect_to new_skroll_article_path(@skroll)
    else
      render 'new'
    end
  end

end
