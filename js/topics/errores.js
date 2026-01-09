const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Manejo de Errores con try/catch</h2>
        <p>A veces, el código puede fallar. El bloque <code>try...catch</code> nos permite "intentar" ejecutar un código y "atrapar" cualquier error que ocurra sin que el programa se detenga por completo.</p>

        <h3>1. Estructura Básica try...catch</h3>
        <p>Intentamos ejecutar código que podría fallar y capturamos el error si ocurre.</p>
        
        <div class="example">
            <textarea id="code-err-1" readonly>try {
    console.log("Inicio del bloque try");
    funcionQueNoExiste(); // Esto causará un error
    console.log("Esta línea nunca se ejecutará");
} catch (error) {
    console.log("¡Error capturado!");
    console.log("Mensaje:", error.message);
}

console.log("El programa continúa...");</textarea>
            <button onclick="runCode('code-err-1')">Ejecutar</button>
            <div class="output" id="output-err-1"></div>
        </div>

        <hr>

        <h3>2. Sin try...catch el Programa se Detiene</h3>
        <p>Si no capturamos el error, el programa se detiene completamente.</p>

        <div class="example">
            <textarea id="code-err-2" readonly>console.log("Antes del error");

try {
    // Este código causaría que todo se detenga:
    // variableQueNoExiste.metodo();
    
    // Pero lo envolvemos en try/catch:
    variableQueNoExiste.metodo();
} catch (e) {
    console.log("Error capturado, programa sigue");
}

console.log("Después del error - seguimos ejecutando");</textarea>
            <button onclick="runCode('code-err-2')">Ejecutar</button>
            <div class="output" id="output-err-2"></div>
        </div>

        <hr>

        <h3>3. Objeto Error</h3>
        <p>El error capturado es un objeto con propiedades útiles.</p>

        <div class="example">
            <textarea id="code-err-3" readonly>try {
    let resultado = 10 / noDefinida;
} catch (error) {
    console.log("Propiedades del error:");
    console.log("- name:", error.name);
    console.log("- message:", error.message);
    console.log("- stack:", error.stack.substring(0, 100) + "...");
}</textarea>
            <button onclick="runCode('code-err-3')">Ejecutar</button>
            <div class="output" id="output-err-3"></div>
        </div>

        <hr>

        <h3>4. Lanzar Errores con throw</h3>
        <p>Podemos crear y lanzar nuestros propios errores.</p>

        <div class="example">
            <textarea id="code-err-4" readonly>function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log("10 / 2 =", dividir(10, 2));
    console.log("10 / 0 =", dividir(10, 0));
    console.log("Esta línea no se ejecuta");
} catch (error) {
    console.log("Error:", error.message);
}</textarea>
            <button onclick="runCode('code-err-4')">Ejecutar</button>
            <div class="output" id="output-err-4"></div>
        </div>

        <hr>

        <h3>5. Bloque finally</h3>
        <p><code>finally</code> se ejecuta siempre, haya o no error.</p>

        <div class="example">
            <textarea id="code-err-5" readonly>function intentarOperacion(conError) {
    try {
        console.log("Intentando operación...");
        if (conError) {
            throw new Error("Algo salió mal");
        }
        console.log("Operación exitosa");
    } catch (error) {
        console.log("Error capturado:", error.message);
    } finally {
        console.log("Finally: Esto SIEMPRE se ejecuta");
    }
}

intentarOperacion(false);
console.log("---");
intentarOperacion(true);</textarea>
            <button onclick="runCode('code-err-5')">Ejecutar</button>
            <div class="output" id="output-err-5"></div>
        </div>

        <hr>

        <h3>6. Validación de Entrada</h3>
        <p>Usar errores para validar datos de entrada.</p>

        <div class="example">
            <textarea id="code-err-6" readonly>function crearUsuario(nombre, edad) {
    if (!nombre || nombre.length < 2) {
        throw new Error("Nombre inválido");
    }
    if (edad < 0 || edad > 150) {
        throw new Error("Edad fuera de rango");
    }
    return { nombre, edad };
}

