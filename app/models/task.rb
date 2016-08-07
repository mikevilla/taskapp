class Task < ActiveRecord::Base

  attr_accessible :title, :description, :priority, :status, :target, :user_id

  belongs_to :user
end
