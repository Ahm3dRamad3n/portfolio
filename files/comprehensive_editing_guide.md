# الدليل الشامل لتعديل موقع AGpro Extras

هذا الدليل المفصل سيساعدك على تعديل أي جزء من موقعك الشخصي، بدءاً من الألوان والنصوص وحتى الهيكل والوظائف المتقدمة.

## جدول المحتويات

1. [مقدمة وأساسيات](#مقدمة-وأساسيات)
2. [تعديل النصوص](#تعديل-النصوص)
3. [تغيير الصور](#تغيير-الصور)
4. [تعديل الألوان والمظهر](#تعديل-الألوان-والمظهر)
5. [تخصيص التخطيط والهيكل](#تخصيص-التخطيط-والهيكل)
6. [إضافة أو تعديل الصفحات](#إضافة-أو-تعديل-الصفحات)
7. [تعديل القوائم والروابط](#تعديل-القوائم-والروابط)
8. [تخصيص النماذج](#تخصيص-النماذج)
9. [إضافة ميزات جديدة](#إضافة-ميزات-جديدة)
10. [اختبار التغييرات](#اختبار-التغييرات)

---

## مقدمة وأساسيات

### هيكل الملفات

موقعك يتكون من الملفات والمجلدات التالية:

```
static_site/
├── index.html             # الصفحة الرئيسية (العربية)
├── about.html             # صفحة "من أنا" (العربية)
├── projects.html          # صفحة المشاريع (العربية)
├── contact.html           # صفحة التواصل (العربية)
├── cv.html                # صفحة السيرة الذاتية (العربية)
├── en/                    # النسخة الإنجليزية
│   ├── index.html         # الصفحة الرئيسية (الإنجليزية)
│   ├── about.html         # صفحة "من أنا" (الإنجليزية)
│   ├── projects.html      # صفحة المشاريع (الإنجليزية)
│   ├── contact.html       # صفحة التواصل (الإنجليزية)
│   └── cv.html            # صفحة السيرة الذاتية (الإنجليزية)
├── css/
│   ├── style.css          # الأنماط الرئيسية
│   └── mobile-fixes.css   # تعديلات للأجهزة المحمولة
├── js/
│   ├── main.js            # الوظائف الرئيسية
│   └── analytics.js       # تحليلات الموقع
├── images/                # مجلد الصور
│   ├── logo.png           # شعار الموقع
│   ├── personal_photo.jpg # صورتك الشخصية
│   └── projects/          # صور المشاريع
├── videos/                # مجلد الفيديوهات
├── files/                 # الملفات القابلة للتنزيل
└── favicon.ico            # أيقونة الموقع
```

### البرامج المطلوبة للتعديل

1. **محرر نصوص**: مثل Visual Studio Code أو Notepad++ أو Sublime Text
2. **متصفح ويب حديث**: مثل Chrome أو Firefox أو Edge
3. **برنامج تحرير صور** (اختياري): مثل GIMP أو Photoshop

### خطوات التعديل الأساسية

1. استخرج ملفات الموقع من الملف المضغوط
2. افتح الملفات في محرر النصوص
3. قم بإجراء التعديلات المطلوبة
4. احفظ التغييرات
5. اختبر التغييرات محلياً بفتح الملفات في المتصفح
6. ارفع الملفات المعدلة إلى خادم الاستضافة أو GitHub Pages

---

## تعديل النصوص

### تعديل العناوين والفقرات

1. افتح الملف الذي تريد تعديله (مثل `index.html` أو `about.html`)
2. ابحث عن النص الذي تريد تغييره
3. قم بتعديل النص مباشرة بين علامات HTML

**مثال**: لتغيير العنوان الرئيسي في الصفحة الرئيسية:

```html
<!-- قبل التعديل -->
<h1>أحمد رمضان</h1>

<!-- بعد التعديل -->
<h1>أحمد رمضان عبد الراضي</h1>
```

### تعديل النصوص في النسختين العربية والإنجليزية

تذكر أن تقوم بتعديل النصوص في كلا النسختين:
- النسخة العربية: الملفات في المجلد الرئيسي (`index.html`, `about.html`, إلخ)
- النسخة الإنجليزية: الملفات في مجلد `en/` (`en/index.html`, `en/about.html`, إلخ)

### تغيير الخطوط

لتغيير نوع الخط أو حجمه:

1. افتح ملف `css/style.css`
2. ابحث عن تعريفات الخطوط
3. قم بتعديل خصائص `font-family` أو `font-size`

**مثال**:

```css
/* قبل التعديل */
body {
    font-family: 'Cairo', sans-serif;
    font-size: 16px;
}

/* بعد التعديل */
body {
    font-family: 'Tajawal', sans-serif;
    font-size: 18px;
}
```

لاستخدام خط جديد، أضف رابط الخط في رأس الصفحة:

```html
<head>
    <!-- إضافة خط جديد من Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
</head>
```

---

## تغيير الصور

### تغيير الشعار (اللوجو)

1. جهز صورة الشعار الجديدة (يفضل بخلفية شفافة وبصيغة PNG)
2. احفظ الصورة باسم `logo.png`
3. استبدل الملف الموجود في `images/logo.png` بالصورة الجديدة
4. تأكد من أن حجم الصورة مناسب (حوالي 200×200 بكسل)

### تغيير صورتك الشخصية

1. جهز الصورة الشخصية الجديدة
2. احفظها باسم `personal_photo.jpg`
3. استبدل الملف الموجود في `images/personal_photo.jpg` بالصورة الجديدة

### تغيير صور المشاريع

1. جهز صور المشاريع الجديدة
2. احفظها بأسماء واضحة (مثل `project1.jpg`, `project2.png`)
3. ضع الصور في مجلد `images/projects/`
4. قم بتعديل مسارات الصور في ملفات `projects.html` و `en/projects.html`

**مثال**:

```html
<!-- قبل التعديل -->
<img src="/images/projects/sebha.jpg" alt="تطبيق السبحة">

<!-- بعد التعديل -->
<img src="/images/projects/new_project.jpg" alt="المشروع الجديد">
```

### إضافة صور جديدة

1. ضع الصور الجديدة في مجلد `images/` أو المجلدات الفرعية المناسبة
2. أضف الصور إلى الصفحات باستخدام وسم `<img>`

**مثال**:

```html
<div class="gallery">
    <img src="/images/gallery/image1.jpg" alt="صورة 1">
    <img src="/images/gallery/image2.jpg" alt="صورة 2">
    <!-- صورة جديدة -->
    <img src="/images/gallery/new_image.jpg" alt="صورة جديدة">
</div>
```

---

## تعديل الألوان والمظهر

### تغيير الألوان الرئيسية

1. افتح ملف `css/style.css`
2. ابحث عن متغيرات الألوان في بداية الملف (`:root`)
3. قم بتعديل قيم الألوان

**مثال**:

```css
/* قبل التعديل */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --text-color: #333;
    --background-color: #f9f9f9;
}

/* بعد التعديل */
:root {
    --primary-color: #e74c3c;     /* أحمر */
    --secondary-color: #f39c12;   /* برتقالي */
    --text-color: #2c3e50;        /* أزرق داكن */
    --background-color: #ecf0f1;  /* رمادي فاتح */
}
```

### تغيير لون عنصر محدد

لتغيير لون عنصر معين:

1. حدد العنصر في ملف CSS
2. قم بتعديل خاصية `color` أو `background-color`

**مثال**:

```css
/* قبل التعديل */
.btn.primary {
    background-color: var(--primary-color);
    color: white;
}

/* بعد التعديل */
.btn.primary {
    background-color: #e74c3c;  /* أحمر */
    color: #fff;
}
```

### تغيير التدرجات اللونية

لتغيير التدرجات اللونية:

```css
/* قبل التعديل */
.header-gradient {
    background: linear-gradient(to right, #3498db, #2ecc71);
}

/* بعد التعديل */
.header-gradient {
    background: linear-gradient(to right, #e74c3c, #f39c12);
}
```

### تغيير الظلال والتأثيرات

```css
/* قبل التعديل */
.card {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* بعد التعديل */
.card {
    box-shadow: 0 8px 20px rgba(231, 76, 60, 0.2);
}
```

---

## تخصيص التخطيط والهيكل

### تغيير المسافات والهوامش

لتعديل المسافات بين العناصر:

```css
/* قبل التعديل */
.section {
    padding: 50px 0;
    margin-bottom: 30px;
}

/* بعد التعديل */
.section {
    padding: 80px 0;
    margin-bottom: 50px;
}
```

### تغيير عرض المحتوى

```css
/* قبل التعديل */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* بعد التعديل */
.container {
    max-width: 1000px;
    margin: 0 auto;
}
```

### تعديل تخطيط العناصر

لتغيير طريقة عرض العناصر (مثل تغيير من صفين إلى ثلاثة صفوف):

```css
/* قبل التعديل - عنصرين في كل صف */
.project-card {
    width: calc(50% - 20px);
}

/* بعد التعديل - ثلاثة عناصر في كل صف */
.project-card {
    width: calc(33.333% - 20px);
}
```

---

## إضافة أو تعديل الصفحات

### إنشاء صفحة جديدة

1. انسخ أقرب صفحة موجودة للصفحة التي تريد إنشاءها (مثل `about.html`)
2. احفظها باسم جديد (مثل `services.html`)
3. قم بتعديل العنوان والمحتوى
4. أضف رابطاً للصفحة الجديدة في القائمة

**مثال لصفحة جديدة**:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خدماتي - AGpro Extras</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/mobile-fixes.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- نسخ الهيدر من صفحة أخرى -->
    <header>
        <!-- ... محتوى الهيدر ... -->
    </header>

    <section class="page-header">
        <div class="container">
            <h1>خدماتي</h1>
            <p>استكشف الخدمات التي أقدمها</p>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <div class="services-grid">
                <!-- محتوى الخدمات -->
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>تطوير الويب</h3>
                    <p>تصميم وتطوير مواقع ويب احترافية وسريعة الاستجابة.</p>
                </div>
                
                <!-- إضافة المزيد من الخدمات -->
            </div>
        </div>
    </section>

    <!-- نسخ الفوتر من صفحة أخرى -->
    <footer>
        <!-- ... محتوى الفوتر ... -->
    </footer>

    <script src="/js/analytics.js"></script>
    <script src="/js/main.js"></script>
</body>
</html>
```

### إنشاء النسخة الإنجليزية للصفحة الجديدة

لا تنس إنشاء نسخة إنجليزية للصفحة الجديدة في مجلد `en/`:

1. انسخ الصفحة العربية الجديدة
2. احفظها في مجلد `en/` (مثل `en/services.html`)
3. قم بتغيير اتجاه الصفحة من `rtl` إلى `ltr`
4. ترجم المحتوى إلى الإنجليزية

---

## تعديل القوائم والروابط

### تعديل قائمة التنقل

لإضافة أو تعديل عناصر القائمة:

1. افتح جميع ملفات HTML
2. ابحث عن قسم `<nav>` في كل ملف
3. قم بتعديل عناصر القائمة `<li>` و `<a>`

**مثال**:

```html
<!-- قبل التعديل -->
<nav>
    <ul>
        <li><a href="/">الرئيسية</a></li>
        <li><a href="/projects.html">مشاريعي</a></li>
        <li><a href="/about.html">من أنا</a></li>
        <li><a href="/contact.html">تواصل معي</a></li>
    </ul>
</nav>

<!-- بعد التعديل - إضافة صفحة خدمات -->
<nav>
    <ul>
        <li><a href="/">الرئيسية</a></li>
        <li><a href="/projects.html">مشاريعي</a></li>
        <li><a href="/services.html">خدماتي</a></li>
        <li><a href="/about.html">من أنا</a></li>
        <li><a href="/contact.html">تواصل معي</a></li>
    </ul>
</nav>
```

### تعديل روابط التواصل الاجتماعي

لتغيير روابط التواصل الاجتماعي:

1. ابحث عن أقسام التواصل الاجتماعي في الصفحات (عادة في الفوتر)
2. قم بتعديل روابط `href`

**مثال**:

```html
<!-- قبل التعديل -->
<div class="social-icons">
    <a href="https://t.me/Ahm3d_AG" target="_blank"><i class="fab fa-telegram"></i></a>
    <a href="https://www.instagram.com/ahmed____a__g" target="_blank"><i class="fab fa-instagram"></i></a>
</div>

<!-- بعد التعديل -->
<div class="social-icons">
    <a href="https://t.me/new_username" target="_blank"><i class="fab fa-telegram"></i></a>
    <a href="https://www.instagram.com/new_username" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://twitter.com/new_username" target="_blank"><i class="fab fa-twitter"></i></a>
</div>
```

---

## تخصيص النماذج

### تعديل نموذج الاتصال

لتعديل حقول نموذج الاتصال:

1. افتح ملف `contact.html` و `en/contact.html`
2. ابحث عن قسم `<form>`
3. قم بتعديل الحقول `<input>` و `<textarea>`

**مثال لإضافة حقل جديد**:

```html
<!-- قبل التعديل -->
<form id="contact-form" action="https://formsubmit.co/ahmed.agpro@outlook.com" method="POST">
    <div class="form-group">
        <label for="name">الاسم</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="message">الرسالة</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn primary">إرسال الرسالة</button>
</form>

<!-- بعد التعديل - إضافة حقل رقم الهاتف -->
<form id="contact-form" action="https://formsubmit.co/ahmed.agpro@outlook.com" method="POST">
    <div class="form-group">
        <label for="name">الاسم</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="phone">رقم الهاتف</label>
        <input type="tel" id="phone" name="phone">
    </div>
    <div class="form-group">
        <label for="message">الرسالة</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn primary">إرسال الرسالة</button>
</form>
```

### تغيير بريد استلام الرسائل

لتغيير البريد الإلكتروني الذي تستلم عليه الرسائل:

1. افتح ملف `contact.html` و `en/contact.html`
2. ابحث عن خاصية `action` في وسم `<form>`
3. قم بتغيير عنوان البريد الإلكتروني

```html
<!-- قبل التعديل -->
<form id="contact-form" action="https://formsubmit.co/ahmed.agpro@outlook.com" method="POST">

<!-- بعد التعديل -->
<form id="contact-form" action="https://formsubmit.co/your.new.email@example.com" method="POST">
```

---

## إضافة ميزات جديدة

### إضافة معرض صور

لإضافة معرض صور إلى صفحة:

1. أضف الكود HTML التالي إلى الصفحة المطلوبة:

```html
<section class="gallery">
    <div class="container">
        <h2 class="section-title">معرض الصور</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="/images/gallery/image1.jpg" alt="صورة 1">
            </div>
            <div class="gallery-item">
                <img src="/images/gallery/image2.jpg" alt="صورة 2">
            </div>
            <div class="gallery-item">
                <img src="/images/gallery/image3.jpg" alt="صورة 3">
            </div>
            <!-- يمكن إضافة المزيد من الصور -->
        </div>
    </div>
</section>
```

2. أضف الأنماط CSS التالية إلى ملف `css/style.css`:

```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.gallery-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
}

@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }
}
```

### إضافة قسم الشهادات أو التوصيات

لإضافة قسم للشهادات أو التوصيات:

```html
<section class="testimonials">
    <div class="container">
        <h2 class="section-title">ما يقوله العملاء</h2>
        <div class="testimonials-slider">
            <div class="testimonial">
                <div class="testimonial-content">
                    <p>"تجربة رائعة في العمل مع أحمد. تم تسليم المشروع في الوقت المحدد وبجودة عالية."</p>
                </div>
                <div class="testimonial-author">
                    <img src="/images/testimonials/client1.jpg" alt="العميل 1">
                    <div class="author-info">
                        <h4>محمد أحمد</h4>
                        <p>مدير شركة تقنية</p>
                    </div>
                </div>
            </div>
            <!-- يمكن إضافة المزيد من الشهادات -->
        </div>
    </div>
</section>
```

---

## اختبار التغييرات

### اختبار محلي

1. بعد إجراء التعديلات، احفظ الملفات
2. افتح الملف الرئيسي `index.html` في متصفح الويب
3. تنقل بين الصفحات للتأكد من عمل جميع الروابط
4. اختبر الموقع على أحجام شاشات مختلفة (استخدم أدوات المطور F12)
5. تأكد من عمل النماذج والوظائف التفاعلية

### نشر التغييرات

بعد التأكد من عمل جميع التعديلات بشكل صحيح:

1. ارفع الملفات المعدلة إلى خادم الاستضافة أو GitHub Pages
2. اختبر الموقع المنشور للتأكد من ظهور جميع التعديلات

---

## نصائح وإرشادات إضافية

### نصائح عامة

- قم دائماً بعمل نسخة احتياطية قبل إجراء تعديلات كبيرة
- استخدم أسماء ملفات بسيطة بدون مسافات أو أحرف خاصة
- حافظ على تنظيم الملفات في المجلدات المناسبة
- تأكد من تعديل النسختين العربية والإنجليزية عند إجراء أي تغيير

### أدوات مفيدة

- **مولد الألوان**: [Coolors](https://coolors.co/)
- **مكتبة الأيقونات**: [Font Awesome](https://fontawesome.com/icons)
- **خطوط Google**: [Google Fonts](https://fonts.google.com/)
- **ضغط الصور**: [TinyPNG](https://tinypng.com/)

### استكشاف الأخطاء وإصلاحها

إذا لم تظهر التغييرات بعد التعديل:

1. تأكد من حفظ الملفات بعد التعديل
2. تأكد من تحديث الصفحة في المتصفح (Ctrl+F5)
3. تحقق من وجود أخطاء في وحدة تحكم المتصفح (F12)
4. تأكد من صحة المسارات النسبية للملفات والصور

---

هذا الدليل يغطي معظم التعديلات التي قد ترغب في إجراءها على موقعك. إذا كنت بحاجة إلى مساعدة إضافية أو لديك أسئلة محددة، فلا تتردد في التواصل معي.
