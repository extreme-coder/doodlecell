class CreateBestScores < ActiveRecord::Migration[5.0]
  def change
    create_table :best_scores do |t|
      t.references :user, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
