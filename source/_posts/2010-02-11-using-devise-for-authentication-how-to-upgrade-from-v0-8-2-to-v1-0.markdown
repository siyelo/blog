

---
layout: post
title: "Using Devise for authentication? How to upgrade from v0.8.2 to v1.0"
date: 2010-02-11 13:28:51
comments: true
categories:
author: 
---


    We're using PlataformaTec's fantastic Devise for user authentication in our Rails projects, despite being long-standing supporters of Authlogic for a long time. We found Devise to be far easier to set up and you get great stuff right out of the box, the automatic authentication emails, password reset forms, and very simple to configure authentication strategies to name a few.

It also works great with Declarative_Authorization (if you are masochistic enough to use Declarative_Authorization in the first place).

On to the topic of todays insightful blog post: upgrading from 0.8.2 to v1.0. Jose, the big-man-on-campus @ Plataforma tells us we should upgrade cos of a few significant bugs. Ok, lets do this.


1
  config.gem 'devise'

becomes


1
config.gem 'devise', :version => '>=1.0.0'

And after restarting the server, a barf.


1
ActionView::TemplateError (undefined local variable or method `new_user_session_path' for #<ActionView::Base:0x243fca4>) on line #27 of app/views/shared/_header.html.haml: 24: 25: - else 26: %li= link_to "Join", join_url 27: %li= link_to "Sign In", new_user_session_path

So obviously my Devise resource, User in this case, is fubar.


12
class User < ActiveRecord::Base  	  devise :all

Hmm nothing changed there. But wait, 'devise :all' is now conspicuously missing from the README, replaced by a more explicit statement of your authentication strategies in your model.


12
class User < ActiveRecord::Basedevise :authenticatable, :confirmable, :recoverable, :rememberable, :trackable, :validatable

So it seems though that the old Devise way of defining :all strategies is no longer supported. Fix that, and the order of the universe improves a little.