CapybaraApp::Application.routes.draw do
  root to: 'welcome#index'

  get '/javascript', to: 'welcome#javascript'

end
