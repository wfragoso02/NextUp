class AddReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :like, :boolean, default: false
    add_column :videos, :dislike, :boolean, default: false
  end
end
