---
layout: post
title: "Make Textmate your $EDITOR of choice"
date: 2009-11-19 08:46:59
comments: true
categories: Textmate
author: Glenn Roberts
---

If you are a master of Vim and feel like a sea-change, or if you're just plain scared, you can set up Textmate as your default editor.

``` bash
export EDITOR='mate -w'
export GIT_EDITOR='mate -wl1'. #This instructs TextMate to open with the caret at line 1 rather than where it last was.
```

Whack this in your .profile (e.g. ~/.bash_profile), re-source it:

``` bash
source ~/.bash_profile
```

And off you go.
