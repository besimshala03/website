# Deployment Guide

## 1. Buy a Domain

Go to [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) or [Namecheap](https://www.namecheap.com).

Search for `besimshala.dev` or `besimshala.com` and purchase it (~$10/yr).

---

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in with your GitHub account
2. Click **"Add New Project"**
3. Import `besimshala03/website` from GitHub
4. Vercel auto-detects Astro — leave all settings as default
5. Click **Deploy**

Your site will be live at a Vercel URL (e.g. `website-xi.vercel.app`) within ~1 minute.

From now on, every push to `main` automatically triggers a new deployment.

---

## 3. Connect Your Custom Domain

### In Vercel
1. Go to your project → **Settings** → **Domains**
2. Click **Add** and type your domain (e.g. `besimshala.dev`)
3. Vercel will show you DNS records to add — keep this tab open

### If you bought on Cloudflare
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → your domain → **DNS**
2. Add the records Vercel gave you (usually an `A` record and a `CNAME`)
3. Wait 5–10 minutes

### If you bought on Namecheap
1. Go to Namecheap dashboard → **Domain List** → Manage your domain
2. Click **Advanced DNS**
3. Add the records Vercel gave you
4. Wait 5–30 minutes

Once DNS propagates, Vercel automatically provisions an SSL certificate and your site is live at your custom domain.

---

## Summary

| Step | Where |
|------|-------|
| Buy domain | Cloudflare or Namecheap |
| Deploy site | vercel.com — import from GitHub |
| Connect domain | Vercel Settings → Domains, then add DNS records |
