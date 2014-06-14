---
layout: dropdown
title: "tollwood"
description: 
modified: 2014-06-13 17:50
tags: [festival, sommer, münchen]
image:
  feature: 
  credit: 
  creditlink: 
share: 
---

### What does Jekyll Do?

Jekyll is a ruby gem you install on your local system.
Once there you can call `jekyll --server` on a directory and provided that directory
is setup in a way jekyll expects, it will do magic stuff like parse markdown/textile files,
compute categories, tags, permalinks, and construct your pages from layout templates and partials.

Once parsed, Jekyll stores the result in a self-contained static `_site` folder.
The intention here is that you can serve all contents in this folder statically from a plain static web-server.

You can think of Jekyll as a normalish dynamic blog but rather than parsing content, templates, and tags
on each request, Jekyll does this once _beforehand_ and caches the _entire website_ in a folder for serving statically.
