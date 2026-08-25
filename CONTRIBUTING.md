# Sharing your work

We welcome write-ups from anyone working with mioty, LoRaWAN, or LPWAN more
broadly — in any field (agriculture, industry, smart cities, environment,
research, and more). Submissions are welcome in **English or French**.

You can submit in whichever way is easiest for you:

## Option A — Send it by email

Email your write-up to **hello@zc-iot-solutions.example** (replace with
your real address) with:

- **Title**
- **Your name** (or how you'd like to be credited)
- **Field / domain** (e.g. agriculture, industrial, smart-city, environment, other)
- **Language** (en or fr)
- **A short summary** (1–2 sentences)
- **The write-up itself** (a few paragraphs is plenty — text, photos, or a link to a longer post/repo)
- **Any links** (GitHub repo, video, blog post)

We'll format it and publish it on the Community Work page, credited to you.

## Option B — Open a Pull Request

If you're comfortable with Git/GitHub, add a Markdown file directly to
[`_community/`](./_community) and open a pull request. Use this front
matter template:

```markdown
---
title: "Your title here"
author: "Your name"
field: agriculture   # agriculture | industrial | smart-city | environment | other
lang: en              # en or fr
date: 2026-08-01
summary: "One or two sentences describing the project."
links:
  - https://github.com/you/your-repo
---

Your write-up goes here, in Markdown.
```

Name the file `YYYY-MM-DD-short-slug.md` (matching the `date` above) and
place it in `_community/`. Once merged, it appears automatically on
`/en/community.html` or `/fr/community.html` depending on `lang`.

---

Either way works — email is easier if you're not on GitHub, a pull request
is faster if you already are.
