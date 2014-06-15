---
layout: dropdown
title: Hovereffects
category : Backend
modified: 2014-06-13
header: Maghreb
description: "In den Ländern des Maghreb – Algerien, Tunesien und Marokko – ist die Tajine auf dem 
Land immer noch der Alltagskochtopf"
tags: [navigation]
group: info
navigation:
  order: 1
  parent:
image:
  feature: 
  credit: Harald Haesler
  creditlink: 
comments: true
share: true
---


<div class="col-sm-6">
    <div class="ih-item square effect6 from_top_and_bottom"><a href="#">
        <div class="img"><img src="images/rect/1.jpg" alt="img"></div>
        <div class="info">
          <h3>Titel</h3>
          <p>Description goes here</p>
        </div></a>
     </div>
 </div>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

