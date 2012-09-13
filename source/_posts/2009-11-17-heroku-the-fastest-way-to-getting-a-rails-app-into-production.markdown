

---
layout: post
title: "Heroku - the fastest way to getting a Rails app into Production"
date: 2009-11-17 16:44:00
comments: true
categories:
author: 
---

Ok, unless you already have a nice Capistrano deploy script lying around and a tasty Linode/Slicehost VPS, then Heroku[http://heroku.com/](http://heroku.com/) may just be the fastest way to get a Rails app deployed on a production system.

Its as easy as;
12345
sudo gem install herokuheroku creategit push heroku masterheroku rake db:migrateheroku open

Sit back and watch your app open automagically in your browser.

Also note, Siyelo Fuselage[http://github.com/siyelo/fuselage](http://github.com/siyelo/fuselage) has been updated to be compatible with a Heroku deployment.