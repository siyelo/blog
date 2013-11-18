---
layout: post
title: "Vim Tips - Part I"
date: 2012-06-27 07:50:00
comments: true
categories: Vim Tutorial
author: Dalibor Nasevic
avatar: /images/avatars/dalibor.jpg
image: /images/artwork/vim.png
headline: At Siyelo all developers exclusively use Vim editor for coding. In this two-parts series we'll share few Vim tips that we find useful.
---

Most of the tips we've learned from the great [Practical Vim](http://pragprog.com/book/dnvim/practical-vim) book by Drew Neil.

### 1. Repeat the last Ex command

In Vim there are 3 command line mode prompts:

* Ex command prompt: **:something**
* Search prompt: **/something**
* Expression prompt (from insert mode type <b><C-r>=</b>): **=1+1**

Let say we run a spec from the Ex command prompt like this:

``` vim
:!rspec spec/models/code_spec.rb
```

We can repeat the last Ex command by typing **@:** from normal mode.

### 2. Repeat the last substitute command

If substitute command is run, like for example:

``` vim
:s/current_user/user/g
```

We can repeat it with **:s** or **&** which is synonym for **:s**. Note that flags used at the substitute command are not remembered, and to fix that **:&&** should be used. It's handy having the following mappings in the vimrc file:

``` vim
" make & trigger :&& so it preserves flags
nnoremap & :&&<Enter>
xnoremap & :&&<Enter>
```

### 3. Sort properties in CSS

Some developers order the CSS properties by grouping them by width-height, margin-padding, other use to order them in alphabetical order. If you belong to the second group, this tip will help not search for the place where to enter the new properties.

``` vim
h4 {
  font-size: 11px;
  margin: 15px;
  background: red;
}
```

Just append them at the end, select the lines and in visual mode type **:sort**, or from normal mode select everything inside {} with **vi{** and then **:sort**.

``` vim
h4 {
  background: red;
  font-size: 11px;
  margin: 15px;
}
```

### 4. Select texts

Select the original yanked text with **gv** or select the last pasted text with **gb** (custom mapping). **gb** is really usesful when doing extract method refactoring with cut-paste text and then fix the identation with **gb<**. For **gb** to work, the following mapping need to be defined in the vimrc file.

``` vim
" select last paste in visual mode
nnoremap <expr> gb '`[' . strpart(getregtype(), 0, 1) . '`]'
```

### 5. Paste from register without leaving insert mode <C-r>{register}

While in insert mode, yanked text can be pasted without leaving the insert mode with **<C-r>0**. If yanked text contains new line characters, **<C-r><C-p>0** will take care of fixing the indentation.

### 6. Run normal mode commands across a range

Say we want to append ; at the end of the following lines:

``` vim
var element = $(this)
var tabName = element.data('tab')
var report  = element.data('report')
```

We can visually select the 3 lines and type **:normal A;** or we can just select all lines in the file with **%** and execute the same command **:%normal A;**.

Next week we're coming with few more tips to improve your vimfu.
