class ListsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @lists = List.all.includes(:videos)
        render :index
    end

    def show
        @list = List.find(params[:id]).includes(:videos)
        render :show
    end
end