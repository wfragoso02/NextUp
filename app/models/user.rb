# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 4, maximum: 60, allow_nil: true}
  
    after_initialize :ensure_session_token
    attr_reader :password
    has_many :profiles
  
    # prefig
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def reset_session_token!
      self.session_token = self.class.generate_session_token
      self.save!
      self.session_token
    end
  
    def ensure_session_token
      self.session_token ||= self.class.generate_session_token
    end
  
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      if user && user.is_password?(password)
        return user
      end
      nil
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def self.generate_session_token
      SecureRandom::urlsafe_base64
    end
  end
