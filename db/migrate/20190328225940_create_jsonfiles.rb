class CreateJsonfiles < ActiveRecord::Migration
  def change
    create_table :jsonfiles do |t|
      t.string :title
      t.string :content
    end
  end
end
