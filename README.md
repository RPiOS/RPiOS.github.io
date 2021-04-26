# RPiOS

A directory of Raspberry Pi System

# Submitting a System

Have a system you want to share?

* Fork the site on GitHub
* Create a new post in the `_Systems` directory and fill out the relevant YAML fields like this

```yaml
---
layout: post
title: # Your System name
date: # date of it
homepage: # Home Page of System
download: # Where you can download
author: # Author
thumbnail: # The thumbnail name of system
license: # License of this System
license_link: # Where can we find the license
support: # Which Board was supported
tags: # Which Board was supported
desktop: # if have desktop use true
base: # What system is built from
---
```


* Make a 250x200 thumbnail and drop it in the thumbnails directory. List its filename in the post's markdown file.
* Test it out, then push your changes up and open a pull request.

# License

The contents of this repository are licensed under the [GNU Public License.](http://www.gnu.org/licenses/gpl-3.0.html)