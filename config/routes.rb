Rails.application.routes.draw do
  root to: 'visitors#index'
  devise_for :users
  resources :users

  get 'game', to: 'game#game'
  post 'score', to: 'game#save_score', :defaults => { :format => 'json' }
  get 'score', to: 'game#get_score', :defaults => { :format => 'json' }
end
