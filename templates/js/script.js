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


  //traduccion
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");
  
    fetch("templates/js/translations.json")
        .then(response => response.json())
        .then(translations => {
            languageSelector.addEventListener("change", (event) => {
                const lang = event.target.value;
  
                document.querySelectorAll("#home").forEach(el => el.innerText = translations[lang].home);
                document.querySelectorAll("#skillse").forEach(el => el.innerText = translations[lang].skillse);
                document.querySelectorAll("#about").forEach(el => el.innerText = translations[lang].about);
                document.querySelectorAll("#habilidad").forEach(el => el.innerText = translations[lang].habilidad);
                document.querySelectorAll("#my").forEach(el => el.innerText = translations[lang].my);
                document.querySelectorAll("#title").forEach(el => el.innerText = translations[lang].title);
                document.querySelectorAll("#nivel").forEach(el => el.innerText = translations[lang].nivel);
                document.querySelectorAll("#mi").forEach(el => el.innerText = translations[lang].mi);
                document.querySelectorAll("#role").forEach(el => el.innerText = translations[lang].role);
                document.querySelectorAll("#description").forEach(el => el.innerText = translations[lang].description);
                document.querySelectorAll("#studies").forEach(el => el.innerText = translations[lang].studies);
                document.querySelectorAll("#estudio2").forEach(el => el.innerText = translations[lang].estudio2);
                document.querySelectorAll("#estudios").forEach(el => el.innerText = translations[lang].estudios);
                document.querySelectorAll("#comin").forEach(el => el.innerText = translations[lang].comin);
                document.querySelectorAll("#descargar").forEach(el => el.innerText = translations[lang].descargar);
                document.querySelectorAll("#basico").forEach(el => el.innerText = translations[lang].basico);
                document.querySelectorAll("#about2").forEach(el => el.innerText = translations[lang].about); 
            });
        })
        .catch(error => console.error("Error loading translations:", error));
  });
  
  