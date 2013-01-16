---
layout: post
title: "Rails Security Vulnerabilities"
date: 2013-01-16 17:51
comments: true
categories: []
author: Siyelo
---

Last tuesday a [tweet](https://twitter.com/rails/status/288743490744094720) sent from the official Ruby On Rails twitter account shook the ground for the Ruby on Rails world - a security vulnerability.
"Upgrade IMMIDIATELY" was everything all the Rails developers in the world thought about for a day or two.

Like everyone else, we at Siyelo rushed to upgrade all of our apps to the newest Rails versions and we ran into problems. But, first things first...

## What happened?

I dont know if you people know this [@tenderlove](https://twitter.com/tenderlove) guy, but, it was him who caused the earthquake.
You dont know him? You should! Aaron Patterson a.k.a. [@tenderlove](https://twitter.com/tenderlove) is Ruby core and Ruby On Rails developer and contributor and he found two [[1](https://groups.google.com/d/topic/rubyonrails-security/t1WFuuQyavI/discussion), [2](https://groups.google.com/d/topic/rubyonrails-security/61bkgvnSGTQ/discussion)] vulnerabilities in Ruby On Rails.

## What he found?

Have you heard about Active Record? That "thingy" that handles the models, databases, tables, queries, etc etc in Ruby on Rails? Yes? Well, the first one is related to the way Active Record interprets parameters in combination with the way JSON is parsed. So what's the problem? You see, if an attacker used this vulnerability it was possible for him to issue unexpected database queries with "IS NULL" or with empty WHERE clauses. And this was only the first half of the problem.

## And what about the second half?

The second vulnerability was actually vulnerabilities. Yes, plural. Aaron found multiple weaknesses in the parameter parsing code which would allow an attacker to bypass authentication systems, inject arbitrary SQL, inject and execute arbitrary code or even perform a DDoS attack on a Ruby on Rails application. Sounds scary, right? Check this out - this vulnerability was found on **ALL** Rails versions. This means that every Rails application that you know of was affected by these vulnerabilities.

## And what will happen now?

Well, thanks to the great community and contributors that are developing Ruby On Rails, new versions were realeased very quickly and everyone was able to upgrade in a timely fashion. We wont go into details about the vulnerabilities, but, believe us - you better upgrade your Rails applications!

Did you upgrade your Rails applications? Did you have any problems while doing it? If yes, did you solve them?
If not - Siyelo is preparing something really cool just for **you**.
What? You'll find out soon! :-)
