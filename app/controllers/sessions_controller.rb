class SessionsController < Devise::CasSessionsController
  prepend_before_action :set_return_to, only: [:new]

  private

  def set_return_to
    return unless params[:user_return_to].present?
    session[:user_return_to] = params[:user_return_to]
  end
end
