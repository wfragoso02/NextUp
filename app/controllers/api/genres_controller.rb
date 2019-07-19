# frozen_string_literal: true

class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all.includes(:videos)
    render :index
  end

  def show
    @genre = Genre.find(params[:id])
    render :show
  end
end
