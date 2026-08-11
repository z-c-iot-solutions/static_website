# Z&C IoT Solutions — website

Static, bilingual (EN/FR) site for Z&C IoT Solutions, built with Jekyll and
hosted for free on GitHub Pages.

## Structure

```
_config.yml         site settings — set url/baseurl here
_layouts/            page templates (default.html, community-post.html)
_includes/            header, footer, hero SVG
_community/           one Markdown file per community submission (EN or FR)
en/                   English pages: index, mission-vision, contact, community
fr/                   French pages: mirror of en/
assets/               css, js, images
CONTRIBUTING.md        how the community can submit work (email or PR)
```

## 1. Before you publish — replace the placeholders

- `en/contact.md` and `fr/contact.md` — swap in your real email, LinkedIn,
  YouTube, and GitHub links.
- `CONTRIBUTING.md` — same email address, plus the real repo URL once you've
  created it (used in the "open a pull request" instructions).
- `en/community.md` / `fr/community.md` — the link to CONTRIBUTING.md
  currently points at `your-org/your-repo`; update it to your actual repo.
- Remove or replace the two sample posts in `_community/` once you have
  real submissions.

## 2. Preview it locally (optional but recommended)

You'll need Ruby installed. Then:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 4. Turn on GitHub Pages

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Choose the `main` branch and `/ (root)` folder → **Save**.
4. GitHub will build the site with Jekyll automatically (no extra config
   needed) and give you a URL like `https://<your-username>.github.io/<your-repo>/`.

## 5. Set `url` and `baseurl`

Open `_config.yml` and fill in:

- `url`: `https://<your-username>.github.io` (no trailing slash)
- `baseurl`: `/<your-repo>` — **unless** your repo is named
  `<your-username>.github.io`, in which case leave `baseurl` empty, since
  that's a user/org site served from the domain root.

Commit and push again; the live site will pick it up within a minute or two.

## 6. Custom domain (optional, later)

Once you have a domain, add a `CNAME` file at the repo root containing just
the domain (e.g. `zc-iot-solutions.com`), and point your domain's DNS at
GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Adding a community submission yourself

Add a new file to `_community/` — see the template in `CONTRIBUTING.md` —
then commit and push. It appears automatically on the Community Work page
in the right language, filterable by field.
