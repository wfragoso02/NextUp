# frozen_string_literal: true

class Api::ListsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @lists = List.all.includes(:videos)
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
  end
end
