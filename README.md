# santagramps.com

The booking site for **Santa GRAMPS** — Dan Barton in the red suit. Built from
the template Dan sent on Oct 30, 2026 (`SantaGRAMPS_Website_Flat.zip`), with his
photos and the North Pole Experience poster dropped in.

Plain HTML + one hand-written stylesheet. No build step, no Tailwind — edit the
files and upload them.

## Pages

| File           | Page                                                          |
| -------------- | ------------------------------------------------------------- |
| `index.html`   | Home — hero, this season (events), why Santa GRAMPS, photo, CTA |
| `about.html`   | The man behind the suit, credentials, approach                |
| `book.html`    | Booking steps, agreement PDF download, inquiry form           |
| `gallery.html` | Photos                                                        |
| `videos.html`  | Videos                                                        |
| `contact.html` | Contact details and message form                              |

## Design system

Shared styles and tokens are in `css/styles.css` (`:root`): red `#8B1A1A`, gold
`#C9A227`, cream background, Playfair Display + Source Sans 3 from Google Fonts.
Each inner page also carries its own `<style>` block in the `<head>`, as Dan's
template shipped it. Additions for real media are under the `PHOTOS & VIDEO`
heading in `styles.css`: add `has-photo` to a placeholder box (`about-image`,
`bio-photo`, `gallery-item`) or `has-video` to a `video-placeholder` when it
gets a real photo or clip.

GRAMPS is always written in all caps — Dan's rule.

## Logo & favicon

Dan sent the Santa GRAMPS logo on Nov 1, 2026 (`images/santagramps-logo-original.jpg`,
1920×1280 on white).

| File                                  | Used for                                      |
| ------------------------------------- | --------------------------------------------- |
| `images/santagramps-logo.(webp/png)`  | Home page hero — full logo, transparent background |
| `images/santagramps-wordmark.(webp/png)` | Header on every page — "Santa / GRAMPS" only, no ornaments |
| `favicon.ico`                         | 16/32/48 — browsers ask for `/favicon.ico` by default |
| `images/favicon-32.png`, `favicon-16.png` | Browser tab                               |
| `images/apple-touch-icon.png`         | 180 — iOS home screen                         |
| `images/icon-512.png`                 | Source / any future manifest                  |

The favicon is the script **S** from Dan's logo in cream on Santa red
(`#8B1A1A`), in the same rounded-square family as the GRAMPS and
GodRepurposesSkeletons icons — the gold inner ring appears on the 180/512
sizes; 16/32 drop it and use a heavier, larger S so it stays legible.
The logo's black "GRAMPS" disappears on dark backgrounds, so the black footer
keeps its text brand.

## Media

