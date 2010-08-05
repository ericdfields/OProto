# lets require
require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

# lets config
set :haml, {:format => :html5 } # default Haml format is :xhtml
# set :sass, {:style => :compact } # default Sass style is :nested

# Content
get '/' do
  haml :index
end

get '/event' do
  haml :event
end

# Sass Stylesheets
get '/css/screen.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :'sass/screen'
end