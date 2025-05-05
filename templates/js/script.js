// Mostrar el popup de correo
document.getElementById("mostrarCorreo").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("correoPopup").style.display = "block";
  });
  
  // Mostrar el popup de WhatsApp
  document.getElementById("mostrarWasap").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("wasapPopup").style.display = "block";
  });
  
  // Ocultar el popup de correo al hacer clic fuera
  document.addEventListener("click", function(event) {
    let popupCorreo = document.getElementById("correoPopup");
    let correoBoton = document.getElementById("mostrarCorreo");
    
    if (popupCorreo.style.display === "block" && 
        !popupCorreo.contains(event.target) && 
        event.target !== correoBoton) {
      popupCorreo.style.display = "none";
    }
  });
  
  // Ocultar el popup de WhatsApp al hacer clic fuera
  document.addEventListener("click", function(event) {
    let popupWasap = document.getElementById("wasapPopup");
    let wasapBoton = document.getElementById("mostrarWasap");
    
    if (popupWasap.style.display === "block" && 
        !popupWasap.contains(event.target) && 
        event.target !== wasapBoton) {
      popupWasap.style.display = "none";
    }
  });
  
  // Función para copiar el correo
  document.getElementById("copiarCorreo").addEventListener("click", function() {
    let correo = document.getElementById("correoTexto").innerText;
    navigator.clipboard.writeText(correo).then(() => {
      alert("Correo copiado al portapapeles!");
    });
  });
  
  // Función para copiar el número de WhatsApp
  document.getElementById("copiarWasap").addEventListener("click", function() {
    let numero = document.getElementById("wasapTexto").innerText;
    navigator.clipboard.writeText(numero).then(() => {
      alert("Número de WhatsApp copiado al portapapeles!");
    });
  });