# CPRC Regional Data Hub — Data Tools (Beta)

**Live site: https://data.centralpinesnc.gov**

This is a pilot site for the Central Pines Regional Council Regional Data Hub's interactive HTML tools: dashboards, maps, calculators and similar pages. It's a plain static website hosted for free on **GitHub Pages**. Every change pushed to the `main` branch goes live within a minute or two.

Questions: data@centralpinesnc.gov

---

## How the site is organized

| Path | What it is |
|---|---|
| `index.html` | Home page: a searchable grid of tool cards |
| `assets/js/tools.js` | **The tool catalog. Edit this to add, change or remove a card.** |
| `assets/css/style.css` | CPRC brand colors and layout |
| `assets/js/main.js` | Builds the cards from the catalog (no edits needed) |
| `tools/<tool-name>/` | One folder per tool, each with its own `index.html` and any data files |
| `accessibility.html` | Accessibility statement (linked in the footer). Update the "last reviewed" date when you review it. |
| `404.html` | "Page not found" page |
| `CNAME` | Connects the site to data.centralpinesnc.gov. **Don't edit or delete it.** |
| `.nojekyll` | Tells GitHub to serve the files exactly as-is. Don't delete it. |

---

## Getting set up (new collaborators)

1. **Accept the invitation.** You'll get an email from GitHub inviting you to the **CPRC-data-hub** organization. Click **Join**. If you don't have a GitHub account yet, create one with your CPRC work email. Your account belongs to you, not CPRC, so pick a username you'd keep.
2. **Turn on two-factor authentication.** Go to your profile picture → **Settings → Password and authentication**. Use an authenticator app (Microsoft Authenticator works), not SMS. Save your recovery codes somewhere safe.
3. **Install GitHub Desktop** from desktop.github.com and sign in.
4. **Get a copy of the site on your computer.** In GitHub Desktop, go to **File → Clone repository**, choose **CPRC-data-hub/rdc-data-tools**, and pick a local folder. A non-synced folder like `C:\GitHub\rdc-data-tools` works best, because OneDrive sync can occasionally clash with Git.

You can also make small edits right on github.com: open a file and click the pencil icon. Use GitHub Desktop for adding new tools, though, since those involve new folders and files.

---

## Adding a new tool

1. **Get the latest version first.** In GitHub Desktop, click **Fetch origin**, then **Pull origin** if it appears. This avoids clashing with someone else's changes.
2. Make a folder in `tools/` named in lowercase-with-dashes, such as `tools/commute-dashboard/`.
3. Save the tool's HTML file in that folder as `index.html`. Put any data files it uses (CSV, images) in the same folder.
4. Optional but recommended: add a "← Back to all data tools" link near the top of the tool, pointing to `../../`.
5. Open `assets/js/tools.js`, copy an existing entry, paste it at the top of the list, and fill it in:
   ```js
   {
     title: "Commute Dashboard",
     description: "One or two sentences on what it shows and who it helps.",
     url: "tools/commute-dashboard/",
     topics: ["Transportation"],
     updated: "2026-12-01",
     color: "turquoise"   // purple, turquoise, orange, lime, coral or peony
   },
   ```
6. **Preview it:** double-click `index.html` in the folder to open the site in your browser and check the new card and tool.
7. **Publish:** in GitHub Desktop, write a short summary (like "Add commute dashboard"), click **Commit to main**, then **Push origin**. The site updates in a minute or two. If you still see the old version, press Ctrl+F5.

To **update** a tool, replace its `index.html`, change the `updated` date in `tools.js`, then commit and push. To **remove** a tool, delete its folder and its entry in `tools.js`.

---

## Ground rules

- **Everything here is public:** the website and every file in this repository. Don't add internal, draft or sensitive data.
- **File limits:** each file must be under 100 MB, and the whole site under 1 GB.
- **Accessibility is required:** every page must meet **WCAG 2.1 Level AA**, following NC's [Web Content Accessibility guidance](https://it.nc.gov/digital-accessibility/web-content-accessibility). See the checklist below.
- **Brand:** use the CPRC 2026 colors (Twilight Purple `#49497F`, Turquoise Sea `#64DAE6`, Orange Creamsicle `#F4AF40`, Lime Lizard `#9FD75C`, Vibrant Coral `#FC7559`, Bright Peony `#F876FF`) and include data@centralpinesnc.gov as the contact.

---

## Accessibility checklist (before publishing any tool)

The site's home, 404 and example pages pass an automated WCAG 2.1 AA scan (axe) and the manual checks below. Each new tool must pass them too.

1. **Automated scan:** run the free [WAVE](https://wave.webaim.org/extension/) or [axe DevTools](https://www.deque.com/axe/devtools/) browser extension on the tool, and fix every error.
2. **Keyboard only:** unplug the mouse. You should be able to Tab to every control, see where you are at all times, operate everything with Enter, Space or the arrow keys, and never get stuck.
3. **Zoom:** at 200% browser zoom nothing is cut off. At 400% (about a phone's width) the content reflows without sideways scrolling, except for maps and wide data tables.
4. **Contrast:** text is at least 4.5:1 against its background (3:1 for large text), and buttons, input borders, chart lines and map symbols are at least 3:1. Check with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
5. **Not color alone:** charts and maps also use labels, patterns or a legend with text, not just color.
6. **Text alternatives:** images have alt text (decorative images use `alt=""`). Charts and maps have a short text summary of the key takeaway, and a data table or download where practical.
7. **Structure:** the page has a unique `<title>`, `lang="en"`, one `<h1>` and headings in order. Form fields have visible labels, and data tables have header cells.
8. **Motion:** nothing flashes. Any animation longer than 5 seconds can be paused.

When in doubt, ask for a review before publishing.

---

## For organization owners

Owners can change any setting, so please be careful with these:

- **Leave these alone:** the repository's **Settings → Pages** (source `main` / root, custom domain `data.centralpinesnc.gov`, Enforce HTTPS on), the `CNAME` file, and the repository's visibility. Making the repo private takes the site offline on the free plan.
- **Domain:** `data.centralpinesnc.gov` is verified under the organization's **Settings → Pages**. DNS for centralpinesnc.gov is managed in Cloudflare by the website vendor, with CPRC Communications as the contact. The records are a CNAME `data` → `cprc-data-hub.github.io` (DNS only, not proxied) and a GitHub verification TXT record. Don't remove either.
- **People:** keep at least two owners at all times. Add or remove people under the organization's **People** tab, and remove staff when they leave CPRC.
- **Plan:** the organization is on GitHub's Free plan, and everything the site needs is included.
