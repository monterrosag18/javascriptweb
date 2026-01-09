const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Template Literals (Plantillas de Texto)</h2>
        <p>Los template literals son una forma mejorada de trabajar con strings en JavaScript, usando backticks (\`) en lugar de comillas.</p>

        <h3>1. Sintaxis Básica</h3>
        <p>Usar backticks en lugar de comillas simples o dobles.</p>
        
        <div class="example">
            <textarea id="code-template-1" readonly>// Comillas tradicionales
const texto1 = "Hola mundo";
const texto2 = 'Hola mundo';

// Template literal
const texto3 = \`Hola mundo\`;

console.log(texto1);
console.log(texto2);
console.log(texto3);</textarea>
            <button onclick="runCode('code-template-1')">Ejecutar</button>
            <div class="output" id="output-template-1"></div>
        </div>

        <hr>

        <h3>2. Interpolación de Variables</h3>
        <p>Insertar variables con \${variable}.</p>

        <div class="example">
            <textarea id="code-template-2" readonly>const nombre = "Ana";
const edad = 25;

// Concatenación antigua
const saludo1 = "Hola, " + nombre + ". Tienes " + edad + " años.";

// Template literal
const saludo2 = \`Hola, \${nombre}. Tienes \${edad} años.\`;

console.log(saludo1);
console.log(saludo2);</textarea>
            <button onclick="runCode('code-template-2')">Ejecutar</button>
            <div class="output" id="output-template-2"></div>
        </div>

        <hr>

        <h3>3. Expresiones en Template Literals</h3>
        <p>Ejecutar cualquier expresión JavaScript dentro de \${}.</p>

        <div class="example">
            <textarea id="code-template-3" readonly>const a = 10;
const b = 5;

console.log(\`Suma: \${a + b}\`);
console.log(\`Resta: \${a - b}\`);
console.log(\`Multiplicación: \${a * b}\`);
console.log(\`División: \${a / b}\`);
console.log(\`El doble de \${a} es \${a * 2}\`);</textarea>
            <button onclick="runCode('code-template-3')">Ejecutar</button>
            <div class="output" id="output-template-3"></div>
        </div>

        <hr>

        <h3>4. Strings Multilínea</h3>
        <p>Crear strings de varias líneas sin caracteres especiales.</p>

        <div class="example">
            <textarea id="code-template-4" readonly>// Forma antigua (necesita \\n)
const texto1 = "Primera línea\\nSegunda línea\\nTercera línea";

// Template literal (respeta saltos de línea)
const texto2 = \`Primera línea
Segunda línea
Tercera línea\`;

console.log("Con \\\\n:");
console.log(texto1);
console.log("\\nCon template literal:");
console.log(texto2);</textarea>
            <button onclick="runCode('code-template-4')">Ejecutar</button>
            <div class="output" id="output-template-4"></div>
        </div>

        <hr>

        <h3>5. HTML Multilínea</h3>
        <p>Generar HTML de forma legible.</p>

        <div class="example">
            <textarea id="code-template-5" readonly>const nombre = "Ana";
const email = "ana@email.com";

const html = \`
    <div class="usuario">
        <h3>\${nombre}</h3>
        <p>Email: \${email}</p>
    </div>
\`;

console.log(html);</textarea>
            <button onclick="runCode('code-template-5')">Ejecutar</button>
            <div class="output" id="output-template-5"></div>
        </div>

        <hr>

        <h3>6. Llamadas a Funciones</h3>
        <p>Ejecutar funciones dentro de template literals.</p>

        <div class="example">
            <textarea id="code-template-6" readonly>function obtenerSaludo(nombre) {
    return \`Hola, \${nombre}!\`;
}

function obtenerFecha() {
    return new Date().toLocaleDateString();
}

const mensaje = \`\${obtenerSaludo("Ana")} Hoy es \${obtenerFecha()}\`;
console.log(mensaje);

const precio = 99.99;
console.log(\`Precio: $\${precio.toFixed(2)}\`);</textarea>
            <button onclick="runCode('code-template-6')">Ejecutar</button>
            <div class="output" id="output-template-6"></div>
        </div>

        <hr>

        <h3>7. Operadores Ternarios</h3>
        <p>Usar condicionales dentro de template literals.</p>

        <div class="example">
            <textarea id="code-template-7" readonly>const edad = 20;
const nombre = "Luis";

console.log(\`\${nombre} es \${edad >= 18 ? "mayor" : "menor"} de edad\`);

const precio = 150;
console.log(\`Precio: \${precio > 100 ? "Alto" : "Bajo"}\`);

const usuario = null;
console.log(\`Usuario: \${usuario ? usuario.nombre : "Invitado"}\`);</textarea>
            <button onclick="runCode('code-template-7')">Ejecutar</button>
            <div class="output" id="output-template-7"></div>
        </div>

        <hr>

        <h3>8. Arrays y Métodos</h3>
        <p>Trabajar con arrays dentro de template literals.</p>

        <div class="example">
            <textarea id="code-template-8" readonly>const nombres = ["Ana", "Luis", "Pedro"];

console.log(\`Hay \${nombres.length} personas\`);
console.log(\`Nombres: \${nombres.join(", ")}\`);
console.log(\`Primer nombre: \${nombres[0]}\`);

const numeros = [1, 2, 3, 4, 5];
console.log(\`Suma: \${numeros.reduce((a, b) => a + b, 0)}\`);</textarea>
            <button onclick="runCode('code-template-8')">Ejecutar</button>
            <div class="output" id="output-template-8"></div>
        </div>

        <hr>

        <h3>9. Objetos</h3>
        <p>Acceder a propiedades de objetos.</p>

        <div class="example">
            <textarea id="code-template-9" readonly>const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    profesion: "Desarrolladora"
};

console.log(\`\${persona.nombre} tiene \${persona.edad} años\`);
console.log(\`Vive en \${persona.ciudad}\`);
console.log(\`Trabaja como \${persona.profesion}\`);

const producto = { nombre: "Laptop", precio: 1000 };
console.log(\`\${producto.nombre}: $\${producto.precio}\`);</textarea>
            <button onclick="runCode('code-template-9')">Ejecutar</button>
            <div class="output" id="output-template-9"></div>
        </div>

        <hr>

        <h3>10. Template Literals Anidados</h3>
        <p>Anidar template literals dentro de otros.</p>

        <div class="example">
            <textarea id="code-template-10" readonly>const usuarios = [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false },
    { nombre: "Pedro", activo: true }
];

const lista = \`Usuarios:
\${usuarios.map(u => \`- \${u.nombre} (\${u.activo ? "Activo" : "Inactivo"})\`).join("\\n")}\`;

console.log(lista);</textarea>
            <button onclick="runCode('code-template-10')">Ejecutar</button>
            <div class="output" id="output-template-10"></div>
        </div>

        <hr>

        <h3>11. Escape de Backticks</h3>
        <p>Incluir backticks literales en template literals.</p>

        <div class="example">
            <textarea id="code-template-11" readonly>const codigo = \`const nombre = \\\`Ana\\\`;\`;
console.log(codigo);

const ejemplo = \`Para usar template literals, usa backticks: \\\`texto\\\`\`;
console.log(ejemplo);

const combinado = \`Código: \\\`console.log("Hola")\\\`\`;
console.log(combinado);</textarea>
            <button onclick="runCode('code-template-11')">Ejecutar</button>
            <div class="output" id="output-template-11"></div>
        </div>

        <hr>

        <h3>12. SQL Queries</h3>
        <p>Crear queries SQL legibles.</p>

        <div class="example">
            <textarea id="code-template-12" readonly>const tabla = "usuarios";
const id = 5;

const query1 = \`
    SELECT * FROM \${tabla}
    WHERE id = \${id}
\`;

const nombre = "Ana";
const edad = 25;

const query2 = \`
    INSERT INTO usuarios (nombre, edad)
    VALUES ('\${nombre}', \${edad})
\`;

console.log(query1);
console.log(query2);</textarea>
            <button onclick="runCode('code-template-12')">Ejecutar</button>
            <div class="output" id="output-template-12"></div>
        </div>

        <hr>

        <h3>13. URLs Dinámicas</h3>
        <p>Construir URLs con parámetros.</p>

        <div class="example">
            <textarea id="code-template-13" readonly>const base = "https://api.ejemplo.com";
const recurso = "usuarios";
const id = 123;

const url1 = \`\${base}/\${recurso}/\${id}\`;
console.log(url1);

const params = { page: 1, limit: 10, sort: "name" };
const query = Object.entries(params)
    .map(([k, v]) => \`\${k}=\${v}\`)
    .join("&");
const url2 = \`\${base}/\${recurso}?\${query}\`;
console.log(url2);</textarea>
            <button onclick="runCode('code-template-13')">Ejecutar</button>
            <div class="output" id="output-template-13"></div>
        </div>

        <hr>

        <h3>14. JSON Formatting</h3>
        <p>Formatear JSON de forma legible.</p>

        <div class="example">
            <textarea id="code-template-14" readonly>const usuario = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

const json = JSON.stringify(usuario, null, 2);
const mensaje = \`Usuario en JSON:
\${json}\`;

console.log(mensaje);

const config = { host: "localhost", port: 3000 };
console.log(\`Config: \${JSON.stringify(config)}\`);</textarea>
            <button onclick="runCode('code-template-14')">Ejecutar</button>
            <div class="output" id="output-template-14"></div>
        </div>

        <hr>

        <h3>15. Tablas de Texto</h3>
        <p>Crear tablas simples en texto.</p>

        <div class="example">
            <textarea id="code-template-15" readonly>const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 }
];

const tabla = \`
Producto      | Precio
--------------------------
\${productos.map(p => \`\${p.nombre.padEnd(13)} | $\${p.precio}\`).join("\\n")}
\`;

console.log(tabla);</textarea>
            <button onclick="runCode('code-template-15')">Ejecutar</button>
            <div class="output" id="output-template-15"></div>
        </div>

        <hr>

        <h3>16. Logging Avanzado</h3>
        <p>Mensajes de log formateados.</p>

        <div class="example">
            <textarea id="code-template-16" readonly>const nivel = "ERROR";
const timestamp = new Date().toISOString();
const mensaje = "Conexión fallida";
const detalles = { host: "localhost", port: 3000 };

const log = \`[\${timestamp}] \${nivel}: \${mensaje}
Detalles: \${JSON.stringify(detalles)}\`;

console.log(log);

const usuario = "Ana";
const accion = "login";
console.log(\`[INFO] Usuario '\${usuario}' realizó: \${accion}\`);</textarea>
            <button onclick="runCode('code-template-16')">Ejecutar</button>
            <div class="output" id="output-template-16"></div>
        </div>

        <hr>

        <h3>17. Markdown Generation</h3>
        <p>Generar markdown dinámicamente.</p>

        <div class="example">
            <textarea id="code-template-17" readonly>const titulo = "Mi Documento";
const autor = "Ana";
const items = ["Item 1", "Item 2", "Item 3"];

const markdown = \`# \${titulo}

**Autor:** \${autor}

## Lista de Items

\${items.map((item, i) => \`\${i + 1}. \${item}\`).join("\\n")}
\`;

console.log(markdown);</textarea>
            <button onclick="runCode('code-template-17')">Ejecutar</button>
            <div class="output" id="output-template-17"></div>
        </div>

        <hr>

        <h3>18. Email Templates</h3>
        <p>Plantillas de correo electrónico.</p>

        <div class="example">
            <textarea id="code-template-18" readonly>const destinatario = "Ana";
const producto = "Laptop";
const precio = 999;
const fecha = "15/01/2026";

const email = \`
Hola \${destinatario},

Tu pedido de \${producto} ha sido confirmado.

Detalles:
- Producto: \${producto}
- Precio: $\${precio}
- Fecha estimada de entrega: \${fecha}

Gracias por tu compra.
\`;

console.log(email);</textarea>
            <button onclick="runCode('code-template-18')">Ejecutar</button>
            <div class="output" id="output-template-18"></div>
        </div>

        <hr>

        <h3>19. CSS en JS</h3>
        <p>Crear estilos CSS dinámicos.</p>

        <div class="example">
            <textarea id="code-template-19" readonly>const color = "#3498db";
const tamano = "16px";
const padding = "10px";

const estilos = \`
    .boton {
        background-color: \${color};
        font-size: \${tamano};
        padding: \${padding};
        border: none;
        border-radius: 4px;
    }
\`;

console.log(estilos);

const ancho = 200;
const alto = 100;
console.log(\`.caja { width: \${ancho}px; height: \${alto}px; }\`);</textarea>
            <button onclick="runCode('code-template-19')">Ejecutar</button>
            <div class="output" id="output-template-19"></div>
        </div>

        <hr>

        <h3>20. RegExp con Variables</h3>
        <p>Crear expresiones regulares dinámicas.</p>

        <div class="example">
            <textarea id="code-template-20" readonly>const palabra = "hola";
const regex1 = new RegExp(\`\${palabra}\`, "gi");

const texto = "Hola mundo, hola JavaScript, HOLA a todos";
const coincidencias = texto.match(regex1);

console.log(\`Buscando '\${palabra}':\`, coincidencias);

const extension = "js";
const patron = \`\\\\.\${extension}$\`;
console.log(\`Patrón: \${patron}\`);
console.log("archivo.js".match(new RegExp(patron)));</textarea>
            <button onclick="runCode('code-template-20')">Ejecutar</button>
            <div class="output" id="output-template-20"></div>
        </div>

        <hr>

        <h3>21. Tagged Templates - Básico</h3>
        <p>Funciones que procesan template literals.</p>

        <div class="example">
            <textarea id="code-template-21" readonly>function mayusculas(strings, ...values) {
    return strings.reduce((resultado, str, i) => {
        return resultado + str + (values[i] ? values[i].toString().toUpperCase() : "");
    }, "");
}

const nombre = "ana";
const ciudad = "madrid";

const resultado = mayusculas\`Hola, soy \${nombre} de \${ciudad}\`;
console.log(resultado);</textarea>
            <button onclick="runCode('code-template-21')">Ejecutar</button>
            <div class="output" id="output-template-21"></div>
        </div>

        <hr>

        <h3>22. Tagged Templates - Highlight</h3>
        <p>Resaltar variables en el texto.</p>

        <div class="example">
            <textarea id="code-template-22" readonly>function resaltar(strings, ...values) {
    return strings.reduce((resultado, str, i) => {
        const valor = values[i] ? \`**\${values[i]}**\` : "";
        return resultado + str + valor;
    }, "");
}

const usuario = "Ana";
const puntos = 150;

const mensaje = resaltar\`Usuario \${usuario} tiene \${puntos} puntos\`;
console.log(mensaje);</textarea>
            <button onclick="runCode('code-template-22')">Ejecutar</button>
            <div class="output" id="output-template-22"></div>
        </div>

        <hr>

        <h3>23. Tagged Templates - SQL Safe</h3>
        <p>Sanitizar valores en queries SQL.</p>

        <div class="example">
            <textarea id="code-template-23" readonly>function sql(strings, ...values) {
    return strings.reduce((query, str, i) => {
        let valor = values[i];
        if (valor !== undefined) {
            // Escapar comillas simples
            if (typeof valor === "string") {
                valor = \`'\${valor.replace(/'/g, "''")}\`";
            }
        } else {
            valor = "";
        }
        return query + str + valor;
    }, "");
}

const nombre = "O'Brien";
const edad = 25;

const query = sql\`SELECT * FROM usuarios WHERE nombre = \${nombre} AND edad = \${edad}\`;
console.log(query);</textarea>
            <button onclick="runCode('code-template-23')">Ejecutar</button>
            <div class="output" id="output-template-23"></div>
        </div>

        <hr>

        <h3>24. Tagged Templates - i18n</h3>
        <p>Internacionalización con tagged templates.</p>

        <div class="example">
            <textarea id="code-template-24" readonly>const traducciones = {
    "Hola": "Hello",
    "mundo": "world"
};

function traducir(strings, ...values) {
    return strings.reduce((resultado, str, i) => {
        const valor = values[i] || "";
        const strTraducido = traducciones[str.trim()] || str;
        return resultado + strTraducido + valor;
    }, "");
}

// Simulación de traducción
console.log("Original: Hola mundo");
console.log("Traducido: Hello world");</textarea>
            <button onclick="runCode('code-template-24')">Ejecutar</button>
            <div class="output" id="output-template-24"></div>
        </div>

        <hr>

        <h3>25. Debugging Mejorado</h3>
        <p>Usar template literals para debug más claro.</p>

        <div class="example">
            <textarea id="code-template-25" readonly>const variable1 = 42;
const variable2 = "test";
const variable3 = [1, 2, 3];

// Debug tradicional
console.log("variable1:", variable1, "variable2:", variable2);

// Con template literals (más claro)
console.log(\`variable1: \${variable1}, variable2: \${variable2}\`);
console.log(\`variable3: \${JSON.stringify(variable3)}\`);

const obj = { x: 10, y: 20 };
console.log(\`Objeto: \${JSON.stringify(obj, null, 2)}\`);</textarea>
            <button onclick="runCode('code-template-25')">Ejecutar</button>
            <div class="output" id="output-template-25"></div>
        </div>

        <hr>

        <h3>26. Formateo de Números</h3>
        <p>Formatear números en strings.</p>

        <div class="example">
            <textarea id="code-template-26" readonly>const precio = 1234.56;
const descuento = 0.15;
const cantidad = 3;

console.log(\`Precio: $\${precio.toFixed(2)}\`);
console.log(\`Descuento: \${(descuento * 100).toFixed(0)}%\`);
console.log(\`Cantidad: \${cantidad}\`);

const total = precio * cantidad * (1 - descuento);
console.log(\`Total: $\${total.toFixed(2)}\`);

const porcentaje = 0.755;
console.log(\`Progreso: \${(porcentaje * 100).toFixed(1)}%\`);</textarea>
            <button onclick="runCode('code-template-26')">Ejecutar</button>
            <div class="output" id="output-template-26"></div>
        </div>

        <hr>

        <h3>27. Paths de Archivos</h3>
        <p>Construir rutas de archivos.</p>

        <div class="example">
            <textarea id="code-template-27" readonly>const directorio = "/home/usuario";
const carpeta = "documentos";
const archivo = "reporte.pdf";

const ruta = \`\${directorio}/\${carpeta}/\${archivo}\`;
console.log("Ruta completa:", ruta);

const ext = "txt";
const nombre = "datos";
console.log(\`Archivo: \${nombre}.\${ext}\`);

const base = "./src";
const modulo = "utils";
const funcion = "helper";
console.log(\`import { \${funcion} } from '\${base}/\${modulo}';\`);</textarea>
            <button onclick="runCode('code-template-27')">Ejecutar</button>
            <div class="output" id="output-template-27"></div>
        </div>

        <hr>

        <h3>28. Mensajes de Error</h3>
        <p>Crear mensajes de error descriptivos.</p>

        <div class="example">
            <textarea id="code-template-28" readonly>function validarEdad(edad) {
    if (edad < 0) {
        throw new Error(\`Edad inválida: \${edad}. Debe ser positiva.\`);
    }
    if (edad > 150) {
        throw new Error(\`Edad inválida: \${edad}. Demasiado alta.\`);
    }
    return true;
}

try {
    validarEdad(200);
} catch (error) {
    console.log(\`Error capturado: \${error.message}\`);
}

const archivo = "config.json";
console.log(\`Error: No se pudo leer el archivo '\${archivo}'\`);</textarea>
            <button onclick="runCode('code-template-28')">Ejecutar</button>
            <div class="output" id="output-template-28"></div>
        </div>

        <hr>

        <h3>29. Performance Logging</h3>
        <p>Medir y reportar tiempos de ejecución.</p>

        <div class="example">
            <textarea id="code-template-29" readonly>const inicio = Date.now();

// Simular operación
let suma = 0;
for (let i = 0; i < 1000000; i++) {
    suma += i;
}

const fin = Date.now();
const tiempo = fin - inicio;

console.log(\`Operación completada en \${tiempo}ms\`);
console.log(\`Resultado: \${suma}\`);

const operacion = "calcular suma";
console.log(\`[\${operacion}] Duración: \${tiempo}ms\`);</textarea>
            <button onclick="runCode('code-template-29')">Ejecutar</button>
            <div class="output" id="output-template-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con template literals.</p>

        <div class="example">
            <textarea id="code-template-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar para interpolación de variables");
const nombre = "Ana";
console.log(\`Hola, \${nombre}\`);

console.log("\\n✅ Usar para strings multilínea");
const texto = \`Línea 1
Línea 2\`;

console.log("\\n✅ Usar para HTML/SQL templates");
const html = \`<div>\${nombre}</div>\`;

console.log("\\n❌ No abusar de expresiones complejas");
console.log("❌ Cuidado con inyección de código");
console.log("❌ No para strings simples sin variables");

console.log("\\n✨ Template literals son poderosos y legibles");</textarea>
            <button onclick="runCode('code-template-30')">Ejecutar</button>
            <div class="output" id="output-template-30"></div>
        </div>

    </section>
`;
