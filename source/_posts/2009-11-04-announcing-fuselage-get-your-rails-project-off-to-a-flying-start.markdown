---
layout: post
title: "Announcing Fuselage - Get your Rails project off to a flying start!"
date: 2009-11-04 09:08:00
comments: true
categories: Open Source
author: Glenn Roberts
---

Fuselage takes all the hassle out of installing several popular gems/plugins manually, as well as tidying up the default setup that the "rails" command gives you.

What's different about Fuselage? A lot of the Rails templates out there at the moment are quite primitive - a bunch of commands & files shoved in to a single file. Fuselage has a separate template for each gem/plugin, allowing you to specify all the relevant installs/commands/files/etc in one place. The goal here is to capture a lot of the setup logic that most Rails gems have in a single, reusable template.

Fuselage avoids asking a lot of questions, so if you want to customize your install, edit "template.rb" manually.

Usage is very simple. You can invoke it directly from your "rails -m" command with:

    rails app_name -m http://github.com/siyelo/fuselage/raw/master/template.rb

(note this does a git clone of Fuselage for you automatically)

Or if you prefer, grab your own clone from [http://github.com/siyelo/fuselage](http://github.com/siyelo/fuselage) and set the FUSELAGE_DIR environment variable.

Full feature list

Currently Fuselage includes the following;

**Rails**

*   basic template for a clean a rails install
*   SCS
*   git

**DB + Models**

* MySQL
* authlogic
* recaptcha
* paperclip

**Design/Layout**

* jQuery
* haml
* sass
* compass + blueprint
* formtastic
* cufon
* friendly_id

**Controllers**

* make_resourceful
* will_paginate

**Testing**

* machinist
* faker
* cucumber
* rspec
* webrat
* watchr - alternative to autotest

**Search**

* thinking-sphinx

**Security**

* tarantula

**Metrics**

* metric_Fu

**Production**

* passenger
* capistrano
* exception_notification

**Extra templates included**

These templates are included, but not installed by default. Manually edit template.rb to include them.

* compass with 960 grid system
* restful_authentication
* forgery
* asset_packager
* whenever
