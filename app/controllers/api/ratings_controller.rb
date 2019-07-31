# frozen_string_literal: true

class Api::RatingsController < ApplicationController
  before_action :ensure_logged_in

  def update
    @rating = Rating.find(params[:id])
    @rating.update(rating_params)
    render :show
  end

  def create
    @rating = Rating.new(rating_params)
    @rating.save!
    render :show
  end

  private

  def rating_params
    params.require(:rating).permit(:video_id, :profile_id, :like)
  end
end
