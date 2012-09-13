

---
layout: post
title: "Installing ImageMagick on OSX Leopard"
date: 2009-11-23 11:05:00
comments: true
categories:
author: 
---

I found a great script for compiling ImageMagick on OSX from scratch via ThoughtBot's Paperclip installation instructions.

Unfortunately it didnt work perfectly out of the box;
123
Undefined symbols:“_iconv_close”, referenced from:_opvp_to_utf8 in gdevopvp.o ...

So a few tweaks to the script to installlibiconvtoo, as well as the latest stable ImageMagick and voila!;


12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777879808182838485868788899091929394959697
#!/bin/sh# Install ImageMagick on Snow Leopard: by kain, improved by mislav and samsoffes# Updated by glenn roberts to include libiconv, and the latest stable ImageMagick## http://www.icoretech.org/2009/08/install-imagemagick-in-leopard-snow-leopard/# Work with 64bit kernel mode set-e PREFIX=/usr/local# Passenger users: amend your Apache global configuration with the following directive# SetEnv PATH /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin# The Apache config file is located at /etc/apache2/httpd.conf # FreeTypewgethttp://sourceforge.net/projects/freetype/files/freetype2/2.3.9/freetype-2.3.9.tar.gz/download-O-|tarxzcdfreetype-2.3.9./configure--prefix=$PREFIXmakesudomakeinstallcd.. # libpng#wget ftp://ftp.simplesystems.org/pub/libpng/png/src/libpng-1.2.40.tar.bz2 -O- | tar xjwgethttp://www.imagemagick.org/download/delegates/libpng-1.2.40.tar.bz2-O-|tarxjcdlibpng-1.2.40./configure--prefix=$PREFIXmakesudomakeinstallcd.. # jpegwgethttp://www.ijg.org/files/jpegsrc.v7.tar.gz-O-|tarxzcdjpeg-7ln-s`which glibtool`./libtoolexportMACOSX_DEPLOYMENT_TARGET=10.6./configure--enable-shared--prefix=$PREFIXmakesudomakeinstallcd.. # libtiffwgethttp://dl.maptools.org/dl/libtiff/tiff-3.8.2.tar.gz-O-|tarxzcdtiff-3.8.2./configure--prefix=$PREFIXmakesudomakeinstallcd.. # libwmfwgethttp://sourceforge.net/projects/wvware/files/libwmf/0.2.8.4/libwmf-0.2.8.4.tar.gz/download-O-|tarxzcdlibwmf-0.2.8.4./configure--prefix=$PREFIXmakesudomakeinstallcd.. # LittleCmswgethttp://www.littlecms.com/lcms-1.18a.tar.gz-O-|tarxzcdlcms-1.18./configure--prefix=$PREFIXmakesudomakeinstallcd.. # Ghostscriptwgethttp://ghostscript.com/releases/ghostscript-8.70.tar.gz-O-|tarxzcdghostscript-8.70./configure--prefix=$PREFIXmakesudomakeinstallcd.. # Ghostscript Fontswgethttp://sourceforge.net/projects/gs-fonts/files/gs-fonts/8.11%20%28base%2035%2C%20GPL%29/ghostscript-fonts-std-8.11.tar.gz/download-O-|tarxzsudomv-ffonts$PREFIX/share/ghostscript# libiconvwgethttp://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.13.1.tar.gz-O-|tarxzcdlibiconv-1.13.1./configure--prefix=$PREFIXmakesudomakeinstallcd..# ImageMagickwgethttp://mirror.is.co.za/pub/imagemagick/ImageMagick-6.5.7-10.tar.gz-O-|tarxzcdImageMagick-6.5.7-10exportCPPFLAGS=-I$PREFIX/includeexportLDFLAGS=-L$PREFIX/lib./configure--prefix=$PREFIX--disable-static--with-modules--without-perl--without-magick-plus-plus--with-quantum-depth=8--with-gs-font-dir=$PREFIX/share/ghostscript/fontsmakesudomakeinstallcd.. # Clean uprm-rffreetype-2.3.9libpng-1.2.40jpeg-7tiff-3.8.2libwmf-0.2.8.4lcms-1.18libiconv-1.13.1ghostscript-8.70ImageMagick-6.5.7-10

