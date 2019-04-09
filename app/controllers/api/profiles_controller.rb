class Api::ProfilesController < ApplicationController

    before_action :ensure_logged_in

    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id
        List.create!({profile: @profile})
        @profile.save!
        render :show
    end

    def index
        @profiles = current_user.profiles
        render :index
    end

    def show
        @profile = Profile.find(params[:id])
        render :show
    end


    def update
        @profile = Profile.find(params[:id])
        @profile.update(profile_params);
        render :show
    end
    
    def destroy
        @profile = Profile.find(params[:id])
        @profile.destroy!
        render :show
    end

    private
    def profile_params
        params.require(:profile).permit(:image_url, :name)
    end
    
end