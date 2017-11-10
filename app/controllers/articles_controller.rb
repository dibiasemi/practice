class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def new
    @skroll = Skroll.find(params[:skroll_id])
    @article = Article.new
  end

  def create
    @skroll = Skroll.find(params[:skroll_id])

    @article = @skroll.article.new(skroll_id: @skroll.id, url: params[:url])
    if @rating.save
      redirect_to articles_path(@skroll)
    else
      render 'new'
    end
  end

end
