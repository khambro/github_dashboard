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

  def languages
    @repos = HTTParty.get("https://api.github.com/users/#{current_user.username}/repos?access_token=#{current_user.token}")
    @languages = @repos.group_by {|repo| repo["language"]}
    render json: @languages
  end

  def gists
    # @gists = HTTParty.get("https://api.github.com/users/#{current_user.username}/gists?access_token=#{current_user.token}")
    @gists = HTTParty.get("https://api.github.com/users/bookis/gists")
    render json: @gists
  end

  def events
    @events = HTTParty.get("https://api.github.com/users/bookis/events")
    @events = @events.group_by do |type|
      type["type"]
    end
    render json: @events
  end


  def dashboard
  end


end
