document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/ocultar plan de estudios
    const showPlanBtn = document.getElementById('showPlanBtn');
    const planContent = document.getElementById('planContent');
    
    showPlanBtn.addEventListener('click', function() {
        if (planContent.style.display === 'block') {
            planContent.style.display = 'none';
            showPlanBtn.textContent = 'Ver Plan de Estudios';
        } else {
            planContent.style.display = 'block';
            showPlanBtn.textContent = 'Ocultar Plan de Estudios';
        }
    });
    
    // Mostrar/ocultar formulario de contacto
    const contactFormBtn = document.getElementById('contactFormBtn');
    const contactForm = document.getElementById('contactForm');
    
    contactFormBtn.addEventListener('click', function() {
        if (contactForm.style.display === 'block') {
            contactForm.style.display = 'none';
            contactFormBtn.textContent = 'Abrir formulario de contacto';
        } else {
            contactForm.style.display = 'block';
            contactFormBtn.textContent = 'Cerrar formulario de contacto';
        }
    });
    
    // Manejar envío del formulario
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            form.reset();
            contactForm.style.display = 'none';
            contactFormBtn.textContent = 'Abrir formulario de contacto';
        });
    }
});