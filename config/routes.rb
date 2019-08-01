# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'
    delete 'api/ratings', to: 'api/ratings#special_destroy'
    delete 'api/list_items', to: 'api/list_items#special_destroy'
    namespace :api, default: { format: :json } do
      resources :users, only: %i[create]
      resource :session, only: %i[create destroy]
      resources :profiles, only: %i[create update index show destroy]
      resources :genres, only: %i[index show]
      resources :videos, only: %i[show index update]
      resources :lists, only: %i[index show]
      resources :list_items, only: %i[create]
      resources :ratings, only: %i[create update]
    end
  end
end
