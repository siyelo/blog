---
layout: post
title: "Siyelos' git workflow"
date: 2011-12-12 09:53:00
comments: true
categories: Git Tools
author: Peter Garbers
avatar: /images/avatars/peter.jpg
image: /images/artwork/vim.jpg
headline: Here at Siyelo we have a rather robust flow that we feel works quite well. This didn't come easily. It took lots of experimentation until we found out what exactly works for us.
---
In this post I’m going to give a brief outline of how we work: 
### Named Branches

We rarely work on dev/master. Almost every feature we work on will get it’s own branch. Each branch will be pushed up to github in their own namepace (to prevent cluttering).

### Pull Requests

When a branch is ready to be merged into dev we like to squash all the commits in that branch. This makes it easier for people reviewing the branch to get an overview of what is being done, it also makes for a cleaner git log.

We do, however, avoid squashing commits in the even changes are requested after the branch has been reviewed. We find this helps with the review process as it is easier for the reviewers to digest.

### Why pull requests?

Pull requests serve 2 functions:

Firstly they give a very transparent overview of what is being worked on and what is ready to be merged and deployed.

This is also a great way to have your code peer reviewed. Github allows collaborators to comment directly on a line of code or on an entire commit or feature.

### Merging

Once a branch has been given the go-ahead and the CI passes, one of the reviewers will merge the branch into dev. This is partly so there is a shared responsibility of the code in the repository and so there is always more than one person who understands that feature.

### Deploying

Once merged in, the branch is immediately deployed to staging.

Deploying immediately will reduce big merges (merges will be easier) and we are able to gain visibility of bugs as they are introduced.  It also gives us more time to locate possible defects, if any.

If you're looking for something more specific, don't hesitate to ask :)
