class Api::VideosController < ApplicationController 
    before_action :ensure_logged_in
    
    def show
        @video = Video.find(params[:id])
        render :show
    end
end