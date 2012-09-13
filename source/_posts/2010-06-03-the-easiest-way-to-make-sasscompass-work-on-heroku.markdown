

---
layout: post
title: "The easiest way to make sass/compass work on Heroku"
date: 2010-06-03 13:31:52
comments: true
categories:
author: 
---

Configure your sass or compass options (config/compass.config):

config.css_dir = “tmp/stylesheets/compiled”

And then create and initializer (e.g. config/initializers/compass.rb) which contains:






123
require"fileutils"FileUtils.mkdir_p(Rails.root.join("tmp","stylesheets","compiled"))ActionController::Dispatcher.middleware.use(Rack::Static,:root=>"tmp/",:urls=>["/stylesheets/compiled"])And your stylesheets will always compile to tmp/ !