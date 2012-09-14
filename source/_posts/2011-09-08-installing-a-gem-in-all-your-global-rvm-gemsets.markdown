---
layout: post
title: "Installing a gem in all your global RVM gemsets"
date: 2011-09-08 18:46:00
comments: true
categories:
author: Glenn Roberts
---

Across different projects like us, you probably have a lot of development gems you like to use. E.g. we like;

``` ruby
group :development do
  gem 'annotate'
  gem 'awesome_print', :require => "ap"
  gem 'heroku', '>= 2.1.2'
  gem 'hirb'
  gem 'interactive_editor'
  gem 'open_gem'
  gem 'rails-footnotes'
  gem 'ruby-debug'
  gem 'sketches'
  gem 'slurper', :require => false
  gem 'sqlite3-ruby', :require => 'sqlite3'
  gem 'taps'
  gem 'wirble'
end
```

but obviously it's a PITA (Pain In The ****) to add this gem spec to all your projects.

So, give this a shot;

``` bash
for x in $(rvm list strings); do rvm use $x@global && gem install <RAD DEVELOPMENT GEM NAME>; done
```

This installs a specific gem into all your global RVM gemsets. For great justice!
