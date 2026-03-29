# Jason La Mard Jones — Portfolio Site

Professional portfolio site for Jason La Mard Jones, Community Development Advisor and U.S. Navy Veteran.

## Files

| File | Description |
|------|-------------|
| `index.html` | Home page with hero section and interactive career timeline |
| `experience.html` | Full career experience, education, and certifications |
| `community.html` | Community development work — Cabo Verde and past initiatives |
| `portfolio.html` | Media, presentations, research, and event photos |
| `contact.html` | Contact details and availability |
| `style.css` | Shared stylesheet (all pages) |
| `main.js` | Shared JavaScript — navigation, animations, timeline |

## How to Deploy on GitHub Pages

1. Create a free GitHub account at github.com if you don't have one
2. Create a new repository — name it exactly: `yourusername.github.io`
   (e.g. if your GitHub username is jasonlamardjones, name it `jasonlamardjones.github.io`)
3. Upload all files in this folder to that repository
4. Go to repository Settings → Pages → Source: Deploy from branch → Branch: main → Save
5. Your site will be live at: `https://yourusername.github.io`

## Customization Checklist

Before going live, update these items:

### index.html
- [ ] Replace the photo placeholder with your actual headshot
  - Add: `<img src="your-photo.jpg" alt="Jason La Mard Jones" style="width:100%; height:100%; object-fit:cover;">`
  - Inside the `.photo-frame` div

### experience.html
- [ ] Replace `href="#"` on the Download CV button with your Google Drive CV link

### portfolio.html
- [ ] Replace `VIDEO_ID_HERE` in the YouTube embed with your actual video ID
  - From: youtube.com/watch?v=**dQw4w9WgXcQ** ← this part is the ID
- [ ] Replace `href="#"` on document links with actual Google Drive links
- [ ] Replace photo placeholder divs with actual `<img>` tags

### contact.html
- [ ] Replace `href="#"` on the Download CV button with your Google Drive CV link

### All pages
- [ ] Verify all LinkedIn URLs are correct
- [ ] Test on mobile before sharing

## Adding Photos

For each photo placeholder like:
```html
<div style="aspect-ratio: 4/3; background: var(--warm); ...">
  <span>APU Resource Fair photo</span>
</div>
```

Replace with:
```html
<img src="your-photo.jpg" alt="APU Military and Veteran Resource Fair 2013"
     style="width:100%; height:100%; object-fit:cover; border-radius:6px; border:1px solid #E2DDD4;">
```

Upload photos to the same GitHub repository folder, then reference by filename.

## Color Reference (for any future edits)

| Variable | Value | Use |
|----------|-------|-----|
| `--navy` | `#1C3461` | Primary navy blue |
| `--gold` | `#B5922A` | Antique gold accent |
| `--cream` | `#FAFAF7` | Page background |
| `--warm` | `#F3F1EC` | Section backgrounds |

## Live URL

Once deployed: `https://yourusername.github.io`
