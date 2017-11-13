class SkrollsController < ApplicationController
  def index
    @skrolls = Skroll.all
  end

  def new
    @skroll = Skroll.new
  end

  def create
    @skroll = Skroll.new(skroll_params)
    if @skroll.save
      redirect_to '/'
    else
      render 'new'
    end
  end

  def show
    @skroll = Skroll.find(params[:id])
    @articles = @skroll.articles
  end

  private
  def skroll_params
    params.require(:skroll).permit(:name)
  end
end
