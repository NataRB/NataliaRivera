window.onload = function() {
    // Mostrar el mensaje emergente
    const mensaje = document.getElementById('mensaje-emergente');
    mensaje.style.opacity = '1';
    mensaje.style.display = 'block';  // Asegura que se muestre como bloque

    // Ocultar el mensaje después de 7 segundos
    setTimeout(() => {
      mensaje.style.opacity = '0';
      // Ocultar completamente el mensaje después de la transición
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 500); // Un pequeño retraso para la transición
    }, 7000);
  };