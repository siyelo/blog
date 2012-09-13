

---
layout: post
title: "jQuery Mobile overview"
date: 2011-12-14 09:51:00
comments: true
categories:
author:
---

We've all heard it, the browser is the future for the mobile  applications. Mobile web frameworks are getting a lot of traction  lately. Is this the turning point where these frameworks will finally  set the developers free from the walled garden model of the Apple App  Store and the complexity and resources needed for developing and  maintaining a separate code base for each platform out there?

It's been almost a month since the 1.0 stable release of[jQuery Mobile](http://jquerymobile.com/) , the touch optimized mobile web framework. Only a year after John Resig announced the project in its first alpha stage, the jQuery team managed to deliver a solid release with an impressive[graded support](http://jquerymobile.com/gbs/) for a wide range of mobile browsers and platforms.

Built upon the jQuery core and the jQuery UI, the framework aims to deliver a quick and easy way to build unified cross-platform HTML5 based user interfaces with a single code base. All you need to start building applications using the framework is knowledge of some JavaScript and some HTML5.

Building a mobile application with jQuery Mobile is extremely easy and fast

One of the biggest advantages of jQuery Mobile is that even as a newcomer to the framework you can develop a rough version of your application in a matter of days as opposed to the native application development for Android and iOS where the learning curve is not quite as steep.

To make your application mobile just include the jQuery Mobile files in your header



Add the data attributes to your HTML markup



And this is the result:

![34522551610-orig][/images/old/2011/12/34522551610-orig.png] 

The framework takes care of applying the styles and positioning the elements to fit and scale nicely on any device. With just a couple of html lines we have a template for our mobile application. Off course you can add your custom css styles to tweak the looks to your desires. Also with the release of the 1.0 support for the[ThemeRoller](http://jquerymobile.com/blog/2011/10/28/announcing-themeroller-for-mobile-beta/) tool has been added, so quickly theming your application is a breeze.

The important part in the html snippet above are the HTML5 data-* attributes. The framework relies on these data attributes in order to do it's magic. Older browser will ignore this attributes and just render the regular html. Basically the layout of a jQuery Mobile application is defined by the data-role attribute. In the above example we can see that we have a divs with data-roles "header", "content" and "footer" all of which belong to the main page wrapper. Also we added a data-role on the list element in order for the framework to “widgetize” it.

By default, linking to other pages is automatically done via Ajax in a single-page model. All you need to do is define a standard links and the framework will take care of it. If the device doesn't support Ajax for some reason the framework falls back to standard http requests. Another cool feature of the framework is linking within a multi-page document. A single page can contain many page containers defined by the data-role of “page” which means immediate display of the clicked page. When using this techniques combined with the page transition effects, the user experience feels almost “native app” like.

Web vs Native

Currently the biggest argument being used against the wider adoption of the mobile web applications is the limited access to the client device features. A common example to address this issue is combining the framework with tools like[PhoneGap](http://phonegap.com/) and delivering the application as native. Combining the framework with tools like PhoneGap also minimizes the lower performance issues since all of the resources can be loaded from the device.

Hopefully we will see a quick adoption of the proposed[WebAPI](https://wiki.mozilla.org/WebAPI) specifications by Mozilla that define a standard of APIs that would give the browser high level access to the device components like GPS api, filesystem api, accelerometer api, dialer, messaging etc.

Conclusion

While all of those features provided by the jQuery Mobile framework are really cool and exciting, does the framework really provides a mature native-like feel and functionality to the applications built with it?

The jQuery team have done a great job by providing a nicely packed framework with lots of features like progressive enhancement approach, theming framework, unified widgets, modular design, a great cross-browser compatibility, even for older and less capable browsers and devices. But there is much left to be desired in the performance area. Even when trying the simple examples on a high end devices the page transition effects and the general user flow feels a little clunky. This is the area that jQuery Mobile fails short when compared to the native applications and even other Mobile Application frameworks ([jQTouch](http://jqtouch.com/) or[Sencha](http://www.sencha.com/) ) but it probably be fixed in near future with the polishing of the rough edges.