class ListsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @lists = List.all
        render :index
    end

    def show
        @list = List.find(params[:id])
        render :show
    end
end