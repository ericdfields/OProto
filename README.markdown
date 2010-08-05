About OProto
=============
OProto is a barebones skeleton of a basic website for the purpose of bootstrapping a prototype. 

The goal of all prototypes are to demonstrate an idea as quickly as possible using the best tools for the job. In the case of OProto, those tools are Ruby on Rails, Sinatra, Haml, Sass and jQuery.

Technology overview
-------------
* [Ruby on Rails](http://rubyonrails.org) - That thing you heard about
* [Sinatra](http://sinatrarb.org) - Sinatra is a DSL for quickly creating web applications in Ruby with minimal effort
* [Haml](http://haml-lang.com) - Lean, poetic markup
* [Sass](http://sass-lang.com) - Super sexy css
* [jQuery](http://jquery.com) - Our Savior

Getting Started
-------------
Assuming you have Rails and Ruby Gems…

    $ gem install sinatra

… clone this project…

    git@github.com:ericdfields/OProto.git

… and run myapp.rb

    $ ruby myapp.rb

You can visit your site at [http://localhost:4567](http://localhost:4567).

Using OProto
-------------
Creating pages for your site with OProto is as simple as defining a router and adding a matching view template.

Your routers live in **myapp.rb** and look like this

    get '/' do
      haml :index
    end
  
The respecting view template could be found at ./views/index.haml. Adding a new template is as easy as adding the following router

    get '/index2' do
      haml :index2
    end
  
and adding index2.haml to ./views

Layout.haml
-------------
**layout.haml** is your wrapper template. All other templates are simply partial pieces of content that will be injected into layout. You're sharing a common header (and <head>), container, and footer across all your pages.

I'm working on how we'd go about adding additional wrapper templates.

Index: The Example
-------------
**index.haml** is your main page. It starts off with some page-specific variables the wrapper looks for, like so:

    -@title = 'Index Page'
    -@h1 = 'Headline'
    -@h2 = 'Subheadline'

Adding content to be injected into the layout is as easy as adding the following

    %p Lorem ipsum!