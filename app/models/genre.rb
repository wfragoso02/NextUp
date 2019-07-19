# frozen_string_literal: true

# == Schema Information
#
# Table name: genres
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :categories,
    foreign_key: :genre_id,
    class_name: :Category

  has_many :videos,
    through: :categories,
    source: :video
end
