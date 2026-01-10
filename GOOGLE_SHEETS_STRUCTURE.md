# Google Sheets Structure

This document describes how to set up your Google Sheet for the Gracie Reticulation website.

---

## 📊 Sheet Structure

You need **TWO sheets (tabs)** in your Google Sheets document:

### 1. **Website** (Lead Times)
### 2. **Contact** (Contact Information)

---

## 📋 Sheet 1: Website (Lead Times)

This sheet contains the current availability and lead times for services.

### Columns:

| A              | B           | C         |
|----------------|-------------|-----------|
| Service        | Lead Time   | Available |

### Example Data:

| A                         | B                               | C    |
|---------------------------|---------------------------------|------|
| Service                   | Lead Time                       | Available |
| Service & Repairs         | 3–4 weeks                       | Yes  |
| System Installations      | Not currently taking bookings   | No   |
| Diagnostics & Assessments | 1–2 weeks                       | Yes  |
| Maintenance Contracts     | Available now                   | Yes  |

### Rules:

- **Column A (Service)**: Name of the service
- **Column B (Lead Time)**: Current wait time (any text)
- **Column C (Available)**: "Yes" or "No" (case insensitive)

---

## 📇 Sheet 2: Contact (Contact Information)

This sheet contains your business contact information.

### Format: Key-Value Pairs

| A              | B                                      |
|----------------|----------------------------------------|
| Key            | Value                                  |

### Example Data:

| A                | B                                                      |
|------------------|--------------------------------------------------------|
| Phone            | +61 481 613 577                                        |
| Email            | admin@graciereticulation.com.au                        |
| Facebook         | https://www.facebook.com/graciereticulationservices/   |
| Business Name    | Gracie Reticulation                                    |
| Service Area     | Based in Carramar, servicing the northern suburbs of Perth. |
| Business Hours   | Mon–Fri: 8am–6pm \| Saturday: By appointment           |

### Rules:

- **Column A**: Label/Key (not case sensitive)
- **Column B**: The actual value
- Keys can be:
  - "Phone" or "phone"
  - "Email" or "email"
  - "Facebook" or "facebook"
  - "Business Name" or "business name"
  - "Service Area" or "service area"
  - "Business Hours" or "business hours" or "hours"

---

## 🔧 Setup Instructions

### Step 1: Create Sheets

1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM/edit
2. You should see the **"Website"** tab at the bottom
3. Click the **+** button to add a new sheet
4. Rename it to **"Contact"**

### Step 2: Add Contact Information

In the **Contact** sheet, add these rows:

```
Row 1: Phone            | +61 481 613 577
Row 2: Email            | admin@graciereticulation.com.au
Row 3: Facebook         | https://www.facebook.com/graciereticulationservices/
Row 4: Business Name    | Gracie Reticulation
Row 5: Service Area     | Based in Carramar, servicing the northern suburbs of Perth.
Row 6: Business Hours   | Mon–Fri: 8am–6pm | Saturday: By appointment
```

### Step 3: Make Sure Sheet is Public

- Click **Share** button
- Select **"Anyone with the link"**
- Set permission to **"Viewer"**
- Click **Done**

---

## 🎯 How It Works

### Lead Times (Website Sheet):
- Updates every 10 seconds on the website
- Shows in **Availability Banner** section
- Shows in **Enquiry Form** before submission

### Contact Info (Contact Sheet):
- Updates every time a user visits a new page
- Used throughout the site:
  - Header phone number
  - Footer contact details
  - Contact Options section
  - All "Call" and "Email" buttons

---

## 🔄 Updating Information

### To Update Lead Times:
1. Open the **Website** sheet
2. Edit the **Lead Time** column (B)
3. Change **Available** status (C) to Yes/No
4. Save (auto-saves)
5. Website updates within 10 seconds! ✨

### To Update Contact Info:
1. Open the **Contact** sheet
2. Edit any value in column B
3. Save (auto-saves)
4. Website updates next time someone visits! ✨

---

## 📱 Example: Changing Phone Number

**Before:**
```
Phone | +61 481 613 577
```

**After:**
```
Phone | +61 412 345 678
```

Changes appear on:
- Header
- Hero section
- Contact Options
- Footer
- All phone links throughout the site

---

## 🎨 Formatting Tips

### Phone Numbers:
- ✅ `+61 481 613 577` (spaces)
- ✅ `+61481613577` (no spaces)
- ✅ `0481 613 577` (local format)

### Email:
- Must be valid email format
- Example: `admin@graciereticulation.com.au`

### URLs:
- Must include `https://` or `http://`
- Example: `https://www.facebook.com/graciereticulationservices/`

### Business Hours:
- Any text format works
- Use `|` for line separator
- Example: `Mon–Fri: 8am–6pm | Saturday: By appointment`

---

## ⚠️ Important Notes

1. **Don't delete the sheet tabs!**
   - Keep both "Website" and "Contact" sheets

2. **Don't change column structure**
   - Website sheet: Keep A, B, C columns
   - Contact sheet: Keep A, B columns

3. **Sheet must be public (Viewer access)**
   - Otherwise the website can't read it

4. **Spelling matters for keys**
   - "Phone" works
   - "Telephone" won't work (unless you use "Phone")

---

## 🧪 Testing

After making changes:

1. **Check API:**
   - Lead Times: `https://yourdomain.com/api/lead-times`
   - Contact: `https://yourdomain.com/api/contact-info`

2. **View Website:**
   - Open in incognito/private mode
   - Changes should appear immediately

3. **Verify Phone Links:**
   - Click phone buttons
   - Should dial the NEW number

---

## 🆘 Troubleshooting

### "Using fallback data" message?
- Check if sheet is public (Anyone with link = Viewer)
- Verify sheet names: "Website" and "Contact"
- Check API key in `.env.local`

### Changes not appearing?
- Wait 10 seconds for lead times
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Check browser console for errors

### Phone/Email not clickable?
- Make sure format is correct
- Phone: Include country code (+61)
- Email: Must be valid email format

---

## 📞 Current Configuration

**Google Sheet ID:** `19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM`

**Sheet Names:**
- Lead Times: `Website`
- Contact Info: `Contact`

**Update Frequency:**
- Lead Times: Every 10 seconds
- Contact Info: On page load

---

**Last Updated:** January 2026
