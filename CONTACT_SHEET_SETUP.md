# Contact Sheet Setup - Quick Guide

## 📊 Current Google Sheet Structure

Your sheet currently has:
```
Row 1: Phone | Email
Row 2: 61481613577 | admin@graciereticulation.com.au
```

## ✅ Complete Setup Required

You need to add MORE columns to include all contact information.

### Option 1: Table Format (Recommended)

**Row 1 (Headers):**
```
A1: Phone | B1: SMS | C1: Email | D1: Facebook | E1: Business Name | F1: Service Area | G1: Business Hours | H1: ABN | I1: Hero Badge | J1: Hero Headline | K1: Hero Tagline | L1: Hero Subheadline | M1: Hero Background Image
```

**Row 2 (Values):**
```
A2: 61481613577
B2: 61481613577
C2: admin@graciereticulation.com.au
D2: https://www.facebook.com/graciereticulationservices/
E2: Gracie Reticulation
F2: Based in Carramar, servicing the northern suburbs of Perth.
G2: Mon–Fri: 8am–6pm | Saturday: By appointment
H2: 39 251 002 244
I2: Perth's Irrigation Experts
J2: Irrigation Systems
K2: Engineered, Not Guessed.
L2: Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.
M2: /images/website_images/1.jpg (or use a URL like https://example.com/image.jpg)
```

### Copy-Paste Ready:

**Headers (Row 1):**
```
Phone	SMS	Email	Facebook	Business Name	Service Area	Business Hours	ABN	Hero Badge	Hero Headline	Hero Tagline	Hero Subheadline	Hero Background Image
```

**Values (Row 2):**
```
61481613577	61481613577	admin@graciereticulation.com.au	https://www.facebook.com/graciereticulationservices/	Gracie Reticulation	Based in Carramar, servicing the northern suburbs of Perth.	Mon–Fri: 8am–6pm | Saturday: By appointment	39 251 002 244	Perth's Irrigation Experts	Irrigation Systems	Engineered, Not Guessed.	Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.	/images/website_images/1.jpg
```

---

## 🔧 How to Update:

### Step 1: Open Your Sheet
https://docs.google.com/spreadsheets/d/19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM/edit

### Step 2: Go to "Contact" Tab

### Step 3: Update Row 1
In Row 1, add all the headers across columns A to M:
- A1: `Phone`
- B1: `SMS`
- C1: `Email`
- D1: `Facebook`
- E1: `Business Name`
- F1: `Service Area`
- G1: `Business Hours`
- H1: `ABN`
- I1: `Hero Badge`
- J1: `Hero Headline`
- K1: `Hero Tagline`
- L1: `Hero Subheadline`
- M1: `Hero Background Image`

### Step 4: Update Row 2
In Row 2, add all the values:
- A2: `61481613577` (already there)
- B2: `61481613577` (can be different from phone if needed)
- C2: `admin@graciereticulation.com.au` (already there)
- D2: `https://www.facebook.com/graciereticulationservices/`
- E2: `Gracie Reticulation`
- F2: `Based in Carramar, servicing the northern suburbs of Perth.`
- G2: `Mon–Fri: 8am–6pm | Saturday: By appointment`
- H2: `39 251 002 244`
- I2: `Perth's Irrigation Experts` (or try "Perth's Reticulation Experts")
- J2: `Irrigation Systems` (or try "Reticulation Systems")
- K2: `Engineered, Not Guessed.`
- L2: `Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.`
- M2: `/images/website_images/1.jpg` (or any URL like `https://example.com/image.jpg`)

---

## 📋 Alternative: Key-Value Format

If you prefer, you can also use this format instead:

```
A1: Phone                  | B1: 61481613577
A2: SMS                    | B2: 61481613577
A3: Email                  | B3: admin@graciereticulation.com.au
A4: Facebook               | B4: https://www.facebook.com/graciereticulationservices/
A5: Business Name          | B5: Gracie Reticulation
A6: Service Area           | B6: Based in Carramar, servicing the northern suburbs of Perth.
A7: Business Hours         | B7: Mon–Fri: 8am–6pm | Saturday: By appointment
A8: ABN                    | B8: 39 251 002 244
A9: Hero Badge             | B9: Perth's Irrigation Experts
A10: Hero Headline         | B10: Irrigation Systems
A11: Hero Tagline          | B11: Engineered, Not Guessed.
A12: Hero Subheadline      | B12: Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.
A13: Hero Background Image | B13: /images/website_images/1.jpg (or https://example.com/image.jpg)
```

The API now supports BOTH formats!

**✨ NEW: Hero Section Editing**

You can now edit ALL hero section elements directly from the sheet!
- **Hero Badge**: "Perth's Irrigation Experts" or "Perth's Reticulation Experts"
- **Hero Headline**: "Irrigation Systems" or "Reticulation Systems"
- **Hero Tagline**: Keep creative!
- **Hero Subheadline**: The description paragraph below the headline
- **Hero Background Image**: Use a local path (`/images/website_images/1.jpg`) or external URL (`https://example.com/image.jpg`)

---

## ✨ After Setup:

1. Save the sheet (auto-saves)
2. Hard refresh your website (Cmd+Shift+R or Ctrl+Shift+R)
3. Check if all information shows correctly!

---

## 🧪 Test:

Visit: `http://localhost:3000/api/contact-info`

You should see:
```json
{
  "success": true,
  "data": {
    "phone": "+61481613577",
    "sms": "+61481613577",
    "email": "admin@graciereticulation.com.au",
    "facebook": "https://www.facebook.com/graciereticulationservices/",
    "businessName": "Gracie Reticulation",
    "serviceArea": "Based in Carramar, servicing the northern suburbs of Perth.",
    "businessHours": "Mon–Fri: 8am–6pm | Saturday: By appointment",
    "abn": "39 251 002 244",
    "heroBadge": "Perth's Irrigation Experts",
    "heroHeadline": "Irrigation Systems",
    "heroTagline": "Engineered, Not Guessed.",
    "heroSubheadline": "Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.",
    "heroBackgroundImage": "/images/website_images/1.jpg"
  }
}
```

---

**✨ NEW FEATURES:** 
- ✅ Edit ENTIRE hero section text (badge, headline, tagline, subheadline)
- ✅ **NEW!** Change hero background image with a URL!
- ✅ Perfect for testing different wording like "Irrigation" vs "Reticulation"
- ✅ Test different background images without re-deploying!
