class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :video_id, null: false
      t.integer :profile_id, null: false
      t.string :like
      t.timestamps
    end
    add_index :ratings, :profile_id
    add_index :ratings, :video_id
  end
end
