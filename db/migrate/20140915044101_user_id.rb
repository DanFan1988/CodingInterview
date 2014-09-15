class UserId < ActiveRecord::Migration
  def change
    remove_column :items, :user_id
    add_column :items, :list_id, :integerr
  end
end
