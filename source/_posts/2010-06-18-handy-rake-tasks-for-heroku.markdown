---
layout: post
title: "Handy rake tasks for Heroku"
date: 2010-06-18 08:42:07
comments: true
categories: Open-Source
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/applewars.jpg
headline: We've been using a standalone rake task to generate the .gems for our Heroku apps. Recently Heroku raised the bar by making you specify the rails version too in this file (gah). So all your 2.3.5 or lower full redeploys will start breaking without this line in .gems.
---
Theres some great gists and blogposts floating around there showing you how to generate .gems, but who wants to manage individual rake tasks across projects? Not me. A little bit of hunting and I found a nice plugin ‘heroku_san’ by Elijah Miller with several cool Heroku rake tasks, including one to generate the .gems file. 

Plugins are pants though, so I've updated heroku_san to a gem now too. No more copying .rake tasks between projects!

Grab [http://github.com/glennr/heroku_san](http://github.com/glennr/heroku_san) and `rake heroku:gems` til your hearts' content!
