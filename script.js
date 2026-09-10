function nowbottons(section, button) {
    const target = document.querySelector(`#${section}`);

    const top = target.getBoundingClientRect().top + window.scrollY - 70;

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });

    for (let index = 0; index < button.parentElement.children.length; index++) {
        const element = button.parentElement.children[index];
        element.className = 'now-buttons';
    }

    button.className = 'liquid-glass-card now-buttons';
}
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.now-buttons');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const sectionId = entry.target.id;

            // غیرفعال کردن همه دکمه‌ها
            buttons.forEach(button => {
                button.className = 'now-buttons';
            });

            // پیدا کردن دکمه مربوط به سکشن
            const activeButton = document.querySelector(
                `[onclick*="'${sectionId}'"]`
            );

            // فعال کردن دکمه
            if (activeButton) {
                activeButton.className = 'liquid-glass-card now-buttons';
            }
        }

    });

}, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
});

sections.forEach(section => {
    observer.observe(section);
});