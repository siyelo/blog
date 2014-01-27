---
layout: post
title: "Installing ruby-ldap on Fedora"
date: 2014-01-27 14:17:30 +0200
comments: true
categories: [ruby, fedora, ldap]
image: /images/artwork/macbook.jpg
avatar: /images/avatars/glenn.jpg
headline: Can't install ruby-ldap?
---


```
konsoleh[master*] % gem install ruby-ldap -v '0.9.12'
Fetching: ruby-ldap-0.9.12.gem (100%)
Building native extensions.  This could take a while...
ERROR:  Error installing ruby-ldap:
ERROR: Failed to build gem native extension.

    /usr/bin/ruby extconf.rb
--with-openldap2
checking for ldap.h... no
checking for lber.h... no
checking for ldap_ssl.h... no
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.
You may
need configuration options.

Provided configuration options:
--with-opt-dir
--without-opt-dir
--with-opt-include
--without-opt-include=${opt-dir}/include
--without-opt-dirith-opt-lib
--without-opt-lib=${opt-dir}/lib64
--with-make-prog
--without-opt-dirith-opt-libthout-make-prog
--srcdir=.
--curdir
--ruby=/usr/bin/ruby
--with-netscape
--without-netscape
--without-netscape
--with-mozilla
--without-opt-dirith-opt-libt-mozilla
--without-mozilla
--with-openldap1
--without-openldap1
--without-opt-dirith-opt-libt-mozillawithout-openldap1
--with-openldap2
--without-opt-dirith-opt-libt-mozillawithout-openldap1ithout-openldap2
--without-openldap2
--with-wldap32
--without-wldap32
--without-wldap32
--with-ldap-dir
--without-ldap-dir
--with-ldap-include
--without-ldap-include=${ldap-dir}/include
--with-ldap-lib
--with-ldap-include-without-ldap-lib=${ldap-dir}/
--with-ldap-dir
--without-ldap-dir
--with-ldap-include-without-ldap-libwithout-ldap-dir
--with-ldap
--without-ldap
--without-ldap
--with-ldap-include-without-ldap-libibresolv
--without-libresolv
--without-libresolv
--with-libcrypto
--without-ldap-without-libcrypto
--without-libcrypto
--with-libssl
--without-libssl
--without-libssl
--with-libpthread
--without-libpthread
--without-ldap-without-libcrypto-libpthread
--with-libnsl
--without-libnsl
--without-libnsl
--with-libcryptoliblber
--without-liblber
--without-liblber
--with-libldap_r
--without-libnslout-libldap_r
--without-libldap_r
--with-libldap
--without-libldap
        --without-libldap
can't find ldap.h and lber.h
use the option '--with-ldap-dir'!


Gem files will remain installed in
/home/glennr/.gem/ruby/gems/ruby-ldap-0.9.12 for inspection.
Results logged to
/home/glennr/.gem/ruby/gems/ruby-ldap-0.9.12/./gem_make.out
```

To get these headers installed, you need to install openldap-devel;

```
konsoleh[master*] % sudo yum install -y openldap openldap-devel
Loaded plugins: langpacks, refresh-packagekit
Package openldap-2.4.36-4.fc20.x86_64 already installed and latest
version
Resolving Dependencies
--> Running transaction check
---> Package openldap-devel.x86_64 0:2.4.36-4.fc20 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

===============================================================================
 Package               Arch          Version               Repository
Size
===============================================================================
Installing:
 openldap-devel        x86_64        2.4.36-4.fc20         fedora
795 k

Transaction Summary
===============================================================================
Install  1 Package

Total size: 795 k
Installed size: 3.7 M
Downloading packages:
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : openldap-devel-2.4.36-4.fc20.x86_64
1/1
  Verifying  : openldap-devel-2.4.36-4.fc20.x86_64
1/1

Installed:
  openldap-devel.x86_64 0:2.4.36-4.fc20

Complete!
```

Installing ruby-ldap should Just Work(TM);

```
konsoleh[master*] % gem install ruby-ldap -v '0.9.12'
Building native extensions.  This could take a while...
Successfully installed ruby-ldap-0.9.12
Parsing documentation for ruby-ldap-0.9.12
Installing ri documentation for ruby-ldap-0.9.12
Done installing documentation for ruby-ldap after 0 seconds
1 gem installed
```

