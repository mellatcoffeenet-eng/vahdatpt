// راه‌اندازی اسلایدر اصلی
const mainSwiper = new Swiper('.mainSwiper', {
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 0,
    effect: 'slide', // می‌توانید به 'fade' یا 'cube' هم تغییر دهید
});

// راه‌اندازی اسلایدر نظرات
const testimonialSwiper = new Swiper('.testimonialSwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
    },
    spaceBetween: 50,
    slidesPerView: 1,
    centeredSlides: true,
});

// منوی همبرگری برای موبایل (اگر نیاز به توسعه داشتید)
document.querySelector('.menu-icon')?.addEventListener('click', function() {
    // اینجا می‌توانید کد باز و بسته شدن منوی موبایل را اضافه کنید
    alert('منوی موبایل در این نسخه ساده فعال نیست. برای پیاده‌سازی کامل، می‌توانید کد بیشتری به آن اضافه کنید.');
});
