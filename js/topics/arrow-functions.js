const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Arrow Functions (Funciones Flecha)</h2>
        <p>Las funciones flecha son una forma más corta y concisa de escribir funciones en JavaScript, introducidas en ES6.</p>

        <h3>1. Sintaxis Básica</h3>
        <p>Comparación entre función tradicional y función flecha.</p>
        
        <div class="example">
            <textarea id="code-arrow-1" readonly>// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Función flecha
const sumarFlecha = (a, b) => {
    return a + b;
};

console.log("Tradicional:", sumar(5, 3));
console.log("Flecha:", sumarFlecha(5, 3));</textarea>
            <button onclick="runCode('code-arrow-1')">Ejecutar</button>
            <div class="output" id="output-arrow-1"></div>
        </div>

        <hr>

        <h3>2. Return Implícito</h3>
        <p>Si la función solo retorna una expresión, puedes omitir las llaves y el return.</p>

        <div class="example">
            <textarea id="code-arrow-2" readonly>// Con llaves y return
const multiplicar1 = (a, b) => {
    return a * b;
};

// Sin llaves (return implícito)
const multiplicar2 = (a, b) => a * b;

console.log("Con return:", multiplicar1(4, 5));
console.log("Return implícito:", multiplicar2(4, 5));</textarea>
            <button onclick="runCode('code-arrow-2')">Ejecutar</button>
            <div class="output" id="output-arrow-2"></div>
        </div>

        <hr>

        <h3>3. Un Solo Parámetro</h3>
        <p>Con un parámetro, puedes omitir los paréntesis.</p>

        <div class="example">
            <textarea id="code-arrow-3" readonly>// Con paréntesis
const cuadrado1 = (x) => x * x;

// Sin paréntesis
const cuadrado2 = x => x * x;

console.log("cuadrado1(5):", cuadrado1(5));
console.log("cuadrado2(5):", cuadrado2(5));

