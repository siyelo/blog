---
layout: post
title: "How to bulk delete remote git tags"
date: 2011-07-31 22:48:00
comments: true
categories: Git
author: Glenn Roberts
avatar: /images/avatars/glenn.jpg
image: /images/artwork/macbook-color-keyboard.jpg
headline: A quick but useful git trick
---

project had a lot of old, unwanted pre-release branch tags in our remote git repo. E.g.:

``` bash
0.9.6c
0.9.6d
...
```

I needed a one-liner to find all these prerelease tags (i.e. all tags that end in a letter), that deletes them on the remote repo. Then I could do the same on my local.

Given that "git ls-remote" gives output like "<SHA>    refs/tags/<tag>". E.g.:

``` bash
d16aeb86430afc26fb17f182f567d39c8c732188 refs/tags/0.9.6c
390c9a3251b813775ccdb96c375d50fed67d058f refs/tags/0.9.6d
...
```

With a bit of awk and regexp love, we can match that output with:

``` bash
^(.*)  -  the SHA (at the start of the line ^)
(\s+)  - a cupla spaces
(.*[a-z])$  - a string ending in a letter, followed by end of line ($)  (there are more exact/safer ways of doing this regexp, I know)
```

And we know that to delete a git tag on a remote you use:

``` bash
git push origin :refs/tags/0.9.6c
```

So putting it all together we get:

``` bash
$ git ls-remote --tags origin | awk '/^(.*)(\s+)(.*[a-z])$/ {print ":" $2}' | xargs git push origin
```

(EDIT: thanks to @jamesconroyfinn for spotting the missing xargs)

Booyaka.

NOTE: execute that above command with extreme predjudice, er I mean, caution. i.e.;>

> a) make sure you have the tags backed up in your local repo first and <br />
> b) check the output of the awk command first... (everything before "| xargs ..." )


Once you've done a dry-run or two, run that command and watch as those pesky remote tags get deleted.

``` bash
- [deleted]         0.9.6c
- [deleted]         0.9.6d
...
```

Similarly for removing these pre-release tags from a local git repo:

``` bash
$ git tag -l | awk '/^(.*[a-z])$/ {print $1}'  | xargs git tag -d

Deleted tag '0.9.0c' (was e373098)
Deleted tag '0.9.0d' (was 5566b43)
```

(This command is a lot easier to figure out since the output from "git tag -l" is simpler. Alternatively, for synchronization, if you don't have any specific local tags, and are confident that remote has the tags you care about, it may be easier to wipe out all tags and pull them all from origin again.)

Final step: Profit
