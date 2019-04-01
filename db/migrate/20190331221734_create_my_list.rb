class CreateMyList < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :profile_id, null: false
      t.timestamps
    end
    add_index :lists, :profile_id
  end
  def change
    create_table :list_items do |t|
      t.integer :list_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :list_items, :list_id
    add_index :list_items, :video_id
  end

end
