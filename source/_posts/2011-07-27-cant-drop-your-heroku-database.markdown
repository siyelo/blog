---
layout: post
title: "Can't drop your Heroku database?"
date: 2011-07-27 13:08:00
comments: true
categories:
author: Glenn Roberts
---

If you're trying to drop your database on Heroku, and it's not working, be sure you put it in maintenance mode first. i.e.

### Step 1

``` bash
$ heroku maintenance:on --app
```

### Step 2

``` bash
$ heroku pg:reset SHARED_DATABASE --app
```

### Step 3

???

### Step 4

### Profit
