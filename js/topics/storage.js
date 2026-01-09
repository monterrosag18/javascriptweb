const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>LocalStorage y SessionStorage</h2>
        <p>La API de Almacenamiento Web (Web Storage API) nos permite guardar datos en el navegador del usuario. Es muy útil para recordar información entre visitas o durante una misma sesión.</p>
        <p>Ambos guardan datos como pares de clave-valor, y los valores siempre son strings.</p>

        <h3><code>localStorage</code></h3>
        <p>Los datos guardados en <code>localStorage</code> <strong>persisten</strong> incluso después de que el navegador se cierra. No tienen fecha de caducidad.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Guardar y recuperar tu nombre.</p>
            <input type="text" id="nombreInput" placeholder="Escribe tu nombre aquí">
            <button onclick="guardarNombre()">Guardar Nombre</button>
            <button onclick="recuperarNombre()">Recuperar Nombre</button>
            <button onclick="borrarNombre()">Borrar Nombre</button>
            <div class="output" id="output-storage"></div>
            <textarea id="code-localstorage" readonly>// Para guardar un dato:
// localStorage.setItem('clave', 'valor');

// Para recuperar un dato:
// const valor = localStorage.getItem('clave');

// Para borrar un dato:
// localStorage.removeItem('clave');

// Para borrar todo:
// localStorage.clear();
</textarea>
        </div>

        <h3><code>sessionStorage</code></h3>
        <p>Los datos en <code>sessionStorage</code> solo están disponibles durante la sesión de la página. Se borran cuando se cierra la pestaña o el navegador.</p>
        <p>Funciona exactamente igual que <code>localStorage</code>, solo tienes que cambiar <code>localStorage</code> por <code>sessionStorage</code>.</p>
        <pre><code>sessionStorage.setItem('datoDeSesion', 'este valor se borrará al cerrar la pestaña');
const dato = sessionStorage.getItem('datoDeSesion');
console.log(dato);
</code></pre>

        <h3>Guardar Objetos</h3>
        <p>Como solo se pueden guardar strings, si quieres guardar un objeto, primero debes convertirlo a un string JSON, y para leerlo, debes hacer el proceso inverso.</p>
        <div class="example">
            <p><strong>Ejemplo:</strong> Guardar un objeto de configuración.</p>
            <textarea id="code-storage-object">const configuracion = {
    tema: "oscuro",
    idioma: "es"
};

// 1. Convertir el objeto a string para guardarlo
localStorage.setItem('config', JSON.stringify(configuracion));
console.log("Objeto guardado como string.");

// 2. Recuperar el string y convertirlo de nuevo a objeto
const configGuardadaString = localStorage.getItem('config');
const configRecuperada = JSON.parse(configGuardadaString);

console.log("Objeto recuperado:", configRecuperada);
console.log("Tema recuperado:", configRecuperada.tema);
</textarea>
            <button onclick="runCode('code-storage-object')">Ejecutar</button>
            <div class="output" id="output-storage-object"></div>
        </div>

        <h3>Avanzado: ¿Dónde se usa esto? (Guardar Objetos y Arrays)</h3>
        <p>Tanto <code>localStorage</code> como <code>sessionStorage</code> solo pueden almacenar datos de tipo <strong>string</strong>. ¿Qué pasa si quieres guardar un objeto con configuraciones o un array de tareas? Debes convertir tu objeto/array a un string en formato JSON antes de guardarlo, y luego hacer el proceso inverso al recuperarlo.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Guardamos un objeto de configuración del usuario en <code>localStorage</code>. Para ello, usamos <code>JSON.stringify()</code> para convertir el objeto en string, y <code>JSON.parse()</code> para reconstruir el objeto al leerlo.</p>
            <textarea id="code-advanced-storage">// 1. El objeto que queremos guardar
const configuracionUsuario = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true,
    ultimoAcceso: new Date().toLocaleTimeString()
};

// 2. Convertimos el objeto a un string JSON y lo guardamos
try {
    const configString = JSON.stringify(configuracionUsuario);
    localStorage.setItem('configUsuario', configString);
    console.log("Objeto de configuración guardado en localStorage.");
    console.log("Como string:", configString);
} catch (e) {
    console.error("Error al guardar:", e);
}


// 3. Leemos el string de localStorage y lo volvemos a convertir en un objeto
try {
    const configGuardadaString = localStorage.getItem('configUsuario');
    if (configGuardadaString) {
        const configRecuperada = JSON.parse(configGuardadaString);
        console.log("Objeto recuperado de localStorage:");
        console.log(configRecuperada);
        console.log(`El tema guardado es: {configRecuperada.tema}`);
    } else {
        console.log("No se encontró configuración guardada.");
    }
} catch (e) {
    // Este error puede ocurrir si los datos en localStorage no son un JSON válido
    console.error("Error al parsear la configuración:", e);
}
</textarea>
            <button onclick="runCode('code-advanced-storage')">Ejecutar</button>
            <div class="output" id="output-advanced-storage"></div>
        </div>
    </section>
`;

window.guardarNombre = function() {
    const nombre = document.getElementById('nombreInput').value;
    if (nombre) {
        localStorage.setItem('nombreUsuario', nombre);
        document.getElementById('output-storage').textContent = \`Nombre '\${nombre}' guardado en localStorage.\`;
    } else {
        document.getElementById('output-storage').textContent = 'Por favor, escribe un nombre.';
    }
}

window.recuperarNombre = function() {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
        document.getElementById('output-storage').textContent = \`Nombre recuperado: \${nombreGuardado}\`;
    } else {
        document.getElementById('output-storage').textContent = 'No hay ningún nombre guardado.';
    }
}

window.borrarNombre = function() {
    localStorage.removeItem('nombreUsuario');
    document.getElementById('output-storage').textContent = 'Nombre borrado de localStorage.';
}
