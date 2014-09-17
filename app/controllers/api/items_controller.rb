class Api::ItemsController < ApplicationController
  
  def create
    @item = Item.new(item_params)
    @item.save
  end
  
  def item_params
    params.permit(:title, :list_id)
  end
end
