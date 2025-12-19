const today = new Date();
const currentDay = today.getDate();

document.querySelectorAll('.card').forEach(card => {
    const day = parseInt(card.dataset.day);
    const inner = card.querySelector('.inner');

    // Recuperar estado
    const saved = localStorage.getItem('card' + day);
    if (saved === 'flipped') inner.classList.add('flipped');

    // Bloquear si no es el día
    if (currentDay < day) {
        card.classList.add('locked');
    }

    card.addEventListener('click', () => {
        if (currentDay < day) return;

        if (!inner.classList.contains('flipped')) {
            const password = prompt("Para abrir la tarjeta del día " + day + ", ingresa la contraseña romántica:\n(usa minúscula)");

            const keys = {
                12: "lombardia",
                13: "asturias",
                14: "bretaña",
                20: "aquitania"
            };

            if (password && password.toLowerCase() === keys[day]) {
                inner.classList.add('flipped');
                localStorage.setItem('card' + day, 'flipped');
            } else {
                alert("Contraseña incorrecta. Inténtalo de nuevo.");
            }
        }
    });
});

