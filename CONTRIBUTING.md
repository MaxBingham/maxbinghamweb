# Adding content

Everything lives in `content/`. Write Markdown, commit to `main`, and the site rebuilds automatically via GitHub Actions.

---

## New blog post (Blog)

Create a file in `content/blog/` named `YYYY-MM-DD-slug.md`:

```md
---
title: Your title here
description: One-sentence summary.
date: 2026-05-04
tags:
  - whatever
---

Body text in Markdown. Images go in the same folder or `public/img/`.
```

That's it — it appears on `/blog/` and in the Atom feed automatically.

**Draft?** Add `draft: true` to the front matter. It will show locally (`npm start`) but won't be published on build.

---

## New photo series

1. Create a folder: `content/visuals/your-series-name/`
2. Drop images into that folder.
3. Add an `index.md`:

```md
---
title: Series title
description: Where and when.
permalink: /photos/your-series-name/
---

← [Back to photos](/photos/)

Caption or intro text.

![Alt text describing the image.](./your-image.jpg)
```

4. Link the series from `content/visuals.md`:

```md
- **[Series title](/photos/your-series-name/)** — Short description.
```

---

## New work / case study

1. Create a folder: `content/works/project-name/`
2. Add an `index.md`:

```md
---
title: Project name
description: What it is in one line.
permalink: /works/project-name/
---

Write-up here. Images in the same folder work fine.
```

3. Add the new write-up to `content/works.md`:

```md
- **[Project name](/works/project-name/)** — Short description.
```

---

## Update the CV

Edit `content/cv.md` directly. The web page is the canonical CV.

---

## Add a standalone page

Create `content/page-name.md` with a permalink, then add its link directly to `_includes/layouts/base.njk` if it belongs in the header or footer:

```md
---
title: Page title
description: What this page is.
permalink: /page-name/
---

Content here.
```

---

## Quick reference

| I want to…              | Do this                                                        |
|--------------------------|----------------------------------------------------------------|
| Write a thought          | New `.md` in `content/blog/`                                   |
| Post photos              | New folder + `index.md` in `content/visuals/`, link from `visuals.md` |
| Write up a project       | New folder + `index.md` in `content/works/`, link from `works.md`    |
| Update my CV             | Edit `content/cv.md`                                            |
| Add a nav page           | New `.md` in `content/`, then update `base.njk`                 |
| Update the homepage      | Edit `content/index.md`                                         |
| Change site metadata     | Edit `_data/metadata.js`                                       |

## Run locally

```bash
npm install   # first time only
npm start     # opens http://localhost:8080
```
