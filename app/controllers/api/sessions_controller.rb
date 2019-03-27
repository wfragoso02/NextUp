class Api::SessionsController < ApplicationController

    # def new
    #   render :new
    # end
    
    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        login!(@user)
        redirect_to api_profiles_url
      else
        render json: ['Invalid credentials'], status: 401
      end
    end
  
    def destroy
      if current_user 
        logout!
        render json: {}
      else
        render json: { message: 'Not logged in'}, status: 404
      end
    end
  end
  