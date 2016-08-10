class User < ActiveRecord::Base
  has_secure_password

  # attr_accessible is a Rails method that allows you to pass in values to a mass assignment
  attr_accessible :email, :password, :password_confirmation
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }

  validates_uniqueness_of :email
  has_many :tasks

end
