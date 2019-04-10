class Api::VideosController < ApplicationController 
    before_action :ensure_logged_in
    
    def show
        @video = Video.find(params[:id]).includes(:image).includes(:movie)
        render :show
    end

    def index
        @videos = Video.where("title ILIKE ?", "%#{params[:title]}%")
        render :index
    end
end