class CreateJsonfiles < ActiveRecord::Migration
  def change
    create_table :jsonfiles do |t|
      t.string :name
      t.string :content
    end
  end
end
