---
layout: post
title: "Scratching an itch"
date: 2012-09-07 16:00:00
comments: true
categories: Ruby Open-Source
author: Sachin Ranchod
---

This week we released a very simple gem called [ShouldClean](https://rubygems.org/gems/should_clean). ShouldClean is a tool to help us convert RSpec test descriptions from a pile of should (it 'should do this...', it 'should do that...') into a cleaner and simpler imperative style (it 'does this...', it 'does that...').  

The gem works by running through a specified directory and changing the offending descriptions within any spec files it finds. ShouldClean will remove the word 'should' and will conjugate the verb to its singular 3rd person, present indicative form (huh?). For example: 

``` ruby
it "should be true"          #=> it "is true"
it "should action something" #=> it "actions something"
it "should push something"   #=> it "pushes something"
it "should by default be 1"  #=> it "by default is 1"
```

Are a few extra 'shoulds' really that big of deal? Probably not - it really boils down to a matter of preference.  For us, running this tool on projects with large test suites helps:

1. make the tests more readable;
2. it reduces unneccessary duplication in the spec files and the test output;
3. An added benefit is that the test suite has a mood of certainty about it - reading the tests tells you what the code does, not what it should do when everything falls into place. 

ShouldClean is just a simple, fun project we undertook to make the code we look at everyday, slightly better.  Hopefully you can find a use for it too - remember, pull requests are always welcome ([http://www.github.com/siyelo/should_clean](http://www.github.com/siyelo/should_clean)).
