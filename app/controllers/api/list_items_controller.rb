# frozen_string_literal: true

class Api::ListItemsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @list_item = ListItem.new(list_item_params)
    @list_item.save
    render :show
  end

  def special_destroy
    video_id = params['data']['video_id']
    list_id = params['data']['list_id']
    @list_item = ListItem.find_by(video_id: video_id, list_id: list_id)
    @list_item.destroy!
    render :show
  end

  private

  def list_item_params
    params.require(:listItem).permit(:video_id, :list_id)
  end
end
