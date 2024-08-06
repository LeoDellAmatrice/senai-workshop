document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            const isOpen = panel.classList.contains('open');
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
            if (!isOpen) {
                panel.classList.add('open');
            }
        });
    });

    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});