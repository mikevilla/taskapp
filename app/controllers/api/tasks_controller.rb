class Api::TasksController < ApplicationController
  before_action :authorize

  def index
    tasks = current_user.tasks
    render json: tasks
  end

  def update_task
    task_id = params[:id]
    task = Task.find task_id

    task.status = params[:status]
    task.save

    return_message = {:task_id => task_id,
                      :message => 'Success'
    }
    redirect_to tasks_path, :notice => "Successfully updated task."
  end

end
