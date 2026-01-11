# 🚀 دليل تحديث السيرفر - Gracie Reticulation

## 📋 الطرق المتاحة لتحديث السيرفر

---

## ⚡ الطريقة 1: Script تلقائي (موصى به!)

استخدم السكريبت الجاهز اللي هيعمل كل حاجة أوتوماتيك:

```bash
./UPDATE_SERVER.sh
```

**هيعمل إيه؟**
1. ✅ يحفظ التعديلات المحلية ويرفعها على GitHub
2. ✅ يتصل بالسيرفر
3. ✅ يسحب آخر تحديثات من GitHub
4. ✅ ينزل المكتبات الجديدة
5. ✅ يبني المشروع
6. ✅ يعيد تشغيل Docker

---

## 📥 الطريقة 2: سحب فقط (بدون commit محلي)

لو عملت push من جهاز تاني، استخدم:

```bash
./PULL_FROM_GITHUB.sh
```

**هيعمل إيه؟**
- يسحب التحديثات من GitHub على السيرفر مباشرة
- يعيد البناء والتشغيل

---

## 🛠️ الطريقة 3: يدوي (Manual)

### خطوة بخطوة:

#### 1. من جهازك:
```bash
# احفظ التعديلات
git add .
git commit -m "وصف التحديث"
git push origin main
```

#### 2. على السيرفر:
```bash
# اتصل بالسيرفر
ssh root@72.60.194.4

# روح للمشروع
cd /mnt/srv/docker/cont/gracie-reticulation

# اسحب التحديثات
git pull origin main

# نزل المكتبات
npm install

# ابني المشروع
npm run build

# أعد تشغيل Docker
docker-compose restart gracie-reticulation

# أو أعد تشغيل كامل:
docker-compose down
docker-compose up -d
```

---

## ⚡ One-Liner السريع

من جهازك مباشرة:

```bash
ssh root@72.60.194.4 "cd /mnt/srv/docker/cont/gracie-reticulation && git pull origin main && npm install && npm run build && docker-compose restart gracie-reticulation"
```

---

## 🔍 أوامر مفيدة

### شوف حالة المشروع:
```bash
ssh root@72.60.194.4 "cd /mnt/srv/docker/cont/gracie-reticulation && git status"
```

### شوف آخر commits:
```bash
ssh root@72.60.194.4 "cd /mnt/srv/docker/cont/gracie-reticulation && git log -3"
```

### شوف logs الموقع:
```bash
ssh root@72.60.194.4 "docker-compose logs -f gracie-reticulation"
```

### شوف حالة Docker:
```bash
ssh root@72.60.194.4 "docker-compose ps"
```

---

## ❗ حل المشاكل الشائعة

### 1. في تعديلات على السيرفر مش في Git:
```bash
ssh root@72.60.194.4
cd /mnt/srv/docker/cont/gracie-reticulation
git stash              # احفظ التعديلات مؤقت
git pull origin main   # اسحب التحديثات
git stash pop          # استرجع التعديلات
```

### 2. مشكلة merge:
```bash
# ارجع لآخر نسخة من GitHub (تحذير: هيمسح التعديلات المحلية!)
ssh root@72.60.194.4
cd /mnt/srv/docker/cont/gracie-reticulation
git reset --hard origin/main
```

### 3. Docker مش شغال:
```bash
ssh root@72.60.194.4
docker-compose down
docker-compose up -d
docker-compose logs -f gracie-reticulation
```

### 4. ملف .env.local اتمسح:
```bash
ssh root@72.60.194.4
cd /mnt/srv/docker/cont/gracie-reticulation
nano .env.local
# ضيف:
# GOOGLE_SHEETS_API_KEY=your_key_here
# GOOGLE_SHEET_ID=your_sheet_id_here
```

---

## 📝 ملاحظات مهمة

1. ✅ **دايماً** اعمل backup لـ `.env.local` قبل التحديث
2. ✅ لو في تحديثات في `package.json`، لازم تشغل `npm install`
3. ✅ لو في تحديثات في `docker-compose.yml`، لازم تعمل `docker-compose down` و `up -d`
4. ✅ بعد أي تحديث، تأكد إن الموقع شغال وافتحه في البراوزر
5. ✅ لو الموقع مش شغال، شوف الـ logs: `docker-compose logs -f`

---

## 🎯 التوقيت المناسب للتحديث

- ✅ **أفضل وقت**: خارج ساعات العمل (بعد 6 مساءً)
- ✅ **أسوأ وقت**: في منتصف اليوم لما العملاء بيستخدموا الموقع
- ⏱️ **مدة التحديث**: عادة 2-3 دقايق

---

## 🆘 لو حصلت مشكلة

1. شوف الـ logs:
   ```bash
   ssh root@72.60.194.4 "docker-compose logs -f gracie-reticulation"
   ```

2. اتصل بالسيرفر وشوف الحالة:
   ```bash
   ssh root@72.60.194.4
   cd /mnt/srv/docker/cont/gracie-reticulation
   docker-compose ps
   git status
   ```

3. لو مفيش فايدة، ارجع للنسخة السابقة:
   ```bash
   git reset --hard HEAD~1
   npm run build
   docker-compose restart gracie-reticulation
   ```

---

**آخر تحديث:** 2026-01-10

**ملحوظة:** احتفظ بالملف ده في مكان آمن! 🔒
