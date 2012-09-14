---
layout: post
title: "Rails 3 upgrade process (the road from 2.3.14 to 3.2.6)"
date: 2012-06-21 16:10:35
comments: true
categories:
author:
---

We've just upgraded an application with about 20K LOC (Lines Of Code) from Rails 2.3.14 to Rails 3.2.6 and Ruby 1.8.7 to Ruby 1.9.3. Here we'll share some details about the experience and the process we took for the upgrade. Before the upgrade, it's advisable to migrate to the latest Rails 2.3 version (2.3.14).

### Versions running out of support...

Why upgrade? Ruby 1.8.7 is slowly [running out of support](http://www.ruby-lang.org/en/news/2011/10/06/plans-for-1-8-7/) and Ruby on Rails 2.3.x is already [out of maintenance and out of security support](https://groups.google.com/forum/#!topic/rubyonrails-security/CdoMUVpsRmQ/discussion). If wondering which Ruby on Rails version are supported at the moment, it's 3.2 for bugfixes and 3.1 for security fixes (see this [thread discussion](http://groups.google.com/group/rubyonrails-core/browse_thread/thread/30ff7f618a6428f3/a767ba1bbf526fde?q=#50a39e4694704f14) on rails-core mailing list). 

### How to approach the upgrade...

There are several schools of thought regarding this matter:

* Upgrade both your ruby version to 1.9.1+ and your stack to Rails stack simultaniously.
* Upgrade your Rails stack and then upgrade your Ruby version
* Upgrade your Ruby version and then your Rails stack

We went with the first.

This was because although we have a relatively large application, we found that most of the gems being used were easily replaced and had no conflicts with Rails 3.x.

### Upgrade now...

The upgrade process to Rails 3.x is rather straight forward as most of the gems have already been ported to support Rails 3.x and many and most have documentated how to do the change. In the rare case that one of your gems does not support rails 3, they are easily replaced.

Here is how we upgraded:

Start by installing the [rails_upgrade](https://github.com/rails/rails_upgrade) plugin:

``` bash
ruby script/plugin install git://github.com/rails/rails_upgrade.git
```

Then run the rake task that does a check for required upgrades:

``` bash
rake rails:upgrade:check
```

The output is rather descriptive. It hightlights all the changes required and even links to blog posts for those of you who would like additional information on how to approach the changes.

Run the backup task. This backs up all of your routes, environments, application, etc.

``` bash
rake rails:upgrade:backup
```

There is a rake task to upgrade all of your routes to the new DSL. We found that we needed to make minor changes after this task was run.

``` bash
rake rails:upgrade:routes
```

Yet another rake task for generating a Gemfile from config.gem directives.

In Rails 3, bundler handles all your gems and dependencies (Fortunately our app was already using bundler). If yours isn't the [rails_upgrade](https://github.com/rails/rails_upgrade)  plugin is nice enough to do this for you!

``` bash
rake rails:upgrade:gems
```

Now it's just a matter of upgrading the Rails version ensuring that you have not locked any of the other gems at a version incompatible with your upgrade. Then let bundler do it's thing:

``` bash
bundle install
```

Then run all the generators for gems like rspec, cucumber and setup spork, guard.

``` bash
rails g rspec:install --spork
rails g cucumber:install --rspec --capybara --spork
bundle exec guard init
bundle exec guard init spork
```


If using cucumber and it's old web steps, you'll need to add [cucumber-rails-training-wheels](https://github.com/cucumber/cucumber-rails-training-wheels)  to the Gemfile. It's also good to setup the [assets pipeline](http://guides.rubyonrails.org/asset_pipeline.html)  in order to get the full benefits from newest version of Rails.

From here we went about fixing our specs (aren't they just fabulous?). We feel this is an important step as it will expose problems and give you deprecation warnings.

We didn't go as far as to fix every spec and cuke. Just to the point where we felt comfortable upgrading again!

So we generated a new Rails 3.2.6 application in another folder and carefuly moved across the Rails configuration files (production.rb, development.rb, Rakefile, etc).

After some more bug and deprecation warning fixes we have a stable app once again! :)

Now all that's left to do is clean up the old backup files, old rails scripts/* files and your vendor/plugins and you're done!

Happy upgrades!