try {
    console.log(crearUsuario("Ana", 25));
    console.log(crearUsuario("", 30)); // Error
} catch (error) {
    console.log("Validación falló:", error.message);
}</textarea>
            <button onclick="runCode('code-err-6')">Ejecutar</button>
            <div class="output" id="output-err-6"></div>
        </div>

        <hr>

        <h3>7. Tipos de Errores Nativos</h3>
        <p>JavaScript tiene diferentes tipos de errores predefinidos.</p>

        <div class="example">
            <textarea id="code-err-7" readonly>// ReferenceError
try {
    console.log(variableNoDeclarada);
} catch (error) {
    console.log(error.name + ":", error.message);
}

// TypeError
try {
    null.metodo();
} catch (error) {
    console.log(error.name + ":", error.message);
}

// RangeError
try {
    let arr = new Array(-1);
} catch (error) {
    console.log(error.name + ":", error.message);
}</textarea>
            <button onclick="runCode('code-err-7')">Ejecutar</button>
            <div class="output" id="output-err-7"></div>
        </div>

        <hr>

        <h3>8. Errores Personalizados</h3>
        <p>Crear clases de error propias extendiendo Error.</p>

        <div class="example">
            <textarea id="code-err-8" readonly>class ErrorDeValidacion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorDeValidacion";
    }
}

function validarEmail(email) {
    if (!email.includes("@")) {
        throw new ErrorDeValidacion("Email debe contener @");
    }
    return email;
}

try {
    validarEmail("usuario@correo.com");
    console.log("Email válido");
    validarEmail("invalido");
} catch (error) {
    console.log(error.name + ":", error.message);
}</textarea>
            <button onclick="runCode('code-err-8')">Ejecutar</button>
            <div class="output" id="output-err-8"></div>
        </div>

        <hr>

        <h3>9. Manejo Específico por Tipo de Error</h3>
        <p>Manejar diferentes tipos de errores de forma diferente.</p>

        <div class="example">
            <textarea id="code-err-9" readonly>class ErrorDeRed extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorDeRed";
    }
}

class ErrorDeAutenticacion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorDeAutenticacion";
    }
}

function simularOperacion(tipo) {
    if (tipo === "red") throw new ErrorDeRed("Sin conexión");
    if (tipo === "auth") throw new ErrorDeAutenticacion("Credenciales inválidas");
}

try {
    simularOperacion("red");
} catch (error) {
    if (error instanceof ErrorDeRed) {
        console.log("⚠️ Problema de red:", error.message);
    } else if (error instanceof ErrorDeAutenticacion) {
        console.log("🔒 Problema de autenticación:", error.message);
    } else {
        console.log("❌ Error desconocido:", error.message);
    }
}</textarea>
            <button onclick="runCode('code-err-9')">Ejecutar</button>
            <div class="output" id="output-err-9"></div>
        </div>

        <hr>

        <h3>10. Re-lanzar Errores</h3>
        <p>Capturar un error, hacer algo y volver a lanzarlo.</p>

        <div class="example">
            <textarea id="code-err-10" readonly>function operacionInterna() {
    throw new Error("Error interno");
}

function operacionExterna() {
    try {
        operacionInterna();
    } catch (error) {
        console.log("Log interno:", error.message);
        throw error; // Re-lanzar
    }
}

