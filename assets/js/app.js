
//  iniciamos con un arreglo vacío si no hay nada guardado de las imagenes que se van aplicar
const images = JSON.parse(localStorage.getItem("images")) || [];

// Esta función agrega estilos CSS al documento directamente desde js
const injectStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .header, .footer {
            background: #333;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }

        .sidebar {
            width: 200px;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            background-color:rgb(247, 243, 12);
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sidebar a {
            background-color: tomato;
            color: white;
            padding: 0.8em 1.2em;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1em;
            text-align: center;
            transition: background-color 0.3s, color 0.3s, transform 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .sidebar a:hover {
            background-color: #ff6347;
            transform: scale(1.05);
        }

        .gallery {
            margin-left: 220px;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
        }

        .gallery-item {
            width: 200px;
            text-align: center;
            transition: transform 0.3s ease;
            cursor: pointer;
            border-radius: 8px;
            border: 1px solid #ccc;
        }

        .gallery-item:hover {
            transform: scale(1.3);
            z-index: 10;
            position: relative;
        }

        .zoom-image {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 8px 8px 0 0;
            display: block;
            transition: transform 0.3s ease;
        }

        .description {
            margin: 0;
            padding: 0.5em;
            background-color: transparent;
            color: black;
            transition: background-color 0.3s ease, color 0.3s ease;
            border-radius: 0 0 8px 8px;
        }

        .gallery-item:hover .description {
            background-color: black;
            color: white;
        }
    `;
    document.head.appendChild(style);
};
// Crea y muestra la cabecera de la página
const createHeader = () => {
    const header = document.createElement("header");
    header.textContent = "LABORATORIO 1 James Mena Galería Imágenes";
    header.classList.add("header");
    document.body.appendChild(header);
};
// Crea una barra lateral con un botón para ir a la página de registro
const createSidebar = () => {
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");

    const link = document.createElement("a");
    link.href = "registro.html";
    link.textContent = "Registrar nueva imagen";
    sidebar.appendChild(link);

    document.body.appendChild(sidebar);
};
// Agrega un pie de página simple
const createFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "© 2024 Taller JS, Materia: Programación Integrativa de Componentes, NRC: 21602";
    footer.classList.add("footer");
    document.body.appendChild(footer);
};
// Esta función se encarga de mostrar las imágenes en la galería principal
const renderGallery = (imageList) => {
    const main = document.createElement("main");
    main.classList.add("gallery");

    imageList.forEach(({ url, descripcion }) => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = url;
        img.alt = descripcion;
        img.classList.add("zoom-image");

        const desc = document.createElement("p");
        desc.textContent = descripcion;
        desc.classList.add("description");

        item.appendChild(img);
        item.appendChild(desc);
        main.appendChild(item);
    });

    document.body.appendChild(main);
};

document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    createHeader();
    createSidebar();
    renderGallery(images);
    createFooter();
});