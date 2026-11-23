# CPRC Regional Data Center — Data Tools site

A static website for hosting interactive HTML tools (Claude artifacts, dashboards, calculators) for the Central Pines Regional Council Regional Data Center. It's hosted for free on **GitHub Pages**.

## What's in this folder

| Path | What it is |
|---|---|
| `index.html` | Home page: lists every tool as a searchable card |
| `assets/js/tools.js` | **The tool catalog. Edit this file to add a tool.** |
| `assets/css/style.css` | CPRC brand colors and layout |
| `assets/js/main.js` | Builds the cards from the catalog (no edits needed) |
| `tools/` | One folder per tool, each with its own `index.html` |
| `404.html` | "Page not found" page |
| `.nojekyll` | Tells GitHub to serve the files exactly as-is |

To preview it, double-click `index.html` and it opens in your browser.

---

## One-time setup (about 20 minutes)

### 1. Create a GitHub account for CPRC
- Go to github.com and sign up. Use a shared work address (such as data@centralpinesnc.gov) so the site isn't tied to one person.
- Optional but recommended: create a free **organization** (for example `centralpinesnc`) so colleagues can be added later.

### 2. Install GitHub Desktop
- Download it from desktop.github.com and sign in with the account above.

### 3. Publish this folder
1. In GitHub Desktop: **File → Add local repository** → choose this folder → click **create a repository** when prompted.
2. Click **Publish repository**. Choose the organization as the owner, and **uncheck "Keep this code private"**. Free GitHub Pages requires a public repository.
3. Suggested repo name: `data-tools`

### 4. Turn on GitHub Pages
1. On github.com, open the repo → **Settings → Pages**.
2. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
3. After about a minute the site is live at `https://<owner>.github.io/data-tools/`.

---

## Adding a new tool

1. Make a new folder in `tools/`, such as `tools/commute-dashboard/`.
2. Save the tool's HTML file in it as `index.html`. Put any data files it uses (CSV, images) in the same folder.
3. Open `assets/js/tools.js`, copy an existing entry, and fill in the title, description, url (`tools/commute-dashboard/`), topics, date and color.
4. In GitHub Desktop: write a short summary (like "Add commute dashboard") → **Commit to main** → **Push origin**.
5. The live site updates in about a minute.

**Limits:** each file must be under 100 MB (GitHub's limit), and the whole site under 1 GB. Most HTML tools are well under 10 MB.

---

## Optional: use a centralpinesnc.gov address

To serve the site at something like `data.centralpinesnc.gov`:

1. **Ask IT or Unrelated** to add this DNS record for centralpinesnc.gov:
   - Type: `CNAME`
   - Name: `data` (or your chosen subdomain)
   - Value: `<owner>.github.io` (for example `centralpinesnc.github.io`)
2. Once the record exists, go to repo **Settings → Pages → Custom domain**, enter `data.centralpinesnc.gov`, save, then check **Enforce HTTPS** when it becomes available.
3. GitHub adds a `CNAME` file to the repo automatically. Don't delete it.

Do step 1 before step 2, or the github.io address will redirect to a domain that doesn't work yet.

> **Tip:** Verify your domain under your GitHub organization's **Settings → Pages**. This stops anyone else from claiming the subdomain.

---

## Things to keep in mind
- **Everything here is public**, including the files in the repo. Don't put internal or sensitive data in this folder.
- **OneDrive + Git:** this folder lives in OneDrive. That works for one person, but if OneDrive sync conflicts appear in the hidden `.git` folder, move the repo to a non-synced location (such as `C:\GitHub\data-tools`). GitHub then becomes the backup.
- **Accessibility:** keep tools keyboard-usable with readable contrast, and give charts and maps text alternatives where possible.
- **Questions:** data@centralpinesnc.gov
