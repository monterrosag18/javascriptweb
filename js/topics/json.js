const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>JSON</h2>
        <p>Trabajar con JSON para serialización y transmisión de datos.</p>

        <h3>1. Qué es JSON</h3>
        <p>JavaScript Object Notation.</p>

        <div class="example">
            <textarea id="code-json-1" readonly>// JSON es un formato de texto
// Basado en JavaScript pero lenguaje agnóstico

// Objeto en JavaScript
const obj = {
    nombre: "Juan",
    edad: 30,
    activo: true,
    skills: ["JavaScript", "Python"],
    direccion: { ciudad: "Madrid" }
};

console.log("Objeto JS:", obj);
console.log("typeof obj:", typeof obj);

// JSON es string
const json = '{"nombre":"Juan","edad":30}';
console.log("\\nJSON string:", json);
console.log("typeof json:", typeof json);</textarea>
            <button onclick="runCode('code-json-1')">Ejecutar</button>
            <div class="output" id="output-json-1"></div>
        </div>

        <hr>

        <h3>2. JSON.stringify()</h3>
        <p>Convertir objeto a JSON string.</p>

        <div class="example">
            <textarea id="code-json-2" readonly>const usuario = {
    nombre: "Ana",
    edad: 28,
    email: "ana@email.com",
    activo: true,
    intereses: ["JS", "React", "Node"]
};

// Básico
console.log("stringify():");
console.log(JSON.stringify(usuario));

// Con espacios (legible)
console.log("\\nstringify con espacios:");
console.log(JSON.stringify(usuario, null, 2));

// Array
const nums = [1, 2, 3];
console.log("\\nArray a JSON:");
console.log(JSON.stringify(nums));

// Primitivos
console.log("\\nPrimitivos:");
console.log(JSON.stringify("texto"));
console.log(JSON.stringify(123));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));</textarea>
            <button onclick="runCode('code-json-2')">Ejecutar</button>
            <div class="output" id="output-json-2"></div>
        </div>

        <hr>

        <h3>3. JSON.parse()</h3>
        <p>Convertir JSON string a objeto.</p>

        <div class="example">
            <textarea id="code-json-3" readonly>const jsonString = '{"nombre":"Juan","edad":30,"activo":true}';

// Parse básico
const obj = JSON.parse(jsonString);
console.log("Parseado:", obj);
console.log("typeof:", typeof obj);

// Acceder propiedades
console.log("obj.nombre:", obj.nombre);
console.log("obj.edad:", obj.edad);

// Array JSON
const arrayJSON = '[1, 2, 3, 4, 5]';
const arr = JSON.parse(arrayJSON);
console.log("\\nArray parseado:", arr);

// Anidado
const complejoJSON = '{"user":{"nombre":"Ana","roles":["admin","user"]}}';
const complejo = JSON.parse(complejoJSON);
console.log("\\nComplejo:", complejo);
console.log("Usuario:", complejo.user);
console.log("Primer rol:", complejo.user.roles[0]);</textarea>
            <button onclick="runCode('code-json-3')">Ejecutar</button>
            <div class="output" id="output-json-3"></div>
        </div>

        <hr>

        <h3>4. Manejo de Errores</h3>
        <p>JSON inválido.</p>

        <div class="example">
            <textarea id="code-json-4" readonly>// JSON válido
const jsonValido = '{"nombre":"Juan"}';

// JSON inválido (comillas simples, sin comillas en propiedades, etc)
const jsonInvalido1 = "{'nombre':'Juan'}"; // ✗
const jsonInvalido2 = '{nombre:"Juan"}'; // ✗
const jsonInvalido3 = '{"nombre":"Juan",}'; // ✗

console.log("Intentando parsear JSON inválido:\\n");

try {
    JSON.parse(jsonValido);
    console.log("✓ Válido 1: OK");
} catch (e) {
    console.log("✗ Error 1:", e.message);
}

try {
    JSON.parse(jsonInvalido1);
    console.log("✓ Válido 2: OK");
} catch (e) {
    console.log("✗ Error 2: Comillas simples no permitidas");
}

