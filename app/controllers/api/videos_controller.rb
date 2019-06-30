class Api::VideosController < ApplicationController 
    before_action :ensure_logged_in
    
    def show
        @video = Video.find(params[:id])
        render :show
    end

    def index
        @videos = Video.where("title ILIKE ?", "%#{params[:title]}%")
        render :index
    end

    def update
        @video = Video.find(params[:id])
        @video.update(video_params);
        render :show
    end

    private
    def video_params
        params.require(:video).permit(:like, :dislike, :id, :title, :year, :description, :rating)
    end
end