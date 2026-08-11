---
title: Travaux de la communauté
lang: fr
permalink: /fr/community.html
published: false
---

<div class="section">
  <div class="wrap">
    <span class="eyebrow">Transmissions entrantes</span>
    <h2>Travaux de la communauté</h2>
    <p class="lede">
      Articles, projets et expérimentations partagés par la communauté dans
      différents domaines — agriculture, industrie, ville intelligente,
      environnement, et plus encore. Vous voulez partager le vôtre ? Voir
      <a href="https://github.com/your-org/your-repo/blob/main/CONTRIBUTING.md">comment soumettre</a>.
    </p>

    <div class="filter-bar">
      <span class="chip is-active" data-field="all">Tout</span>
      <span class="chip" data-field="agriculture">Agriculture</span>
      <span class="chip" data-field="industrial">Industrie</span>
      <span class="chip" data-field="smart-city">Ville intelligente</span>
      <span class="chip" data-field="environment">Environnement</span>
      <span class="chip" data-field="other">Autre</span>
    </div>

    <div class="node-log">
      {% assign posts = site.community | where: "lang", "fr" | sort: "date" | reverse %}
      {% for post in posts %}
      <div class="node-entry" data-field="{{ post.field | slugify }}">
        <div class="node-meta">
          <span class="id">NŒUD</span><br>
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
          <p>Aucune transmission pour l'instant. Soyez le ou la premier·ère à partager votre travail.</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
