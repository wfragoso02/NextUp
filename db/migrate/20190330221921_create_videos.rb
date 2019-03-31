class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :year, null: false
      t.string :creator
      t.string :cast
      t.string :rating, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
