const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Módulos (import/export)</h2>
        <p>Los módulos permiten dividir el código en archivos separados y reutilizables, organizando mejor los proyectos.</p>
        <p><strong>Nota:</strong> Los ejemplos muestran la sintaxis y conceptos. En proyectos reales se usan con <code>type="module"</code> en el HTML.</p>

        <h3>1. Export Básico (Named Exports)</h3>
        <p>Exportar múltiples elementos con nombre.</p>
        
        <div class="example">
            <textarea id="code-mod-1" readonly>// Archivo: matematicas.js

export const PI = 3.14159;

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

console.log("Módulo con exports nombrados");
console.log("PI:", PI);
console.log("sumar(5, 3):", sumar(5, 3));</textarea>
            <button onclick="runCode('code-mod-1')">Ejecutar</button>
            <div class="output" id="output-mod-1"></div>
        </div>

        <hr>

        <h3>2. Import Básico (Named Imports)</h3>
        <p>Importar elementos específicos por nombre.</p>

        <div class="example">
            <textarea id="code-mod-2" readonly>// Sintaxis de import
console.log("import { PI, sumar } from './matematicas.js';");

// Simular el resultado
const PI = 3.14159;
function sumar(a, b) { return a + b; }

console.log("PI importado:", PI);
console.log("sumar importado:", sumar(10, 5));</textarea>
            <button onclick="runCode('code-mod-2')">Ejecutar</button>
            <div class="output" id="output-mod-2"></div>
        </div>

        <hr>

        <h3>3. Export Default</h3>
        <p>Exportar un valor por defecto del módulo.</p>

        <div class="example">
            <textarea id="code-mod-3" readonly>// Archivo: calculadora.js

function Calculadora() {
    this.sumar = (a, b) => a + b;
    this.restar = (a, b) => a - b;
}

// export default Calculadora;

console.log("Export default Calculadora");

// Uso
const calc = new Calculadora();
console.log("calc.sumar(5, 3):", calc.sumar(5, 3));</textarea>
            <button onclick="runCode('code-mod-3')">Ejecutar</button>
            <div class="output" id="output-mod-3"></div>
        </div>

        <hr>

        <h3>4. Import Default</h3>
        <p>Importar el export por defecto con cualquier nombre.</p>

        <div class="example">
            <textarea id="code-mod-4" readonly>// import Calculadora from './calculadora.js';
// import MiCalc from './calculadora.js'; // Puedes usar cualquier nombre

console.log("Con export default, importas sin llaves:");
console.log("import Calculadora from './calculadora.js'");
console.log("import MiCalc from './calculadora.js'");
console.log("\\nAmbos nombres funcionan para el mismo módulo");</textarea>
            <button onclick="runCode('code-mod-4')">Ejecutar</button>
            <div class="output" id="output-mod-4"></div>
        </div>

        <hr>

        <h3>5. Combinar Named y Default Exports</h3>
        <p>Un módulo puede tener export default y named exports.</p>

        <div class="example">
            <textarea id="code-mod-5" readonly>// Archivo: utilidades.js

// Export default
const configuracion = {
    apiUrl: "https://api.ejemplo.com",
    timeout: 5000
};

// Named exports
const version = "1.0.0";
const formatearFecha = (fecha) => fecha.toLocaleDateString();

console.log("Módulo con default y named exports:");
console.log("export default:", configuracion);
console.log("export { version, formatearFecha }");</textarea>
            <button onclick="runCode('code-mod-5')">Ejecutar</button>
            <div class="output" id="output-mod-5"></div>
        </div>

        <hr>

        <h3>6. Import Todo como Namespace</h3>
        <p>Importar todo el módulo como un objeto.</p>

        <div class="example">
            <textarea id="code-mod-6" readonly>// import * as Math from './matematicas.js';

console.log("Importar todo:");
console.log("import * as Math from './matematicas.js'");
console.log("\\nUso:");
console.log("Math.PI");
console.log("Math.sumar(5, 3)");
console.log("Math.restar(10, 4)");

// Simular
const Math = {
    PI: 3.14159,
    sumar: (a, b) => a + b
};
console.log("\\nMath.PI:", Math.PI);</textarea>
            <button onclick="runCode('code-mod-6')">Ejecutar</button>
            <div class="output" id="output-mod-6"></div>
        </div>

        <hr>

        <h3>7. Renombrar al Importar</h3>
        <p>Cambiar el nombre de imports con 'as'.</p>

        <div class="example">
            <textarea id="code-mod-7" readonly>// import { sumar as add, restar as subtract } from './math.js';

