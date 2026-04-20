# maxbinghamweb

Small personal site: **Selected work**, **Visuals**, **My thoughts**, plus **CV**. Built with [Eleventy](https://www.11ty.dev/) and [Simple.css](https://simplecss.org/).

## Local

```bash
npm install
npm start
```

Open the URL Eleventy prints (usually `http://localhost:8080`).

## Deploy (GitHub Pages)

1. Push this repo to GitHub (this project: `MaxBingham/maxbinghamweb`, or use `yourname.github.io` for a user site).
2. In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
3. Edit **`_data/metadata.js`** → `url` to your live site URL (must match how the site is served, with a trailing slash). Examples:
   - Project site: `https://maxbingham.github.io/maxbinghamweb/`
   - User site: `https://maxbingham.github.io/`
4. Push to **`main`**. The workflow **Deploy to GitHub Pages** builds with the correct `pathPrefix` automatically (`/` for a `*.github.io` repo name, otherwise `/<repo>/`).

Local builds use `pathPrefix` `/` unless you set `ELEVENTY_PATH_PREFIX` (same rules as CI).

## Content map

| Page | File |
|------|------|
| Home | `content/index.md` |
| Selected work | `content/works.md` |
| Visuals | `content/visuals.md` |
| My thoughts (archive) | `content/thoughts.njk` |
| Posts | `content/blog/*.md` |
| CV | `content/cv.md` |
| Site metadata | `_data/metadata.js` |

Static files (PDFs, large images): `public/` → copied to site root.

## Credits

Starter derived from [lkhrs/eleventy-simple](https://github.com/lkhrs/eleventy-simple) / [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog).
