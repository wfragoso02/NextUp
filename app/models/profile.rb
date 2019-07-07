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


#need to get my list here through listitems
class Profile < ApplicationRecord
    validate :name, length: { minimum: 2 }
    validate :image_url
    belongs_to :user

    has_one :list
    
end
