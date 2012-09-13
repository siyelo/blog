---
layout: post
title: "Intro to Machine Learning in Ruby"
date: 2011-12-30 10:41:00
comments: true
categories:
author:
---


    <p>Machine learning is branch of <strong>A</strong>rtificial <strong>I</strong>ntelligence (AI) concerned with design and development of algorithms that allow computers to learn. It's a very broad subject so we will just focus on a simple example that uses statistical classification.</p>
<p>&nbsp;</p>
<p><span style="color:#888888;font-size:large;">Let's build...</span></p>
<p>&nbsp;</p>
<p>In this tutorial we are going to build a simple news classification application that will parse and classify RSS/HTML&nbsp;articles from the&nbsp;<a href="http://www.timeslive.co.za/" title="Times Live newspaper">Times Live</a> newspaper.</p>
<p>For the job, we will use <strong>nokogiri</strong> gem and 2 ruby standard libraries: <strong>open-uri</strong> and <strong>rss/2.0</strong>.</p>
<p><span style="font-size:large;color:#888888;">RSS Parser</span></p>
<p>To find sources of articles for processing, &nbsp;we could build a complex search engine or we can simply use the RSS feeds the newspaper provides us with to look for and discover links. <strong>RssParser</strong> class does exactly that, you initialize it with a <a href="http://avusa.feedsportal.com/c/33051/f/534658/index.rss" title="Times Live feed">feed url</a> and it gives you back the links to all the articles discovered in that feed.</p>

{% codeblock Rss Parser %}
class RssParser
  attr_accessor :url

  def initialize(url)
    @url = url
  end

  def article_urls
    RSS::Parser.parse(open(url), false).items.map{|item| item.link }
  end
end
{% endcodeblock %}

<p><span style="font-size:large;color:#888888;">HTML Parser</span></p>
<p>Having article links, we need to parse page content and extract meaningful parts from these pages. <strong>HtmlParser</strong> class can be initialized with a page url and DOM selector. In this example we will be using a CSS selector to extract the content from articles - <a href="http://getfirebug.com/" title="Firebug">Firebug</a> and <a href="http://jquery.com/" title="jQuery">jQuery</a> were used to find the selector for the text we are extracting from the article. In this class you will also notice <strong>clean_whitespace</strong> method which cleans the whitespace characters from the extracted text.</p>
<p>

</p>
<p><span style="font-size:large;color:#888888;">Statistical Classifier</span></p>
<p>We introduce a class that is responsible for classification of articles. It is initialized with a hash that consists of categories (keys) and training data (values).</p>
<p>Training data is used to discover <span class="st">potential relationships between articles and categories. This data should be carefully selected in order to give better classification results. It is created by determining the value for each word in the context of all words for that category (see the&nbsp;<strong>train_data()</strong> method). </span></p>
<p><span class="st">In this example we are using </span><span class="st">content of </span><span class="st">Wikipedia articles for</span><span class="st"> <a href="http://en.wikipedia.org/wiki/Economy" title="Economy Wikipedia">economy</a>, <a href="http://en.wikipedia.org/wiki/Sport" title="Sport Wikipedia">sport</a> and <a href="http://en.wikipedia.org/wiki/Health" title="Health Wikipedia">health</a></span><span class="st"> </span><span class="st">as training data&nbsp;for our </span><span class="st">categories</span><span class="st">.</span></p>
<p><span class="st">When classifying articles we want to compare only meaningful words and ignore other words </span><span class="st">that do not add any value for a certain category.</span><span class="st">&nbsp;We (partially) solve this problem using&nbsp;<a href="https://gist.github.com/1534053" title="Stop words">stop words</a>.</span></p>
<p>Finally, the&nbsp;<strong>scores()</strong> method creates the scores for each category (per text) that we are testing.</p>
<p>

</p>
<p><span style="font-size:large;color:#888888;">Lets have a go</span></p>
<p>Here is the script that runs the program:</p>
<p>

</p>
<p>Although our statistical classification algorithm is very simple, it can give remarkably good results provided the training data is good. For even better results you can try other classification algorithms like <a href="http://en.wikipedia.org/wiki/Bayesian_probability" title="Bayesian probability">Bayesian probability</a>&nbsp;and&nbsp;<a href="http://en.wikipedia.org/wiki/Latent_semantic_analysis" title="Latent Semantic Analysis">Latent Semantic Analysis</a>.</p>
<p>If you are interested in a<span style="color:#333333;font-family:Lucida Grande, verdana, arial, helvetica, sans-serif;font-size:12px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;text-align:left;text-indent:0;background-color:#ffffff;display:inline!important;float:none;"><span> </span></span><span style="color:#333333;font-family:Lucida Grande, verdana, arial, helvetica, sans-serif;font-size:12px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;text-align:left;text-indent:0;background-color:#ffffff;display:inline!important;float:none;">more indepth example </span>of a news aggregator application - you can check <a href="https://github.com/siyelo/newsagg" title="NewsAgg application at Github">newsagg</a> at Github. It's a simple Sinatra application with a Redis datastore that we put together. It crawls, classifies and creates 'clusters' of articles using statistical algorithms.</p>
<p>If you want to learn more about Machine Learning, checkout <a href="http://shop.oreilly.com/product/9780596529321.do" title="Programming Collective Intelligence">Programming Collective Intelligence</a> book - code examples written in Python and <a href="http://www.apress.com/9781430223511" title="Scripting Intelilgence">Scripting Intelligence</a> - code examples written in Ruby.</p>

