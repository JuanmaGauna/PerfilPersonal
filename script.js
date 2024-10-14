const textos = {
    es: {
        title: "Portfolio de Juan Manuel Gauna 🫧",
        labelIdioma: "Idioma",
        experiencia: "Experiencia",
        proyectos: "Proyectos realizados",
        descripcion: "Soy un profesional en el ámbito de las tecnologías y los sistemas...",
        experienciaA: "Experiencia A",
        experienciaB: "Experiencia B",
        experienciaC: "Experiencia C",
        tecnologiasFavoritas: "Mis tecnologías favoritas",
        sitioCorporativo: "Sitio web corporativo",
        descripcionProyecto: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        tecnologiasUsadas: "Tecnologías utilizadas: HTML, CSS, JavaScript.",
        formularioContacto: "Formulario de contacto",
        informacionPersonal: "Información personal",
        nombre: "Nombre",
        email: "Email",
        informacionAdicional: "Información adicional",
        telefono: "📞Teléfono",
        enviar: "Enviar",
        inicio: "Ir al inicio",
        contactame: "Contáctame aquí"
    },
    en: {
        title: "Juan Manuel Gauna's Portfolio 🫧",
        labelIdioma: "Language",
        experiencia: "Experience",
        proyectos: "Projects",
        descripcion: "I am a professional in the field of technology and systems...",
        experienciaA: "Experience A",
        experienciaB: "Experience B",
        experienciaC: "Experience C",
        tecnologiasFavoritas: "My favorite technologies",
        sitioCorporativo: "Corporate website",
        descripcionProyecto: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        tecnologiasUsadas: "Technologies used: HTML, CSS, JavaScript.",
        formularioContacto: "Contact Form",
        informacionPersonal: "Personal Info",
        nombre: "Name",
        email: "Email",
        informacionAdicional: "Additional Info",
        telefono: "📞Phone",
        enviar: "Send",
        inicio: "Go to top",
        contactame: "Contact me here"
    }
};

function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll("[data-lang]");
    elementos.forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = textos[idioma][key];
    });
}

