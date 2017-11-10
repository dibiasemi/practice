class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.integer :skroll_id
      t.string :url

      t.timestamps
    end
  end
end

