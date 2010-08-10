# OProto uses the best open source tools to make static web development as fast as possible. # 
OProto is a barebones skeleton of a basic website for the purpose of bootstrapping a static website or prototype an application. OProto uses a range of web development frameworks to speed up the process of creating static websites, namely bootstrapping, managing pages, partials, states and styles.

## Problems addressed by OProto ##

### Template and Content Management ###
Experienced front-end developers can do a lot by hand very quickly. We're smart enough to know that markup and content should be as DRY as possible. Sharing common page elements like headers and footers as included templates makes a lot of sense but can quickly get messy when you want to pass variables around, use a slightly different template for one page but not another, and can also just be a chore to set-up. Also, having local paths ending in .html or .php is just… embarrassing.

OProto uses [StaticMatic](http://staticmatic.rubyforge.org/) to alleviate all of these symptoms. An additional dose of [Haml](http://haml-lang.com) makes marking up a document simple and fun again. Side effects include glee, bliss and a rapidly-developing sense of productivity.

### CSS is too dumb to be productive ###
[Lorin Tacket nails it: CSS is a stupid language](http://vimeo.com/11671458). That is, while its certainly the best way to style web content, it lacks some of the basic features of a scripting language most developers are used to: variables, basic functions and simple math. This means that creating CSS from scratch is inevitably a slow process.

[Sass](http://sass-lang.com) provides all these features and more: nesting, mixins (think of snippets of CSS as plugins), inheritance, and a more simplistic syntax. StaticMatic runs the Sass watcher on your stylesheets directory and compiles pure CSS every time you save a change.

Finally, [Compass](http://compass-style.org/) provides ports of CSS frameworks (and allows you to roll your own) like Blueprint, which takes the hard work out of accomplishing tasks like creating a layout grid. Its CSS3 helper might very well be the only way to use vendor-specific CSS3 properties without feeling like your repeating yourself repeating yourself. Impress your friends as one line of 

    .crazy
      +border-radius(1px 3px 5px 7px)

magically becomes

    .crazy {
     -webkit-border-radius: 1px 3px 5px 7px;
     -moz-border-radius: 1px 3px 5px 7px;
     -o-border-radius: 1px 3px 5px 7px;
     -ms-border-radius: 1px 3px 5px 7px;
     -khtml-border-radius: 1px 3px 5px 7px;
     border-radius: 1px 3px 5px 7px; }

in the blink of an eye!

### Full Technology Overview ###
* [Ruby on Rails](http://rubyonrails.org) - That thing you heard about
* [StaticMatic](http://staticmatic.rubyforge.org/) - Static websites, the modern way
* [Compass](http://compass-style.org/) - Compass provides ports of the best of breed css frameworks that you can use without forcing you to use their presentational class names.
* [Haml](http://haml-lang.com) - Lean, poetic markup
* [Sass](http://sass-lang.com) - Super sexy css
* [Blueprint](http://www.blueprintcss.org/) - Blueprint gives you a solid foundation to build your project on top of, with an easy-to-use grid, sensible typography, useful plugins, and even a stylesheet for printing.
* [Fancy Buttons](http://github.com/imathis/fancy-buttons/) - Fancy CSS Buttons
* [jQuery](http://jquery.com) - Our Savior

# Getting Started with OProto #

Assuming you have Git, Rails and Ruby Gems (staticmatic should take care of haml/sass requirement)…

    $ gem install compass
    $ gem install fancy-buttons
    $ gem install staticmatic --pre

… clone this project…

    $ git clone git@github.com:ericdfields/OProto.git my_project_name

… and run staticmatic on your project

    $ staticmatic preview my_project_name

This will launch a web server for you to preview your site at [http://localhost:3000](http://localhost:3000). To kill the server, simply hit ctrl+C.

## OProto Source Overview ##
This is what you just checked out:

* *config* - a few configuration files.
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
  

## Templating with OProto ##

Creating pages for your site with OProto is as simple as adding a new haml file to the src/pages directory. *index.haml* will live at /. *special.haml* will live at /special. *special/event.haml* will live at /special/event.

By default, all pages use the *layouts/application.haml* layout template. You can use custom layouts by defining the **@layout** variable at the top of your page. For example, in special.haml:

    - @layout = "special"

/special now uses the layout template *layouts/special.haml*.

Similarly, you can set up variables in your layout templates or partials and define them in a page:

    - @pageTitle = "Special Event Page Title"
    - @h2 = "Special Event Headline"
    - @h3 = "Special Event Subheadline"
    
Will help us set the <title> tag value, headline, and subheadline found elsewhere in the template tree.

## Styling with OProto ##
The stylesheets directory breaks up your documents styles into a few different stylesheets for ease of development.

### _base.sass ###
**_base** is the mothership of the OProto styling operation. Use her to do any of the following:

* define style variables that can be used throughout *all* of your stylesheets
* set up your base fonts
* set up your grids
* manage Compass imports

### screen.sass et. al. ###
**screen** is where most of your display styles should go, with the exception of

* typography.sass - set up your meticulously-defined typographic rules here
* forms.sass - standardize the look and feel of your forms here
* print.sass - do your papery styles here
* ie6.sass - lest we forget
  
# Roadmap# 
OProto is evolving as we continue to test it in internally.

## Next up ##

* partials for widgets (slideshow, drop downs, etc)
* more templates (common product page, web app, etc)?

# Fin #
Roadmap was created by Eric D. Fields, Senior UX Developer at Optaros