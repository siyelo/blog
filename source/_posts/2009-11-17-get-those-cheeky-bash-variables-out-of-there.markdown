

---
layout: post
title: "Get those cheeky bash variables out of there"
date: 2009-11-17 16:35:00
comments: true
categories:
author:
---

Wanting to "unexport" a bash shell variable, after several minutes too long trying to find the man page for 'export', I finally found the hard way to do it;


1
export -n VAR_NAME

or


1
unset VAR_NAME

or

(Im just kidding about the latter)

Or if you're a smart cookie, you can just make a bash alias like this;


1
alias unexport='unset'