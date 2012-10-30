---
layout: post
title: "Speeding up bash aliasing to speed up your Rails development"
date: 2010-03-19 17:02:57
comments: true
categories: Bash
author: Glenn Roberts
---

All good developers love the terminal, and spend many hours at the command prompt.

All excellent developers are masters of the shell.

All uber developers issue [shell commands with obtuse aliases](http://github.com/glennr/bash_profile).

So, if you're uber, or at least becoming uber, and regularly spend time aliasing commands in your profile, here's a script to speed that up. It will open your Bash .profile in Textmate, and reload it in your Terminal once you're done.

``` bash
alias mbp='mate -w ~/.bash_profile && source ~/.bash_profile'
```

The speedy way to create aliases that speed up your development.

And remember, keep it DRY.
