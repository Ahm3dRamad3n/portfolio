# دليل نشر الموقع باستخدام GitHub Pages

هذا الدليل سيساعدك على نشر موقعك الشخصي باستخدام GitHub Pages بعد إجراء التعديلات المطلوبة.

## الخطوة 1: إنشاء حساب GitHub

1. إذا لم يكن لديك حساب GitHub، قم بإنشاء حساب جديد على [github.com](https://github.com)
2. قم بتأكيد بريدك الإلكتروني وإكمال عملية التسجيل

## الخطوة 2: إنشاء مستودع (Repository) جديد

1. بعد تسجيل الدخول، انقر على زر "+" في أعلى الشاشة ثم اختر "New repository"
2. أدخل اسم المستودع: `username.github.io` (استبدل "username" باسم المستخدم الخاص بك في GitHub)
3. اختر "Public" كنوع المستودع
4. انقر على "Create repository"

## الخطوة 3: تحميل ملفات الموقع

### الطريقة 1: باستخدام واجهة GitHub (الأسهل)

1. في المستودع الجديد، انقر على "uploading an existing file"
2. اسحب وأفلت جميع الملفات والمجلدات من داخل مجلد `static_site` (وليس المجلد نفسه)
3. أضف رسالة وصفية مثل "Initial website upload" في مربع "Commit changes"
4. انقر على "Commit changes"

### الطريقة 2: باستخدام Git (للمستخدمين المتقدمين)

1. قم بتثبيت Git على جهازك إذا لم يكن مثبتاً بالفعل
2. افتح Terminal أو Command Prompt
3. انتقل إلى مجلد `static_site` المستخرج من الملف المضغوط:
   ```
   cd path/to/static_site
   ```
4. قم بتهيئة مستودع Git محلي وربطه بالمستودع البعيد:
   ```
   git init
   git add .
   git commit -m "Initial website upload"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
   (استبدل "username" باسم المستخدم الخاص بك في GitHub)

## الخطوة 4: تفعيل GitHub Pages

1. انتقل إلى مستودعك على GitHub
2. انقر على "Settings" في شريط القوائم العلوي
3. انتقل إلى قسم "Pages" في القائمة الجانبية
4. في قسم "Source"، اختر "main" من القائمة المنسدلة "Branch"
5. انقر على "Save"
6. انتظر بضع دقائق حتى يتم نشر موقعك (قد يستغرق ذلك حتى 10 دقائق)
7. بعد الانتهاء، سيظهر رابط موقعك في أعلى صفحة GitHub Pages (عادةً يكون `https://username.github.io`)

## الخطوة 5: إضافة الفيديو

بعد نشر موقعك، يمكنك إضافة الفيديو باتباع الخطوات الموضحة في دليل إضافة الفيديو:

1. قم بإنشاء مجلد `videos` في المستودع
2. قم برفع ملف الفيديو إلى هذا المجلد
3. قم بتعديل ملفات `cv.html` و `en/cv.html` كما هو موضح في دليل إضافة الفيديو
4. قم بعمل commit للتغييرات

## الخطوة 6: التحقق من الموقع

1. انتظر بضع دقائق بعد رفع التغييرات
2. قم بزيارة موقعك على `https://username.github.io`
3. تأكد من أن جميع الصفحات والصور والفيديو تعمل بشكل صحيح

## ملاحظات هامة

### تعديل الموقع بعد النشر

لتعديل الموقع بعد نشره:

1. قم بتعديل الملفات محلياً
2. ارفع الملفات المعدلة إلى المستودع
3. سيتم تحديث الموقع تلقائياً بعد بضع دقائق

### استخدام نطاق مخصص

إذا كنت ترغب في استخدام نطاق مخصص بدلاً من `username.github.io`:

1. قم بشراء النطاق من مسجل نطاقات معتمد
2. في صفحة GitHub Pages، أدخل النطاق المخصص في قسم "Custom domain"
3. قم بإعداد سجلات DNS لدى مسجل النطاق:
   - سجل A يشير إلى عناوين IP الخاصة بـ GitHub Pages
   - أو سجل CNAME يشير إلى `username.github.io`
4. انتظر حتى يتم التحقق من النطاق (قد يستغرق ذلك حتى 24 ساعة)

### استكشاف الأخطاء وإصلاحها

إذا واجهت مشاكل في نشر موقعك:

1. تأكد من أن اسم المستودع صحيح (`username.github.io`)
2. تأكد من أن ملف `index.html` موجود في المستوى الرئيسي للمستودع
3. تحقق من سجلات النشر في قسم "Actions" في مستودعك
4. تأكد من أن جميع المسارات في الموقع نسبية وليست مطلقة (تبدأ بـ `/` وليس `http://` أو `https://`)

للمزيد من المعلومات، يمكنك زيارة [الوثائق الرسمية لـ GitHub Pages](https://docs.github.com/en/pages).
