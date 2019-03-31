# == Schema Information
#
# Table name: profiles
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ApplicationRecord
    validate :name, :image_url
    belongs_to :user
end
