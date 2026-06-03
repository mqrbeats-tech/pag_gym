// ==========================================
// FUNCIONALIDAD DEL FORMULARIO
// ==========================================

const formInscripcion = document.getElementById('formInscripcion');

formInscripcion.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const plan = document.getElementById('plan').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validaciones básicas
    if (!nombre || !email || !telefono || !plan) {
        alert('❌ Por favor completa todos los campos requeridos');
        return;
    }
    
    if (!validarEmail(email)) {
        alert('❌ Por favor ingresa un email válido');
        return;
    }
    
    // Mensaje de éxito
    alert(`✅ ¡Bienvenido ${nombre}! Tu inscripción al Plan ${plan} ha sido recibida.\nNos contactaremos a ${email} pronto.`);
    
    // Mostrar datos en consola (para demostración)
    console.log('Datos de inscripción:', {
        nombre,
        email,
        telefono,
        plan,
        mensaje,
        fecha: new Date().toLocaleString()
    });
    
    // Limpiar formulario
    formInscripcion.reset();
    
    // Animar el botón
    const boton = formInscripcion.querySelector('button[type="submit"]');
    boton.textContent = '✓ ¡Inscripción Enviada!';
    boton.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
        boton.textContent = 'Inscribirse Ahora';
        boton.style.backgroundColor = '';
    }, 3000);
});

// Función para validar email
function validarEmail(email) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
}

// ==========================================
// NAVEGACIÓN SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const elemento = document.querySelector(href);
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// BOTÓN "COMIENZA AHORA" EN HERO
// ==========================================

const btnComienza = document.querySelector('.hero .btn-primary');
btnComienza.addEventListener('click', function() {
    const contactoSection = document.getElementById('contacto');
    contactoSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// ==========================================
// EFECTO PARALLAX EN HERO
// ==========================================

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero) {
        const scrollPosition = window.scrollY;
        const heroOffset = hero.offsetTop;
        
        if (scrollPosition < heroOffset + hero.offsetHeight) {
            heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    }
});

// ==========================================
// ANIMACIÓN DE APARICIÓN AL SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar tarjetas
document.querySelectorAll('.tarjeta, .servicio-card, .form-group').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==========================================
// FUNCIONALIDAD DE BOTONES DE PLANES
// ==========================================

document.querySelectorAll('.tarjeta .btn').forEach(boton => {
    boton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtener información del plan
        const tarjeta = this.closest('.tarjeta');
        const nombrePlan = tarjeta.querySelector('h3').textContent;
        const precio = tarjeta.querySelector('.precio').textContent;
        
        // Llenar el formulario automáticamente
        document.getElementById('plan').value = nombrePlan.toLowerCase().replace('plan ', '');
        
        // Ir al formulario
        document.getElementById('contacto').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Indicar al usuario
        console.log(`Plan seleccionado: ${nombrePlan} - ${precio}`);
    });
});

// ==========================================
// CONTADOR DE SCROLL PARA HEADER
// ==========================================

let ultimoScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const scrollActual = window.scrollY;
    
    if (scrollActual > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    ultimoScroll = scrollActual;
});

// ==========================================
// VALIDACIÓN EN TIEMPO REAL DEL FORMULARIO
// ==========================================

document.getElementById('email').addEventListener('blur', function() {
    if (!validarEmail(this.value) && this.value !== '') {
        this.style.borderBottom = '2px solid #e74c3c';
    } else {
        this.style.borderBottom = 'none';
    }
});

// ==========================================
// CARGAR CONTENIDO AL ABRIR LA PÁGINA
// ==========================================

window.addEventListener('load', function() {
    console.log('✅ FitPower Gym - Sitio cargado correctamente');
    console.log('Bienvenido a nuestro gimnasio online');
});

// ==========================================
// EFECTO HOVER EN TARJETAS
// ==========================================

document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    tarjeta.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});