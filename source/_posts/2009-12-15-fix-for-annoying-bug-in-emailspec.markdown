---
layout: post
title: "Fix for annoying bug in EmailSpec"
date: 2009-12-15 13:33:00
comments: true
categories:
author: Glenn Roberts
---

EmailSpec with Cucumber is a great combo. How else could you get such nice BDD syntax such as;

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

And if you happen to be using EmailSpec 0.3.5 and you're getting an error like this, I may have a solution for you;

    gem install glennr-email-spec

**or via GitHub* [http://github.com/glennr/email-spec](http://github.com/glennr/email-spec)*

If you're reading this Mr Mabey, please include in the next email-spec patch :-)
