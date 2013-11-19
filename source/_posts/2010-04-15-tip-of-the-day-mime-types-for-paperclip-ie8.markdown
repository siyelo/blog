---
layout: post
title: "Tip of the day: MIME types for Paperclip & IE8"
date: 2010-04-15 11:34:00
comments: true
categories:
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/macbook.jpg
headline: If your users are receiving this kind of error in your Paperclip-enhanced models...
---
    Logo is not one of the allowed file types

And your uber Cucumber regresssion tests aren't picking it up, despite having the following standards-based MIME type validations;then you might check to see what browser they're using.Are they using Internet Explorer? Internet Explorer 8 perhaps?

Well you might want to add something along the lines of **image/pjpeg** to your validations. Google killed off IE6. Lets hope they do the same for IE6+2 soon.
