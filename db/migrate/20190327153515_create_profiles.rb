class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :profiles, :user_id
  end
end
