# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Sorry, we can't find an account with this email address. Please try again or create a new account."], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: { message: 'Not logged in' }, status: 404
    end
  end
end
