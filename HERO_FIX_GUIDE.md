# 🔧 FIX: Hero Headline Showing Wrong Text

## 🔴 Problem
Hero Headline is showing the same text as Hero Subheadline

## 🟢 Cause
The data is not in Google Sheet yet, so the website is using fallback/default data.

---

## ✅ Quick Fix (5 Minutes)

### Step 1: Open Your Google Sheet
https://docs.google.com/spreadsheets/d/19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM/edit

### Step 2: Go to "Contact" Tab
Make sure you're in the "Contact" sheet (tab at the bottom)

### Step 3: Add These Columns

You need to add columns **I, J, K, L, M** to your Contact sheet.

#### Visual Layout:

```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬────────────────┬────────────────┬────────────────┬─────────────────────┬───────────────────────────┐
│  A  │  B  │  C  │  D  │  E  │  F  │  G  │  H  │       I        │       J        │       K        │          L          │             M             │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼────────────────┼────────────────┼────────────────┼─────────────────────┼───────────────────────────┤
│Phone│ SMS │Email│Face │Busn │Svc  │Busn │ ABN │  Hero Badge    │ Hero Headline  │ Hero Tagline   │ Hero Subheadline    │ Hero Background Image     │
│     │     │     │book │Name │Area │Hours│     │                │                │                │                     │                           │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼────────────────┼────────────────┼────────────────┼─────────────────────┼───────────────────────────┤
│ ... │ ... │ ... │ ... │ ... │ ... │ ... │ ... │Perth's Irrig...│Irrigation Sys..│Engineered, Not │Father–son team de...│/images/website_images/1..│
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴────────────────┴────────────────┴────────────────┴─────────────────────┴───────────────────────────┘
```

---

## 📋 Copy-Paste Ready Format

### Option 1: Add One-by-One

In your Contact sheet:

**I1:** `Hero Badge`  
**I2:** `Perth's Irrigation Experts`

**J1:** `Hero Headline`  
**J2:** `Irrigation Systems`

**K1:** `Hero Tagline`  
**K2:** `Engineered, Not Guessed.`

**L1:** `Hero Subheadline`  
**L2:** `Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.`

**M1:** `Hero Background Image`  
**M2:** `/images/website_images/1.jpg`

---

### Option 2: Copy Full Rows (Easier!)

**Select cells I1:M1**, paste this:**
```
Hero Badge	Hero Headline	Hero Tagline	Hero Subheadline	Hero Background Image
```

**Select cells I2:M2**, paste this:**
```
Perth's Irrigation Experts	Irrigation Systems	Engineered, Not Guessed.	Father–son team delivering precision diagnostics and water-efficient solutions. Based in Carramar, servicing the northern suburbs of Perth.	/images/website_images/1.jpg
```

---

## 🧪 Test Your Changes

### Step 1: Save
Google Sheet saves automatically, but wait 2-3 seconds

### Step 2: Refresh Website
- **Mac:** Cmd + Shift + R
- **Windows:** Ctrl + Shift + R

### Step 3: Verify Data is Loaded
Open this URL in your browser:
```
http://localhost:3000/api/contact-info
```

You should see:
```json
{
  "success": true,
  "data": {
    "heroHeadline": "Irrigation Systems",
    "heroTagline": "Engineered, Not Guessed.",
    "heroSubheadline": "Father–son team delivering precision diagnostics..."
  }
}
```

**If they're different ✅ = Working!**  
**If they're the same ❌ = Sheet needs updating**

---

## 🎯 Expected Result

After fixing, you should see:

### Before (Wrong):
```
═══════════════════════════════════
Perth's Irrigation Experts (badge)
─────────────────────────────────
Father–son team delivering... (headline) ❌ WRONG
Engineered, Not Guessed. (tagline)
Father–son team delivering... (subheadline)
═══════════════════════════════════
```

### After (Correct):
```
═══════════════════════════════════
Perth's Irrigation Experts (badge)
─────────────────────────────────
Irrigation Systems (headline) ✅ CORRECT
Engineered, Not Guessed. (tagline)
Father–son team delivering... (subheadline)
═══════════════════════════════════
```

---

## 🆘 Still Not Working?

### 1. Check Sheet Name
Make sure you're editing the "Contact" tab (not "Lead Times" or another tab)

### 2. Check Column Letters
- I = Hero Badge
- J = Hero Headline (this is what's showing wrong)
- K = Hero Tagline
- L = Hero Subheadline
- M = Hero Background Image

### 3. Check API Response
Open: http://localhost:3000/api/contact-info

If `heroHeadline` and `heroSubheadline` have different text, the sheet is correct.  
If they're the same, the sheet is not reading correctly.

### 4. Clear Browser Cache
- Open DevTools (F12)
- Right-click the refresh button
- Select "Empty Cache and Hard Reload"

### 5. Check Console for Errors
- Open DevTools (F12)
- Go to "Console" tab
- Look for any red errors related to "contact-info"

---

## 📸 Screenshot Guide

### What It Should Look Like in Google Sheet:

```
Row 1 (Headers):
┌──────────────────┬─────────────────┬──────────────────┬────────────────────────────┬─────────────────────────┐
│   I1             │   J1            │   K1             │   L1                       │   M1                    │
├──────────────────┼─────────────────┼──────────────────┼────────────────────────────┼─────────────────────────┤
│ Hero Badge       │ Hero Headline   │ Hero Tagline     │ Hero Subheadline           │ Hero Background Image   │
└──────────────────┴─────────────────┴──────────────────┴────────────────────────────┴─────────────────────────┘

Row 2 (Values):
┌──────────────────────────┬─────────────────────┬────────────────────────┬─────────────────────────────────┬───────────────────────────┐
│   I2                     │   J2                │   K2                   │   L2                            │   M2                      │
├──────────────────────────┼─────────────────────┼────────────────────────┼─────────────────────────────────┼───────────────────────────┤
│ Perth's Irrigation Exp...│ Irrigation Systems  │ Engineered, Not Gue... │ Father–son team delivering p... │ /images/website_images/1..│
└──────────────────────────┴─────────────────────┴────────────────────────┴─────────────────────────────────┴───────────────────────────┘
```

---

## ✅ Checklist

- [ ] Opened Google Sheet
- [ ] Went to "Contact" tab
- [ ] Added "Hero Badge" in I1
- [ ] Added "Hero Headline" in J1
- [ ] Added "Hero Tagline" in K1
- [ ] Added "Hero Subheadline" in L1
- [ ] Added "Hero Background Image" in M1
- [ ] Filled Row 2 with values
- [ ] Saved sheet (auto-save)
- [ ] Hard refreshed website (Cmd+Shift+R)
- [ ] Checked /api/contact-info URL
- [ ] Headline now shows "Irrigation Systems" ✅

---

**Last Updated:** 2026-01-11  
**Issue:** Hero Headline showing wrong text  
**Fix Time:** ~5 minutes