| File                                | What                                         |
| ----------------------------------- | -------------------------------------------- |
| `images/santa-1…4.(webp/jpg)`       | Santa suit photos Dan sent Oct 19 (burst of 4). Off the pages since Nov 9 (the Gallery's "In the Suit" group was dropped — every photo is in the suit); `santa-1.jpg` is still the home page's link-preview image |
| `images/north-pole-experience.*`    | The North Pole Experience poster (home page) |
| `images/bearfoot-ranch-*.(webp/jpg)` | 10 photos from the Bearfoot Ranch mini sessions, Nov 8, 2026 (Dan, Nov 9), 1000×1500, metadata stripped — see below |
| `media/santa-hello.mp4`             | 1.6 s clip from Oct 19, plays muted on loop  |
| `images/santa-hello-poster.jpg`     | First frame of that clip                     |
| `pdf/Santa_GRAMPS_Engagement_Agreement.pdf` | The locked agreement from Dan's template |

The originals (HEIC/MOV) are in `../_incoming/`. New gallery photos: add a
`<div class="gallery-item has-photo">` with a `<picture>` like the existing ones,
inside a `.gallery-group` (each group has its own heading and `id`).

### Bearfoot Ranch photos (Nov 8, 2026)

Dan texted these 10 on Nov 9 — "shots that could be put on santagramps.com",
leaving where and how many to us. Full-size originals (Canon, 4640×6960) are in
`../_incoming/2026-11-09-dan-photos/`. All 10 are in the Gallery's
**Bearfoot Ranch** group (`gallery.html#bearfoot-ranch`); three also appear
elsewhere:

| File (`images/…`)                    | Original     | Also used on                               |
| ------------------------------------ | ------------ | ------------------------------------------ |
| `bearfoot-ranch-santa-baby`          | IMG_2377     |                                            |
| `bearfoot-ranch-family-horse`        | IMG_2378     |                                            |
| `bearfoot-ranch-family-baby`         | IMG_2379     |                                            |
| `bearfoot-ranch-santa-toddler`       | IMG_2380     |                                            |
| `bearfoot-ranch-santa-mom-baby`      | IMG_2381     |                                            |
| `bearfoot-ranch-family-girl`         | IMG_2382     |                                            |
| `bearfoot-ranch-santa-girl`          | IMG_2383     | Home — "Meet Santa GRAMPS"                 |
| `bearfoot-ranch-santa-horse`         | IMG_2384     | Home — the Bearfoot Ranch event (and its JSON-LD image) |
| `bearfoot-ranch-santa-portrait`      | IMG_2385     | About — bio photo                          |
| `bearfoot-ranch-santa-trailer`       | IMG_2386     |                                            |

To regenerate one: `magick IMG_NNNN.JPG -auto-orient -resize 1000x1500 -strip
-interlace JPEG -quality 80 out.jpg`, then `cwebp -q 78 -metadata none out.jpg -o out.webp`.

## Events

The home page's **Find Santa GRAMPS This Season** section lists appearances,
soonest first. An event with a `data-ends` date (ISO, with the time zone) is
handled by `js/main.js`:

- Until then, the red bar above the header on every page (`.event-bar`, same
  `data-ends`) promotes it and links to the event on the home page.
- Afterwards the bar hides, the event shows its `data-when="past"` copy instead
  of the `data-when="upcoming"` copy (booking details and link), and it moves
  below the upcoming events — it stays on the site as a past appearance.

Bearfoot Ranch (Sun Nov 8, 2026, 1:00–5:30 PM, booking through Ryan Davis
Photography) is the first one. It ran with Bearfoot's flyer until Dan sent
photos from the day (Nov 9); the flyer, whose Santa wasn't Dan, was swapped for
`images/bearfoot-ranch-santa-horse.*`, which links to the photos in the Gallery,
and the past copy gained a "See Photos from the Day" button. The original flyer
is still in `../_incoming/bearfoot-ranch-santa-sessions-flyer.jpg`.

## Forms

Both forms use `action="mailto:drb@santagramps.com"` as Dan designed them, which
opens the visitor's email app rather than submitting in the page. That only
works once **drb@santagramps.com** exists as a mailbox — set it up (or forward
it to DRB@danbarton.me) before launch. For in-page submissions, point the
`action` at a form service such as Formspree instead.

## Shop link

The **Shop** link (last item in the menu, and in the footer) is a placeholder:
`https://shop-url-here.fourthwall.com`.
Swap in Dan's Fourthwall shop URL across every site at once from the `Dan/`
folder:

```bash
grep -rl shop-url-here.fourthwall.com --include='*.html' --include='*.yml' --exclude-dir=node_modules . | xargs sed -i '' 's#https://shop-url-here.fourthwall.com#https://REAL-SHOP-URL#g'
```

## Hosting

Static, intended for **GitHub Pages** like the rest of the network, with the
`CNAME` file → `santagramps.com`. The domain is registered at NameSilo; point its
DNS at GitHub Pages (or put it behind Cloudflare like the others) once the repo
is published.

Cloudflare tells browsers to keep `css/` and `js/` files for 4 hours, while
pages are fetched fresh. So every page links them as `styles.css?v=…` and
`main.js?v=…`: after changing either file, bump the `?v=` date on all six pages,
or visitors get the new HTML with the old CSS.
