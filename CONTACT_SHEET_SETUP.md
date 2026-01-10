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
A1: Phone | B1: Email | C1: Facebook | D1: Business Name | E1: Service Area | F1: Business Hours
```

**Row 2 (Values):**
```
A2: 61481613577
B2: admin@graciereticulation.com.au
C2: https://www.facebook.com/graciereticulationservices/
D2: Gracie Reticulation
E2: Based in Carramar, servicing the northern suburbs of Perth.
F2: Mon–Fri: 8am–6pm | Saturday: By appointment
```

### Copy-Paste Ready:

**Headers (Row 1):**
```
Phone	Email	Facebook	Business Name	Service Area	Business Hours
```

**Values (Row 2):**
```
61481613577	admin@graciereticulation.com.au	https://www.facebook.com/graciereticulationservices/	Gracie Reticulation	Based in Carramar, servicing the northern suburbs of Perth.	Mon–Fri: 8am–6pm | Saturday: By appointment
```

---

## 🔧 How to Update:

### Step 1: Open Your Sheet
https://docs.google.com/spreadsheets/d/19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM/edit

### Step 2: Go to "Contact" Tab

### Step 3: Update Row 1
In Row 1, add all the headers across columns A to F:
- A1: `Phone`
- B1: `Email`
- C1: `Facebook`
- D1: `Business Name`
- E1: `Service Area`
- F1: `Business Hours`

### Step 4: Update Row 2
In Row 2, add all the values:
- A2: `61481613577` (already there)
- B2: `admin@graciereticulation.com.au` (already there)
- C2: `https://www.facebook.com/graciereticulationservices/`
- D2: `Gracie Reticulation`
- E2: `Based in Carramar, servicing the northern suburbs of Perth.`
- F2: `Mon–Fri: 8am–6pm | Saturday: By appointment`

---

## 📋 Alternative: Key-Value Format

If you prefer, you can also use this format instead:

```
A1: Phone          | B1: 61481613577
A2: Email          | B2: admin@graciereticulation.com.au
A3: Facebook       | B3: https://www.facebook.com/graciereticulationservices/
A4: Business Name  | B4: Gracie Reticulation
A5: Service Area   | B5: Based in Carramar, servicing the northern suburbs of Perth.
A6: Business Hours | B6: Mon–Fri: 8am–6pm | Saturday: By appointment
```

The API now supports BOTH formats!

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
    "email": "admin@graciereticulation.com.au",
    "facebook": "https://www.facebook.com/graciereticulationservices/",
    "businessName": "Gracie Reticulation",
    "serviceArea": "Based in Carramar, servicing the northern suburbs of Perth.",
    "businessHours": "Mon–Fri: 8am–6pm | Saturday: By appointment"
  }
}
```

---

**Current Issue:** You only have Phone and Email in the sheet. You need to add Facebook, Business Name, Service Area, and Business Hours!
