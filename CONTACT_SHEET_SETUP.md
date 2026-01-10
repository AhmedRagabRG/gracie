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
A1: Phone | B1: SMS | C1: Email | D1: Facebook | E1: Business Name | F1: Service Area | G1: Business Hours | H1: ABN
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
```

### Copy-Paste Ready:

**Headers (Row 1):**
```
Phone	SMS	Email	Facebook	Business Name	Service Area	Business Hours	ABN
```

**Values (Row 2):**
```
61481613577	61481613577	admin@graciereticulation.com.au	https://www.facebook.com/graciereticulationservices/	Gracie Reticulation	Based in Carramar, servicing the northern suburbs of Perth.	Mon–Fri: 8am–6pm | Saturday: By appointment	39 251 002 244
```

---

## 🔧 How to Update:

### Step 1: Open Your Sheet
https://docs.google.com/spreadsheets/d/19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM/edit

### Step 2: Go to "Contact" Tab

### Step 3: Update Row 1
In Row 1, add all the headers across columns A to H:
- A1: `Phone`
- B1: `SMS`
- C1: `Email`
- D1: `Facebook`
- E1: `Business Name`
- F1: `Service Area`
- G1: `Business Hours`
- H1: `ABN`

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

---

## 📋 Alternative: Key-Value Format

If you prefer, you can also use this format instead:

```
A1: Phone          | B1: 61481613577
A2: SMS            | B2: 61481613577
A3: Email          | B3: admin@graciereticulation.com.au
A4: Facebook       | B4: https://www.facebook.com/graciereticulationservices/
A5: Business Name  | B5: Gracie Reticulation
A6: Service Area   | B6: Based in Carramar, servicing the northern suburbs of Perth.
A7: Business Hours | B7: Mon–Fri: 8am–6pm | Saturday: By appointment
A8: ABN            | B8: 39 251 002 244
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
    "sms": "+61481613577",
    "email": "admin@graciereticulation.com.au",
    "facebook": "https://www.facebook.com/graciereticulationservices/",
    "businessName": "Gracie Reticulation",
    "serviceArea": "Based in Carramar, servicing the northern suburbs of Perth.",
    "businessHours": "Mon–Fri: 8am–6pm | Saturday: By appointment",
    "abn": "39 251 002 244"
  }
}
```

---

**Current Issue:** You only have Phone and Email in the sheet. You need to add SMS, Facebook, Business Name, Service Area, Business Hours, and ABN!
