class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  private

  def current_user
    # Cache the current user by putting it in an instance variable, find the user with :user_id in User table
    # if it does not yet currently exist otherwise just return the already defined instance variable of @current_user.
    @current_user ||= User.find session[:user_id] if session[:user_id]
  end

  # Method to verify that a user is logged in to any protected pages.
  def authorize
    redirect_to login_url, alert: "Not authorized please log in." if current_user.nil?
  end

  # Create a helper method by making the current user data accessible to all views.
  helper_method :current_user
end
