# frozen_string_literal: true

# == Schema Information
#
# Table name: categories
#
#  id         :bigint(8)        not null, primary key
#  genre_id   :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
  belongs_to :genre
  belongs_to :video
end
