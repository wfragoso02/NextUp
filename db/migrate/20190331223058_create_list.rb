class CreateList < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :profile_id, null: false
      t.timestamps
    end
    add_index :lists, :profile_id
  end
end
