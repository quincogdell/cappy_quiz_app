CapybaraApp::Application.routes.draw do
  root to: 'welcome#index'

  get '/javascript', to: 'welcome#javascript'
  get '/quizzes', to: 'welcome#quizzes'

end
