# frozen_string_literal: true

# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  profile_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
  belongs_to :profile
  has_many :list_items

  has_many :videos,
           through: :list_items,
           source: :video
end
