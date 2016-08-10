class Task < ActiveRecord::Base

  attr_accessible :title, :description, :priority, :status, :target, :user_id
  validates :title, :description, :priority, :status, :target, presence: true

  belongs_to :user
end
