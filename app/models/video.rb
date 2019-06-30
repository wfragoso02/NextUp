# == Schema Information
#
# Table name: videos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  creator     :string
#  cast        :string
#  rating      :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :year, :rating, :description, presence: true
    has_one_attached :image
    has_one_attached :movie
    has_many :categories,
        foreign_key: :video_id,
        class_name: :Category
    has_many :genres,
        through: :categories,
        source: :genre

    has_many :list_items

end
