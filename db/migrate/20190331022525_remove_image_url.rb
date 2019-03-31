class RemoveImageUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :image_url, :string
  end
end
