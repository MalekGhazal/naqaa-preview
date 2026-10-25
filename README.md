# Naqaa — website preview

Static preview of the home page (Arabic RTL default, English toggle, 3-step booking form).

## Edit before showing the client
- `script.js` → `WHATSAPP` (top of file): the company's number, digits only, e.g. `9639XXXXXXXX`
- `index.html` → phone, email, and the `wa.me` links in the contact section and floating button
- Brand name "نقاء / Naqaa" is a placeholder: change it in `index.html` and the `T` dictionary in `script.js`

## Deploy to GitHub Pages
```bash
cd naqaa-site
git init -b main
git add .
git commit -m "Initial preview"
gh repo create naqaa-preview --public --source=. --remote=origin --push
gh api -X POST repos/:owner/naqaa-preview/pages -f "source[branch]=main" -f "source[path]=/"
```
Live at `https://<your-username>.github.io/naqaa-preview/` after about a minute.
No `gh`? Create the repo on github.com, push, then Settings → Pages → Branch `main` / root.

## Notes
- The booking form is a demo: it shows a reference and opens WhatsApp with the details pre-filled. Nothing is stored yet.
- Production step: POST the booking object (see the comment in `script.js`) to an endpoint that emails the owner and appends to a Google Sheet.
