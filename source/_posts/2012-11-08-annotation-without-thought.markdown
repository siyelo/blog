---
layout: post
title: "Annotation without thought"
date: 2012-11-08 11:48
comments: true
categories:
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/macbook-color-keyboard.png
headline: If you like your schema definitions handy in the current ActiveRecord model you're looking at, you're probably using the annotate_models gem.
---

If you're on Rails and want to automagically 'annotate your models when running rake db:migrate, include this rake task in your project;

``` ruby 'lib/tasks/annotate.rb'

desc 'Annotate persisted models'
task :anno do
  puts 'annotating models...'
  system 'annotate --exclude tests,fixtures -p after -s'
end

namespace :db do
  desc 'migrate database [and annotate models]'
  task :migrate do
    Rake::Task[:anno].invoke if Rails.env == 'development'
  end
end
```

Also, you can annotate your models manually with;

    rake anno

