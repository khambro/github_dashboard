class UsersController < ApplicationController

  def index
  end

  def show
    @data = HTTParty.get("https://api.github.com/users/#{current_user.username}")
    render json: @data
  end

  def dashboard
  end


end
