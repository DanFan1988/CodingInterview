Rails.application.routes.draw do
  namespace :api, :defaults => { :format => :json } do
    resources :lists
  end
  
  root to: "root#root"
end
