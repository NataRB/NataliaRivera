tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#9d4edd',
                secondary: '#5a189a',
                dark: '#1a1a2e',
            }
        }
    }
}

const technologies = [
    { name: 'HTML', image: './img/html-5.png' },
    { name: 'CSS', image: './img/css-3.png' },
    { name: 'JavaScript', image: './img/js.png' },
    { name: 'Tailwind', image: './img/tailwind.png' },
    { name: 'Bootstrap', image: './img/pngwing.com(1)(1).png' },
    { name: 'Git', image: './img/git.png' },
];

// Selección del slider
const slider = document.getElementById('tech-slider');

// Función para ajustar el ancho de los elementos visibles
let itemsVisible = 7; // Número de ítems visibles en pantallas grandes
let itemWidth = 100 / itemsVisible; // Ancho en porcentaje de cada ítem

// Función para crear un elemento de tecnología
function createTechElement(tech) {
    return `
        <div class="flex-none" style="width: ${itemWidth}%;">
            <div class="rounded-lg p-6 flex items-center justify-center duration-300">
                <img src="${tech.image}" alt="${tech.name}" class="h-16 w-16">
            </div>
        </div>
    `;
}

// Llenar el slider con las tecnologías (duplicadas para efecto continuo)
slider.innerHTML = [...technologies, ...technologies].map(createTechElement).join('');

// Función para ajustar el número de elementos visibles y su tamaño dependiendo del tamaño de la pantalla
function adjustSlider() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        itemsVisible = 3; // Para pantallas pequeñas, mostrar 3 elementos
    } else {
        itemsVisible = 7; // Para pantallas grandes, mostrar 7 elementos
    }

    // Recalcular el ancho de cada ítem
    itemWidth = 100 / itemsVisible;

    // Actualizar el HTML del slider con los nuevos tamaños
    slider.innerHTML = [...technologies, ...technologies].map(createTechElement).join('');
}

let position = 0;
function moveSlider() {
    position -= 0.05; // Ajusta la velocidad de desplazamiento

    // Reajusta la posición cuando se alcance el final del primer conjunto de ítems
    if (position <= -(100)) {
        position = 0;
    }

    // Aplicar la transformación
    slider.style.transform = `translateX(${position}%)`;
}

// Escuchar el evento de cambio de tamaño de pantalla para ajustar el número de elementos visibles
window.addEventListener('resize', adjustSlider);

// Llamar a la función para ajustar el slider cuando se cargue la página
adjustSlider();

// Iniciar el desplazamiento del slider
setInterval(moveSlider, 16);


// Scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const yOffset = -80; // Ajusta este valor según el tamaño de tu header fijo
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// Animación de fade-in para las secciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

window.onload = function() {
    // Mostrar el mensaje emergente
    const mensaje = document.getElementById('mensaje-emergente');
    mensaje.style.opacity = '1';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      mensaje.style.opacity = '0';
    }, 7000);
  };

  