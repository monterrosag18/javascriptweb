const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>RegExp (Expresiones Regulares)</h2>
        <p>Patrones para búsqueda, validación y manipulación de strings.</p>

        <h3>1. Crear RegExp</h3>
        <p>Diferentes formas de crear patrones.</p>

        <div class="example">
            <textarea id="code-regex-1" readonly>// Literal
const regex1 = /hola/;

// Constructor
const regex2 = new RegExp('hola');

// Con flags
const regex3 = /hola/gi; // global, insensible

console.log("Literal:", regex1);
console.log("Constructor:", regex2);
console.log("Con flags:", regex3);

// El constructor permite variables
const palabra = 'test';
const regex4 = new RegExp(palabra);
console.log("Con variable:", regex4);</textarea>
            <button onclick="runCode('code-regex-1')">Ejecutar</button>
            <div class="output" id="output-regex-1"></div>
        </div>

        <hr>

        <h3>2. Métodos Básicos</h3>
        <p>test, exec, match.</p>

        <div class="example">
            <textarea id="code-regex-2" readonly>const regex = /\d+/; // Dígitos

// test: boolean
console.log("test('abc123'):", regex.test('abc123'));
console.log("test('abc'):", regex.test('abc'));

const texto = 'Números: 123 y 456';

// exec: detalles del match
const match = /\d+/.exec(texto);
console.log("exec:", match);

// match en string
const matches = texto.match(/\d+/g);
console.log("match con g:", matches);

// includes de strings
console.log("\\nTambién puedes:")
console.log("texto.includes('123'):", texto.includes('123'));
console.log("texto.startsWith('Números'):", texto.startsWith('Números'));</textarea>
            <button onclick="runCode('code-regex-2')">Ejecutar</button>
            <div class="output" id="output-regex-2"></div>
        </div>

        <hr>

        <h3>3. Caracteres Especiales</h3>
        <p>Patrones comunes.</p>

        <div class="example">
            <textarea id="code-regex-3" readonly>console.log("PATRONES COMUNES:\\n");

// . : cualquier carácter (excepto salto línea)
console.log("/.c/:", /c./.test('cat')); // true

// ^ : inicio
console.log("/^h/:", /^h/.test('hello')); // true

// $ : fin
console.log("/d$/:", /d$/.test('world')); // false

// * : 0 o más
console.log("/ab*c/:", /ab*c/.test('ac')); // true
console.log("/ab*c/:", /ab*c/.test('abbc')); // true

// + : 1 o más
console.log("/ab+c/:", /ab+c/.test('ac')); // false
console.log("/ab+c/:", /ab+c/.test('abbc')); // true

// ? : 0 o 1
console.log("/ab?c/:", /ab?c/.test('ac')); // true
console.log("/ab?c/:", /ab?c/.test('abbc')); // false

// {n,m} : entre n y m
console.log("/a{2,4}b/:", /a{2,4}b/.test('aaab')); // true</textarea>
            <button onclick="runCode('code-regex-3')">Ejecutar</button>
            <div class="output" id="output-regex-3"></div>
        </div>

        <hr>

        <h3>4. Clases de Caracteres</h3>
        <p>Conjuntos de caracteres.</p>

        <div class="example">
            <textarea id="code-regex-4" readonly>// [abc] : a, b, o c
console.log("/[abc]/:", /[abc]/.test('b')); // true

// [a-z] : letras minúsculas
console.log("/[a-z]/:", /[a-z]/.test('hello')); // true

// [0-9] : dígitos
console.log("/[0-9]/:", /[0-9]/.test('abc123')); // true

// [^abc] : NO a, b, o c
console.log("/[^abc]/:", /[^abc]/.test('a')); // false
console.log("/[^abc]/:", /[^abc]/.test('d')); // true

// Combinados
console.log("/[a-zA-Z0-9]/:", /[a-zA-Z0-9]/.test('_')); // false
console.log("/[a-zA-Z0-9]/:", /[a-zA-Z0-9]/.test('A')); // true

