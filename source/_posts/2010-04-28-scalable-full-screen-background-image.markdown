

---
layout: post
title: "Scalable full screen background image"
date: 2010-04-28 07:52:00
comments: true
categories:
author: 
---

Were you trying to find a solution about applying one large and scalable background on a website? It can be a tough choice especially since one of the alternatives is Flash and anyone who appreciates usability and web standards will probably resent that very thought.

Recently I worked on a website for a[branding agency](http://freezing-light-25.heroku.com/) that required a bit more avant-garde design with a large background image that could resize according to the browser’s window size and resolution. My research showed that most of the non-flash websites were done by JavaScript, but there was something else that caught my attention – a solution done with straight HTML, CSS and guess what – tables! Yeah, I know, the old arch-nemesis of web design. We almost started forgetting they existed, but they pop-up from time to time, reminding us of the good old days of poorly designed websites. And yet it was a solution so simple it’s almost creative and I was urged to try it out.

The whole trick is to create a single cell table, and apply few styles to make the magic work.

Note: I will use HAML and SASS for the code. Read here if you want to learn more about it:[http://haml-lang.com/](http://haml-lang.com/) 


1234567
#bg  #bg_wrapper    %table{ :cellspacing => "0", :cellpadding => "0" }      %tbody        %tr          %td            %img#background{ :src => "images/index.jpg" }

So it’s just a simple table with an image nested inside. Now the magic comes with combining CSS, or in this case SASS:


1234567891011121314151617181920212223242526
body  width: 100%  height: 100%  overflow: hidden#bg, table, td, #content    width: 100%    height: 100%    overflow: hidden  #bg_wrapper    width: 200%    left: -50%    position: absolute    top: -50%    height: 200%  td    text-align: center    vertical-align: middle  #bg img    margin: 0 auto    min-height: 50%    min-width: 50%

After this you can continue styling the rest of the page with straight CSS without worrying about the background. Leave the table as it is and nest the rest of your DIV’s straight in the body.

 