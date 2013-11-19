---
layout: post
title: "Rails 2.3/Devise : changing your email content type."
date: 2010-02-18 14:26:00
comments: true
categories: Rails
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/studio.jpg
headline: Devise is a great rails authentication solution, with a very active mailing list and team of contributors. Given its modular, pluggable design, simple installation, I predict it will become the "standard" authentication module, (assuming someone steps up to the plate for MongoMapper/DataMapper support for Rails 3, anyone?).
---
A minor issue on Rails 2.3 is that Devise (v1.0) doesn't allow you to override the content_type of the emails it sends. (I believe its fixed for Rails 3.0). Given the content type defaults to 'text/html', unless you like to cause yourself (and your users) some grief with html emails, and plain text emails will suffice, then read on.

I've patched Devise 1.0 to enable you to override this default behaviour in your config/initializers/devise.rb file

UPDATE: Its been merged into Devise v1.0.2

{% codeblock lang:ruby %}
Devise.setup do |config|
    #...    
    config.mailer_content_type = 'text/plain'
{% endcodeblock %}

The gem on gemcutter

{% codeblock lang:ruby %}
gem install glennr-devise
{% endcodeblock %}

or

{% codeblock lang:ruby %}
config.gem 'glennr-devise', :lib => 'devise', :source => 'http://gemcutter.org'
{% endcodeblock %}

The github branch is here, and should be merged into the Devise trunk shortly: [http://github.com/glennr/devise](http://github.com/glennr/devise).
