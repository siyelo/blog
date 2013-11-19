---
layout: post
title: "Tired of Textmate's slow 'Find in Project'? `*`nix to the rescue"
date: 2010-03-24 16:03:04
comments: true
categories: Bash
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/graffiti.jpg
headline: We all know that Textmate's "Find in Project" feature runs like a dog.
---


If you're generally only really wanting to search .rb files, here's a script which I call 'findrb'


``` bash
#! /bin/shfind . -name*.rb -type f | xargs grep -nHr"$1"
```

Drop this in a file in your $PATH, `chmod +x` it, and off you go.

E.g.

``` bash
glenn-roberts-4 ~/ba[master*]$ findrb 'show'
./app/controllers/home_controller.rb:13: def show
./app/controllers/live_profiles_controller.rb:2: before_filter :authenticate_user!, :except => [ :index, :show ]
./app/controllers/live_profiles_controller.rb:22: def show
./app/controllers/live_profiles_controller.rb:26: format.html # show.html.haml`
```
