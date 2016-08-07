class Api::TasksController < ApplicationController
  before_action :authorize

  def index
    tasks = current_user.tasks
    render json: tasks
  end

end
