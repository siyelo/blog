

---
layout: post
title: "Intro to Machine Learning in Ruby"
date: 2011-12-30 10:41:00
comments: true
categories:
author:
---

Machine learning is branch of**A**rtificial**I**ntelligence (AI) concerned with design and development of algorithms that allow computers to learn. It's a very broad subject so we will just focus on a simple example that uses statistical classification.

 

Let's build...

 

In this tutorial we are going to build a simple news classification application that will parse and classify RSS/HTML articles from the [Times Live](http://www.timeslive.co.za/) newspaper.

For the job, we will use**nokogiri**gem and 2 ruby standard libraries:**open-uri**and**rss/2.0**.

RSS Parser

To find sources of articles for processing,  we could build a complex search engine or we can simply use the RSS feeds the newspaper provides us with to look for and discover links.**RssParser**class does exactly that, you initialize it with a[feed url](http://avusa.feedsportal.com/c/33051/f/534658/index.rss) and it gives you back the links to all the articles discovered in that feed.

HTML Parser

Having article links, we need to parse page content and extract meaningful parts from these pages.**HtmlParser**class can be initialized with a page url and DOM selector. In this example we will be using a CSS selector to extract the content from articles -[Firebug](http://getfirebug.com/) and[jQuery](http://jquery.com/) were used to find the selector for the text we are extracting from the article. In this class you will also notice**clean_whitespace**method which cleans the whitespace characters from the extracted text.



Statistical Classifier

We introduce a class that is responsible for classification of articles. It is initialized with a hash that consists of categories (keys) and training data (values).

Training data is used to discoverpotential relationships between articles and categories. This data should be carefully selected in order to give better classification results. It is created by determining the value for each word in the context of all words for that category (see the **train_data()**method).

In this example we are usingcontent ofWikipedia articles for[economy](http://en.wikipedia.org/wiki/Economy) ,[sport](http://en.wikipedia.org/wiki/Sport) and[health](http://en.wikipedia.org/wiki/Health) as training data for ourcategories.

When classifying articles we want to compare only meaningful words and ignore other wordsthat do not add any value for a certain category. We (partially) solve this problem using [stop words](https://gist.github.com/1534053) .

Finally, the **scores()**method creates the scores for each category (per text) that we are testing.



Lets have a go

Here is the script that runs the program:



Although our statistical classification algorithm is very simple, it can give remarkably good results provided the training data is good. For even better results you can try other classification algorithms like[Bayesian probability](http://en.wikipedia.org/wiki/Bayesian_probability)  and [Latent Semantic Analysis](http://en.wikipedia.org/wiki/Latent_semantic_analysis) .

If you are interested in amore indepth exampleof a news aggregator application - you can check[newsagg](https://github.com/siyelo/newsagg) at Github. It's a simple Sinatra application with a Redis datastore that we put together. It crawls, classifies and creates 'clusters' of articles using statistical algorithms.

If you want to learn more about Machine Learning, checkout[Programming Collective Intelligence](http://shop.oreilly.com/product/9780596529321.do) book - code examples written in Python and[Scripting Intelligence](http://www.apress.com/9781430223511) - code examples written in Ruby.