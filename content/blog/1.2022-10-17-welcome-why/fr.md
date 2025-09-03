---
title: &title 'Bienvenue ! et Pourquoi ?'
description: &desc 'Une introduction au blog du Club de Traduction de Haroohie et une explication de nos motivations pour la traduction des jeux Haruhi.'
navigation:
  description: *desc
  author: 'Jonko'
  year: 2022
  month: 10
  day: 17
  tags: ['general']
  image: '0001/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img 'https://haroohie.club/images/blog/0001/00_thumbnail.png'
  - name: 'og:image:alt'
    value: 'The SOS Brigade (Suzumiya Haruhi no Chokuretsu box art)'
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2022-10-17-welcome-why'
  - property: 'og:type'
    content: 'article'
  - name: 'twitter:title'
    value: *title
  - name: 'twitter:description'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---

Vous êtes maintenant en train de lire le premier post de blog du Club de Taduction de Haroohie, ce qui veut dire que soit vous avez scrollé assez loin soit vous êtes là assez tôt. Mon nom est Jonko, et je suis le directeur de projet pour ce club. Résultant de ma position, la responsabilité d'écrire la plupart des posts de blog me revient, mais je peux vous garantir que nous aurons d'autres rédacteurs ici de temps en temps. Ce blog est l'endroit ou on va essayer de dévisser la carosserie et jeter un coup d'oeil à la structure interne de ce projet sur lequel nous travaillons tous si dur. Nous donnerons une perspective d'initié à la retro-ingénierie et au ROM hacking que nous avons effectué, examinerons les complexités de la traduction du Japonais à l'Anglais, et peut être même que nous nous plongerons dans le monde du management de projet. Mais avant tout cela, dans ce premier post de blog, j'aimerais répondre à une question qui est souvent posée: Pourquoi?

Why stay up late getting into Discord arguments about whether Nagato should say “Fine” or “It’s fine”? Why take vacation time to reverse-engineer a proprietary scripting language? Why pour thousands of hours into hacking, translating, and graphics editing all to create patches for games that the publishers didn’t think worthy of official international releases?

Speaking personally, I happened to stumble into ROM hacking mostly by accident and found that it caused my neurons to fire in such a way that releases a constant stream of dopamine. That, however, still fails to answer the more specific questions: why translation then? Why translate these games specifically?

Asking the team will result in answers that fall into a few different categories:

* **We can make these stories more accessible** – This reason reminds me a lot of why the folks at [Redump](http://redump.org/) and [No-Intro](https://no-intro.org/) are obsessed with preserving games; the world is a better place when people have the opportunity to experience pieces of history or media they’re interested in. By translating games into English, we enable far more people to experience them.
* **We can leave our mark on something we love** –  The title of this bullet is lifted directly from one of our lead translators, Millie, who said it best: “The Haruhi series is my biggest obsession, so seeing a project like this, I knew there was no way I'd miss the chance to get involved. It's been great feeling like I can leave a mark on something I really love, and share that love with others.”
* **Being part of a passionate team is exhilarating** – This one comes from one of our other main translators, Isi: “Having a group of people pool their distinct talents towards the creation of a single thing, doing what they can while entrusting the rest to the others, learning more about yourself, the game, the series, the developers, the craft, the others, each small step of the way. And then seeing something tangible come of it. A physical proof of everyone's efforts that then many other people play and enjoy.” More succinctly from our other ROM Hacker, Ermii: “Our combined work and love for Haruhi is what allows this project to exist and what motivates us to keep going.”
* **It’s intrinsically rewarding** – Hey look, the dopamine reason is back!
* **The games are good, actually** – The games don’t have to be good for the first reason to apply, but I thought I’d mention here that they also happen to be very good. To quote our web dev and graphics guru Will, “Plus, it's really satisfying (not to mention on-brand) to want to ‘spread the excitement’ of [these] games all over the world. 😉”

From here on out, this blog will mostly be dealing with the “what” and “how” of the project, but I think it’s appropriate to dwell on our motivations first. We hope you enjoy our work!