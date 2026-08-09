---
title: Community Work
lang: en
permalink: /en/community.html
published: false
---

<div class="section">
  <div class="wrap">
    <span class="eyebrow">Incoming transmissions</span>
    <h2>Community Work</h2>
    <p class="lede">
      Write-ups, projects, and experiments shared by the community across
      different fields — agriculture, industry, smart cities, environment,
      and more. Want to add yours? See
      <a href="https://github.com/your-org/your-repo/blob/main/CONTRIBUTING.md">how to submit</a>.
    </p>

    <div class="filter-bar">
      <span class="chip is-active" data-field="all">All</span>
      <span class="chip" data-field="agriculture">Agriculture</span>
      <span class="chip" data-field="industrial">Industrial</span>
      <span class="chip" data-field="smart-city">Smart City</span>
      <span class="chip" data-field="environment">Environment</span>
      <span class="chip" data-field="other">Other</span>
    </div>

    <div class="node-log">
      {% assign posts = site.community | where: "lang", "en" | sort: "date" | reverse %}
      {% for post in posts %}
      <div class="node-entry" data-field="{{ post.field | slugify }}">
        <div class="node-meta">
          <span class="id">NODE</span><br>
          {{ post.date | date: "%Y-%m-%d" }}<br>
          {{ post.author }}
        </div>
        <div class="node-body">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.summary }}</p>
          <div class="node-tags"><span>{{ post.field }}</span></div>
        </div>
      </div>
      {% else %}
      <div class="node-entry">
        <div class="node-meta"><span class="id">—</span></div>
        <div class="node-body">
          <p>No transmissions yet. Be the first to submit your work.</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
