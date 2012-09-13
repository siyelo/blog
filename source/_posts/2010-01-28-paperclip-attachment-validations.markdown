

---
layout: post
title: "Paperclip - attachment validations"
date: 2010-01-28 14:07:00
comments: true
categories:
author: 
---Using Paperclip, if you need to check if your model has an attachment, you don't use the standard ActiveRecord validation helper i.e.;


1
validates_presence_of:logo

Erroneous!

Instead you use Paperclip's helper


1
validates_attachment_presence:logo

But be sure to put that **afteryour attachment definition**


12
has_attached_file:logovalidates_attachment_presence:logo

And if you're doing something tricky, like allowing your model to be saved without an attachment first, but enforcing that an attachment is present on update then; 


1
validates_attachment_presence:logo,:unless=>:new_record?