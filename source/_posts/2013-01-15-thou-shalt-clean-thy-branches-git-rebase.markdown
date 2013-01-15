---
layout: post
title: "Thou shalt clean thy branches: git rebase"
date: 2013-01-15 10:18
comments: true
categories: git
author: glennrob
---

I often find myself wondering when to do a interactive rebase (`` git rebase ``) vs a squashed merge (``git merge --squash ``). The answer is rather subtle and can be found [here](http://stackoverflow.com/questions/2427238/in-git-what-is-the-difference-between-merge-squash-and-rebase). Essentially it comes down to whether you want to continue on the branch (interactive rebase) vs merge it now (merge squash).

Either way, you are rewriting histories, so you have to know what you're
doing.

A google search of ('git merge squash vs rebase') turns up [this article
from Paul
Stadig](http://paul.stadig.name/2010/12/thou-shalt-not-lie-git-rebase-ammend.html)
which rather irks me. Paul's stance in this article is that you should
'never' use git rebase/amend/squash. But these are all perfectly valid,
and necessary parts of a healthly git workflow.

Interactive rebasing and merge squashing are essential if you care about having a *clean* git
history.  Linus explains it perfectly [here](http://lwn.net/Articles/328438/)

> You should rebase your _private_ trees (thats a cleanup) (and never
 pull into a branch that isn't already in good shape)

> You must never EVER destroy other peoples history

> Keep your own history readable and dont expose your crap

> Never pull into a branch that isn't already in good shape

Stick to these simple rules, and rebase/squash as you please!

