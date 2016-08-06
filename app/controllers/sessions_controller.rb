class SessionsController < ApplicationController

  def new
  end

  # receives the new log in form data
  def create
    user = User.find_by_email(params[:email])

    # has secure password provides a call that checks to see if the password matches
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, notice: "Welcome!"
    else
      flash.now.alert = "Email or password is invalid."
      render "new"
    end
  end

end
