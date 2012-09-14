---
layout: post
title: "Installing ImageMagick on OSX Leopard"
date: 2009-11-23 11:05:00
comments: true
categories: OSX
author: Glenn Roberts
---

I found a great script for compiling ImageMagick on OSX from scratch via ThoughtBot's Paperclip installation instructions.

Unfortunately it didnt work perfectly out of the box;

``` bash
Undefined symbols:
“_iconv_close”, referenced from:
_opvp_to_utf8 in gdevopvp.o ...
```

So a few tweaks to the script to installlibiconvtoo, as well as the latest stable ImageMagick and voila!;

{% codeblock lang:sh %}
#!/bin/sh
# Install ImageMagick on Snow Leopard: by kain, improved by mislav and samsoffes
# Updated by glenn roberts to include libiconv, and the latest stable ImageMagick
#
# http://www.icoretech.org/2009/08/install-imagemagick-in-leopard-snow-leopard/
# Work with 64bit kernel mode

set -e

PREFIX=/usr/local
# Passenger users: amend your Apache global configuration with the following directive
# SetEnv PATH /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
# The Apache config file is located at /etc/apache2/httpd.conf

# FreeType
wget http://sourceforge.net/projects/freetype/files/freetype2/2.3.9/freetype-2.3.9.tar.gz/download -O- | tar xz
cd freetype-2.3.9
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# libpng
#wget ftp://ftp.simplesystems.org/pub/libpng/png/src/libpng-1.2.40.tar.bz2 -O- | tar xj
wget http://www.imagemagick.org/download/delegates/libpng-1.2.40.tar.bz2 -O- | tar xj
cd libpng-1.2.40
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# jpeg
wget http://www.ijg.org/files/jpegsrc.v7.tar.gz -O- | tar xz
cd jpeg-7
ln -s `which glibtool` ./libtool
export MACOSX_DEPLOYMENT_TARGET=10.6
./configure --enable-shared --prefix=$PREFIX
make
sudo make install
cd ..

# libtiff
wget http://dl.maptools.org/dl/libtiff/tiff-3.8.2.tar.gz -O- | tar xz
cd tiff-3.8.2
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# libwmf
wget http://sourceforge.net/projects/wvware/files/libwmf/0.2.8.4/libwmf-0.2.8.4.tar.gz/download -O- | tar xz
cd libwmf-0.2.8.4
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# LittleCms
wget http://www.littlecms.com/lcms-1.18a.tar.gz -O- | tar xz
cd lcms-1.18
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# Ghostscript
wget http://ghostscript.com/releases/ghostscript-8.70.tar.gz -O- | tar xz
cd ghostscript-8.70
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# Ghostscript Fonts
wget http://sourceforge.net/projects/gs-fonts/files/gs-fonts/8.11%20%28base%2035%2C%20GPL%29/ghostscript-fonts-std-8.11.tar.gz/download -O- | tar xz
sudo mv -f fonts $PREFIX/share/ghostscript

# libiconv
wget http://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.13.1.tar.gz -O- | tar xz
cd libiconv-1.13.1
./configure --prefix=$PREFIX
make
sudo make install
cd ..

# ImageMagick
wget http://mirror.is.co.za/pub/imagemagick/ImageMagick-6.5.7-10.tar.gz -O- | tar xz
cd ImageMagick-6.5.7-10
export CPPFLAGS=-I$PREFIX/include
export LDFLAGS=-L$PREFIX/lib
./configure --prefix=$PREFIX --disable-static --with-modules --without-perl --without-magick-plus-plus --with-quantum-depth=8 --with-gs-font-dir=$PREFIX/share/ghostscript/fonts
make
sudo make install
cd ..

# Clean up
rm -rf freetype-2.3.9 libpng-1.2.40 jpeg-7 tiff-3.8.2 libwmf-0.2.8.4 lcms-1.18 libiconv-1.13.1 ghostscript-8.70 ImageMagick-6.5.7-10
{% endcodeblock %}
