class UsersController < ApplicationController

  def index
  end

  def show
    @data = HTTParty.get("https://api.github.com/users/#{current_user.username}")
    # @followers  = @data["followers"]
    # @following  = @data["following"]
    # @public_repos = @data["public_repos"]
    # @private_repos  = @data["private_repos"]
    # @public_gists  = @data["public_gists"]
    # @private_gists  = @data["private_gists"]
    # @location = @data["location"]
    render json: @data
  end

  def dashboard
  end


end
