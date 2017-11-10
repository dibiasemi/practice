class CreateSkrolls < ActiveRecord::Migration[5.1]
  def change
    create_table :skrolls do |t|
      t.string :name

      t.timestamps
    end
  end
end
