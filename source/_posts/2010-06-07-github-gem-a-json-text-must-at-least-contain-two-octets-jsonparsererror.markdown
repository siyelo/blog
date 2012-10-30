---
layout: post
title: "GitHub gem: A JSON text must at least contain two octets! (JSON::ParserError)"
date: 2010-06-07 21:25:00
comments: true
categories: Open-Source
author: Glenn Roberts
---

Matt Jones and I came up with a fix for this error during Dr Nic's OSS tutorial at RailsConf '10.

Seems like GitHub is not returning correct JSON for the `http://github.com/#{user}/#{project}/network_meta` endpoint.

Fork our fix here:

[http://github.com/glennr/github-gem](http://github.com/glennr/github-gem)
