# Big Screen Hack - Render Deployment

## Quick Deploy to Render

### Option 1: Static Site (Recommended)

1. Go to https://dashboard.render.com/select-repo?type=static
2. Connect your GitHub repo: `yepicaiaaron/bigscreenhack-website`
3. Configure:
   - **Name:** bigscreenhack
   - **Branch:** main
   - **Build Command:** (leave empty)
   - **Publish Directory:** `deploy/`
4. Click "Create Static Site"

### Option 2: Web Service (if you need backend)

Use this if you want server-side features later.

### Option 3: Manual Deploy

1. Go to https://dashboard.render.com/static/new
2. Select "Upload your static site"
3. Upload the `deploy/` folder as a ZIP
4. Deploy instantly

## Configuration

Your site will be live at:
`https://bigscreenhack.onrender.com`

Or connect your custom domain:
`bigscreenhack.com`

## Features on Render

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deploys on git push
- ✅ Rollback support
- ✅ Custom domains

---

**Ready to deploy!**