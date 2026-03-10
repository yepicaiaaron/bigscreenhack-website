# Big Screen Hack - Netlify Deployment

## Quick Deploy

### Option 1: Drag & Drop (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag the `deploy/` folder from this directory
3. Your site is live instantly!

### Option 2: GitHub + Netlify
1. Push this repo to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import from GitHub"
4. Select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `deploy/`
6. Click "Deploy site"

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=deploy
```

## Custom Domain

After deployment:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: bigscreenhack.com (or your preferred domain)
4. Follow DNS configuration instructions

## Environment Variables (if needed)

If you add backend features later:
- Go to Site settings → Environment variables
- Add any API keys or secrets

## Form Handling

The registration form is already configured for Netlify Forms:
- Forms are automatically detected
- Submissions go to your Netlify dashboard
- No backend code needed!

## Continuous Deployment

If using GitHub integration:
- Every push to main branch triggers a new deploy
- Preview deploys for pull requests
- Rollback to any previous version

## Performance

Netlify automatically provides:
- Global CDN
- HTTPS/SSL certificate
- Asset optimization
- Atomic deploys

---

**Your site will be live at:** `https://bigscreenhack-[random].netlify.app`

**Ready to deploy!** 🚀