document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }

        alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
        form.reset();
    });
});
