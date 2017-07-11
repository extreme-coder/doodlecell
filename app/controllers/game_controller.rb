class GameController < ApplicationController
  def game

  end

  def save_score
    if current_user == nil
      render :json => {:message => 'Login to save your score'}
    else
      score = params[:score].to_i
      best_score = BestScore.where("user_id = ?", current_user.id).first
      if best_score == nil
        best_score = BestScore.new
        best_score.user = current_user
        best_score.score = 0
      end
      if score > best_score.score
        best_score.score = score
        best_score.save
      end
      render :json => {:message => best_score.score.to_s + ' seconds best'}
    end
  end

  def get_score
    best_score = BestScore.where('user_id = ?', current_user.id).first
    if best_score == nil
      render :json => '0'
    else
      render :json => best_score.score.to_s
    end

  end
end