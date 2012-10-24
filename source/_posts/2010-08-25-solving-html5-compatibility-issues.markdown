---
layout: post
title: "Solving HTML5 compatibility issues"
date: 2010-08-25 12:24:00
comments: true
categories: Design
author: Dime Pashoski
---

By now you've probably encountered the big wave of info that comes out regarding HTML5 and the improvements that it will bring. One of those are the awesome brand new tags, that with a proper usage can cure DIVitis and improve the overall semantics. Why use `<div id="header">` when you can use just `<header>?` This is expecially convenient when you have tons of divs and becomes hard to trace everything. You get an extra level of visual code separation, but even more importantly you get a default hierarachy system that will give your code a common sense.

But enough about why HTML5 tags are awesome, and how about their acctual use in practise? As you might already know they are not really accepted by the current browsers, and won't be for some time. They are implementing more of the HTML5 and CSS3 magic as we speek, but it's a process that will take a while. So, what do we do about jumping on the HTML5 train?

The first solution is a very simple one and apllies to normal type of browsers like Firefox, Safari, Opera, Chrome: just put the CSS property `{ display: block; }` in your stylesheets:

``` css
<style type="text/css">
  header, nav, article, footer, example { display: block; }
</style>
```

and you're done. This converted them into block elements and returned them in the flow, so you can use the tags in your document.

But this is not so easy when it comes to Internet Explorer. You always need to put more effort into explaining something to a deaf, dumb and blind person, and so is this monstrocity spawned by Microsoft. What you need to do here is add some javascript, otherwise your html5 elements won't be recognized even by applying the block property. In the head of the document place this piece of code:

``` javascript
<script>document.createElement('time');</script>
```

This just created the <date> tag. You can use this method to create all the elements you require to make your html5-ish website acceptable for IE. There's also [a script](http://remysharp.com/downloads/html5.js) made by Remy Sharp that will take care of this for you.

But nowdays we have more complete solutions to this problem, that also deal with cross-browser compatibility, improved css degradation and add some extra features. We have [Modernizr](http://www.modernizr.com/) , JavaScript created by Faruk Ateş and Paul Irish that creates support for HTML5 and a lot of CSS3, and [Boilerplate](http://html5boilerplate.com/) created by Paul Irish and Divya Manian, a cross-browser compatible and future-proof HTML template that support HTML5 and CSS3. What's really cool about Boilerplate is that they are working on a HAML/SASS port.

And for the end here are some cool examples of HTML5 websites, published recently by [WDL](http://webdesignledger.com/inspiration/55-excellent-examples-of-websites-using-html5) . I know i'll be using HTML5 on my next website.
