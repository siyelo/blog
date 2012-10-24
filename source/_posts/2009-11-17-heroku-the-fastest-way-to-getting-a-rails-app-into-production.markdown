---
layout: post
title: "Heroku - the fastest way to getting a Rails app into Production"
date: 2009-11-17 16:44:00
comments: true
categories: Heroku
author: Glenn Roberts
---

Ok, unless you already have a nice Capistrano deploy script lying around and a tasty Linode/Slicehost VPS, then [Heroku](http://heroku.com/) may just be the fastest way to get a Rails app deployed on a production system.

Its as easy as:

``` bash
sudo gem install heroku
heroku create
git push heroku master
heroku rake db:migrate
heroku open
```

Sit back and watch your app open automagically in your browser.

Also note, Siyelo [Fuselage](http://github.com/siyelo/fuselage) has been updated to be compatible with a Heroku deployment.
