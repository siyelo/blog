---
layout: post
title: "Your git squash-merge is bad"
date: 2013-02-13 19:30
comments: true
categories: [git]
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/squash.jpg
headline: ... and you should feel bad.
---

Commit early & commit often is the way to go. Then squash your commits before they get merged to `[master]`. This is the gentlemanly thing to do.

With git, you can squash with an interactive rebase (`git rebase -i`), in which you squash your branch down to one (or two) commits. Alternatively you can use `git merge --squash` while merging the branch.

Having someone else merge your branch into `[master]` (unless you already paired with someone on the code) is good practice. It formalizes the code review step, and makes sure someone else is signing off on the code in case you did [this](http://www.youtube.com/watch?v=pUJJ-mdd9pw&feature=youtu.be&t=1m45s). (In a way it also makes you feel the pain of code reviews where you might be pairing!)

Both commit-squashing methods (interactive rebase or squash-merge) give you the major benefit of a cleaner `git log` and lots of warm and fuzzies. However if you follow the above process (like we do), an interactive rebase tends to work better than a squash-merge.

An interactive rebase means the **author** is responsible for making sure their branch history is clean *and will merge cleanly*. This is nice. As a committer I know I can press the big green 'Merge Pull Request' button and shit won't explode. Mostly.

A squash merge means the merger/committer is responsible for resolving any merge conflicts. If the committer is not the same person as the author, well, that code review just took even longer. And the Committer just rewrote history, perhaps not in a good way i.e. if someone else's **already squashed their branch**, then a merge-squash is redundant and the committer will appear as the author of that merge commit. Oops.

To illustrate; The 'before' shot below reveals a beautifully squashed branch (via interactive rebase), by our hero, the fearlesss yet considerate Author, whom we shall call 'Glenn'. The 'after' shot shows the aftermath of a squash-merge on that same branch, by the villianous Committer, The Glory Hunter;

*Before:*

![Before merge](http://i.imgur.com/4xWxJTi.png)


*After:*

![After bad squash](http://i.imgur.com/V0E8eUM.png)

Oh well, at least The Glory Hunter will show up in the git-blame if anything goes awry. Merge-squash away!