try {
    operacionExterna();
} catch (error) {
    console.log("Capturado en nivel externo:", error.message);
}</textarea>
            <button onclick="runCode('code-err-10')">Ejecutar</button>
            <div class="output" id="output-err-10"></div>
        </div>

        <hr>

        <h3>11. Errores Anidados</h3>
        <p>Múltiples niveles de try...catch.</p>

        <div class="example">
            <textarea id="code-err-11" readonly>try {
    console.log("Nivel externo");
    try {
        console.log("Nivel interno");
        throw new Error("Error interno");
    } catch (error) {
        console.log("Capturado internamente:", error.message);
        throw new Error("Error propagado");
    }
} catch (error) {
    console.log("Capturado externamente:", error.message);
}</textarea>
            <button onclick="runCode('code-err-11')">Ejecutar</button>
            <div class="output" id="output-err-11"></div>
        </div>

        <hr>

        <h3>12. Lanzar Strings (No Recomendado)</h3>
        <p>Puedes lanzar cualquier valor, pero es mejor usar Error.</p>

        <div class="example">
            <textarea id="code-err-12" readonly>try {
    throw "Error simple";
} catch (error) {
    console.log("String capturado:", error);
    console.log("No tiene .message ni .stack");
}

try {
    throw new Error("Error objeto");
} catch (error) {
    console.log("Error capturado:", error.message);
    console.log("Tiene propiedades útiles");
}</textarea>
            <button onclick="runCode('code-err-12')">Ejecutar</button>
            <div class="output" id="output-err-12"></div>
        </div>

        <hr>

        <h3>13. Validación de JSON</h3>
        <p>JSON.parse puede lanzar errores si el formato es inválido.</p>

        <div class="example">
            <textarea id="code-err-13" readonly>function parsearJSON(texto) {
    try {
        return JSON.parse(texto);
    } catch (error) {
        console.log("JSON inválido:", error.message);
        return null;
    }
}

let resultado1 = parsearJSON('{"nombre": "Ana"}');
console.log("Válido:", resultado1);

let resultado2 = parsearJSON('{nombre: Ana}');
console.log("Inválido:", resultado2);</textarea>
            <button onclick="runCode('code-err-13')">Ejecutar</button>
            <div class="output" id="output-err-13"></div>
        </div>

        <hr>

        <h3>14. Timeout con Errores</h3>
        <p>Combinar errores con operaciones asíncronas simuladas.</p>

        <div class="example">
            <textarea id="code-err-14" readonly>function operacionRiesgosa(exito) {
    console.log("Iniciando operación...");
    
    if (!exito) {
        throw new Error("La operación falló");
    }
    
    console.log("Operación exitosa");
    return "Resultado";
}

try {
    let resultado = operacionRiesgosa(true);
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    operacionRiesgosa(false);
} catch (error) {
    console.log("Error esperado:", error.message);
}</textarea>
            <button onclick="runCode('code-err-14')">Ejecutar</button>
            <div class="output" id="output-err-14"></div>
        </div>

        <hr>

        <h3>15. Código de Limpieza</h3>
        <p>Usar finally para cerrar recursos.</p>

        <div class="example">
            <textarea id="code-err-15" readonly>function procesarArchivo(exito) {
    console.log("Abriendo archivo...");
    
    try {
        if (!exito) {
            throw new Error("Error al procesar");
        }
        console.log("Procesando contenido...");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Cerrando archivo (siempre)");
    }
}

procesarArchivo(true);
console.log("---");
procesarArchivo(false);</textarea>
            <button onclick="runCode('code-err-15')">Ejecutar</button>
            <div class="output" id="output-err-15"></div>
        </div>

        <hr>

        <h3>16. Assert (Afirmación)</h3>
        <p>Crear una función de afirmación para validaciones.</p>

        <div class="example">
            <textarea id="code-err-16" readonly>function assert(condicion, mensaje) {
    if (!condicion) {
        throw new Error("Afirmación falló: " + mensaje);
    }
}

function dividir(a, b) {
    assert(typeof a === 'number', 'a debe ser número');
    assert(typeof b === 'number', 'b debe ser número');
    assert(b !== 0, 'b no puede ser cero');
    return a / b;
}

