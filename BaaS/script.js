const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        faqItems.forEach(el => {
            if (el !== item) el.classList.remove('active');
        });

        item.classList.toggle('active');
    });
});

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}
