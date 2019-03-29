class Api::ProfilesController < ApplicationController

    before_action :ensure_logged_in

    def new
    end

    def create
    end

    def index
        @profiles = current_user.profiles
        render :index
    end

    def show
        @profile = Profile.find(params[:id])
        render :show
    end

    def edit
    end

    def update
    end
    
    def destroy
    end

    private
    def profile_params
        params.permit(:profile).require(:user_id, :image_url, :name)
    end
    
end