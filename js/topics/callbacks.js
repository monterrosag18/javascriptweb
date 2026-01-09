const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Callbacks y su Manejo</h2>
        <p>Un "callback" es una función que se pasa a otra función como un argumento, para que se ejecute después de que alguna operación haya terminado. Es la forma más básica de manejar la asincronía en JavaScript.</p>
        <p>Imagina que le pides a un amigo que te avise cuando llegue el cartero. Tu amigo te llamará (callback) solo cuando vea al cartero (la operación ha terminado).</p>

        <h3>Callback con <code>setTimeout</code></h3>
        <p><code>setTimeout</code> es una función que ejecuta un callback después de un cierto período de tiempo. Es el ejemplo perfecto de una operación asíncrona.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Un mensaje que aparece después de 2 segundos.</p>
            <textarea id="code-callback-simple">console.log("Inicio del programa.");

// La función que se pasa a setTimeout es el callback.
setTimeout(function() {
    console.log("¡Este mensaje aparece después de 2 segundos!");
}, 2000); // 2000 milisegundos = 2 segundos

console.log("Fin del programa. (Nota como esto se muestra ANTES del mensaje de 2 segundos)");</textarea>
            <button onclick="runCode('code-callback-simple')">Ejecutar</button>
            <div class="output" id="output-callback-simple"></div>
        </div>

        <h3>El "Infierno de los Callbacks" (Callback Hell)</h3>
        <p>Cuando tienes muchas operaciones asíncronas que dependen una de la otra, puedes terminar con funciones anidadas una dentro de otra, creando una estructura difícil de leer y mantener, conocida como "Callback Hell" o "Pyramid of Doom".</p>

        <div class="example">
            <p><strong>Ejemplo (Ilustrativo):</strong> Simulación de varios pasos anidados.</p>
            <textarea id="code-callback-hell" readonly>// ¡No ejecutes esto como si fuera real, es solo para mostrar la estructura!
function paso1(callback) {
    setTimeout(function() {
        console.log("Paso 1 completado");
        callback();
    }, 1000);
}

function paso2(callback) {
    setTimeout(function() {
        console.log("Paso 2 completado");
        callback();
    }, 1000);
}

function paso3(callback) {
    setTimeout(function() {
        console.log("Paso 3 completado");
        callback();
    }, 1000);
}

// Esto es el Callback Hell
paso1(function() {
    paso2(function() {
        paso3(function() {
            console.log("¡Todos los pasos completados!");
        });
    });
});
</textarea>
            <p>Este problema es una de las principales razones por las que se crearon las <strong>Promesas</strong> y <strong>async/await</strong>, para escribir código asíncrono de una forma mucho más limpia.</p>
        </div>

        <h3>Avanzado: ¿Dónde se usa esto? (En Node.js para operaciones I/O)</h3>
        <p>Los callbacks son el pilar de las operaciones asíncronas en Node.js, especialmente para operaciones de Entrada/Salida (I/O) como leer un archivo. El patrón común es usar un callback que recibe dos argumentos: un error (si algo salió mal) y el resultado (si todo fue bien). Esto se conoce como "error-first callbacks".</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Simulación de cómo Node.js usaría un callback para leer un archivo. La función <code>leerArchivoSimulado</code> imita la función <code>fs.readFile</code> de Node.</p>
            <textarea id="code-advanced-callbacks">// Simulamos la función fs.readFile de Node.js
function leerArchivoSimulado(nombreArchivo, callback) {
    console.log(\`Intentando leer el archivo: \${nombreArchivo}...\`);
    
    setTimeout(() => {
        if (nombreArchivo === "datos.json") {
            const contenido = '{ "dato": "información importante" }';
            // Éxito: llamamos al callback con null en el error y el contenido en el resultado.
            callback(null, contenido);
        } else {
            // Error: llamamos al callback con un objeto de error.
            const error = new Error("Archivo no encontrado");
            callback(error, null);
        }
    }, 1500);
}

// Usamos la función con el patrón "error-first callback"
leerArchivoSimulado("datos.json", (error, contenido) => {
    if (error) {
        console.error("Ocurrió un error:", error.message);
        return;
    }
    console.log("Contenido del archivo:", contenido);
});

leerArchivoSimulado("archivo-inexistente.txt", (error, contenido) => {
    if (error) {
        console.error("Ocurrió un error:", error.message);
        return;
    }
    console.log("Contenido del archivo:", contenido);
});
</textarea>
            <button onclick="runCode('code-advanced-callbacks')">Ejecutar</button>
            <div class="output" id="output-advanced-callbacks"></div>
        </div>
    </section>
`;

// We need to redefine runCode if it's not already on the window object from a previous topic.
if (!window.runCode) {
    window.runCode = function(textareaId) {
        const code = document.getElementById(textareaId).value;
        const outputId = textareaId.replace('code-', 'output-');
        const outputElement = document.getElementById(outputId);
        outputElement.innerHTML = ''; // Limpiar salida anterior

        const oldLog = console.log;
        console.log = function(...args) {
            const message = args.map(arg => JSON.stringify(arg, null, 2)).join(' ');
            outputElement.innerHTML += message + '<br>';
            oldLog.apply(console, args);
        };

        try {
            eval(code);
        } catch (e) {
            console.log(e.name + ": " + e.message);
        } finally {
            console.log = oldLog;
        }
    }
}
