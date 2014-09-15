class Api::ListsController < ApplicationController
  def index
    @lists = List.all
  end
end
