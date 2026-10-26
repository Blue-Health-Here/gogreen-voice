# GreenLine Health marketing site

Next.js 14 (App Router), TypeScript and Tailwind CSS. All copy and visuals are original.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where to edit

- `src/lib/site.ts`: brand name, URLs, announcement bar and navigation
- `src/lib/content.ts`: all page copy (workflows, audiences, specialties, case studies, blog, press, careers and FAQ)
- `tailwind.config.ts`: brand colors, mapped to the Greenline palette (greenlinepriorauth.com). Token names (`forest`, `leaf`, `mint`, `lime`, `cream`) are kept; raw Greenline colors live under `gl-*`
- `src/app/globals.css`: fonts (self-hosted Bricolage Grotesque + Inter via @fontsource, matching Greenline) and shared styles
- `src/app/api/demo/route.ts`: connects the demo form to your CRM, email or Slack

## Before launch

- Replace numbers marked "illustrative" with verified figures
- Replace the **sample** case studies (fictional organizations) with approved customer stories
- Confirm the security claims on `/security` match your actual controls
- Add your real privacy policy and terms of service