// Clases predefinidas
console.log("\\n\\\\d (dígito):", /\d/.test('5')); // true
console.log("\\\\D (no dígito):", /\D/.test('a')); // true
console.log("\\\\w (word):", /\w/.test('_')); // true
console.log("\\\\s (espacio):", /\s/.test(' ')); // true</textarea>
            <button onclick="runCode('code-regex-4')">Ejecutar</button>
            <div class="output" id="output-regex-4"></div>
        </div>

        <hr>

        <h3>5. Flags</h3>
        <p>Modificadores de comportamiento.</p>

        <div class="example">
            <textarea id="code-regex-5" readonly>const texto = 'Hello HELLO hello';

// g: global (todos los matches)
console.log("sin g:", texto.match(/hello/)); // 1
console.log("con g:", texto.match(/hello/g)); // 1

// i: insensible mayúsculas
console.log("sin i:", /hello/.test('HELLO')); // false
console.log("con i:", /hello/i.test('HELLO')); // true

// m: multiline (^ y $ por línea)
const lineas = 'hola\\nmundo';
console.log("sin m:", /^mundo/.test(lineas)); // false
console.log("con m:", /^mundo/m.test(lineas)); // true

// s: dot matches salto línea
const conSalto = 'a\\nb';
console.log("sin s:", /./.test('\\n')); // false
console.log("con s:", /./s.test('\\n')); // true

// Combinados
const regex = /HELLO/gi;
console.log("\\nCombinados:", regex.test('hello')); // true</textarea>
            <button onclick="runCode('code-regex-5')">Ejecutar</button>
            <div class="output" id="output-regex-5"></div>
        </div>

        <hr>

        <h3>6. String Methods</h3>
        <p>Métodos de string con regex.</p>

        <div class="example">
            <textarea id="code-regex-6" readonly>const texto = 'JavaScript es genial JavaScript';

// match: array de matches
console.log("match(/java/gi):", texto.match(/java/gi));

// matchAll: iterador con detalles
const matches = [...texto.matchAll(/java/gi)];
console.log("matchAll count:", matches.length);

// search: índice del primer match
console.log("search(/genial/):", texto.search(/genial/));

// replace: reemplazar
console.log("replace(/java/gi, 'Py'):", texto.replace(/java/gi, 'Py'));

// replaceAll: reemplazar todos
console.log("replaceAll:", texto.replaceAll('JavaScript', 'Python'));

// split: dividir por patrón
const numeros = '1a2b3c4';
console.log("split(/[a-z]/):", numeros.split(/[a-z]/));</textarea>
            <button onclick="runCode('code-regex-6')">Ejecutar</button>
            <div class="output" id="output-regex-6"></div>
        </div>

        <hr>

        <h3>7. Validación Email</h3>
        <p>Patrón práctico.</p>

        <div class="example">
            <textarea id="code-regex-7" readonly>// Regex simple (no perfecta)
const regexEmail = /^[^@]+@[^@]+\.[a-z]{2,}$/i;

// Casos de prueba
const emails = [
    'usuario@gmail.com',
    'juan.perez@empresa.co.uk',
    'invalido@',
    '@invalido.com',
    'sin-dominio',
    'correo+tag@example.org'
];

