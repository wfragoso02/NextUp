class Api::ProfilesController < ApplicationController

    before_action :ensure_logged_in

    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id
        if @profile.save
            List.create!({profile: @profile})
            @profile.save!
            render :show
        else
            render json: ["Please enter a name"], status: 401
        end

    end

    def index
        @profiles = current_user.profiles.includes(:list)
        render :index
    end

    def show
        @profile = Profile.find(params[:id])
        render :show
    end


    def update
        @profile = Profile.find(params[:id])
        if @profile.update(profile_params)
            render :show
        else
            render json: ["Please enter a name"], status: 401
        end
            
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