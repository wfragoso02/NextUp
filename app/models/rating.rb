# == Schema Information
#
# Table name: ratings
#
#  id         :bigint(8)        not null, primary key
#  video_id   :integer          not null
#  profile_id :integer          not null
#  like       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rating < ApplicationRecord
    belongs_to :video
    belongs_to :profile
end
