---
layout: post
title: "Fix for annoying bug in EmailSpec"
date: 2009-12-15 13:33:00
comments: true
categories: Open-Source
author: Glenn Roberts
---

EmailSpec with Cucumber is a great combo. How else could you get such nice BDD syntax such as:

{% codeblock lang:ruby %}
Scenario Outline: Register new user
Given I am on the signup page
And I fill in "Email" with ""
And I fill in "Password" with ""
And I press "Create My Account"
Then I should
And I should receive an email
When I open the email
Then I should see "Please activate your new account" in the subject
When I click the first link in the email
{% endcodeblock %}

And if you happen to be using EmailSpec 0.3.5 and you're getting an error like this, I may have a solution for you:

``` bash
You have a nil object when you didn't expect it!
You might have expected an instance of Array.
The error occurred while evaluating nil.include? (NoMethodError)
/Users/glennroberts/.gem/ruby/1.8/gems/glennr-email_spec-0.3.5/lib/email_spec/deliveries.rb:45:in `mailbox_for'
/Users/glennroberts/.gem/ruby/1.8/gems/glennr-email_spec-0.3.5/lib/email_spec/deliveries.rb:45:in `select'
/Users/glennroberts/.gem/ruby/1.8/gems/glennr-email_spec-0.3.5/lib/email_spec/deliveries.rb:45:in `mailbox_for'
/Users/glennroberts/.gem/ruby/1.8/gems/glennr-email_spec-0.3.5/lib/email_spec/helpers.rb:138:in `mailbox_for'
/Users/glennroberts/.gem/ruby/1.8/gems/glennr-email_spec-0.3.5/lib/email_spec/helpers.rb:48:in `unread_emails_for'
./features/step_definitions/email_steps.rb:52
```

``` bash
gem install glennr-email-spec
```

**or via GitHub* [http://github.com/glennr/email-spec](http://github.com/glennr/email-spec)*

If you're reading this Mr Mabey, please include in the next email-spec patch :-)
