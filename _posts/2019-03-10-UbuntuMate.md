---
layout: post
title: Ubuntu Mate
date: 2019-03-09
homepage: https://ubuntu-mate.org/raspberry-pi/
download: https://ubuntu-mate.org/raspberry-pi/
author: Ubuntu MATE Team
thumbnail: mate.png
license: mainly GPL
license_link: https://www.gnu.org/licenses/gpl-3.0.html
support: 2B 3B
tags: 2B 3B
desktop: Yes
---
# Introduction

<p>Martin Wimpress and Rohith Madhavan have made an Ubuntu MATE image for the
Raspberry Pi 2 and Raspberry Pi 3 based on the regular Ubuntu <code>armhf</code> base,
not the new <a href="https://www.ubuntu.com/core">Ubuntu <em>&#8220;Snappy&#8221;</em> Core</a>, which means
that the installation procedure for applications uses the traditional tools,
ie <code>apt-get</code>.</p>
<p>We have done what we can to optimise the build for the Raspberry Pi 2
and Raspberry Pi 3, you can comfortably use applications such as
LibreOffice and Firefox. But the microSDHC I/O throughput is a
bottleneck so <strong>we <em>highly</em> recommend that you use a Class 6 or Class
10 microSDHC</strong> card. <strong>Ubuntu MATE 16.04 also fully supports the
built-in Bluetooth and Wifi on the Raspberry Pi 3</strong> and <strong>features
hardware accelerated video playback in VLC and hardware accelerated
decoding and encoding in <code>ffmpeg</code></strong></p>
<p>You&#8217;ll need a microSD card that is <strong>6GB</strong> or greater. The file system
will be automatically resized, on first boot, to occupy the unallocated
space of the microSD&nbsp;card.</p>
<p><strong>NOTE! There are no predefined user accounts</strong>. The first time you
boot it will run through a setup wizard where you can create your own
user account and configure your regional settings. The first boot is
quite slow but, once the configuration is complete, subsequent boots
are much&nbsp;quicker.</p>

# Screenshot

![mate.jpg](https://raw.githubusercontent.com/rpisystem/RPiSystem.github.io/master/thumbnails/Screenshot/mate.jpg)