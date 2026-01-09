const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Funciones y Alcance (Scope)</h2>
        <p>Las funciones son bloques de código reutilizables. Piensa en ellas como una receta que puedes usar una y otra vez.</p>

        <h3>1. Declarar y Llamar a una Función</h3>
        <p>Primero, creas la "receta" (declaras la función). Luego, la usas (llamas a la función).</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Una función que saluda.</p>
            <textarea id="code-func-1" readonly>function saludar() {
    console.log("¡Hola, mundo!");
}

// Ahora usamos la función
saludar();
saludar();
saludar();</textarea>
            <button onclick="runCode('code-func-1')">Ejecutar</button>
            <div class="output" id="output-func-1"></div>
        </div>

        <hr>

        <h3>2. Funciones con Parámetros</h3>
        <p>Puedes pasarle información a una función para que trabaje con ella. Estos se llaman parámetros.</p>

        <div class="example">
            <textarea id="code-func-2" readonly>function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludarA("Ana");
saludarA("Luis");
saludarA("Carlos");</textarea>
            <button onclick="runCode('code-func-2')">Ejecutar</button>
            <div class="output" id="output-func-2"></div>
        </div>

        <hr>

        <h3>3. Múltiples Parámetros</h3>
        <p>Las funciones pueden recibir varios parámetros separados por comas.</p>

        <div class="example">
            <textarea id="code-func-3" readonly>function presentar(nombre, edad, ciudad) {
    console.log(\`Me llamo \${nombre}, tengo \${edad} años y vivo en \${ciudad}.\`);
}

presentar("María", 25, "Madrid");
presentar("Pedro", 30, "Barcelona");</textarea>
            <button onclick="runCode('code-func-3')">Ejecutar</button>
            <div class="output" id="output-func-3"></div>
        </div>

        <hr>

        <h3>4. Funciones que Devuelven un Valor</h3>
        <p>Una función puede "devolver" un resultado usando <code>return</code>.</p>

        <div class="example">
            <textarea id="code-func-4" readonly>function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log("5 + 3 =", resultado);

let otroResultado = sumar(10, 20);
console.log("10 + 20 =", otroResultado);</textarea>
            <button onclick="runCode('code-func-4')">Ejecutar</button>
            <div class="output" id="output-func-4"></div>
        </div>

        <hr>

        <h3>5. return Detiene la Función</h3>
        <p>Cuando se ejecuta <code>return</code>, la función termina inmediatamente.</p>

        <div class="example">
            <textarea id="code-func-5" readonly>function verificarEdad(edad) {
    if (edad < 18) {
        return "Eres menor de edad";
    }
    
    return "Eres mayor de edad";
    
    console.log("Esto nunca se ejecuta"); // Código inalcanzable
}

console.log(verificarEdad(15));
console.log(verificarEdad(20));</textarea>
            <button onclick="runCode('code-func-5')">Ejecutar</button>
            <div class="output" id="output-func-5"></div>
        </div>

        <hr>

        <h3>6. Parámetros por Defecto</h3>
        <p>Puedes asignar valores por defecto a los parámetros.</p>

        <div class="example">
            <textarea id="code-func-6" readonly>function saludar(nombre = "Invitado", hora = "día") {
    console.log(\`¡Buenos \${hora}, \${nombre}!\`);
}

saludar("Ana", "días");
saludar("Pedro"); // Usa hora por defecto
saludar(); // Usa ambos valores por defecto</textarea>
            <button onclick="runCode('code-func-6')">Ejecutar</button>
            <div class="output" id="output-func-6"></div>
        </div>

        <hr>

        <h3>7. Expresiones de Función</h3>
        <p>También podemos asignar funciones a variables.</p>

        <div class="example">
            <textarea id="code-func-7" readonly>const multiplicar = function(a, b) {
    return a * b;
};

console.log("3 * 4 =", multiplicar(3, 4));
console.log("7 * 8 =", multiplicar(7, 8));</textarea>
            <button onclick="runCode('code-func-7')">Ejecutar</button>
            <div class="output" id="output-func-7"></div>
        </div>

        <hr>

        <h3>8. Arrow Functions (Funciones Flecha)</h3>
        <p>Una sintaxis más corta para escribir funciones.</p>

        <div class="example">
            <textarea id="code-func-8" readonly>// Función tradicional
const sumar1 = function(a, b) {
    return a + b;
};

// Arrow function
const sumar2 = (a, b) => {
    return a + b;
};

// Arrow function más corta (return implícito)
const sumar3 = (a, b) => a + b;

console.log("Tradicional:", sumar1(5, 3));
console.log("Arrow:", sumar2(5, 3));
console.log("Arrow corta:", sumar3(5, 3));</textarea>
            <button onclick="runCode('code-func-8')">Ejecutar</button>
            <div class="output" id="output-func-8"></div>
        </div>

        <hr>

        <h3>9. Arrow Functions con Un Solo Parámetro</h3>
        <p>Si solo hay un parámetro, los paréntesis son opcionales.</p>

        <div class="example">
            <textarea id="code-func-9" readonly>// Con paréntesis
const doble1 = (n) => n * 2;

// Sin paréntesis
const doble2 = n => n * 2;

console.log("doble(5):", doble1(5));
console.log("doble(10):", doble2(10));</textarea>
            <button onclick="runCode('code-func-9')">Ejecutar</button>
            <div class="output" id="output-func-9"></div>
        </div>

        <hr>

        <h3>10. Scope Global vs Local</h3>
        <p>Las variables declaradas fuera de funciones son globales. Las de dentro son locales.</p>

        <div class="example">
            <textarea id="code-func-10" readonly>let variableGlobal = "Soy global";

function miFuncion() {
    let variableLocal = "Soy local";
    console.log("Dentro de la función:");
    console.log("- Global:", variableGlobal);
    console.log("- Local:", variableLocal);
}

miFuncion();

console.log("Fuera de la función:");
console.log("- Global:", variableGlobal);

try {
    console.log("- Local:", variableLocal);
} catch (error) {
    console.log("- Error:", error.message);
}</textarea>
            <button onclick="runCode('code-func-10')">Ejecutar</button>
            <div class="output" id="output-func-10"></div>
        </div>

        <hr>

        <h3>11. Block Scope (Alcance de Bloque)</h3>
        <p>Las variables <code>let</code> y <code>const</code> tienen alcance de bloque (limitado a {}).</p>

        <div class="example">
            <textarea id="code-func-11" readonly>if (true) {
    let dentroDelBloque = "Solo existo aquí";
    console.log("Dentro del if:", dentroDelBloque);
}

try {
    console.log("Fuera del if:", dentroDelBloque);
} catch (error) {
    console.log("Error:", error.message);
}

// Otro ejemplo con for
for (let i = 0; i < 3; i++) {
    console.log("i dentro del for:", i);
}

try {
    console.log("i fuera del for:", i);
} catch (error) {
    console.log("Error:", error.message);
}</textarea>
            <button onclick="runCode('code-func-11')">Ejecutar</button>
            <div class="output" id="output-func-11"></div>
        </div>

        <hr>

        <h3>12. Funciones Anidadas</h3>
        <p>Puedes definir funciones dentro de otras funciones.</p>

        <div class="example">
            <textarea id="code-func-12" readonly>function exterior() {
    console.log("Función exterior ejecutada");
    
    function interior() {
        console.log("Función interior ejecutada");
    }
    
    interior();
}

exterior();</textarea>
            <button onclick="runCode('code-func-12')">Ejecutar</button>
            <div class="output" id="output-func-12"></div>
        </div>

        <hr>

        <h3>13. Closures Básico</h3>
        <p>Una función que "recuerda" las variables de su entorno exterior.</p>

        <div class="example">
            <textarea id="code-func-13" readonly>function crearSaludo(saludo) {
    // La función interna "recuerda" el parámetro saludo
    return function(nombre) {
        console.log(\`\${saludo}, \${nombre}!\`);
    };
}

const saludarHola = crearSaludo("Hola");
const saludarBuenos = crearSaludo("Buenos días");

saludarHola("Ana");
saludarHola("Luis");
saludarBuenos("María");</textarea>
            <button onclick="runCode('code-func-13')">Ejecutar</button>
            <div class="output" id="output-func-13"></div>
        </div>

        <hr>

        <h3>14. Closure: Contador Privado</h3>
        <p>Crear variables privadas que no pueden ser modificadas externamente.</p>

        <div class="example">
            <textarea id="code-func-14" readonly>function crearContador() {
    let contador = 0; // Variable privada
    
    return {
        incrementar: function() {
            contador++;
            console.log("Contador:", contador);
        },
        decrementar: function() {
            contador--;
            console.log("Contador:", contador);
        },
        obtener: function() {
            return contador;
        }
    };
}

const miContador = crearContador();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log("Valor actual:", miContador.obtener());</textarea>
            <button onclick="runCode('code-func-14')">Ejecutar</button>
            <div class="output" id="output-func-14"></div>
        </div>

        <hr>

        <h3>15. Funciones como Argumentos</h3>
        <p>Las funciones pueden pasarse como argumentos a otras funciones.</p>

        <div class="example">
            <textarea id="code-func-15" readonly>function ejecutar(funcion, valor) {
    console.log("Ejecutando función...");
    funcion(valor);
}

function saludar(nombre) {
    console.log("Hola,", nombre);
}

function despedir(nombre) {
    console.log("Adiós,", nombre);
}

ejecutar(saludar, "Ana");
ejecutar(despedir, "Luis");</textarea>
            <button onclick="runCode('code-func-15')">Ejecutar</button>
            <div class="output" id="output-func-15"></div>
        </div>

        <hr>

        <h3>16. Callback Functions</h3>
        <p>Una función que se pasa como argumento para ejecutarse después.</p>

        <div class="example">
            <textarea id="code-func-16" readonly>function procesarArray(array, callback) {
    console.log("Procesando array:", array);
    for (let elemento of array) {
        callback(elemento);
    }
}

function mostrarDoble(numero) {
    console.log("Doble:", numero * 2);
}

procesarArray([1, 2, 3, 4], mostrarDoble);</textarea>
            <button onclick="runCode('code-func-16')">Ejecutar</button>
            <div class="output" id="output-func-16"></div>
        </div>

        <hr>

        <h3>17. Funciones Inmediatas (IIFE)</h3>
        <p>Funciones que se ejecutan inmediatamente después de ser definidas.</p>

        <div class="example">
            <textarea id="code-func-17" readonly>// Función normal
function normal() {
    console.log("Función normal");
}
normal(); // Hay que llamarla

// IIFE - Se ejecuta automáticamente
(function() {
    console.log("IIFE ejecutada");
})();

// IIFE con parámetros
(function(nombre) {
    console.log("Hola,", nombre);
})("Ana");</textarea>
            <button onclick="runCode('code-func-17')">Ejecutar</button>
            <div class="output" id="output-func-17"></div>
        </div>

        <hr>

        <h3>18. Recursión</h3>
        <p>Una función que se llama a sí misma.</p>

        <div class="example">
            <textarea id="code-func-18" readonly>function cuentaRegresiva(numero) {
    if (numero === 0) {
        console.log("¡Despegue!");
        return;
    }
    
    console.log(numero);
    cuentaRegresiva(numero - 1);
}

cuentaRegresiva(5);</textarea>
            <button onclick="runCode('code-func-18')">Ejecutar</button>
            <div class="output" id="output-func-18"></div>
        </div>

        <hr>

        <h3>19. Recursión: Factorial</h3>
        <p>Calcular el factorial de un número usando recursión.</p>

        <div class="example">
            <textarea id="code-func-19" readonly>function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("factorial(5):", factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120
console.log("factorial(3):", factorial(3)); // 3 * 2 * 1 = 6
console.log("factorial(7):", factorial(7));</textarea>
            <button onclick="runCode('code-func-19')">Ejecutar</button>
            <div class="output" id="output-func-19"></div>
        </div>

        <hr>

        <h3>20. Rest Parameters (...)</h3>
        <p>Recoger múltiples argumentos en un array.</p>

        <div class="example">
            <textarea id="code-func-20" readonly>function sumarTodos(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

console.log("sumarTodos(1, 2, 3):", sumarTodos(1, 2, 3));
console.log("sumarTodos(10, 20, 30, 40):", sumarTodos(10, 20, 30, 40));
console.log("sumarTodos(5):", sumarTodos(5));</textarea>
            <button onclick="runCode('code-func-20')">Ejecutar</button>
            <div class="output" id="output-func-20"></div>
        </div>

        <hr>

        <h3>21. Spread Operator con Funciones</h3>
        <p>Expandir un array en argumentos individuales.</p>

        <div class="example">
            <textarea id="code-func-21" readonly>function sumar(a, b, c) {
    return a + b + c;
}

let numeros = [1, 2, 3];

// Sin spread
console.log("Sin spread:", sumar(numeros[0], numeros[1], numeros[2]));

// Con spread
console.log("Con spread:", sumar(...numeros));</textarea>
            <button onclick="runCode('code-func-21')">Ejecutar</button>
            <div class="output" id="output-func-21"></div>
        </div>

        <hr>

        <h3>22. Función Pura</h3>
        <p>Una función que siempre devuelve el mismo resultado para los mismos argumentos y no tiene efectos secundarios.</p>

        <div class="example">
            <textarea id="code-func-22" readonly>// Función pura
function sumarPura(a, b) {
    return a + b;
}

console.log("sumarPura(2, 3):", sumarPura(2, 3));
console.log("sumarPura(2, 3):", sumarPura(2, 3)); // Siempre el mismo resultado

// Función impura (modifica estado externo)
let contador = 0;
function sumarImpura(a) {
    contador++; // Efecto secundario
    return a + contador;
}

console.log("sumarImpura(5):", sumarImpura(5)); // 6
console.log("sumarImpura(5):", sumarImpura(5)); // 7 (diferente resultado)</textarea>
            <button onclick="runCode('code-func-22')">Ejecutar</button>
            <div class="output" id="output-func-22"></div>
        </div>

        <hr>

        <h3>23. Hoisting de Funciones</h3>
        <p>Las declaraciones de funciones se "elevan" al inicio del scope.</p>

        <div class="example">
            <textarea id="code-func-23" readonly>// Podemos llamar a la función ANTES de declararla
saludar();

function saludar() {
    console.log("¡Hola!");
}

// Pero las expresiones de función NO se elevan
try {
    despedir(); // Error
} catch (e) {
    console.log("Error:", e.message);
}

const despedir = function() {
    console.log("¡Adiós!");
};</textarea>
            <button onclick="runCode('code-func-23')">Ejecutar</button>
            <div class="output" id="output-func-23"></div>
        </div>

        <hr>

        <h3>24. Métodos de Objetos</h3>
        <p>Las funciones pueden ser propiedades de objetos (métodos).</p>

        <div class="example">
            <textarea id="code-func-24" readonly>const persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },
    cumplirAños() { // Sintaxis corta
        this.edad++;
        console.log("Ahora tengo " + this.edad + " años");
    }
};

persona.saludar();
persona.cumplirAños();
persona.cumplirAños();</textarea>
            <button onclick="runCode('code-func-24')">Ejecutar</button>
            <div class="output" id="output-func-24"></div>
        </div>

        <hr>

        <h3>25. Contexto this en Funciones</h3>
        <p>En funciones normales, <code>this</code> depende de cómo se llama la función.</p>

        <div class="example">
            <textarea id="code-func-25" readonly>const persona = {
    nombre: "Luis",
    saludarNormal: function() {
        console.log("Normal:", this.nombre);
    },
    saludarArrow: () => {
        console.log("Arrow:", this.nombre); // Arrow functions no tienen su propio this
    }
};

persona.saludarNormal();
persona.saludarArrow();</textarea>
            <button onclick="runCode('code-func-25')">Ejecutar</button>
            <div class="output" id="output-func-25"></div>
        </div>

        <hr>

        <h3>26. bind(), call() y apply()</h3>
        <p>Métodos para controlar el contexto <code>this</code> de una función.</p>

        <div class="example">
            <textarea id="code-func-26" readonly>function saludar(saludo, puntuacion) {
    console.log(\`\${saludo}, \${this.nombre}\${puntuacion}\`);
}

const persona1 = { nombre: "Ana" };
const persona2 = { nombre: "Luis" };

// call - argumentos individuales
saludar.call(persona1, "Hola", "!");

// apply - argumentos en array
saludar.apply(persona2, ["Buenos días", "."]);

// bind - crea nueva función con this fijo
const saludarAna = saludar.bind(persona1);
saludarAna("Hey", "!!");</textarea>
            <button onclick="runCode('code-func-26')">Ejecutar</button>
            <div class="output" id="output-func-26"></div>
        </div>

        <hr>

        <h3>27. Currying</h3>
        <p>Transformar una función de múltiples argumentos en una secuencia de funciones de un argumento.</p>

        <div class="example">
            <textarea id="code-func-27" readonly>// Función normal
function sumar(a, b, c) {
    return a + b + c;
}
console.log("Normal:", sumar(1, 2, 3));

// Función currificada
function sumarCurry(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Curry:", sumarCurry(1)(2)(3));

// Uso práctico
const sumar5 = sumarCurry(5);
const sumar5y10 = sumar5(10);
console.log("sumar5y10(3):", sumar5y10(3));</textarea>
            <button onclick="runCode('code-func-27')">Ejecutar</button>
            <div class="output" id="output-func-27"></div>
        </div>

        <hr>

        <h3>28. Composición de Funciones</h3>
        <p>Combinar funciones simples para crear funciones más complejas.</p>

        <div class="example">
            <textarea id="code-func-28" readonly>const doble = x => x * 2;
const incrementar = x => x + 1;
const cuadrado = x => x * x;

// Composición manual
const resultado1 = cuadrado(incrementar(doble(3)));
console.log("doble->incrementar->cuadrado(3):", resultado1);

// Función para componer
function componer(...funciones) {
    return function(valor) {
        return funciones.reduceRight((acc, fn) => fn(acc), valor);
    };
}

const operacionCompuesta = componer(cuadrado, incrementar, doble);
console.log("Composición(3):", operacionCompuesta(3));</textarea>
            <button onclick="runCode('code-func-28')">Ejecutar</button>
            <div class="output" id="output-func-28"></div>
        </div>

        <hr>

        <h3>29. Memoización</h3>
        <p>Cachear resultados de funciones costosas para mejorar el rendimiento.</p>

        <div class="example">
            <textarea id="code-func-29" readonly>function memoizar(fn) {
    const cache = {};
    return function(arg) {
        if (arg in cache) {
            console.log("Desde cache:", arg);
            return cache[arg];
        }
        console.log("Calculando:", arg);
        const resultado = fn(arg);
        cache[arg] = resultado;
        return resultado;
    };
}

function cuadrado(n) {
    return n * n;
}

const cuadradoMemo = memoizar(cuadrado);

console.log("Resultado:", cuadradoMemo(5));
console.log("Resultado:", cuadradoMemo(5)); // Desde cache
console.log("Resultado:", cuadradoMemo(10));
console.log("Resultado:", cuadradoMemo(10)); // Desde cache</textarea>
            <button onclick="runCode('code-func-29')">Ejecutar</button>
            <div class="output" id="output-func-29"></div>
        </div>

        <hr>

        <h3>30. Funciones Generadoras</h3>
        <p>Funciones que pueden pausar su ejecución y reanudarla más tarde.</p>

        <div class="example">
            <textarea id="code-func-30" readonly>function* generarNumeros() {
    console.log("Generando 1");
    yield 1;
    console.log("Generando 2");
    yield 2;
    console.log("Generando 3");
    yield 3;
}

const generador = generarNumeros();

console.log("Valor 1:", generador.next().value);
console.log("Valor 2:", generador.next().value);
console.log("Valor 3:", generador.next().value);

// Generador infinito
function* contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const miContador = contador();
console.log("Contador:", miContador.next().value);
console.log("Contador:", miContador.next().value);
console.log("Contador:", miContador.next().value);</textarea>
            <button onclick="runCode('code-func-30')">Ejecutar</button>
            <div class="output" id="output-func-30"></div>
        </div>

    </section>
`;