try {
    JSON.parse(jsonInvalido2);
    console.log("✓ Válido 3: OK");
} catch (e) {
    console.log("✗ Error 3: Propiedades sin comillas");
}

// Forma segura
function parseSeguro(jsonStr) {
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.log("Parse error:", e.message);
        return null;
    }
}

parseSeguro(jsonInvalido1);</textarea>
            <button onclick="runCode('code-json-4')">Ejecutar</button>
            <div class="output" id="output-json-4"></div>
        </div>

        <hr>

        <h3>5. Replacer y Reviver</h3>
        <p>Control avanzado de stringify/parse.</p>

        <div class="example">
            <textarea id="code-json-5" readonly>const usuario = {
    nombre: "Juan",
    password: "secreto123",
    email: "juan@email.com",
    edad: 30
};

// Replacer: filtrar propiedades
console.log("Con replacer:");
const json1 = JSON.stringify(usuario, ['nombre', 'email']);
console.log(json1);

// Replacer función: transformar
console.log("\\nReplacer función:");
const json2 = JSON.stringify(usuario, (key, value) => {
    if (key === 'password') return '***';
    if (typeof value === 'string') return value.toUpperCase();
    return value;
}, 2);
console.log(json2);

// Reviver: transformar al parsear
console.log("\\nReviver:");
const jsonData = '{"nombre":"juan","edad":30}';
const obj = JSON.parse(jsonData, (key, value) => {
    if (key === 'nombre') return value.charAt(0).toUpperCase() + value.slice(1);
    if (key === 'edad') return value + 1;
    return value;
});
console.log(obj);</textarea>
            <button onclick="runCode('code-json-5')">Ejecutar</button>
            <div class="output" id="output-json-5"></div>
        </div>

        <hr>

        <h3>6. Tipos en JSON</h3>
        <p>Qué tipos soporta JSON.</p>

        <div class="example">
            <textarea id="code-json-6" readonly>console.log("TIPOS EN JSON:\\n");

// ✓ Permitidos
console.log("✓ String:", JSON.stringify("texto"));
console.log("✓ Number:", JSON.stringify(123));
console.log("✓ Boolean:", JSON.stringify(true));
console.log("✓ Null:", JSON.stringify(null));
console.log("✓ Array:", JSON.stringify([1, 2, 3]));
console.log("✓ Object:", JSON.stringify({a: 1}));

// ✗ No permitidos
console.log("\\n✗ Undefined:", JSON.stringify(undefined)); // undefined
console.log("✗ Function:", JSON.stringify(() => {})); // undefined
console.log("✗ Symbol:", JSON.stringify(Symbol('x'))); // undefined
console.log("✗ Date:", JSON.stringify(new Date())); // "2024-01-01..."
console.log("✗ RegExp:", JSON.stringify(/test/)); // {}

// Solucionar tipos especiales
const objeto = {
    fecha: new Date(),
    funcion: () => "hola"
};

const json = JSON.stringify(objeto, (key, value) => {
    if (value instanceof Date) {
        return value.toISOString();
    }
    if (typeof value === 'function') {
        return '[Function]';
    }
    return value;
}, 2);

console.log("\\nCon replacer:", json);</textarea>
            <button onclick="runCode('code-json-6')">Ejecutar</button>
            <div class="output" id="output-json-6"></div>
        </div>

        <hr>

        <h3>7. Copia Profunda con JSON</h3>
        <p>Clonar objetos completos.</p>

        <div class="example">
            <textarea id="code-json-7" readonly>const original = {
    nombre: "Juan",
    datos: {
        edad: 30,
        ciudades: ["Madrid", "Barcelona"]
    }
};

// Copia profunda con JSON
const copia = JSON.parse(JSON.stringify(original));

console.log("Original:", original);
console.log("Copia:", copia);

// Modificar copia
copia.nombre = "Ana";
copia.datos.ciudades.push("Valencia");

console.log("\\nDespués de modificar copia:");
console.log("Original nombre:", original.nombre);
console.log("Original ciudades:", original.datos.ciudades);
console.log("Copia nombre:", copia.nombre);
console.log("Copia ciudades:", copia.datos.ciudades);

