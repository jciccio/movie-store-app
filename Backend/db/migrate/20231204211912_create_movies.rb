class CreateMovies < ActiveRecord::Migration[7.1]
  def self.up
    create_table :movies do |t|
      t.string :title, index: { unique: true, name: 'unique_titles' }
      t.text :sinopsis
      t.string :image
      t.integer :likes, default: 0

      t.timestamps

    end

  end

  def self.down
    drop_table :movies
  end
end
