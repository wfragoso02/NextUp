class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.integer :genre_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :categories, :genre_id
    add_index :categories, :video_id
  end
end
