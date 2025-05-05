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

        .register-page {
            display: flex;
            justify-content: center;
            padding: 2rem;
        }

        .register-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 300px;
        }

        .register-form input {
            padding: 0.5rem;
            font-size: 1rem;
        }

        .register-form button {
            padding: 0.7rem;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
};

const createForm = () => {
    const main = document.createElement("main");
    main.classList.add("register-page");

    const form = document.createElement("form");
    form.classList.add("register-form");

    const urlLabel = document.createElement("label");
    urlLabel.textContent = "URL de la imagen:";
    const urlInput = document.createElement("input");
    urlInput.type = "url";
    urlInput.required = true;

    const descLabel = document.createElement("label");
    descLabel.textContent = "Descripción:";
    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.required = true;
    descInput.minLength = 3;

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Guardar";

    form.appendChild(urlLabel);
    form.appendChild(urlInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(submit);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const url = urlInput.value.trim();
        const descripcion = descInput.value.trim();

        if (!url || descripcion.length < 3) {
            alert("Ingrese una URL válida y una descripción de al menos 3 caracteres.");
            return;
        }

        const images = JSON.parse(localStorage.getItem("images")) || [];
        images.push({ url, descripcion });
        localStorage.setItem("images", JSON.stringify(images));

        location.href = "index.html";
    });

    main.appendChild(form);
    document.body.appendChild(main);
};

document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    createForm();
});