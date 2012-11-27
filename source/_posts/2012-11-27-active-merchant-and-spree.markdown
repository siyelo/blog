---
layout: post
title: "Active Merchant and Spree"
date: 2012-11-27 10:01
comments: true
categories: rails
author: Sachin Ranchod
---

Integrating an [ActiveMerchant](https://github.com/Shopify/active_merchant) supported payment gateway into Spree is really easy but unfortunately it isn't particularly well documented.  Below are the steps we followed to get it working:

For the purposes of this example, we'll be adding PayGate PayXML as a Spree payment gateway.

Add the ActiveMerchant gem:

```ruby
#Gemfile
gem 'activemerchant'
```

Create the PayGate class which inherits from Spree::Gateway.  The class implements the `provider_class` method which returns the relevant ActiveMerchant billing class.

```ruby
#/app/models/spree/gateway/pay_gate.rb
class Spree::Gateway::PayGate < Spree::Gateway
  preference :login, :string
  preference :password, :string

  attr_accessible :preferred_login, :preferred_password

  def provider_class
    ActiveMerchant::Billing::PayGateXmlGateway
  end
end
```

In this case, the ActiveMerchant::Billing::PayGateXMLGateway requires a login and password to connect and authenticate with the gateway.  Take a look at the relevant file in the ActiveMerchant repo to see what your gateway requires.  The login and password are implemented using Spree's preferences system so that they can be filled in via the admin backend.

Add your new Spree gateway into the collection of payment methods Spree knows about:

```ruby
#/config/application.rb

config.after_initialize do
  Rails.configuration.spree.payment_methods << Spree::Gateway::PayGate
end
```

Finally, add your new payment method via the admin backend.  Log in as an admin user, go to configuration > payment methods.  Delete the example payment methods if there are any then click 'New payment method'.  Fill in the name of the payment method as 'Credit Card' (assuming you are accepting credit cards) and select the gateway you added in the provider drop-down.  You'll also need to fill in the preferences you added (in this case: login and password) with the details provided by the payment gateway.
