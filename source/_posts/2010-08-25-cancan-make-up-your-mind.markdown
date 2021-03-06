---
layout: post
title: "CanCan - make up your mind!"
date: 2010-08-25 15:05:00
comments: true
categories: Rails
author: Glenn Roberts
headline: If you're using CanCan and came across an error like this...
avatar: /images/avatars/glenn.jpg
image: /images/artwork/vim.jpg
---
``` bash
The :class option has been renamed to :resource for specifying the class in CanCan.
```

And you duly updated your controller code from;

``` ruby
authorize_resource :class => FundingFlow
```

To something like this;

``` ruby
authorize_resource :resource => FundingFlow
```

Since, like all good programmers, you do what you're told by error-messages. But then like some sick joke it starts mocking you with the inverse error message i.e;

``` bash
The :resource option has been renamed back to :class, use false if no class.
```

Before you go and stalk Ryan B (the CanCan author) with a fully automatic assault rifle, first check your CanCan versions.

``` bash
$ gem open cancan
Open which gem? 
1. cancan 1.1.1 
2. cancan 1.3.2
```

Ah ha. And if you're using RVM like we do, then your default.gems might be specifying a different version (which in our case manifested in our staging server, not on local development).

So by making sure you're using the latest version (>= 1.3.2), and using the :class syntax i.e.

``` ruby
authorize_resource :class => FundingFlow
```

, you might save yourself a murder (or at the very least a weapons) charge.
