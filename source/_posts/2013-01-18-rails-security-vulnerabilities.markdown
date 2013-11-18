---
layout: post
title: "Rails Security Vulnerabilities"
date: 2013-01-18 17:51
comments: true
categories: []
author: Siyelo
avatar: /images/avatar.jpg
image: /images/artwork/studio.jpg
---

Last Tuesday, everyone in the Rails world launched into action after this [tweet](https://twitter.com/rails/status/288743490744094720). An unusual "Upgrade IMMEDIATELY" advisory.

We at Siyelo also rushed to upgrade all of our apps to the newest Rails versions. It's not always trivial, and we ran into problems ourselves. But here's how we went about it.

## What happened?

[@tenderlove](https://twitter.com/tenderlove), a Ruby/Rails core contributor sent out two notices [[1](https://groups.google.com/d/topic/rubyonrails-security/t1WFuuQyavI/discussion), [2](https://groups.google.com/d/topic/rubyonrails-security/61bkgvnSGTQ/discussion)] regarding vulnerabilities in Ruby On Rails.

## What's the first issue?

The first issue is related to the way ActiveRecord interprets parameters in combination with the way JSON is parsed. If an attacker exploited this vulnerability it was possible to issue arbitrary database queries. And this was only the first half of the problem.

## And the second issue?

The second issue was actually multiple vulnerabilities. Yes, plural. Aaron found multiple weaknesses in the parameter parsing code which would allow an attacker to bypass authentication systems, inject arbitrary SQL, inject and execute arbitrary code or even perform a DDoS attack on a Ruby on Rails application. Sounds scary, right? It is; this vulnerability was found on **all** (current) Rails versions. Every Rails application was affected by these vulnerabilities.

## What to do?

Thanks to the great community and contributors that are developing Ruby On Rails, new versions were realeased very quickly and everyone was able to upgrade in a timely fashion. We can't stress enough that you must upgrade your Rails applications now!

If you haven't upgraded your Rails application yet, or you had problems while doing so, then please [get in touch with Siyelo](mailto:info@siyelo.com) to discuss how we can help you.
