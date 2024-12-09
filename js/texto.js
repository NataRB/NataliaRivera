

document.addEventListener("DOMContentLoaded", function () {
    const text = "<Hola, soy Natalia Rivera/>";
    let index = 0;
    const speed = 100; // Velocidad de la escritura en milisegundos
    const delay = 5000; // Retraso en milisegundos antes de reiniciar el texto
  
    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        // Esperar 5 segundos antes de reiniciar el texto
        setTimeout(() => {
          document.getElementById("typed-text").innerHTML = "";
          index = 0;
          typeWriter();
        }, delay);
      }
    }
  
    typeWriter();
  });
  
