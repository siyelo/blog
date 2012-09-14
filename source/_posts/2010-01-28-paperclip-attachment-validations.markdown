---
layout: post
title: "Paperclip - attachment validations"
date: 2010-01-28 14:07:00
comments: true
categories: Rails
author: Glenn Roberts
---

Using Paperclip, if you need to check if your model has an attachment, you don't use the standard ActiveRecord validation helper i.e.;

{% codeblock lang:ruby %}
validates_presence_of :logo
{% endcodeblock %}

Erroneous!

Instead you use Paperclip's helper

{% codeblock lang:ruby %}
validates_attachment_presence :logo
{% endcodeblock %}

But be sure to put that **after your attachment definition**

{% codeblock lang:ruby %}
has_attached_file :logo
validates_attachment_presence :logo
{% endcodeblock %}

And if you're doing something tricky, like allowing your model to be saved without an attachment first, but enforcing that an attachment is present on update then; 

{% codeblock lang:ruby %}
validates_attachment_presence :logo, :unless => :new_record?
{% endcodeblock %}
