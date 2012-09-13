

---
layout: post
title: "Installing a gem in all your global RVM gemsets"
date: 2011-09-08 18:46:00
comments: true
categories:
author: 
---Across different projects like us, you probably have a lot of development gems you like to use. E.g. we like;but obviously it's a PITA (Pain In The ****) to add this gem spec to all your projects.

So, give this a shot;for x in $(rvm list strings); do rvm use $x@global && gem install <RAD DEVELOPMENT GEM NAME>; doneThis installs a specific gem into all your global RVM gemsets. For great justice!