console.log("\\n✓ Completamente independiente");</textarea>
            <button onclick="runCode('code-json-7')">Ejecutar</button>
            <div class="output" id="output-json-7"></div>
        </div>

        <hr>

        <h3>8. LocalStorage y JSON</h3>
        <p>Guardar datos persistentemente.</p>

        <div class="example">
            <textarea id="code-json-8" readonly>// Simular localStorage
const fakeStorage = {};

function guardarUsuario() {
    const usuario = {
        id: 1,
        nombre: "Juan",
        email: "juan@email.com",
        preferencias: {
            tema: "oscuro",
            idioma: "es"
        }
    };
    
    // Guardar
    const json = JSON.stringify(usuario);
    fakeStorage['usuario'] = json;
    console.log("Guardado:", json);
}

function cargarUsuario() {
    const json = fakeStorage['usuario'];
    if (json) {
        const usuario = JSON.parse(json);
        console.log("\\nCargado:", usuario);
        console.log("Nombre:", usuario.nombre);
        console.log("Tema:", usuario.preferencias.tema);
    }
}

function limpiar() {
    fakeStorage['usuario'] = null;
    console.log("\\nLimpiado");
}

guardarUsuario();
cargarUsuario();
limpiar();</textarea>
            <button onclick="runCode('code-json-8')">Ejecutar</button>
            <div class="output" id="output-json-8"></div>
        </div>

        <hr>

        <h3>9. API y JSON</h3>
        <p>Enviar/Recibir JSON.</p>

        <div class="example">
            <textarea id="code-json-9" readonly>// Simulación de API

async function enviarDatos(datos) {
    // Convertir a JSON
    const json = JSON.stringify(datos);
    console.log("Enviando:", json);
    
    // Simular envío
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Servidor recibió JSON");
            resolve({ status: 'ok', id: 123 });
        }, 300);
    });
}

async function recibirDatos() {
    // Simular respuesta del servidor
    return new Promise(resolve => {
        setTimeout(() => {
            const jsonRespuesta = '{"usuarios":[{"id":1,"nombre":"Ana"},{"id":2,"nombre":"Juan"}]}';
            const datos = JSON.parse(jsonRespuesta);
            console.log("Respuesta parseada:", datos);
            resolve(datos);
        }, 300);
    });
}

async function ejemplo() {
    const usuario = {
        nombre: "María",
        email: "maria@email.com",
        rol: "admin"
    };
    
    console.log("1. Enviar:");
    const respuesta = await enviarDatos(usuario);
    console.log("Respuesta:", respuesta);
    
    console.log("\\n2. Recibir:");
    const usuarios = await recibirDatos();
}

await ejemplo();</textarea>
            <button onclick="runCode('code-json-9')">Ejecutar</button>
            <div class="output" id="output-json-9"></div>
        </div>

        <hr>

        <h3>10. Best Practices</h3>
        <p>Mejores prácticas con JSON.</p>

        <div class="example">
            <textarea id="code-json-10" readonly>console.log("BEST PRACTICES:\\n");

console.log("✅ Validar JSON recibido siempre");
console.log("✅ Usar try/catch en parse");
console.log("✅ Cuidar con datos sensibles");
console.log("✅ Documentar formato esperado");
console.log("✅ Usar replacer/reviver para tipos especiales");

console.log("\\n❌ Evitar:");
console.log("❌ eval() para parsear (NUNCA)");
console.log("❌ Guardar funciones en JSON");
console.log("❌ Almacenar passwords sin encriptar");
console.log("❌ JSON muy profundo (recursión)");

console.log("\\n💡 Tips:");
console.log("💡 Usar jq para inspeccionar JSON");
console.log("💡 Validar contra JSON Schema");
console.log("💡 Usar .json files para config");
console.log("💡 Formatear con prettier");</textarea>
            <button onclick="runCode('code-json-10')">Ejecutar</button>
            <div class="output" id="output-json-10"></div>
        </div>

    </section>
`;
