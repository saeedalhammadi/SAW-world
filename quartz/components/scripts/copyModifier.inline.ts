document.addEventListener('copy', (e) => {
    // 1. الحصول على النص الذي حدده المستخدم
    const selection = window.getSelection();
    const selectedText = selection.toString();

    // 2. صياغة "البصمة" أو الشفرة المخفية
    // يمكنك إضافة رابط المقال الحالي تلقائياً
    const sourceLink = "\n\n--------------------------\nتم الاقتباس من عالم SAW: " + document.location.href;
    const trademark = "\nالحقيقة تكمن في التفاصيل - بصمة رقمية 2026";
    
    // 3. دمج النص الأصلي مع البصمة
    const copyBody = selectedText + sourceLink + trademark;

    // 4. استبدال المحتوى في الحافظة
    e.clipboardData.setData('text/plain', copyBody);
    
    // منع المتصفح من تنفيذ عملية النسخ العادية (لأننا نفذناها يدوياً)
    e.preventDefault();
});