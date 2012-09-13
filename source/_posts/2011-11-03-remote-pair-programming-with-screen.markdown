

---
layout: post
title: "Remote pair-programming with Screen"
date: 2011-11-03 08:37:00
comments: true
categories:
author: 
---

At Siyelo we have 2 distributed teams, one in Cape Town and another one in Skopje. Naturally, we had to figure out how to do remote pair programming between the two offices. There are different available options for remote pair-programming (a great summary post available[here](http://evan.tiggerpalace.com/articles/2011/10/17/some-people-call-me-the-remote-pairing-guy-/) ).

In the past, we often used Skype for screen sharing, but the problems with Skype are:
- you don't have control over the other screen
- you cannot have both screen sharing and video
- bandwidth of the internet connection sometimes can be a problem
- it's not a tool for pair programming



Recently we have been experimenting with Google+ hangouts and although it has the same limitations, we prefer it over Skype for audio/video communication. But, what we really want from a remote pair-programming tool is the ability to do real time code collaboration.

The solution:[screen](http://www.gnu.org/s/screen/) . Screen can have many useful scenarios, but here I will focus on following two:
- read only - useful as a screen sharing tool by hosting read only screen session
- permissive - useful as a real time code collaboration tool





Here is how to setup screen for both scenarios. Note: A downside of a tool like Screen is that everyone needs to learn an editor that runs in terminal. Luckily we all like vim.

First we need to install SSH server because all communication will happen over secure channel:



For the read only scenario, we need to setup guest user account on the host machine. For security reasons we will create a read-only account with[rbash](http://man.he.net/man1/rbash) ([restricted](http://www.cyberciti.biz/faq/restrict-linux-users-to-their-home-directories-only/) bash) shell which will be used by the programmer we want to pair with to ssh into the host  machine we control and join the screen session.

Next we need to setup the guest shell .profile. Add the following to /home/guest/.profile

Here as you can notice "screen -x dalibor/pairprog" automatically will join the session named "pairprog" that is started by "dalibor" user on "guest" user login.

Next we need to install screen on the host machine (if it's not already installed).

For security reasons, screen by default is installed so that other users within the system can not attach to screen session (error you will get is: "Must run suid root for multiuser support."). To allow multi user setup you need to execute following (you might need to change the path if screen is installed in /usr/bin/screen for example):

Then you need to add the following screen config in ~/.screenrc file

Most important lines are "multiuser on" which allows multiuser access in the screen session and "aclchg" command which removes all write and execute permissions for all windows (#) and all commands (?) for user guest. With this setup, host can do anything and guest can just watch the screen or message by using Ctrl-a: wall "hi there".

Finally, communication goes like this: screen session is started by host with:

Guest SSH to the host machine and automatically joins the screen session:

Then they can interact in the same terminal. More on the screen commands[here](http://aperiodic.net/screen/multiuser) .

If you trust the user you can add full permission with "acladd"  command, and usually it's to be done on a shared server. Say we have user1 and  user2 logged in on shared server via SSH, user1 has added user2 in  the ~/.screenrc file.

And is starting pairprog screen session with:

Then user2 can join that session with:

More info on screen command here in this[screen reference](http://aperiodic.net/screen/quick_reference) . Basic commands are: