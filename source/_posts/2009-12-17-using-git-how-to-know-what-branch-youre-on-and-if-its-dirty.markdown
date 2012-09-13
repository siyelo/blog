

---
layout: post
title: "Using Git? How to know what branch you're on, and if its dirty."
date: 2009-12-17 09:06:32
comments: true
categories:
author: 
---


    Do you lie awake at night dreaming of a way to save your fingers from typing 'git status' too often? Ever wish you could just have an asterisk (*) on the command prompt to tell you that the working directory is dirty? No more insomnia for you;

[![Terminal 2014 bash 2014 108ճ4][http://img.skitch.com/20091217-efbap1ndi2ttnyf88hkg4fstxg.preview.jpg] ](http://skitch.com/glennr/ncyku/terminal-bash-108x34) Uploaded with[plasq](http://plasq.com/) 's[Skitch](http://skitch.com) !

Paste this code into your .bash_profile and off you go.


123456789101112
# Bash prompt showing current git branch & marking if dirty:# Based on http://henrik.nyh.se/2008/12/git-dirty-promptfunction parse_git_dirty {  [[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]] && echo "*"}function parse_git_branch {  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* (.*)/[1$(parse_git_dirty)]/"}export PS1=$(echo "$PS1" | sed 's/\w/\w\[33[35m\]$(parse_git_branch)\[33[0m\]/g')