console.log("Renombrar imports:");
console.log("import { sumar as add } from './math.js'");
console.log("\\nAhora usas:");
console.log("add(5, 3) en lugar de sumar(5, 3)");

// Simular
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log("\\nadd(5, 3):", add(5, 3));
console.log("subtract(10, 4):", subtract(10, 4));</textarea>
            <button onclick="runCode('code-mod-7')">Ejecutar</button>
            <div class="output" id="output-mod-7"></div>
        </div>

        <hr>

        <h3>8. Renombrar al Exportar</h3>
        <p>Cambiar nombres al exportar.</p>

        <div class="example">
            <textarea id="code-mod-8" readonly>// Archivo: funciones.js

function suma(a, b) { return a + b; }
function resta(a, b) { return a - b; }

// export { suma as add, resta as subtract };

console.log("Renombrar exports:");
console.log("function suma(a, b) { return a + b; }");
console.log("export { suma as add };");
console.log("\\nAl importar:");
console.log("import { add } from './funciones.js'");</textarea>
            <button onclick="runCode('code-mod-8')">Ejecutar</button>
            <div class="output" id="output-mod-8"></div>
        </div>

        <hr>

        <h3>9. Re-exportar (Re-export)</h3>
        <p>Exportar elementos de otros módulos.</p>

        <div class="example">
            <textarea id="code-mod-9" readonly>// Archivo: index.js (barrel export)

// export { sumar, restar } from './matematicas.js';
// export { capitalizar } from './strings.js';
// export { formatearFecha } from './fechas.js';

console.log("Re-exportar (barrel exports):");
console.log("\\nArchivo index.js que centraliza exports:");
console.log("export { sumar } from './matematicas.js'");
console.log("export { capitalizar } from './strings.js'");
console.log("\\nPermite: import { sumar, capitalizar } from './index.js'");</textarea>
            <button onclick="runCode('code-mod-9')">Ejecutar</button>
            <div class="output" id="output-mod-9"></div>
        </div>

        <hr>

        <h3>10. Export List</h3>
        <p>Exportar múltiples elementos al final del archivo.</p>

        <div class="example">
            <textarea id="code-mod-10" readonly>// Archivo: utilidades.js

const PI = 3.14159;
const E = 2.71828;

function log(mensaje) {
    console.log("[LOG]", mensaje);
}

function error(mensaje) {
    console.error("[ERROR]", mensaje);
}

// Exportar todo al final
// export { PI, E, log, error };

console.log("Export list al final:");
console.log("export { PI, E, log, error };");</textarea>
            <button onclick="runCode('code-mod-10')">Ejecutar</button>
            <div class="output" id="output-mod-10"></div>
        </div>

        <hr>

        <h3>11. Import Dinámico</h3>
        <p>Cargar módulos bajo demanda con import().</p>

        <div class="example">
            <textarea id="code-mod-11" readonly>// Import dinámico (retorna una Promise)
console.log("Import dinámico:");
console.log("const modulo = await import('./modulo.js');");
console.log("\\nPermite:");
console.log("- Lazy loading");
console.log("- Code splitting");
console.log("- Carga condicional");

// Ejemplo de uso
console.log("\\nif (condicion) {");
console.log("  const { funcion } = await import('./modulo.js');");
console.log("  funcion();");
console.log("}");</textarea>
            <button onclick="runCode('code-mod-11')">Ejecutar</button>
            <div class="output" id="output-mod-11"></div>
        </div>

        <hr>

        <h3>12. Módulo con Clase</h3>
        <p>Exportar clases desde módulos.</p>

        <div class="example">
            <textarea id="code-mod-12" readonly>// Archivo: Usuario.js