console.log("Validación simple:");
emails.forEach(email => {
    const valido = regexEmail.test(email);
    console.log(\`\${email}: \${valido ? '✓' : '✗'}\`);
});

// Regex más robusta
const regexRobusta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log("\\nValidación robusta:");
emails.forEach(email => {
    const valido = regexRobusta.test(email);
    console.log(\`\${email}: \${valido ? '✓' : '✗'}\`);
});</textarea>
            <button onclick="runCode('code-regex-7')">Ejecutar</button>
            <div class="output" id="output-regex-7"></div>
        </div>

        <hr>

        <h3>8. Validación Contraseña</h3>
        <p>Reglas complejas.</p>

        <div class="example">
            <textarea id="code-regex-8" readonly>function validarContraseña(pass) {
    const reglas = {
        longitud: /.{8,}/, // 8+ caracteres
        mayuscula: /[A-Z]/, // Al menos 1 mayúscula
        minuscula: /[a-z]/, // Al menos 1 minúscula
        numero: /\d/, // Al menos 1 número
        especial: /[!@#$%^&*]/ // Al menos 1 especial
    };
    
    const resultado = {};
    Object.entries(reglas).forEach(([clave, regex]) => {
        resultado[clave] = regex.test(pass);
    });
    
    return resultado;
}

const contraseñas = [
    'Débil',
    'debil123',
    'Fuerte123',
    'Muy!Fuerte123@'
];

contraseñas.forEach(pass => {
    const validacion = validarContraseña(pass);
    const todas = Object.values(validacion).every(v => v);
    console.log(\`\${pass}: \${todas ? '✓ Válida' : '✗ Débil'}\`);
    Object.entries(validacion).forEach(([regla, ok]) => {
        console.log(\`  \${regla}: \${ok ? '✓' : '✗'}\`);
    });
});</textarea>
            <button onclick="runCode('code-regex-8')">Ejecutar</button>
            <div class="output" id="output-regex-8"></div>
        </div>

        <hr>

        <h3>9. Extracción de Datos</h3>
        <p>Extraer información con groups.</p>

        <div class="example">
            <textarea id="code-regex-9" readonly>// URL
const urlRegex = /^(https?):\/\/([^\/]+)(\/[^?]*)?\??(.*)$/;
const url = 'https://example.com/path?query=value';
const match = url.match(urlRegex);

console.log("URL:", url);
if (match) {
    console.log("Protocolo:", match[1]);
    console.log("Host:", match[2]);
    console.log("Path:", match[3]);
    console.log("Query:", match[4]);
}

// Named groups
const regexNamed = /(?<protocolo>https?):\/\/(?<host>[^\/]+)/;
const matchNamed = url.match(regexNamed);
console.log("\\nNamed groups:", matchNamed.groups);

// Teléfono
const phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
const phone = '555-123-4567';
const [, area, central, linea] = phone.match(phoneRegex);
console.log(\`\\nTeléfono: \${area} \${central} \${linea}\`);</textarea>
            <button onclick="runCode('code-regex-9')">Ejecutar</button>
            <div class="output" id="output-regex-9"></div>
        </div>

        <hr>

        <h3>10. Búsqueda y Reemplazo</h3>
        <p>Transformar texto.</p>

        <div class="example">
            <textarea id="code-regex-10" readonly>// Camel case a snake case
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, match => '_' + match.toLowerCase());
}

console.log("camelCase a snake_case:");
console.log(camelToSnake('helloWorld')); // hello_world
console.log(camelToSnake('myVariableName')); // my_variable_name

// Snake case a camel case
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letra) => letra.toUpperCase());
}

console.log("\\nsnake_case a camelCase:");
console.log(snakeToCamel('hello_world')); // helloWorld
console.log(snakeToCamel('my_variable_name')); // myVariableName

// Capitalizar palabras
function capitalizar(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

console.log("\\nCapitalizar:");
console.log(capitalizar('hello world')); // Hello World
console.log(capitalizar('javascript es genial')); // Javascript Es Genial</textarea>
            <button onclick="runCode('code-regex-10')">Ejecutar</button>
            <div class="output" id="output-regex-10"></div>
        </div>

        <hr>

        <h3>11. Limpieza de Strings</h3>
        <p>Sanear entrada.</p>

        <div class="example">
            <textarea id="code-regex-11" readonly>// Remover espacios extra
function limpiarEspacios(str) {
    return str.replace(/\s+/g, ' ').trim();
}

console.log(limpiarEspacios('  hola    mundo  '));
// "hola mundo"

// Remover caracteres especiales
function limpiarEspeciales(str) {
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

console.log(limpiarEspeciales('¡Hola! ¿Mundo?'));
// "Hola Mundo"

// Solo números
function soloNumeros(str) {
    return str.replace(/\D/g, '');
}

console.log(soloNumeros('Tel: 555-123-4567'));
// "5551234567"

// HTML escape
function htmlEscape(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

console.log(htmlEscape('<script>alert("XSS")</script>'));
// "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"</textarea>
            <button onclick="runCode('code-regex-11')">Ejecutar</button>
            <div class="output" id="output-regex-11"></div>
        </div>

        <hr>

        <h3>12. Lookahead y Lookbehind</h3>
        <p>Aserciones avanzadas.</p>

        <div class="example">
            <textarea id="code-regex-12" readonly>// Lookahead: (?=patrón)
// Números seguidos de 'px'
const regex1 = /\d+(?=px)/;
console.log("Lookahead - Números antes de 'px':");
console.log(regex1.exec('10px')); // ['10']
console.log(regex1.exec('10em')); // null

// Negative lookahead: (?!patrón)
// Números NO seguidos de 'px'
const regex2 = /\d+(?!px)/;
console.log("\\nNegative Lookahead:");
console.log(regex2.test('10em')); // true
console.log(regex2.test('10px')); // false

// Lookbehind: (?<=patrón)
// Números precedidos de '$'
const regex3 = /(?<=\$)\d+/;
console.log("\\nLookbehind - Números después de '$':");
console.log(regex3.exec('$100')); // ['100']
console.log(regex3.exec('€100')); // null

// Negative lookbehind: (?<!patrón)
const regex4 = /(?<!-)\d+/; // NO precedido de -
console.log("\\nNegative Lookbehind:");
console.log(regex4.test('-5')); // false
console.log(regex4.test('5')); // true</textarea>
            <button onclick="runCode('code-regex-12')">Ejecutar</button>
            <div class="output" id="output-regex-12"></div>
        </div>

        <hr>

        <h3>13. Best Practices</h3>
        <p>Mejores prácticas.</p>

        <div class="example">
            <textarea id="code-regex-13" readonly>console.log("BEST PRACTICES:\\n");

console.log("✅ Usa literals /regex/ cuando sea posible");
console.log("✅ Escapa caracteres especiales con \\");
console.log("✅ Usa flags apropiadosh (g, i, m, s)");
console.log("✅ Prueba patrones en regex101.com");
console.log("✅ Documenta regex complejos");

console.log("\\n❌ Evita:");
console.log("❌ Regex muy complejos (usa parsers)");
console.log("❌ Backtracking catastrófico");
console.log("❌ Confundir . con \\.");
console.log("❌ Agrupar innecesariamente");

console.log("\\n💡 Tips:");
console.log("💡 Comienza simple, ve agregando");
console.log("💡 Usa grupos () para extraer");
console.log("💡 Non-capturing (?:) para no extraer");
console.log("💡 Lazy matching: *?, +?, ??");</textarea>
            <button onclick="runCode('code-regex-13')">Ejecutar</button>
            <div class="output" id="output-regex-13"></div>
        </div>

        <hr>

        <h3>14. Cheat Sheet</h3>
        <p>Referencia rápida.</p>

        <div class="example">
            <textarea id="code-regex-14" readonly">console.log("CARACTERES ESPECIALES:");
console.log(". = cualquier carácter");
console.log("^ = inicio");
console.log("$ = fin");
console.log("* = 0 o más");
console.log("+ = 1 o más");
console.log("? = 0 o 1");
console.log("{n,m} = entre n y m");
console.log("[abc] = a, b, o c");
console.log("[^abc] = NO a, b, o c");
console.log("[a-z] = rango");

console.log("\\n\\\\ABREVIATURAS:");
console.log("\\d = dígito");
console.log("\\w = word [a-zA-Z0-9_]");
console.log("\\s = whitespace");
console.log("\\D = NO dígito");
console.log("\\W = NO word");
console.log("\\S = NO whitespace");

console.log("\\nFLAGS:");
console.log("g = global");
console.log("i = insensible");
console.log("m = multiline");
console.log("s = dot matches all");

console.log("\\nMÉTODOS:");
console.log("regex.test(str)");
console.log("regex.exec(str)");
console.log("str.match(regex)");
console.log("str.replace(regex, repl)");
console.log("str.split(regex)");</textarea>
            <button onclick="runCode('code-regex-14')">Ejecutar</button>
            <div class="output" id="output-regex-14"></div>
        </div>

    </section>
`;
