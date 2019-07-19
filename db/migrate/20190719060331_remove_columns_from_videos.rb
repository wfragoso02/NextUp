class RemoveColumnsFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :like
    remove_column :videos, :dislike
  end
end
