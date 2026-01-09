const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Strings Avanzados</h2>
        <p>Métodos modernos y técnicas avanzadas para trabajar con cadenas de texto en JavaScript.</p>

        <h3>1. String Básico</h3>
        <p>Crear y trabajar con strings.</p>
        
        <div class="example">
            <textarea id="code-str-1" readonly>const texto = "Hola Mundo";
const texto2 = 'JavaScript';
const texto3 = \`Template literal\`;

console.log("Texto 1:", texto);
console.log("Texto 2:", texto2);
console.log("Texto 3:", texto3);
console.log("Longitud:", texto.length);
console.log("Tipo:", typeof texto);</textarea>
            <button onclick="runCode('code-str-1')">Ejecutar</button>
            <div class="output" id="output-str-1"></div>
        </div>

        <hr>

        <h3>2. charAt y charCodeAt</h3>
        <p>Acceder a caracteres individuales.</p>

        <div class="example">
            <textarea id="code-str-2" readonly>const texto = "JavaScript";

console.log("Carácter en posición 0:", texto.charAt(0));
console.log("Carácter en posición 4:", texto.charAt(4));

// También con []
console.log("Con []:", texto[0]);

// Código Unicode
console.log("Código del carácter 'J':", texto.charCodeAt(0));
console.log("De código a char:", String.fromCharCode(74));</textarea>
            <button onclick="runCode('code-str-2')">Ejecutar</button>
            <div class="output" id="output-str-2"></div>
        </div>

        <hr>

        <h3>3. toUpperCase y toLowerCase</h3>
        <p>Convertir mayúsculas y minúsculas.</p>

        <div class="example">
            <textarea id="code-str-3" readonly>const texto = "JavaScript Es Genial";

console.log("Original:", texto);
console.log("Mayúsculas:", texto.toUpperCase());
console.log("Minúsculas:", texto.toLowerCase());

// Caso práctico: comparación sin case
const usuario = "ADMIN";
if (usuario.toLowerCase() === "admin") {
    console.log("Usuario admin detectado");
}</textarea>
            <button onclick="runCode('code-str-3')">Ejecutar</button>
            <div class="output" id="output-str-3"></div>
        </div>

        <hr>

        <h3>4. indexOf y lastIndexOf</h3>
        <p>Buscar posición de subcadenas.</p>

        <div class="example">
            <textarea id="code-str-4" readonly>const texto = "JavaScript es JavaScript";

console.log("Primera posición de 'Script':", texto.indexOf("Script"));
console.log("Última posición de 'Script':", texto.lastIndexOf("Script"));
console.log("Posición de 'Python':", texto.indexOf("Python"));

// Verifica si existe
if (texto.indexOf("Java") !== -1) {
    console.log("Contiene 'Java'");
}</textarea>
            <button onclick="runCode('code-str-4')">Ejecutar</button>
            <div class="output" id="output-str-4"></div>
        </div>

        <hr>

        <h3>5. includes, startsWith, endsWith</h3>
        <p>Métodos modernos de búsqueda.</p>

        <div class="example">
            <textarea id="code-str-5" readonly>const texto = "JavaScript es increíble";

console.log("Incluye 'Script':", texto.includes("Script"));
console.log("Empieza con 'Java':", texto.startsWith("Java"));
console.log("Termina con 'ible':", texto.endsWith("ible"));

// Con posición de inicio
console.log("Incluye 'es' desde pos 10:", texto.includes("es", 10));
console.log("Empieza con 'Script' en pos 4:", texto.startsWith("Script", 4));</textarea>
            <button onclick="runCode('code-str-5')">Ejecutar</button>
            <div class="output" id="output-str-5"></div>
        </div>

        <hr>

        <h3>6. slice</h3>
        <p>Extraer porciones de string.</p>

        <div class="example">
            <textarea id="code-str-6" readonly>const texto = "JavaScript";

console.log("slice(0, 4):", texto.slice(0, 4));
console.log("slice(4):", texto.slice(4));
console.log("slice(-6):", texto.slice(-6));
console.log("slice(4, -2):", texto.slice(4, -2));

// Caso práctico: obtener extensión
const archivo = "documento.pdf";
const extension = archivo.slice(archivo.lastIndexOf("."));
console.log("Extensión:", extension);</textarea>
            <button onclick="runCode('code-str-6')">Ejecutar</button>
            <div class="output" id="output-str-6"></div>
        </div>

        <hr>

        <h3>7. substring y substr</h3>
        <p>Alternativas a slice (substr está deprecado).</p>

        <div class="example">
            <textarea id="code-str-7" readonly>const texto = "JavaScript";

// substring: similar a slice pero no acepta negativos
console.log("substring(0, 4):", texto.substring(0, 4));
console.log("substring(4):", texto.substring(4));

// substr (DEPRECADO): segundo arg es longitud
console.log("substr(0, 4):", texto.substr(0, 4));
console.log("substr(4, 6):", texto.substr(4, 6));

console.log("\\n⚠️ Preferir slice sobre substring/substr");</textarea>
            <button onclick="runCode('code-str-7')">Ejecutar</button>
            <div class="output" id="output-str-7"></div>
        </div>

        <hr>

        <h3>8. split</h3>
        <p>Dividir string en array.</p>

        <div class="example">
            <textarea id="code-str-8" readonly>const texto = "JavaScript,Python,Java,C++";

console.log("Split por coma:", texto.split(","));

const frase = "Hola mundo desde JavaScript";
console.log("Split por espacio:", frase.split(" "));

// Limitar cantidad
console.log("Split limitado:", texto.split(",", 2));

// Dividir cada carácter
console.log("Cada carácter:", "Hola".split(""));</textarea>
            <button onclick="runCode('code-str-8')">Ejecutar</button>
            <div class="output" id="output-str-8"></div>
        </div>

        <hr>

        <h3>9. replace y replaceAll</h3>
        <p>Reemplazar subcadenas.</p>

        <div class="example">
            <textarea id="code-str-9" readonly>const texto = "JavaScript es JavaScript";

// replace: solo primera ocurrencia
console.log("replace:", texto.replace("JavaScript", "JS"));

// replaceAll: todas las ocurrencias
console.log("replaceAll:", texto.replaceAll("JavaScript", "JS"));

// Con RegExp
console.log("Con regex:", texto.replace(/JavaScript/g, "JS"));

// Caso práctico: limpiar espacios
const mal = "  mucho   espacio  ";
console.log("Limpiado:", mal.replace(/\\s+/g, " ").trim());</textarea>
            <button onclick="runCode('code-str-9')">Ejecutar</button>
            <div class="output" id="output-str-9"></div>
        </div>

        <hr>

        <h3>10. trim, trimStart, trimEnd</h3>
        <p>Eliminar espacios en blanco.</p>

        <div class="example">
            <textarea id="code-str-10" readonly>const texto = "   Hola Mundo   ";

console.log("Original:", "[" + texto + "]");
console.log("trim:", "[" + texto.trim() + "]");
console.log("trimStart:", "[" + texto.trimStart() + "]");
console.log("trimEnd:", "[" + texto.trimEnd() + "]");

// Caso práctico: validar input
const input = "  usuario@email.com  ";
const limpio = input.trim();
console.log("\\nInput limpio:", limpio);</textarea>
            <button onclick="runCode('code-str-10')">Ejecutar</button>
            <div class="output" id="output-str-10"></div>
        </div>

        <hr>

        <h3>11. repeat</h3>
        <p>Repetir string n veces.</p>

        <div class="example">
            <textarea id="code-str-11" readonly>console.log("Ha".repeat(3));
console.log("=".repeat(20));
console.log("🎉".repeat(5));

// Caso práctico: padding manual
function padLeft(str, width) {
    return " ".repeat(Math.max(0, width - str.length)) + str;
}

console.log("\\nPadding:");
console.log(padLeft("42", 5));
console.log(padLeft("100", 5));</textarea>
            <button onclick="runCode('code-str-11')">Ejecutar</button>
            <div class="output" id="output-str-11"></div>
        </div>

        <hr>

        <h3>12. padStart y padEnd</h3>
        <p>Rellenar string hasta longitud.</p>

        <div class="example">
            <textarea id="code-str-12" readonly>const numero = "42";

console.log("padStart(5, '0'):", numero.padStart(5, "0"));
console.log("padEnd(5, '0'):", numero.padEnd(5, "0"));

const hora = "9";
const minuto = "5";
const segundo = "3";

const tiempo = \`\${hora.padStart(2, "0")}:\${minuto.padStart(2, "0")}:\${segundo.padStart(2, "0")}\`;
console.log("\\nTiempo formateado:", tiempo);</textarea>
            <button onclick="runCode('code-str-12')">Ejecutar</button>
            <div class="output" id="output-str-12"></div>
        </div>

        <hr>

        <h3>13. concat</h3>
        <p>Concatenar strings.</p>

        <div class="example">
            <textarea id="code-str-13" readonly>const str1 = "Hola";
const str2 = "Mundo";

console.log("concat:", str1.concat(" ", str2));
console.log("Con +:", str1 + " " + str2);
console.log("Template:", \`\${str1} \${str2}\`);

// Múltiples argumentos
console.log("Múltiples:", "a".concat("b", "c", "d"));

console.log("\\n✅ Preferir template literals");</textarea>
            <button onclick="runCode('code-str-13')">Ejecutar</button>
            <div class="output" id="output-str-13"></div>
        </div>

        <hr>

        <h3>14. match</h3>
        <p>Buscar coincidencias con regex.</p>

        <div class="example">
            <textarea id="code-str-14" readonly>const texto = "Mi email es user@example.com y user2@test.com";

// Sin flag g: retorna detalles
const match1 = texto.match(/\\w+@\\w+\\.\\w+/);
console.log("Primera coincidencia:", match1[0]);

// Con flag g: retorna array de todas
const matches = texto.match(/\\w+@\\w+\\.\\w+/g);
console.log("Todas las coincidencias:", matches);

// Sin coincidencias
const noMatch = texto.match(/\\d{10}/);
console.log("Sin match:", noMatch);</textarea>
            <button onclick="runCode('code-str-14')">Ejecutar</button>
            <div class="output" id="output-str-14"></div>
        </div>

        <hr>

        <h3>15. search</h3>
        <p>Buscar posición con regex.</p>

        <div class="example">
            <textarea id="code-str-15" readonly>const texto = "JavaScript 2024 es genial";

console.log("Posición de número:", texto.search(/\\d+/));
console.log("Posición de 'es':", texto.search(/es/));
console.log("No encontrado:", texto.search(/Python/));

// Case insensitive
console.log("Case insensitive:", texto.search(/javascript/i));

// Diferencia con indexOf
console.log("\\nindexOf no acepta regex");</textarea>
            <button onclick="runCode('code-str-15')">Ejecutar</button>
            <div class="output" id="output-str-15"></div>
        </div>

        <hr>

        <h3>16. localeCompare</h3>
        <p>Comparar strings considerando locale.</p>

        <div class="example">
            <textarea id="code-str-16" readonly>const a = "a";
const b = "b";
const z = "z";

console.log("a.localeCompare(b):", a.localeCompare(b)); // -1 (antes)
console.log("b.localeCompare(a):", b.localeCompare(a)); // 1 (después)
console.log("a.localeCompare(a):", a.localeCompare(a)); // 0 (igual)

// Ordenar array de strings
const nombres = ["José", "Ana", "Álvaro", "Beatriz"];
nombres.sort((a, b) => a.localeCompare(b, "es"));
console.log("\\nOrdenado:", nombres);</textarea>
            <button onclick="runCode('code-str-16')">Ejecutar</button>
            <div class="output" id="output-str-16"></div>
        </div>

        <hr>

        <h3>17. normalize</h3>
        <p>Normalizar caracteres Unicode.</p>

        <div class="example">
            <textarea id="code-str-17" readonly>// Dos formas de escribir "é"
const str1 = "café"; // é compuesto
const str2 = "café"; // é como e + acento

console.log("Iguales con ===:", str1 === str2);
console.log("Longitudes:", str1.length, str2.length);

// Normalizar
const norm1 = str1.normalize("NFC");
const norm2 = str2.normalize("NFC");
console.log("\\nNormalizados iguales:", norm1 === norm2);</textarea>
            <button onclick="runCode('code-str-17')">Ejecutar</button>
            <div class="output" id="output-str-17"></div>
        </div>

        <hr>

        <h3>18. at()</h3>
        <p>Acceso a caracteres con índices negativos.</p>

        <div class="example">
            <textarea id="code-str-18" readonly>const texto = "JavaScript";

console.log("at(0):", texto.at(0));
console.log("at(4):", texto.at(4));
console.log("at(-1):", texto.at(-1)); // Último
console.log("at(-2):", texto.at(-2));

// Vs charAt (no acepta negativos)
console.log("\\ncharAt(-1):", texto.charAt(-1)); // ""
console.log("Último con slice:", texto.slice(-1));</textarea>
            <button onclick="runCode('code-str-18')">Ejecutar</button>
            <div class="output" id="output-str-18"></div>
        </div>

        <hr>

        <h3>19. Interpolación Avanzada</h3>
        <p>Template literals con expresiones.</p>

        <div class="example">
            <textarea id="code-str-19" readonly>const nombre = "Ana";
const edad = 25;

console.log(\`Nombre: \${nombre}\`);
console.log(\`Edad: \${edad}\`);
console.log(\`Mayor de edad: \${edad >= 18 ? "Sí" : "No"}\`);

// Expresiones complejas
const precio = 100;
const iva = 0.21;
console.log(\`Total: \${(precio * (1 + iva)).toFixed(2)}€\`);

// Multilínea
const html = \`
    <div>
        <h1>\${nombre}</h1>
        <p>Edad: \${edad}</p>
    </div>
\`;
console.log("\\nHTML:", html);</textarea>
            <button onclick="runCode('code-str-19')">Ejecutar</button>
            <div class="output" id="output-str-19"></div>
        </div>

        <hr>

        <h3>20. Tagged Templates</h3>
        <p>Templates con función procesadora.</p>

        <div class="example">
            <textarea id="code-str-20" readonly>function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? \`<mark>\${values[i]}</mark>\` : "";
        return result + str + value;
    }, "");
}

const nombre = "JavaScript";
const año = 2024;

const mensaje = highlight\`El lenguaje \${nombre} en \${año}\`;
console.log("Resaltado:", mensaje);

// Otro ejemplo: SQL seguro
function sql(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values);
}

const id = 5;
sql\`SELECT * FROM users WHERE id = \${id}\`;</textarea>
            <button onclick="runCode('code-str-20')">Ejecutar</button>
            <div class="output" id="output-str-20"></div>
        </div>

        <hr>

        <h3>21. Escape de Caracteres</h3>
        <p>Caracteres especiales en strings.</p>

        <div class="example">
            <textarea id="code-str-21" readonly>console.log("Nueva línea:\\nSegunda línea");
console.log("Tab:\\tTexto tabulado");
console.log("Comilla simple: \\'texto\\'");
console.log("Comilla doble: \\"texto\\"");
console.log("Backslash: \\\\");

// Unicode
console.log("\\nUnicode:");
console.log("\\u00A9 Copyright");
console.log("\\u2764 Corazón");
console.log("\\u{1F600} Emoji");</textarea>
            <button onclick="runCode('code-str-21')">Ejecutar</button>
            <div class="output" id="output-str-21"></div>
        </div>

        <hr>

        <h3>22. Validación de Email</h3>
        <p>Caso práctico: validar formato de email.</p>

        <div class="example">
            <textarea id="code-str-22" readonly>function validarEmail(email) {
    email = email.trim().toLowerCase();
    
    // Regex básica para email
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    
    return regex.test(email);
}

const emails = [
    "usuario@example.com",
    "test@test",
    "@example.com",
    "user@domain.co.uk",
    "invalido"
];

emails.forEach(email => {
    console.log(\`\${email}: \${validarEmail(email) ? "✅" : "❌"}\`);
});</textarea>
            <button onclick="runCode('code-str-22')">Ejecutar</button>
            <div class="output" id="output-str-22"></div>
        </div>

        <hr>

        <h3>23. Slug Generator</h3>
        <p>Convertir texto a URL-friendly.</p>

        <div class="example">
            <textarea id="code-str-23" readonly>function generarSlug(texto) {
    return texto
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\\u0300-\\u036f]/g, "") // Quitar acentos
        .replace(/[^a-z0-9\\s-]/g, "") // Solo letras, números, espacios y guiones
        .replace(/\\s+/g, "-") // Espacios a guiones
        .replace(/-+/g, "-"); // Guiones múltiples a uno
}

const titulos = [
    "¡Hola Mundo!",
    "JavaScript es Genial",
    "Guía de ES6+",
    "10 Tips para Desarrolladores"
];

titulos.forEach(titulo => {
    console.log(\`"\${titulo}" -> "\${generarSlug(titulo)}"\`);
});</textarea>
            <button onclick="runCode('code-str-23')">Ejecutar</button>
            <div class="output" id="output-str-23"></div>
        </div>

        <hr>

        <h3>24. Truncar Texto</h3>
        <p>Acortar texto con elipsis.</p>

        <div class="example">
            <textarea id="code-str-24" readonly>function truncar(texto, maxLength) {
    if (texto.length <= maxLength) return texto;
    return texto.slice(0, maxLength - 3) + "...";
}

// Truncar por palabras
function truncarPorPalabras(texto, maxPalabras) {
    const palabras = texto.split(" ");
    if (palabras.length <= maxPalabras) return texto;
    return palabras.slice(0, maxPalabras).join(" ") + "...";
}

const texto = "Este es un texto muy largo que necesita ser truncado";

console.log("Original:", texto);
console.log("Truncado (20):", truncar(texto, 20));
console.log("Por palabras (5):", truncarPorPalabras(texto, 5));</textarea>
            <button onclick="runCode('code-str-24')">Ejecutar</button>
            <div class="output" id="output-str-24"></div>
        </div>

        <hr>

        <h3>25. Capitalizar</h3>
        <p>Primera letra mayúscula.</p>

        <div class="example">
            <textarea id="code-str-25" readonly>function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => capitalize(word))
        .join(" ");
}

const textos = [
    "javascript",
    "hola mundo",
    "TEXTO EN MAYÚSCULAS"
];

textos.forEach(texto => {
    console.log(\`"\${texto}" -> "\${capitalize(texto)}"\`);
});

console.log("\\nCapitalizar palabras:");
console.log(capitalizeWords("hola mundo desde javascript"));</textarea>
            <button onclick="runCode('code-str-25')">Ejecutar</button>
            <div class="output" id="output-str-25"></div>
        </div>

        <hr>

        <h3>26. Contar Palabras</h3>
        <p>Contar palabras y caracteres.</p>

        <div class="example">
            <textarea id="code-str-26" readonly>function estadisticas(texto) {
    const limpio = texto.trim();
    
    return {
        caracteres: limpio.length,
        caracteresNoEspacios: limpio.replace(/\\s/g, "").length,
        palabras: limpio ? limpio.split(/\\s+/).length : 0,
        lineas: limpio.split("\\n").length,
        vocales: (limpio.match(/[aeiouáéíóú]/gi) || []).length
    };
}

const texto = \`JavaScript es un lenguaje
de programación muy popular
y versátil\`;

const stats = estadisticas(texto);
console.log("Estadísticas:");
Object.entries(stats).forEach(([key, value]) => {
    console.log(\`\${key}: \${value}\`);
});</textarea>
            <button onclick="runCode('code-str-26')">Ejecutar</button>
            <div class="output" id="output-str-26"></div>
        </div>

        <hr>

        <h3>27. Reverso de String</h3>
        <p>Invertir cadena de texto.</p>

        <div class="example">
            <textarea id="code-str-27" readonly>function revertir(str) {
    return str.split("").reverse().join("");
}

// Verificar palíndromo
function esPalindromo(str) {
    const limpio = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return limpio === revertir(limpio);
}

console.log("Revertir:");
console.log("Hola ->", revertir("Hola"));
console.log("JavaScript ->", revertir("JavaScript"));

console.log("\\nPalíndromos:");
console.log("anita lava la tina:", esPalindromo("anita lava la tina"));
console.log("hola:", esPalindromo("hola"));</textarea>
            <button onclick="runCode('code-str-27')">Ejecutar</button>
            <div class="output" id="output-str-27"></div>
        </div>

        <hr>

        <h3>28. Máscara de Datos</h3>
        <p>Ocultar información sensible.</p>

        <div class="example">
            <textarea id="code-str-28" readonly>function mascararEmail(email) {
    const [user, domain] = email.split("@");
    const maskedUser = user[0] + "*".repeat(user.length - 2) + user.slice(-1);
    return \`\${maskedUser}@\${domain}\`;
}

function mascararTarjeta(numero) {
    const limpio = numero.replace(/\\s/g, "");
    return "*".repeat(12) + limpio.slice(-4);
}

function mascararTelefono(telefono) {
    const limpio = telefono.replace(/\\D/g, "");
    return "***-***-" + limpio.slice(-4);
}

console.log(mascararEmail("usuario@example.com"));
console.log(mascararTarjeta("1234 5678 9012 3456"));
console.log(mascararTelefono("+34 123 456 789"));</textarea>
            <button onclick="runCode('code-str-28')">Ejecutar</button>
            <div class="output" id="output-str-28"></div>
        </div>

        <hr>

        <h3>29. Formatear Números</h3>
        <p>Formatear números en strings.</p>

        <div class="example">
            <textarea id="code-str-29" readonly>function formatearNumero(num) {
    return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
}

function formatearMoneda(cantidad, moneda = "€") {
    return formatearNumero(cantidad.toFixed(2)) + " " + moneda;
}

function formatearPorcentaje(decimal) {
    return (decimal * 100).toFixed(1) + "%";
}

console.log("Número:", formatearNumero(1234567));
console.log("Moneda:", formatearMoneda(1234.567));
console.log("Porcentaje:", formatearPorcentaje(0.125));
console.log("Porcentaje:", formatearPorcentaje(0.8567));</textarea>
            <button onclick="runCode('code-str-29')">Ejecutar</button>
            <div class="output" id="output-str-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con strings.</p>

        <div class="example">
            <textarea id="code-str-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar template literals para concatenación");
console.log("✅ trim() antes de validar inputs");
console.log("✅ Preferir includes() sobre indexOf() !== -1");
console.log("✅ slice() es más versátil que substring()");
console.log("✅ Normalizar strings para comparaciones");
console.log("\\n❌ No confiar en length para Unicode complejo");
console.log("❌ Evitar substr() (deprecado)");
console.log("❌ No usar + para concatenar en loops");
console.log("\\n✨ Strings son inmutables en JavaScript");</textarea>
            <button onclick="runCode('code-str-30')">Ejecutar</button>
            <div class="output" id="output-str-30"></div>
        </div>

    </section>
`;
