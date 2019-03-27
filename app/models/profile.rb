class Profile < ApplicationRecord
    validate :name, :image_url
    belongs_to :user
end