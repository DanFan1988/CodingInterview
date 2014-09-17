class Api::ListsController < ApplicationController
  def index
    @lists = List.all
  end
  
  def show
    @list = List.find(params[:id])
  end
  
  def create
    @list = List.new(list_params)
    if @list.save
      render :index
    else
      render :json => @list.errors.full_messages
    end
  end
  
  def list_params
    params.permit(:title)
  end
end
