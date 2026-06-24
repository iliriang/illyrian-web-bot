# Illyrian Minting Bot — Landing Page

Premium dark-mode marketing site for **Illyrian Minting Bot**, an NFT minting automation platform for OpenSea Drops on Ethereum and Base.

Built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**.

## Features

- Responsive, conversion-focused single-page layout (hero, features, how-it-works, stats, dashboards, pricing, FAQ, download CTA)
- Dark Web3 aesthetic with glassmorphism, gradients, and scroll-triggered animations
- Interactive dashboard mockups (wallet manager, mint monitor, transfers, funding, profit tracking)
- SEO metadata, Open Graph, and Twitter cards
- Windows installer served directly from the site for download


## Project Structure

```
app/            # Next.js App Router pages, layout, global styles
  layout.tsx    # Root layout + SEO metadata
  page.tsx      # Home page composition
  globals.css   # Theme tokens, utilities, animations
components/      # Section + UI components (Hero, Features, Dashboards, ...)
public/          # Static assets (logo, icon, installer)
```

## Download Asset

The Windows installer (`public/IllyrianMintBot-Setup.exe`) is served at `/IllyrianMintBot-Setup.exe`.

> **Note:** For production, consider hosting the installer on object storage (e.g. DigitalOcean Spaces) or a GitHub Release rather than committing the binary, then update the download link in `components/DownloadCta.tsx`.

## Deployment

The site builds to static output and can be deployed to any Node host, a VPS/droplet, or DigitalOcean App Platform. Update `metadataBase` in `app/layout.tsx` to your production domain before going live.
