

---
layout: post
title: "Vim Tips - Part II"
date: 2012-07-03 14:39:23
comments: true
categories:
author: 
---

This week we'll share few more userful Vim tips that we've learned recently, most of them from the [Practical Vim](http://pragprog.com/book/dnvim/practical-vim) book. You can also read the first part in this series [Vim Tips - Part I](http://blog.siyelo.com/vim-tips-part-i) at our blog.

1. Replace in multiple files

To search & replace in multiple files, we need to create list of files in which we'll execute a command. We do that by using the **:args**command. For example, lets load all javascript files that start with the "hrt" string:
:args app/assets/javascripts/hrt*.js

We can see which files are loaded in the arguments list by running only the**:args**command:
:args

Having the arguments list prepared, we can execute search & replace with:
:argdo %s/Hrt/Hrt2/g

Once changes have been made in the files, we can save all the files in arguments list with:
:argdo update

2. Search and replace in multiple files

Previous tip works OK if we know the files where we want to run the replace command. Most common need is to search for a string in files, and then run the replace command only in those files. We can do that by using**vimgrep**command to find a pattern in files.**vimgrep** command creates quicklist with files matching the pattern which list we can see by opening it with **:copen**command. If we want quicklist to be useful, we need to convert it to arguments list by using the **:Qargs** mapping which we have in our vimrc file:
command! -nargs=0 -bar Qargs execute 'args' QuickfixFilenames()

" populate the argument list with each of the files named in the quickfix list
function! QuickfixFilenames()
  let buffer_numbers = {}
  for quickfix_item in getqflist()
    let buffer_numbers[quickfix_item['bufnr']] = bufname(quickfix_item['bufnr'])
  endfor
  return join(map(values(buffer_numbers), 'fnameescape(v:val)'))
endfunctionFinally, here's an example of what needs to be run to do search & replace in files:
:vimgrep /CurrencyNumberHelper/ app/models/*.rb
:Qargs
:argdo %s/CurrencyNumberHelper/CurrencyHelper/g
:argdo update

3. Edit already recorded macroWhile recording a macro it's easy to do mistakes. And when that happens, it's easier to edit the already recorded macro than to re-record it. Lets say we have recorded new macro in register**a**. We can print the content of the macro in the current buffer using**:put a**and then edit the macro in Vim. Once macro is changed, we can select it and then yank it to register a with **"ay**. Then we are ready to execute the new macro from register a with**@a**.

4. Execute macro in multiple filesWe have already recorded a macro and we want to run it in few files. First we build arguments list with the files, for example let's load all models from a Rails app:
:args app/models/*.rb Then we run the macro (that is recorded in register a) with:
:argdo normal @aIn the end we save all the buffers with:
:argdo update

5. Delete commandsWe can run the following command in**Insert mode**,**Vim Command Line mode**or**Shell Command Line**:
<C-h> " delete back one character (backspace)
<C-w> " delete back one word
<C-u> " delete back to start of line

6. Vi mode on command lineBash shell provides two modes for command line editing -**emacs**and**vi**. Emacs editing mode is the default one, and we can change it to vi mode using:
set -o viThen while on command line, we can press**ESC**to go to vi editing mode and use Vim's single line editing capabilities. While in normal Vim mode on command line, we can press**v**that will popup editor where we can edit and save buffer that will be executed on command line.

To go back to emacs mode, we need to type:
set -o emacs

If you want to learn more about which Vim commands you can run in bash shell vi mode, here's [cheatsheet](http://www.catonmat.net/download/bash-vi-editing-mode-cheat-sheet.txt) for that.