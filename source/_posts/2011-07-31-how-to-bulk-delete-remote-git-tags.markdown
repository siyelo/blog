

---
layout: post
title: "How to bulk delete remote git tags"
date: 2011-07-31 22:48:00
comments: true
categories:
author: 
---Our project had a lot of old, unwanted pre-release branch tags in our remote git repo. E.g.;I needed a one-liner to find all these prerelease tags (i.e. all tags that end in a letter), that deletes them on the remote repo. Then I could do the same on my local.

Given that "git ls-remote" gives output like "<SHA>    refs/tags/<tag>". E.g.;

With a bit of awk and regexp love, we can match that output with;And we know that to delete a git tag on a remote you use;



So putting it all together we get;



(EDIT: thanks to @jamesconroyfinn for spotting the missing xargs)

Booyaka.

NOTE: execute that above command with extreme predjudice, er I mean, caution. i.e.;> 

> a) make sure you have the tags backed up in your local repo first and b) check the output of the awk command first... (everything before "| xargs ..." )


Once you've done a dry-run or two, run that command and watch as those pesky remote tags get deleted.



Similarly for removing these pre-release tags from a local git repo;



(This command is a lot easier to figure out since the output from "git tag -l" is simpler. Alternatively, for synchronization, if you don't have any specific local tags, and are confident that remote has the tags you care about, it may be easier to wipe out all tags and pull them all from origin again.)

Final step: Profit