class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        return \`Hola, soy \${this.nombre}\`;
    }
}

// export default Usuario;

console.log("Exportar clase:");
const usuario = new Usuario("Ana", 25);
console.log(usuario.saludar());</textarea>
            <button onclick="runCode('code-mod-12')">Ejecutar</button>
            <div class="output" id="output-mod-12"></div>
        </div>

        <hr>

        <h3>13. Constantes del Módulo</h3>
        <p>Módulo con configuración y constantes.</p>

        <div class="example">
            <textarea id="code-mod-13" readonly>// Archivo: config.js

const CONFIG = {
    API_URL: "https://api.ejemplo.com",
    API_KEY: "abc123",
    TIMEOUT: 5000,
    MAX_RETRIES: 3
};

const COLORES = {
    PRIMARIO: "#3498db",
    SECUNDARIO: "#2ecc71",
    ERROR: "#e74c3c"
};

// export { CONFIG, COLORES };

console.log("Módulo de constantes:");
console.log("CONFIG:", CONFIG);
console.log("COLORES:", COLORES);</textarea>
            <button onclick="runCode('code-mod-13')">Ejecutar</button>
            <div class="output" id="output-mod-13"></div>
        </div>

        <hr>

        <h3>14. Módulo de Utilidades</h3>
        <p>Funciones auxiliares organizadas en módulo.</p>

        <div class="example">
            <textarea id="code-mod-14" readonly>// Archivo: string-utils.js

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function truncar(texto, max) {
    return texto.length > max ? texto.slice(0, max) + "..." : texto;
}

function slug(texto) {
    return texto.toLowerCase().replace(/\\s+/g, "-");
}

// export { capitalizar, truncar, slug };

console.log("Utilidades de strings:");
console.log(capitalizar("hola"));
console.log(truncar("texto largo", 5));
console.log(slug("Hola Mundo"));</textarea>
            <button onclick="runCode('code-mod-14')">Ejecutar</button>
            <div class="output" id="output-mod-14"></div>
        </div>

        <hr>

        <h3>15. Estructura de Carpetas</h3>
        <p>Organización típica de proyecto con módulos.</p>

        <div class="example">
            <textarea id="code-mod-15" readonly>console.log("ESTRUCTURA DE PROYECTO:\\n");

console.log("/src");
console.log("  /components");
console.log("    Button.js");
console.log("    Header.js");
console.log("  /utils");
console.log("    math.js");
console.log("    string.js");
console.log("  /services");
console.log("    api.js");
console.log("    auth.js");
console.log("  /config");
console.log("    constants.js");
console.log("  index.js");</textarea>
            <button onclick="runCode('code-mod-15')">Ejecutar</button>
            <div class="output" id="output-mod-15"></div>
        </div>

        <hr>

        <h3>16. Módulo Singleton</h3>
        <p>Patrón singleton usando módulos.</p>

        <div class="example">
            <textarea id="code-mod-16" readonly>// Archivo: logger.js

class Logger {
    constructor() {
        this.logs = [];
    }
    
    log(mensaje) {
        const entrada = { fecha: new Date(), mensaje };
        this.logs.push(entrada);
        console.log(\`[\${entrada.fecha.toLocaleTimeString()}] \${mensaje}\`);
    }
    
    obtenerLogs() {
        return this.logs;
    }
}

// Crear instancia única
const logger = new Logger();

// export default logger;

logger.log("Aplicación iniciada");
logger.log("Usuario conectado");</textarea>
            <button onclick="runCode('code-mod-16')">Ejecutar</button>
            <div class="output" id="output-mod-16"></div>
        </div>

        <hr>

        <h3>17. Módulo con Estado</h3>
        <p>Mantener estado privado en un módulo.</p>

        <div class="example">
            <textarea id="code-mod-17" readonly>// Archivo: contador.js

let cuenta = 0; // Estado privado

function incrementar() {
    cuenta++;
    return cuenta;
}

function decrementar() {
    cuenta--;
    return cuenta;
}

function obtener() {
    return cuenta;
}

// export { incrementar, decrementar, obtener };

console.log("Estado privado en módulo:");
console.log("incrementar():", incrementar());
console.log("incrementar():", incrementar());
console.log("obtener():", obtener());</textarea>
            <button onclick="runCode('code-mod-17')">Ejecutar</button>
            <div class="output" id="output-mod-17"></div>
        </div>

        <hr>

        <h3>18. Export Agregado</h3>
        <p>Re-exportar todo de otro módulo.</p>

        <div class="example">
            <textarea id="code-mod-18" readonly>// Archivo: index.js

// export * from './matematicas.js';
// export * from './strings.js';
// export * as dates from './fechas.js';

console.log("Export agregado:");
console.log("\\nexport * from './matematicas.js';");
console.log("Exporta todo de matematicas.js");
console.log("\\nexport * as dates from './fechas.js';");
console.log("Exporta todo como namespace 'dates'");</textarea>
            <button onclick="runCode('code-mod-18')">Ejecutar</button>
            <div class="output" id="output-mod-18"></div>
        </div>

        <hr>

        <h3>19. Módulo Factory</h3>
        <p>Función factory exportada desde módulo.</p>

        <div class="example">
            <textarea id="code-mod-19" readonly>// Archivo: crearUsuario.js

function crearUsuario(nombre, edad) {
    return {
        nombre,
        edad,
        saludar() {
            console.log(\`Hola, soy \${this.nombre}\`);
        },
        cumplirAños() {
            this.edad++;
            console.log(\`Ahora tengo \${this.edad} años\`);
        }
    };
}

// export default crearUsuario;

const usuario = crearUsuario("Ana", 25);
usuario.saludar();
usuario.cumplirAños();</textarea>
            <button onclick="runCode('code-mod-19')">Ejecutar</button>
            <div class="output" id="output-mod-19"></div>
        </div>

        <hr>

        <h3>20. Side Effects Import</h3>
        <p>Importar módulo solo por sus efectos secundarios.</p>

        <div class="example">
            <textarea id="code-mod-20" readonly>// Archivo: polyfills.js
// Código que modifica prototipos o añade polyfills

console.log("Side effects import:");
console.log("import './polyfills.js';");
console.log("\\nNo importa nada específico,");
console.log("solo ejecuta el código del módulo");
console.log("\\nÚtil para:");
console.log("- Polyfills");
console.log("- Inicialización");
console.log("- Configuración global");</textarea>
            <button onclick="runCode('code-mod-20')">Ejecutar</button>
            <div class="output" id="output-mod-20"></div>
        </div>

        <hr>

        <h3>21. Módulo Async</h3>
        <p>Funciones asíncronas en módulos.</p>

        <div class="example">
            <textarea id="code-mod-21" readonly>// Archivo: api.js

async function obtenerUsuarios() {
    // Simular fetch
    return Promise.resolve([
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Luis" }
    ]);
}

async function obtenerUsuario(id) {
    const usuarios = await obtenerUsuarios();
    return usuarios.find(u => u.id === id);
}

// export { obtenerUsuarios, obtenerUsuario };

obtenerUsuario(1).then(usuario => {
    console.log("Usuario:", usuario);
});</textarea>
            <button onclick="runCode('code-mod-21')">Ejecutar</button>
            <div class="output" id="output-mod-21"></div>
        </div>

        <hr>

        <h3>22. Type Module en HTML</h3>
        <p>Cómo usar módulos en HTML.</p>

        <div class="example">
            <textarea id="code-mod-22" readonly>console.log("USO EN HTML:\\n");

console.log('<script type="module" src="main.js"></script>');
console.log("\\nCaracterísticas:");
console.log("- Modo estricto automático");
console.log("- Alcance propio (no global)");
console.log("- Defer automático");
console.log("- Una sola ejecución");
console.log("\\nPuedes usar import/export directamente");</textarea>
            <button onclick="runCode('code-mod-22')">Ejecutar</button>
            <div class="output" id="output-mod-22"></div>
        </div>

        <hr>

        <h3>23. Módulos vs Scripts Clásicos</h3>
        <p>Diferencias entre módulos y scripts tradicionales.</p>

        <div class="example">
            <textarea id="code-mod-23" readonly>console.log("MÓDULOS vs SCRIPTS:\\n");

console.log("Módulos:");
console.log("- Modo estricto por defecto");
console.log("- Alcance de módulo");
console.log("- this es undefined en nivel superior");
console.log("- Imports/exports");
console.log("\\nScripts clásicos:");
console.log("- Modo no estricto por defecto");
console.log("- Alcance global");
console.log("- this es window");
console.log("- Sin imports/exports nativos");</textarea>
            <button onclick="runCode('code-mod-23')">Ejecutar</button>
            <div class="output" id="output-mod-23"></div>
        </div>

        <hr>

        <h3>24. Circular Dependencies</h3>
        <p>Dependencias circulares entre módulos.</p>

        <div class="example">
            <textarea id="code-mod-24" readonly>console.log("DEPENDENCIAS CIRCULARES:\\n");

console.log("Archivo A:");
console.log("import { b } from './B.js';");
console.log("export const a = 'A';");
console.log("\\nArchivo B:");
console.log("import { a } from './A.js';");
console.log("export const b = 'B';");
console.log("\\n⚠️ Puede causar problemas");
console.log("✅ Evitar cuando sea posible");
console.log("✅ Reorganizar código");</textarea>
            <button onclick="runCode('code-mod-24')">Ejecutar</button>
            <div class="output" id="output-mod-24"></div>
        </div>

        <hr>

        <h3>25. Tree Shaking</h3>
        <p>Eliminación de código no usado en bundlers.</p>

        <div class="example">
            <textarea id="code-mod-25" readonly>console.log("TREE SHAKING:\\n");

console.log("Módulo con muchas funciones:");
console.log("export function a() {}");
console.log("export function b() {}");
console.log("export function c() {}");
console.log("\\nSi solo importas:");
console.log("import { a } from './utils.js';");
console.log("\\nEl bundler elimina b() y c()");
console.log("del bundle final (tree shaking)");
console.log("\\n✅ Reduce tamaño del bundle");</textarea>
            <button onclick="runCode('code-mod-25')">Ejecutar</button>
            <div class="output" id="output-mod-25"></div>
        </div>

        <hr>

        <h3>26. CommonJS vs ES Modules</h3>
        <p>Diferencias con el sistema de módulos de Node.js.</p>

        <div class="example">
            <textarea id="code-mod-26" readonly>console.log("ES MODULES (navegador/Node moderno):");
console.log("import { funcion } from './modulo.js';");
console.log("export const valor = 10;");
console.log("\\nCOMMONJS (Node.js tradicional):");
console.log("const { funcion } = require('./modulo');");
console.log("module.exports = { valor: 10 };");
console.log("\\nES Modules:");
console.log("- Sintaxis estándar");
console.log("- Análisis estático");
console.log("- Tree shaking");</textarea>
            <button onclick="runCode('code-mod-26')">Ejecutar</button>
            <div class="output" id="output-mod-26"></div>
        </div>

        <hr>

        <h3>27. Top-Level Await</h3>
        <p>Usar await en el nivel superior de módulos.</p>

        <div class="example">
            <textarea id="code-mod-27" readonly>console.log("TOP-LEVEL AWAIT:\\n");

console.log("// En un módulo");
console.log("const datos = await fetch('/api/datos');");
console.log("const json = await datos.json();");
console.log("export default json;");
console.log("\\n✅ Disponible en módulos ES");
console.log("✅ Simplifica código asíncrono");
console.log("⚠️ Bloquea la carga del módulo");</textarea>
            <button onclick="runCode('code-mod-27')">Ejecutar</button>
            <div class="output" id="output-mod-27"></div>
        </div>

        <hr>

        <h3>28. Import Assertions</h3>
        <p>Importar tipos de archivo específicos (JSON, CSS).</p>

        <div class="example">
            <textarea id="code-mod-28" readonly>console.log("IMPORT ASSERTIONS:\\n");

console.log("// Importar JSON");
console.log("import datos from './config.json' assert { type: 'json' };");
console.log("\\n// Importar CSS (propuesta)");
console.log("import styles from './styles.css' assert { type: 'css' };");
console.log("\\n✅ Importación segura de tipos");
console.log("✅ Validación en tiempo de carga");</textarea>
            <button onclick="runCode('code-mod-28')">Ejecutar</button>
            <div class="output" id="output-mod-28"></div>
        </div>

        <hr>

        <h3>29. Module Pattern Legacy</h3>
        <p>Patrón de módulo antes de ES6.</p>

        <div class="example">
            <textarea id="code-mod-29" readonly>// Patrón de módulo con IIFE (antes de ES6)
const MiModulo = (function() {
    // Privado
    let contador = 0;
    
    // Público
    return {
        incrementar() {
            contador++;
            console.log("Contador:", contador);
        },
        obtener() {
            return contador;
        }
    };
})();

MiModulo.incrementar();
MiModulo.incrementar();
console.log("Valor:", MiModulo.obtener());</textarea>
            <button onclick="runCode('code-mod-29')">Ejecutar</button>
            <div class="output" id="output-mod-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con módulos.</p>

        <div class="example">
            <textarea id="code-mod-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Un módulo = una responsabilidad");
console.log("✅ Named exports para múltiples funciones");
console.log("✅ Default export para componente principal");
console.log("✅ Usar barrel exports (index.js)");
console.log("✅ Estructura de carpetas clara");
console.log("\\n❌ Evitar dependencias circulares");
console.log("❌ No exportar variables mutables");
console.log("❌ No abusar de export *");
console.log("\\n✨ Módulos organizan y escalan proyectos");</textarea>
            <button onclick="runCode('code-mod-30')">Ejecutar</button>
            <div class="output" id="output-mod-30"></div>
        </div>

    </section>
`;
