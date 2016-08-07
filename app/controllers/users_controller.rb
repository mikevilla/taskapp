class UsersController < ApplicationController

  # create a new User instance.
  def new
    @user = User.new
  end

  # Saves the user to the database. Will redisplay the form if there are any validation errors.
  def create
    @user = User.new(params[:user])
    if @user.save

      # Set the sessions :user_id to the newly created user.
      session[:user_id] = @user.id
      redirect_to tasks_path, notice: "Welcome to the Task App!"
    else
      render "new"
    end
  end

end
