class ApplicationController < ActionController::API
  before_action :setup_headers

  def setup_headers
    response.headers['X-Total-Count'] = '30'
    response.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
  end
end