try {
    console.log(dividir(10, 2));
    console.log(dividir(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}</textarea>
            <button onclick="runCode('code-err-16')">Ejecutar</button>
            <div class="output" id="output-err-16"></div>
        </div>

        <hr>

        <h3>17. Errores con Propiedades Personalizadas</h3>
        <p>Añadir información extra a los errores.</p>

        <div class="example">
            <textarea id="code-err-17" readonly>class ErrorHTTP extends Error {
    constructor(mensaje, codigoEstado) {
        super(mensaje);
        this.name = "ErrorHTTP";
        this.codigoEstado = codigoEstado;
    }
}

function simularPeticion(url) {
    if (!url.startsWith("https://")) {
        throw new ErrorHTTP("URL debe ser HTTPS", 400);
    }
    if (url.includes("forbidden")) {
        throw new ErrorHTTP("Acceso denegado", 403);
    }
    return "Datos";
}

try {
    simularPeticion("http://sitio.com");
} catch (error) {
    console.log(\`\${error.name} (\${error.codigoEstado}): \${error.message}\`);
}</textarea>
            <button onclick="runCode('code-err-17')">Ejecutar</button>
            <div class="output" id="output-err-17"></div>
        </div>

        <hr>

        <h3>18. Try...Catch en Bucles</h3>
        <p>Manejar errores dentro de iteraciones.</p>

        <div class="example">
            <textarea id="code-err-18" readonly>const datos = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis" }, // Sin edad
    { nombre: "Pedro", edad: 30 }
];

for (let usuario of datos) {
    try {
        if (!usuario.edad) {
            throw new Error("Edad faltante");
        }
        console.log(\`\${usuario.nombre} tiene \${usuario.edad} años\`);
    } catch (error) {
        console.log(\`Error con \${usuario.nombre}: \${error.message}\`);
    }
}</textarea>
            <button onclick="runCode('code-err-18')">Ejecutar</button>
            <div class="output" id="output-err-18"></div>
        </div>

        <hr>

        <h3>19. Wrapper de Funciones</h3>
        <p>Envolver funciones para añadir manejo de errores.</p>

        <div class="example">
            <textarea id="code-err-19" readonly>function conManejoDeErrores(fn) {
    return function(...args) {
        try {
            return fn(...args);
        } catch (error) {
            console.log("Error manejado:", error.message);
            return null;
        }
    };
}

function operacionRiesgosa(x) {
    if (x < 0) throw new Error("Número negativo");
    return x * 2;
}

const operacionSegura = conManejoDeErrores(operacionRiesgosa);

console.log("Resultado 1:", operacionSegura(5));
console.log("Resultado 2:", operacionSegura(-3));</textarea>
            <button onclick="runCode('code-err-19')">Ejecutar</button>
            <div class="output" id="output-err-19"></div>
        </div>

        <hr>

        <h3>20. Stack Trace</h3>
        <p>El stack trace muestra la secuencia de llamadas.</p>

        <div class="example">
            <textarea id="code-err-20" readonly>function nivel3() {
    throw new Error("Error en nivel 3");
}

function nivel2() {
    nivel3();
}

function nivel1() {
    nivel2();
}

try {
    nivel1();
} catch (error) {
    console.log("Mensaje:", error.message);
    console.log("Stack:");
    console.log(error.stack);
}</textarea>
            <button onclick="runCode('code-err-20')">Ejecutar</button>
            <div class="output" id="output-err-20"></div>
        </div>

        <hr>

        <h3>21. Error.cause (ES2022)</h3>
        <p>Encadenar errores para mantener contexto.</p>

        <div class="example">
            <textarea id="code-err-21" readonly>function operacionBajoNivel() {
    throw new Error("Fallo en la base de datos");
}

function operacionAltoNivel() {
    try {
        operacionBajoNivel();
    } catch (error) {
        throw new Error("Fallo al guardar usuario", { cause: error });
    }
}

try {
    operacionAltoNivel();
} catch (error) {
    console.log("Error:", error.message);
    if (error.cause) {
        console.log("Causa:", error.cause.message);
    }
}</textarea>
            <button onclick="runCode('code-err-21')">Ejecutar</button>
            <div class="output" id="output-err-21"></div>
        </div>

        <hr>

        <h3>22. Validación Compleja</h3>
        <p>Validar múltiples condiciones con mensajes específicos.</p>

        <div class="example">
            <textarea id="code-err-22" readonly>function validarFormulario(datos) {
    const errores = [];
    
    if (!datos.nombre) errores.push("Nombre requerido");
    if (!datos.email || !datos.email.includes("@")) errores.push("Email inválido");
    if (datos.edad < 18) errores.push("Debe ser mayor de edad");
    
    if (errores.length > 0) {
        throw new Error("Validación falló: " + errores.join(", "));
    }
    
    return true;
}

try {
    validarFormulario({ nombre: "", email: "invalido", edad: 15 });
} catch (error) {
    console.log("Error:", error.message);
}</textarea>
            <button onclick="runCode('code-err-22')">Ejecutar</button>
            <div class="output" id="output-err-22"></div>
        </div>

        <hr>

        <h3>23. Try...Catch con Return</h3>
        <p>El comportamiento de return en try...catch...finally.</p>

        <div class="example">
            <textarea id="code-err-23" readonly>function ejemplo1() {
    try {
        return "Try";
    } catch (error) {
        return "Catch";
    } finally {
        console.log("Finally se ejecuta antes del return");
    }
}

function ejemplo2() {
    try {
        return "Try";
    } finally {
        // Finally NO sobrescribe el return
        console.log("Finally no cambia el return");
    }
}

console.log("Resultado 1:", ejemplo1());
console.log("Resultado 2:", ejemplo2());</textarea>
            <button onclick="runCode('code-err-23')">Ejecutar</button>
            <div class="output" id="output-err-23"></div>
        </div>

        <hr>

        <h3>24. Errores Síncronos vs Asíncronos</h3>
        <p>try...catch no captura errores en callbacks asíncronos.</p>

        <div class="example">
            <textarea id="code-err-24" readonly>// Síncrono - funciona
try {
    throw new Error("Error síncrono");
} catch (error) {
    console.log("Capturado:", error.message);
}

// Asíncrono - NO funciona con try/catch normal
console.log("\\nPara errores asíncronos:");
console.log("Usa .catch() con promesas");
console.log("o try/catch con async/await");</textarea>
            <button onclick="runCode('code-err-24')">Ejecutar</button>
            <div class="output" id="output-err-24"></div>
        </div>

        <hr>

        <h3>25. Patrón Result</h3>
        <p>Devolver un objeto que indica éxito o fallo en lugar de lanzar errores.</p>

        <div class="example">
            <textarea id="code-err-25" readonly>function dividirSeguro(a, b) {
    if (b === 0) {
        return { exito: false, error: "División por cero" };
    }
    return { exito: true, valor: a / b };
}

const resultado1 = dividirSeguro(10, 2);
if (resultado1.exito) {
    console.log("Resultado:", resultado1.valor);
} else {
    console.log("Error:", resultado1.error);
}

const resultado2 = dividirSeguro(10, 0);
if (resultado2.exito) {
    console.log("Resultado:", resultado2.valor);
} else {
    console.log("Error:", resultado2.error);
}</textarea>
            <button onclick="runCode('code-err-25')">Ejecutar</button>
            <div class="output" id="output-err-25"></div>
        </div>

        <hr>

        <h3>26. Logging de Errores</h3>
        <p>Registrar errores para análisis posterior.</p>

        <div class="example">
            <textarea id="code-err-26" readonly>const registroErrores = [];

function logError(error) {
    const entrada = {
        mensaje: error.message,
        nombre: error.name,
        timestamp: new Date().toISOString()
    };
    registroErrores.push(entrada);
    console.log("Error registrado:", entrada);
}

try {
    throw new Error("Algo salió mal");
} catch (error) {
    logError(error);
}

console.log("\\nRegistro de errores:", registroErrores);</textarea>
            <button onclick="runCode('code-err-26')">Ejecutar</button>
            <div class="output" id="output-err-26"></div>
        </div>

        <hr>

        <h3>27. Retry Pattern</h3>
        <p>Reintentar operaciones que fallan.</p>

        <div class="example">
            <textarea id="code-err-27" readonly>let intentos = 0;

function operacionInestable() {
    intentos++;
    console.log("Intento", intentos);
    if (intentos < 3) {
        throw new Error("Falló");
    }
    return "Éxito";
}

function reintentar(fn, maxIntentos) {
    for (let i = 0; i < maxIntentos; i++) {
        try {
            return fn();
        } catch (error) {
            console.log("Error:", error.message);
            if (i === maxIntentos - 1) throw error;
        }
    }
}

try {
    const resultado = reintentar(operacionInestable, 5);
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Falló después de todos los intentos");
}</textarea>
            <button onclick="runCode('code-err-27')">Ejecutar</button>
            <div class="output" id="output-err-27"></div>
        </div>

        <hr>

        <h3>28. Guard Clauses</h3>
        <p>Validar condiciones al inicio de funciones.</p>

        <div class="example">
            <textarea id="code-err-28" readonly>function procesarPedido(pedido) {
    // Guard clauses
    if (!pedido) {
        throw new Error("Pedido no proporcionado");
    }
    if (!pedido.items || pedido.items.length === 0) {
        throw new Error("Pedido vacío");
    }
    if (pedido.total <= 0) {
        throw new Error("Total inválido");
    }
    
    console.log("Procesando pedido válido...");
    return "Pedido procesado";
}

try {
    procesarPedido({ items: [], total: 0 });
} catch (error) {
    console.log("Error:", error.message);
}</textarea>
            <button onclick="runCode('code-err-28')">Ejecutar</button>
            <div class="output" id="output-err-28"></div>
        </div>

        <hr>

        <h3>29. Error Boundaries Simulado</h3>
        <p>Crear una función que aisle errores de componentes.</p>

        <div class="example">
            <textarea id="code-err-29" readonly>function errorBoundary(fn, fallback) {
    return function(...args) {
        try {
            return fn(...args);
        } catch (error) {
            console.log("Error aislado:", error.message);
            return fallback;
        }
    };
}

function componentePeligroso(datos) {
    if (!datos) throw new Error("Datos faltantes");
    return "Componente renderizado con " + datos;
}

const componenteSeguro = errorBoundary(
    componentePeligroso,
    "Componente de respaldo"
);

console.log(componenteSeguro("datos válidos"));
console.log(componenteSeguro(null));</textarea>
            <button onclick="runCode('code-err-29')">Ejecutar</button>
            <div class="output" id="output-err-29"></div>
        </div>

        <hr>

        <h3>30. Mejores Prácticas</h3>
        <p>Resumen de buenas prácticas en manejo de errores.</p>

        <div class="example">
            <textarea id="code-err-30" readonly>// ✅ Buenas prácticas:

// 1. Ser específico con los mensajes
function bueno1() {
    throw new Error("Usuario no encontrado con ID: 123");
}

// 2. Usar clases de error personalizadas
class ErrorDeNegocio extends Error {
    constructor(msg) { super(msg); this.name = "ErrorDeNegocio"; }
}

// 3. No capturar errores que no puedes manejar
function bueno2() {
    // Si no sabes qué hacer, deja que se propague
}

// 4. Validar temprano
function bueno3(email) {
    if (!email) throw new Error("Email requerido");
    // resto del código...
}

console.log("Mejores prácticas:");
console.log("✅ Mensajes descriptivos");
console.log("✅ Errores personalizados");
console.log("✅ Propagar cuando no puedas manejar");
console.log("✅ Validar temprano (fail fast)");</textarea>
            <button onclick="runCode('code-err-30')">Ejecutar</button>
            <div class="output" id="output-err-30"></div>
        </div>

    </section>
`;
