---
layout: post
title: Xubuntu 16.04.2
date: 2019-03-10
homepage: https://ubuntu-pi-flavour-maker.org
download: https://ubuntu-pi-flavour-maker.org/xenial/xubuntu-16.04.2-desktop-armhf-raspberry-pi.img.xz.torrent
author: Ubuntu Pi Flavour Makers.
thumbnail: xubuntu.png
license: 
license_link: 
support: 2B 3B
tags: 2B 3B
desktop: Yes
base: Ubuntu
---

 

<h3>Making a&nbsp;microSDHC</h3>
<p>The image can be burned to a DVD, mounted as an ISO file, or be directly
written to a USB stick using a utility like <code>dd</code>, but we prefer <code>ddrescue</code>
(from the <a href="apt://gddrescue">gddrescue</a> package, for&nbsp;example:</p>
<pre class="code literal-block"><span></span>sudo apt-get install gddrescue
unxz ubuntu-mate-16.04-desktop-armhf-raspberry-pi.img.xz
sudo ddrescue -d -D --force ubuntu-mate-16.04-desktop-armhf-raspberry-pi.img /dev/sdx
</pre>


<p>The drive may be mounted on any <code>/dev/sdX</code> so use the command <code>lsblk</code> to&nbsp;check.</p>
<div align="center">
<script type="text/javascript" src="https://asciinema.org/a/34240.js" id="asciicast-34240" async></script>
</div>
