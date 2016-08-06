class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  private

  def current_user
    # Cache the current user by putting it in an instance variable.
    @current_user = User.find session[:user_id] if session[:user_id]
  end

  # Create a helper method by making the current user data accessible to all views.
  helper_method :current_user
end
