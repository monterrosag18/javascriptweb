const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>APIs como fetch, XMLHttpRequest</h2>
        <p>Para que nuestras páginas web sean dinámicas, a menudo necesitamos obtener datos de un servidor sin recargar la página. Para esto se usan las APIs de red del navegador.</p>

        <h3><code>fetch</code>: La forma moderna</h3>
        <p>La API <code>fetch</code> es la forma moderna y basada en Promesas de hacer peticiones de red. Es más potente y flexible que su predecesora, <code>XMLHttpRequest</code>.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Obtener datos de usuarios de un servicio de prueba (JSONPlaceholder).</p>
            <textarea id="code-fetch" readonly>// Usamos async/await para que sea más legible
async function obtenerUsuarios() {
    const outputElement = document.getElementById('output-fetch');
    outputElement.innerHTML = 'Cargando usuarios...';
    
    try {
        // 1. Hacemos la petición a la URL
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');

        // 2. Verificamos si la respuesta fue exitosa (código 200-299)
        if (!response.ok) {
            throw new Error(\`Error de red: \${response.status}\`);
        }

        // 3. Convertimos la respuesta a formato JSON
        const usuarios = await response.json();

        // 4. Mostramos los datos
        outputElement.innerHTML = '<strong>Usuarios recibidos:</strong><br>';
        usuarios.forEach(user => {
            outputElement.innerHTML += \`Nombre: \${user.name}, Email: \${user.email}<br>\`;
        });

    } catch (error) {
        outputElement.innerHTML = \`<span style="color: red;">Error: \${error.message}</span>\`;
    }
}
</textarea>
            <button onclick="runCodeForFetch()">Ejecutar</button>
            <div class="output" id="output-fetch"></div>
        </div>

        <h3>Avanzado: ¿Dónde se usa esto? (Peticiones POST y Manejo de Errores)</h3>
        <p><code>fetch</code> es muy potente. No solo sirve para obtener datos (GET), sino también para enviarlos (POST, PUT, etc.). Además, es importante saber que <code>fetch</code> <strong>no considera un error</strong> respuestas HTTP como 404 (No encontrado) o 500 (Error del servidor). Debes comprobar manualmente si la respuesta fue exitosa usando la propiedad <code>response.ok</code>.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Primero, hacemos una petición <code>POST</code> para "crear" un nuevo post. Luego, intentamos obtener un post que no existe para mostrar el manejo de errores correcto.</p>
            <textarea id="code-advanced-fetch">const API_URL = "https://jsonplaceholder.typicode.com";

// --- 1. Petición POST para enviar datos ---
async function crearPost() {
    console.log("Enviando datos con POST...");
    try {
        const nuevoPost = {
            title: 'Mi nuevo post',
            body: 'Este es el contenido.',
            userId: 1,
        };

        const respuesta = await fetch(`\${API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Le decimos a la API que enviamos JSON
            },
            body: JSON.stringify(nuevoPost) // Convertimos nuestro objeto a un string JSON
        });

        if (!respuesta.ok) {
            // Si el status es 4xx o 5xx, lanzamos un error
            throw new Error(`Error HTTP: \${respuesta.status}`);
        }

        const postCreado = await respuesta.json();
        console.log("Post creado exitosamente:", postCreado);

    } catch (error) {
        console.error("Error al crear el post:", error.message);
    }
}

// --- 2. Manejo de errores con response.ok ---
async function obtenerPostInexistente() {
    console.log("Intentando obtener un post que no existe...");
    try {
        const respuesta = await fetch(`\${API_URL}/posts/999999`); // Este post no existe

        if (!respuesta.ok) {
            console.log(`Respuesta no fue OK. Status: \${respuesta.status}`);
            throw new Error(`El post no fue encontrado (\${respuesta.statusText})`);
        }
        
        const data = await respuesta.json();
        console.log("Datos:", data);

    } catch (error) {
        console.error("Error en la petición:", error.message);
    }
}

// Ejecutamos ambas funciones
(async () => {
    await crearPost();
    await obtenerPostInexistente();
})();
</textarea>
            <button onclick="runCode('code-advanced-fetch')">Ejecutar</button>
            <div class="output" id="output-advanced-fetch"></div>
        </div>
    </section>

        </div>

        <h3><code>XMLHttpRequest</code> (XHR): La forma clásica</h3>
        <p>Antes de <code>fetch</code>, XHR era la única forma de hacer peticiones asíncronas. Es más verbosa y se basa en eventos en lugar de promesas. Es bueno conocerla, ya que podrías encontrarla en código antiguo.</p>

        <div class="example">
            <p><strong>Ejemplo (Ilustrativo):</strong> La misma petición con XHR.</p>
            <pre><code>const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users?_limit=3';

// Se dispara cuando la petición cambia de estado
xhr.onreadystatechange = function() {
    // readyState 4 significa que la petición ha terminado
    // status 200 significa que fue exitosa ("OK")
    if (this.readyState == 4 && this.status == 200) {
        const usuarios = JSON.parse(this.responseText);
        console.log(usuarios);
    }
};

xhr.open("GET", url, true); // true para asíncrono
xhr.send();
</code></pre>
        </div>
    </section>
`;

function runCodeForFetch() {
    const code = document.getElementById('code-fetch').value;
    // Creamos una función asíncrona dinámicamente y la llamamos.
    // Esto es necesario para poder usar 'await' en el nivel superior del código del textarea.
    const asyncFunction = new Function(code + ' obtenerUsuarios();');
    asyncFunction();
}
