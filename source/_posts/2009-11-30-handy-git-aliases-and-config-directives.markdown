---
layout: post
title: "Handy git aliases and config directives"
date: 2009-11-30 10:53:00
comments: true
categories:
author: Glenn Roberts
---

By adding a few lines to ~/.gitconfig and you can alias "git co" to "git checkout", etc:

{% codeblock %}
[alias]
st = status
ci = commit
co = checkout
br = branch
{% endcodeblock %}

Also, you might find these will come in handy;


{% codeblock %}
[merge]
tool = opendiff
summary = true

[color]
diff = auto
status = auto
branch = auto
interactive = auto
{% endcodeblock %}

Also, for a superb bash shell setup where you can see your current working branch, add this to your ~.bash_profile. As the comment suggests, you need to follow the instructions at these URLs to set up git properly first.

{% codeblock lang:sh %}
# http://henrik.nyh.se/2008/12/git-dirty-prompt
# http://www.simplisticcomplexity.com/2008/03/13/show-your-git-branch-name-in-your-prompt/
# http://gist.github.com/47546

function parse_git_dirty {
  git diff --quiet HEAD &>/dev/null
  [[ $? == 1 ]] && echo "*"
}
function parse_git_branch {
  local branch=$(__git_ps1 "%s")
  [[ $branch ]] && echo "[$branch$(parse_git_dirty)]"
}
export PS1=$(echo "$PS1" | sed 's/\\w/\\w\\[\\033[35m\\]$(parse_git_branch)\\[\\033[0m\\]/g')
{% endcodeblock %}