const saludar = nombre => \`Hola, \${nombre}!\`;
console.log(saludar("Ana"));</textarea>
            <button onclick="runCode('code-arrow-3')">Ejecutar</button>
            <div class="output" id="output-arrow-3"></div>
        </div>

        <hr>

        <h3>4. Sin Parámetros</h3>
        <p>Sin parámetros, los paréntesis son obligatorios.</p>

        <div class="example">
            <textarea id="code-arrow-4" readonly>const obtenerFecha = () => new Date().toLocaleDateString();

const numeroAleatorio = () => Math.floor(Math.random() * 100);

console.log("Fecha:", obtenerFecha());
console.log("Número aleatorio:", numeroAleatorio());</textarea>
            <button onclick="runCode('code-arrow-4')">Ejecutar</button>
            <div class="output" id="output-arrow-4"></div>
        </div>

        <hr>

        <h3>5. Retornar Objetos</h3>
        <p>Para retornar objetos literales, envuélvelos en paréntesis.</p>

        <div class="example">
            <textarea id="code-arrow-5" readonly>// Sin paréntesis - ERROR (interpreta {} como bloque)
// const crearPersona1 = (nombre, edad) => {nombre, edad};

// Con paréntesis - CORRECTO
const crearPersona = (nombre, edad) => ({nombre, edad});

const persona1 = crearPersona("Ana", 25);
const persona2 = crearPersona("Luis", 30);

console.log(persona1);
console.log(persona2);</textarea>
            <button onclick="runCode('code-arrow-5')">Ejecutar</button>
            <div class="output" id="output-arrow-5"></div>
        </div>

        <hr>

        <h3>6. Múltiples Líneas</h3>
        <p>Para múltiples líneas, usa llaves y return explícito.</p>

        <div class="example">
            <textarea id="code-arrow-6" readonly>const calcularDescuento = (precio, porcentaje) => {
    const descuento = precio * (porcentaje / 100);
    const precioFinal = precio - descuento;
    return precioFinal;
};

const procesarPedido = (productos) => {
    const total = productos.reduce((sum, p) => sum + p, 0);
    const iva = total * 0.21;
    return { total, iva, final: total + iva };
};

console.log("Con descuento:", calcularDescuento(100, 20));
console.log("Pedido:", procesarPedido([10, 20, 30]));</textarea>
            <button onclick="runCode('code-arrow-6')">Ejecutar</button>
            <div class="output" id="output-arrow-6"></div>
        </div>

        <hr>

        <h3>7. this Léxico</h3>
        <p>Las arrow functions no tienen su propio this, heredan el del contexto.</p>

        <div class="example">
            <textarea id="code-arrow-7" readonly>const objeto = {
    nombre: "Mi Objeto",
    
    tradicional: function() {
        console.log("Tradicional this:", this.nombre);
    },
    
    flecha: () => {
        console.log("Flecha this:", this.nombre); // undefined
    }
};

objeto.tradicional();
objeto.flecha();

console.log("\\nLa flecha no tiene su propio this");</textarea>
            <button onclick="runCode('code-arrow-7')">Ejecutar</button>
            <div class="output" id="output-arrow-7"></div>
        </div>

        <hr>

        <h3>8. this en Métodos de Clase</h3>
        <p>Las arrow functions son útiles en callbacks dentro de clases.</p>

        <div class="example">
            <textarea id="code-arrow-8" readonly>class Contador {
    constructor() {
        this.valor = 0;
    }
    
    incrementarTradicional() {
        console.log("Antes:", this.valor);
        // Si esto fuera un callback, this se perdería
        this.valor++;
        console.log("Después:", this.valor);
    }
    
    incrementarConFlecha = () => {
        this.valor++;
        console.log("Con flecha:", this.valor);
    }
}

const contador = new Contador();
contador.incrementarTradicional();
contador.incrementarConFlecha();</textarea>
            <button onclick="runCode('code-arrow-8')">Ejecutar</button>
            <div class="output" id="output-arrow-8"></div>
        </div>

        <hr>

        <h3>9. Con Array.map()</h3>
        <p>Las arrow functions son perfectas para métodos de arrays.</p>

        <div class="example">
            <textarea id="code-arrow-9" readonly>const numeros = [1, 2, 3, 4, 5];

// Con función tradicional
const cuadrados1 = numeros.map(function(n) {
    return n * n;
});

// Con arrow function
const cuadrados2 = numeros.map(n => n * n);

console.log("Cuadrados:", cuadrados2);

const personas = [{nombre: "Ana", edad: 25}, {nombre: "Luis", edad: 30}];
const nombres = personas.map(p => p.nombre);
console.log("Nombres:", nombres);</textarea>
            <button onclick="runCode('code-arrow-9')">Ejecutar</button>
            <div class="output" id="output-arrow-9"></div>
        </div>

        <hr>

        <h3>10. Con Array.filter()</h3>
        <p>Filtrar arrays de forma concisa.</p>

        <div class="example">
            <textarea id="code-arrow-10" readonly>const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(n => n % 2 === 0);
const mayoresQue5 = numeros.filter(n => n > 5);

console.log("Pares:", pares);
console.log("Mayores que 5:", mayoresQue5);

const productos = [
    {nombre: "Laptop", precio: 1000},
    {nombre: "Mouse", precio: 20},
    {nombre: "Teclado", precio: 50}
];

const caros = productos.filter(p => p.precio > 30);
console.log("Productos caros:", caros);</textarea>
            <button onclick="runCode('code-arrow-10')">Ejecutar</button>
            <div class="output" id="output-arrow-10"></div>
        </div>

        <hr>

        <h3>11. Con Array.reduce()</h3>
        <p>Reduce es más legible con arrow functions.</p>

        <div class="example">
            <textarea id="code-arrow-11" readonly>const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, n) => acc + n, 0);
const producto = numeros.reduce((acc, n) => acc * n, 1);

console.log("Suma:", suma);
console.log("Producto:", producto);

const palabras = ["Hola", "mundo", "JavaScript"];
const frase = palabras.reduce((acc, p) => acc + " " + p);
console.log("Frase:", frase);</textarea>
            <button onclick="runCode('code-arrow-11')">Ejecutar</button>
            <div class="output" id="output-arrow-11"></div>
        </div>

        <hr>

        <h3>12. Encadenamiento de Métodos</h3>
        <p>Las arrow functions permiten encadenar operaciones de forma elegante.</p>

        <div class="example">
            <textarea id="code-arrow-12" readonly>const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log("Resultado:", resultado);

const palabras = ["hola", "mundo", "javascript"];
const procesado = palabras
    .map(p => p.toUpperCase())
    .filter(p => p.length > 5)
    .join(" - ");

console.log("Procesado:", procesado);</textarea>
            <button onclick="runCode('code-arrow-12')">Ejecutar</button>
            <div class="output" id="output-arrow-12"></div>
        </div>

        <hr>

        <h3>13. No Tienen arguments</h3>
        <p>Las arrow functions no tienen el objeto arguments.</p>

        <div class="example">
            <textarea id="code-arrow-13" readonly>function tradicional() {
    console.log("arguments en tradicional:", arguments);
}

const flecha = () => {
    try {
        console.log(arguments);
    } catch (e) {
        console.log("Arrow function no tiene arguments");
    }
};

tradicional(1, 2, 3);
flecha(1, 2, 3);

// Usar rest parameters en arrow functions
const suma = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log("suma(1,2,3,4):", suma(1, 2, 3, 4));</textarea>
            <button onclick="runCode('code-arrow-13')">Ejecutar</button>
            <div class="output" id="output-arrow-13"></div>
        </div>

        <hr>

        <h3>14. No Pueden Ser Constructores</h3>
        <p>No puedes usar new con arrow functions.</p>

        <div class="example">
            <textarea id="code-arrow-14" readonly>function PersonaTradicional(nombre) {
    this.nombre = nombre;
}

const persona1 = new PersonaTradicional("Ana");
console.log("Tradicional:", persona1);

const PersonaFlecha = (nombre) => {
    this.nombre = nombre;
};

try {
    const persona2 = new PersonaFlecha("Luis");
} catch (e) {
    console.log("Error:", e.message);
}</textarea>
            <button onclick="runCode('code-arrow-14')">Ejecutar</button>
            <div class="output" id="output-arrow-14"></div>
        </div>

        <hr>

        <h3>15. Callbacks Simples</h3>
        <p>Ideales para callbacks sencillos.</p>

        <div class="example">
            <textarea id="code-arrow-15" readonly>const nombres = ["Ana", "Luis", "Pedro", "María"];

nombres.forEach(nombre => console.log("Hola, " + nombre));

console.log("\\nOrdenado:");
const ordenado = nombres.sort((a, b) => a.localeCompare(b));
ordenado.forEach(n => console.log(n));</textarea>
            <button onclick="runCode('code-arrow-15')">Ejecutar</button>
            <div class="output" id="output-arrow-15"></div>
        </div>

        <hr>

        <h3>16. Con Array.some() y Array.every()</h3>
        <p>Verificar condiciones en arrays.</p>

        <div class="example">
            <textarea id="code-arrow-16" readonly>const numeros = [2, 4, 6, 8, 10];
const numeros2 = [1, 3, 5, 7, 9];

const todosPares = numeros.every(n => n % 2 === 0);
const algunPar = numeros2.some(n => n % 2 === 0);

console.log("Todos pares:", todosPares);
console.log("Algún par en numeros2:", algunPar);

const personas = [{edad: 20}, {edad: 25}, {edad: 30}];
const todosMayores = personas.every(p => p.edad >= 18);
console.log("Todos mayores de edad:", todosMayores);</textarea>
            <button onclick="runCode('code-arrow-16')">Ejecutar</button>
            <div class="output" id="output-arrow-16"></div>
        </div>

        <hr>

        <h3>17. Con Array.find() y Array.findIndex()</h3>
        <p>Buscar elementos en arrays.</p>

        <div class="example">
            <textarea id="code-arrow-17" readonly>const usuarios = [
    {id: 1, nombre: "Ana"},
    {id: 2, nombre: "Luis"},
    {id: 3, nombre: "Pedro"}
];

const usuario = usuarios.find(u => u.id === 2);
const indice = usuarios.findIndex(u => u.nombre === "Pedro");

console.log("Usuario encontrado:", usuario);
console.log("Índice de Pedro:", indice);

const numeros = [5, 12, 8, 130, 44];
const mayorQue10 = numeros.find(n => n > 10);
console.log("Primer número > 10:", mayorQue10);</textarea>
            <button onclick="runCode('code-arrow-17')">Ejecutar</button>
            <div class="output" id="output-arrow-17"></div>
        </div>

        <hr>

        <h3>18. Retornos Condicionales</h3>
        <p>Usar operador ternario en return implícito.</p>

        <div class="example">
            <textarea id="code-arrow-18" readonly>const esPar = n => n % 2 === 0 ? "Par" : "Impar";
const esPositivo = n => n > 0 ? "Positivo" : "Negativo o cero";

console.log("5 es", esPar(5));
console.log("8 es", esPar(8));
console.log("-3 es", esPositivo(-3));

const obtenerCalificacion = nota => 
    nota >= 90 ? "A" :
    nota >= 80 ? "B" :
    nota >= 70 ? "C" : "D";

console.log("Nota 85:", obtenerCalificacion(85));</textarea>
            <button onclick="runCode('code-arrow-18')">Ejecutar</button>
            <div class="output" id="output-arrow-18"></div>
        </div>

        <hr>

        <h3>19. Composición de Funciones</h3>
        <p>Combinar funciones de forma elegante.</p>

        <div class="example">
            <textarea id="code-arrow-19" readonly>const duplicar = x => x * 2;
const incrementar = x => x + 1;
const cuadrado = x => x * x;

// Composición manual
const resultado1 = cuadrado(incrementar(duplicar(3)));
console.log("Composición manual:", resultado1);

// Función compose
const compose = (...fns) => x => 
    fns.reduceRight((acc, fn) => fn(acc), x);

const operacion = compose(cuadrado, incrementar, duplicar);
console.log("Con compose:", operacion(3));</textarea>
            <button onclick="runCode('code-arrow-19')">Ejecutar</button>
            <div class="output" id="output-arrow-19"></div>
        </div>

        <hr>

        <h3>20. Currying</h3>
        <p>Crear funciones parcialmente aplicadas.</p>

        <div class="example">
            <textarea id="code-arrow-20" readonly>const suma = a => b => a + b;
const multiplicar = a => b => c => a * b * c;

console.log("suma(5)(3):", suma(5)(3));

const suma10 = suma(10);
console.log("suma10(5):", suma10(5));
console.log("suma10(20):", suma10(20));

const mult = multiplicar(2)(3)(4);
console.log("multiplicar(2)(3)(4):", mult);</textarea>
            <button onclick="runCode('code-arrow-20')">Ejecutar</button>
            <div class="output" id="output-arrow-20"></div>
        </div>

        <hr>

        <h3>21. Con Promesas</h3>
        <p>Las arrow functions son ideales para trabajar con promesas.</p>

        <div class="example">
            <textarea id="code-arrow-21" readonly>const obtenerDatos = () => 
    Promise.resolve({nombre: "Ana", edad: 25});

obtenerDatos()
    .then(datos => {
        console.log("Datos:", datos);
        return datos.nombre;
    })
    .then(nombre => console.log("Nombre:", nombre))
    .catch(error => console.log("Error:", error));

console.log("Promesa iniciada...");</textarea>
            <button onclick="runCode('code-arrow-21')">Ejecutar</button>
            <div class="output" id="output-arrow-21"></div>
        </div>

        <hr>

        <h3>22. IIFE con Arrow Functions</h3>
        <p>Immediately Invoked Function Expression con arrow functions.</p>

        <div class="example">
            <textarea id="code-arrow-22" readonly>// IIFE tradicional
(function() {
    console.log("IIFE tradicional ejecutada");
})();

// IIFE con arrow function
(() => {
    console.log("IIFE arrow ejecutada");
})();

const resultado = ((x, y) => x + y)(5, 3);
console.log("Resultado de IIFE:", resultado);</textarea>
            <button onclick="runCode('code-arrow-22')">Ejecutar</button>
            <div class="output" id="output-arrow-22"></div>
        </div>

        <hr>

        <h3>23. Default Parameters</h3>
        <p>Parámetros con valores por defecto.</p>

        <div class="example">
            <textarea id="code-arrow-23" readonly>const saludar = (nombre = "Usuario") => \`Hola, \${nombre}!\`;

const multiplicar = (a, b = 2) => a * b;

const crearConfig = (host = "localhost", port = 3000) => 
    ({ host, port });

console.log(saludar());
console.log(saludar("Ana"));
console.log("multiplicar(5):", multiplicar(5));
console.log("Config:", crearConfig());</textarea>
            <button onclick="runCode('code-arrow-23')">Ejecutar</button>
            <div class="output" id="output-arrow-23"></div>
        </div>

        <hr>

        <h3>24. Destructuring en Parámetros</h3>
        <p>Extraer propiedades directamente en los parámetros.</p>

        <div class="example">
            <textarea id="code-arrow-24" readonly>const mostrarPersona = ({nombre, edad}) => 
    \`\${nombre} tiene \${edad} años\`;

const sumarProps = ({a, b}) => a + b;

const persona = {nombre: "Ana", edad: 25, ciudad: "Madrid"};
console.log(mostrarPersona(persona));

const punto = {a: 10, b: 20};
console.log("Suma:", sumarProps(punto));

const primero = ([x]) => x;
console.log("Primero de [1,2,3]:", primero([1, 2, 3]));</textarea>
            <button onclick="runCode('code-arrow-24')">Ejecutar</button>
            <div class="output" id="output-arrow-24"></div>
        </div>

        <hr>

        <h3>25. Higher Order Functions</h3>
        <p>Funciones que retornan funciones.</p>

        <div class="example">
            <textarea id="code-arrow-25" readonly>const crearMultiplicador = factor => numero => numero * factor;

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log("duplicar(5):", duplicar(5));
console.log("triplicar(5):", triplicar(5));

const crearSaludo = prefijo => nombre => \`\${prefijo}, \${nombre}!\`;
const saludoFormal = crearSaludo("Buenos días");
console.log(saludoFormal("Ana"));</textarea>
            <button onclick="runCode('code-arrow-25')">Ejecutar</button>
            <div class="output" id="output-arrow-25"></div>
        </div>

        <hr>

        <h3>26. Con setTimeout y setInterval</h3>
        <p>Mantener el contexto this en callbacks temporales.</p>

        <div class="example">
            <textarea id="code-arrow-26" readonly>const objeto = {
    nombre: "Mi Objeto",
    valor: 0,
    
    iniciar() {
        console.log("Iniciando...");
        
        // Arrow function mantiene this
        const incrementar = () => {
            this.valor++;
            console.log(\`\${this.nombre}: \${this.valor}\`);
        };
        
        // Simular setTimeout
        incrementar();
    }
};

objeto.iniciar();</textarea>
            <button onclick="runCode('code-arrow-26')">Ejecutar</button>
            <div class="output" id="output-arrow-26"></div>
        </div>

        <hr>

        <h3>27. Expresiones Complejas</h3>
        <p>Return implícito con expresiones complejas.</p>

        <div class="example">
            <textarea id="code-arrow-27" readonly>const calcular = (a, b) => (
    a * 2 + b * 3
);

const transformar = x => (
    x * 2,
    x + 10,
    x * x  // Solo esto se retorna
);

console.log("calcular(5, 3):", calcular(5, 3));
console.log("transformar(5):", transformar(5));

const complejo = n => (
    n < 0 ? -n :
    n === 0 ? 0 :
    n * 2
);

console.log("complejo(-5):", complejo(-5));</textarea>
            <button onclick="runCode('code-arrow-27')">Ejecutar</button>
            <div class="output" id="output-arrow-27"></div>
        </div>

        <hr>

        <h3>28. Template Literals</h3>
        <p>Combinar arrow functions con template literals.</p>

        <div class="example">
            <textarea id="code-arrow-28" readonly>const crearMensaje = (nombre, edad) => 
    \`Hola, soy \${nombre} y tengo \${edad} años\`;

const formatearPrecio = precio => 
    \`$\${precio.toFixed(2)}\`;

const crearHTML = (titulo, contenido) => \`
    <div>
        <h2>\${titulo}</h2>
        <p>\${contenido}</p>
    </div>
\`;

console.log(crearMensaje("Ana", 25));
console.log(formatearPrecio(99.5));
console.log(crearHTML("Título", "Contenido"));</textarea>
            <button onclick="runCode('code-arrow-28')">Ejecutar</button>
            <div class="output" id="output-arrow-28"></div>
        </div>

        <hr>

        <h3>29. Cuando NO Usar Arrow Functions</h3>
        <p>Casos donde las funciones tradicionales son mejores.</p>

        <div class="example">
            <textarea id="code-arrow-29" readonly>// ❌ Como métodos de objetos (si necesitas this)
const obj1 = {
    nombre: "Objeto",
    metodo: () => console.log(this.nombre) // undefined
};

// ✅ Función tradicional
const obj2 = {
    nombre: "Objeto",
    metodo() { console.log(this.nombre); } // "Objeto"
};

obj1.metodo();
obj2.metodo();

console.log("\\n❌ Como constructores");
console.log("✅ En callbacks y arrays");
console.log("✅ Para funciones cortas");</textarea>
            <button onclick="runCode('code-arrow-29')">Ejecutar</button>
            <div class="output" id="output-arrow-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con arrow functions.</p>

        <div class="example">
            <textarea id="code-arrow-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar para callbacks");
const nums = [1, 2, 3].map(n => n * 2);

console.log("✅ Return implícito cuando sea posible");
const suma = (a, b) => a + b;

console.log("✅ Paréntesis para objetos literales");
const crear = () => ({x: 1});

console.log("✅ Usar en composición de funciones");
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

console.log("\\n❌ Evitar en métodos de objetos");
console.log("❌ Evitar cuando necesites arguments");
console.log("❌ Evitar como constructores");

console.log("\\n✨ Arrow functions:", nums);</textarea>
            <button onclick="runCode('code-arrow-30')">Ejecutar</button>
            <div class="output" id="output-arrow-30"></div>
        </div>

    </section>
`;
