class UsersController < ApplicationController

  def index
  end

  def show
    @data = HTTParty.get("https://api.github.com/users/#{current_user.username}?access_token=#{current_user.token}")
    render json: @data
  end

  def repos
    @repos = HTTParty.get("https://api.github.com/users/#{current_user.username}/repos?access_token=#{current_user.token}")
    @repos = @repos.sort_by {|repo| repo["updated_at"] }
    render json: @repos.reverse
  end

  def dashboard
  end


end
