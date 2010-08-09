About OProto
=============
OProto is a barebones skeleton of a basic website for the purpose of bootstrapping a prototype. 

The goal of all prototypes are to demonstrate an idea as quickly as possible using the best tools for the job. In the case of OProto, those tools are Ruby on Rails, StaticMatic, Compass, Haml, Sass and jQuery.

UPDATE
-------------
We now rely on StaticMatic alpha for Compass support. Yay!

Technology overview
-------------
* [Ruby on Rails](http://rubyonrails.org) - That thing you heard about
* [StaticMatic](http://staticmatic.rubyforge.org/) - Static websites, the modern way
* [Compass](http://compass-style.org/) - Compass provides ports of the best of breed css frameworks that you can use without forcing you to use their presentational class names.
* [Haml](http://haml-lang.com) - Lean, poetic markup
* [Sass](http://sass-lang.com) - Super sexy css
* [Blueprint](http://www.blueprintcss.org/) - Blueprint gives you a solid foundation to build your project on top of, with an easy-to-use grid, sensible typography, useful plugins, and even a stylesheet for printing.
* [jQuery](http://jquery.com) - Our Savior

Getting Started
-------------
Assuming you have Rails and Ruby Gems (staticmatic should take care of haml/sass requirement)…

    $ gem install compass
    $ gem install staticmatic --pre

… clone this project…

    $ git clone git@github.com:ericdfields/OProto.git my_project_name

… and run staticmatic on your project

    $ staticmatic preview my_project_name

You can visit your site at [http://localhost:3000](http://localhost:3000).

OProto Source Overview
-------------
* *site* - mostly where your output files will live if you choose to export your project
  * *images* - image resources
  * *javascripts* - Javascript resources
  * *stylesheets* - stylesheet resources
* *src* - where you'll do all your real work
  * *helpers* - [http://staticmatic.rubyforge.org/helper_central/](StaticMatic Helpers)
  * *layouts* - base templates for your pages
  * *pages* - individual page content, inherits a template, haml-formatted
  * *partials* - reusable blocks of code used in both pages and layouts
  * *stylesheets* - sass-formatted stylesheets
  

Using OProto
-------------
Creating pages for your site with OProto is as simple as adding a new haml file to the src/pages directory. *index.haml* will live at /. *special.haml* will live at /special. *special/event.haml* will live at /special/event.

By default, all pages use the *layouts/application.haml* layout template. You can use custom layouts by defining the **@layout** variable at the top of your page. For example, in special.haml:

    - @layout = "special"

/special now uses the layout template *layouts/special.haml*.

Similarly, you can set up variables in your layout templates or partials and define them in a page:

    - @pageTitle = "Special Event Page Title"
    - @h2 = "Special Event Headline"
    - @h3 = "Special Event Subheadline"
    
Will help us set the <title> tag value, headline, and subheadline found elsewhere in the template tree.
  
Roadmap
-------------
Next up:

* partials for widgets (slideshow, drop downs, etc)
* more templates (common product page, web app, etc)?
* Blueprint CSS frameworks?