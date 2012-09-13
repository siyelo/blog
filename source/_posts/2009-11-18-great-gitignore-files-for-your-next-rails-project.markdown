

---
layout: post
title: "Great .gitignore file(s) for your next Rails project"
date: 2009-11-18 08:11:00
comments: true
categories:
author: 
---

Here's great rails template snippet to set up .gitignore files throughout your whole Rails project.

It ignores unnecessary files in the root .gitignore, plus it ensures no vendor/ directories are checked into git.

`run "touch tmp/.gitignore log/.gitignore vendor/.gitignore" 
 
run %{find . -type d -empty | grep -v "vendor" | grep -v ".git" | grep -v "tmp" | xargs -I xxx touch xxx/.gitignore} 
 
file '.gitignore', <<-EOS.gsub(/^ /, '') 
.DS_Store 
log/*.log 
tmp/**/* 
config/database.yml 
config/initializers/site_keys.rb 
db/*.sqlite3 
EOS`