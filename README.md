# Dust Busst — Static Website

Professional housekeeping & facility management website for **Dust Busst**, Bengaluru.

## Pages

- `index.html` — Home (hero, services overview, why choose us, customer segments, CTA)
- `about.html` — About Us (who we are, vision, mission, working process, commitment)
- `services.html` — Services (4 services with images, customer segments)
- `contact.html` — Contact (phone, WhatsApp, email, Google Maps)
- `faq.html` — FAQ (5 questions, accordion)

## Tech

- Pure HTML + Tailwind CSS (CDN) + vanilla JS
- No build step, no npm — just static files
- Inter font (Google Fonts)
- Pexels CDN images for services, local images for customer segments

## Local Preview

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `dustbusst.github.io` or any name)
2. Push this folder to the `main` branch
3. Go to **Settings > Pages** > Source: `main` branch, root `/`
4. GitHub will serve the site at `https://<username>.github.io/<repo>/`

## Connect dustbusst.com Domain

1. The `CNAME` file is already set to `dustbusst.com`
2. In your domain registrar's DNS settings, add:

   | Type  | Name | Value                       |
   |-------|------|-----------------------------|
   | A     | @    | 185.199.108.153             |
   | A     | @    | 185.199.109.153             |
   | A     | @    | 185.199.110.153             |
   | A     | @    | 185.199.111.153             |
   | CNAME | www  | `<username>.github.io`      |

3. In GitHub repo **Settings > Pages**, enter `dustbusst.com` as the custom domain
4. Check **Enforce HTTPS**

DNS changes may take up to 24 hours to propagate.

## Swapping the Logo

The site uses a text-based "DB" + "DUST BUSST" logo. To use an image logo:

1. Add your logo to `images/logo.png` (or .svg)
2. In each HTML file, replace the `<a>` inside `<nav>` that contains the text logo with:
   ```html
   <a href="index.html"><img src="images/logo.png" alt="Dust Busst" class="h-10"></a>
   ```
3. Do the same for the footer brand block

## Contact Details

- Phone: 9986034680 / 7411212510
- WhatsApp: 7411212510
- Email: dustbusst@gmail.com
- Location: Bengaluru, Karnataka (HSR Layout, Koramangala, Hulimavu)
