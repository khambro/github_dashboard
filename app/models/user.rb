class User < ActiveRecord::Base
  validates :username, :uid, presence: true

  def self.find_or_create_from_omniauth(oauth_attrs)
    # Find or create a user
  end

  def self.create_from_omniauth(oauth_attrs)
    # Create a user
  end
end
