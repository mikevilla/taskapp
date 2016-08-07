class User < ActiveRecord::Base
  has_secure_password

  # attr_accessible is a Rails method that allows you to pass in values to a mass assignment
  attr_accessible :email, :password, :password_confirmation
  validates_uniqueness_of :email
  has_many :tasks

end
