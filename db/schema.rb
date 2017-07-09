# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170708231203) do

  create_table "amino_acids", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "best_scores", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_best_scores_on_user_id", using: :btree
  end

  create_table "cell_org_stages", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "cell_id"
    t.integer  "org_stage_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["cell_id"], name: "index_cell_org_stages_on_cell_id", using: :btree
    t.index ["org_stage_id"], name: "index_cell_org_stages_on_org_stage_id", using: :btree
  end

  create_table "cell_proteins", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "cell_id"
    t.integer  "protein_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cell_id"], name: "index_cell_proteins_on_cell_id", using: :btree
    t.index ["protein_id"], name: "index_cell_proteins_on_protein_id", using: :btree
  end

  create_table "cells", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "img_path"
    t.text     "desc",       limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "nucleotides", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "org_stages", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "img_path"
    t.integer  "parent_org_stage_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "organisms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "org_stage_id"
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["org_stage_id"], name: "index_organisms_on_org_stage_id", using: :btree
    t.index ["user_id"], name: "index_organisms_on_user_id", using: :btree
  end

  create_table "protein_amino_acids", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "protein_id"
    t.integer  "amino_acid_id"
    t.integer  "count"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["amino_acid_id"], name: "index_protein_amino_acids_on_amino_acid_id", using: :btree
    t.index ["protein_id"], name: "index_protein_amino_acids_on_protein_id", using: :btree
  end

  create_table "proteins", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.text     "desc",       limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "rna_nucleotides", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "rna_id"
    t.integer  "nucleotide_id"
    t.integer  "count"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["nucleotide_id"], name: "index_rna_nucleotides_on_nucleotide_id", using: :btree
    t.index ["rna_id"], name: "index_rna_nucleotides_on_rna_id", using: :btree
  end

  create_table "rnas", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.text     "desc",       limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "task_proteins", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "task_id"
    t.integer  "protein_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["protein_id"], name: "index_task_proteins_on_protein_id", using: :btree
    t.index ["task_id"], name: "index_task_proteins_on_task_id", using: :btree
  end

  create_table "task_rnas", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "task_id"
    t.integer  "rna_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rna_id"], name: "index_task_rnas_on_rna_id", using: :btree
    t.index ["task_id"], name: "index_task_rnas_on_task_id", using: :btree
  end

  create_table "tasks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.text     "desc",       limit: 65535
    t.text     "hint",       limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "user_tasks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.integer  "task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_user_tasks_on_task_id", using: :btree
    t.index ["user_id"], name: "index_user_tasks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.integer  "role"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "best_scores", "users"
  add_foreign_key "cell_org_stages", "cells"
  add_foreign_key "cell_org_stages", "org_stages"
  add_foreign_key "cell_proteins", "cells"
  add_foreign_key "cell_proteins", "proteins"
  add_foreign_key "organisms", "org_stages"
  add_foreign_key "organisms", "users"
  add_foreign_key "protein_amino_acids", "amino_acids"
  add_foreign_key "protein_amino_acids", "proteins"
  add_foreign_key "rna_nucleotides", "nucleotides"
  add_foreign_key "rna_nucleotides", "rnas"
  add_foreign_key "task_proteins", "proteins"
  add_foreign_key "task_proteins", "tasks"
  add_foreign_key "task_rnas", "rnas"
  add_foreign_key "task_rnas", "tasks"
  add_foreign_key "user_tasks", "tasks"
  add_foreign_key "user_tasks", "users"
end
