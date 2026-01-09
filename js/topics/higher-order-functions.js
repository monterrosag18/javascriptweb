const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Funciones de Orden Superior</h2>
        <p>Funciones que reciben funciones como argumentos o retornan funciones. Base de la programación funcional.</p>

        <h3>1. Concepto Básico</h3>
        <p>Una función que recibe otra función como parámetro.</p>
        
        <div class="example">
            <textarea id="code-hof-1" readonly>function ejecutar(fn) {
    console.log("Antes de ejecutar");
    fn();
    console.log("Después de ejecutar");
}

function miFuncion() {
    console.log("Ejecutando función");
}

ejecutar(miFuncion);

// Con función anónima
ejecutar(function() {
    console.log("Función anónima");
});</textarea>
            <button onclick="runCode('code-hof-1')">Ejecutar</button>
            <div class="output" id="output-hof-1"></div>
        </div>

        <hr>

        <h3>2. Función que Retorna Función</h3>
        <p>HOF que genera nuevas funciones.</p>

        <div class="example">
            <textarea id="code-hof-2" readonly>function crearSaludo(saludo) {
    return function(nombre) {
        console.log(\`\${saludo}, \${nombre}\`);
    };
}

const saludarHola = crearSaludo("Hola");
const saludarBuenos = crearSaludo("Buenos días");

saludarHola("Ana");
saludarBuenos("Juan");

// Con arrow functions
const multiplicar = factor => numero => numero * factor;
const doble = multiplicar(2);
console.log("Doble de 5:", doble(5));</textarea>
            <button onclick="runCode('code-hof-2')">Ejecutar</button>
            <div class="output" id="output-hof-2"></div>
        </div>

        <hr>

        <h3>3. Array.map</h3>
        <p>Transformar cada elemento de un array.</p>

        <div class="example">
            <textarea id="code-hof-3" readonly>const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(n => n * 2);
console.log("Duplicados:", duplicados);

const cuadrados = numeros.map(n => n ** 2);
console.log("Cuadrados:", cuadrados);

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 }
];

const nombres = personas.map(p => p.nombre);
console.log("Nombres:", nombres);</textarea>
            <button onclick="runCode('code-hof-3')">Ejecutar</button>
            <div class="output" id="output-hof-3"></div>
        </div>

        <hr>

        <h3>4. Array.filter</h3>
        <p>Filtrar elementos que cumplen condición.</p>

        <div class="example">
            <textarea id="code-hof-4" readonly>const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

const mayoresQue5 = numeros.filter(n => n > 5);
console.log("Mayores que 5:", mayoresQue5);

const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 15 }
];

const mayores = personas.filter(p => p.edad >= 18);
console.log("Mayores de edad:", mayores);</textarea>
            <button onclick="runCode('code-hof-4')">Ejecutar</button>
            <div class="output" id="output-hof-4"></div>
        </div>

        <hr>

        <h3>5. Array.reduce</h3>
        <p>Reducir array a un solo valor.</p>

        <div class="example">
            <textarea id="code-hof-5" readonly>const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log("Suma:", suma);

const producto = numeros.reduce((acc, n) => acc * n, 1);
console.log("Producto:", producto);

const maximo = numeros.reduce((max, n) => n > max ? n : max);
console.log("Máximo:", maximo);

// Contar palabras
const palabras = ["hola", "mundo", "hola"];
const contador = palabras.reduce((acc, p) => {
    acc[p] = (acc[p] || 0) + 1;
    return acc;
}, {});
console.log("Contador:", contador);</textarea>
            <button onclick="runCode('code-hof-5')">Ejecutar</button>
            <div class="output" id="output-hof-5"></div>
        </div>

        <hr>

        <h3>6. Array.forEach</h3>
        <p>Ejecutar función por cada elemento.</p>

        <div class="example">
            <textarea id="code-hof-6" readonly>const numeros = [1, 2, 3, 4, 5];

console.log("forEach:");
numeros.forEach(n => console.log("Número:", n));

console.log("\\nCon índice:");
numeros.forEach((n, i) => console.log(\`[\${i}]: \${n}\`));

const personas = ["Ana", "Juan", "María"];
personas.forEach(p => {
    console.log(\`Hola, \${p}\`);
});</textarea>
            <button onclick="runCode('code-hof-6')">Ejecutar</button>
            <div class="output" id="output-hof-6"></div>
        </div>

        <hr>

        <h3>7. Array.find</h3>
        <p>Encontrar primer elemento que cumple condición.</p>

        <div class="example">
            <textarea id="code-hof-7" readonly>const numeros = [1, 2, 3, 4, 5];

const primerPar = numeros.find(n => n % 2 === 0);
console.log("Primer par:", primerPar);

const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Juan" },
    { id: 3, nombre: "María" }
];

const usuario = usuarios.find(u => u.id === 2);
console.log("Usuario encontrado:", usuario);

const noExiste = usuarios.find(u => u.id === 99);
console.log("No existe:", noExiste);</textarea>
            <button onclick="runCode('code-hof-7')">Ejecutar</button>
            <div class="output" id="output-hof-7"></div>
        </div>

        <hr>

        <h3>8. Array.some y Array.every</h3>
        <p>Verificar condiciones en arrays.</p>

        <div class="example">
            <textarea id="code-hof-8" readonly>const numeros = [1, 2, 3, 4, 5];

const hayPares = numeros.some(n => n % 2 === 0);
console.log("¿Hay pares?", hayPares);

const todosPares = numeros.every(n => n % 2 === 0);
console.log("¿Todos pares?", todosPares);

const todosPositivos = numeros.every(n => n > 0);
console.log("¿Todos positivos?", todosPositivos);

const edades = [18, 20, 25, 30];
const todosMayores = edades.every(e => e >= 18);
console.log("¿Todos mayores de edad?", todosMayores);</textarea>
            <button onclick="runCode('code-hof-8')">Ejecutar</button>
            <div class="output" id="output-hof-8"></div>
        </div>

        <hr>

        <h3>9. Array.sort con Callback</h3>
        <p>Ordenar con función comparadora.</p>

        <div class="example">
            <textarea id="code-hof-9" readonly>const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Ascendente
const asc = [...numeros].sort((a, b) => a - b);
console.log("Ascendente:", asc);

// Descendente
const desc = [...numeros].sort((a, b) => b - a);
console.log("Descendente:", desc);

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "María", edad: 35 }
];

personas.sort((a, b) => a.edad - b.edad);
console.log("Por edad:", personas);</textarea>
            <button onclick="runCode('code-hof-9')">Ejecutar</button>
            <div class="output" id="output-hof-9"></div>
        </div>

        <hr>

        <h3>10. Encadenamiento de HOF</h3>
        <p>Combinar múltiples operaciones.</p>

        <div class="example">
            <textarea id="code-hof-10" readonly>const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros
    .filter(n => n % 2 === 0)     // Solo pares
    .map(n => n ** 2)              // Elevar al cuadrado
    .reduce((acc, n) => acc + n, 0); // Sumar

console.log("Resultado:", resultado);

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 17 },
    { nombre: "María", edad: 30 }
];

const nombresMayores = personas
    .filter(p => p.edad >= 18)
    .map(p => p.nombre);

console.log("Mayores:", nombresMayores);</textarea>
            <button onclick="runCode('code-hof-10')">Ejecutar</button>
            <div class="output" id="output-hof-10"></div>
        </div>

        <hr>

        <h3>11. Closure en HOF</h3>
        <p>Funciones que recuerdan su entorno.</p>

        <div class="example">
            <textarea id="code-hof-11" readonly>function crearContador() {
    let cuenta = 0;
    
    return {
        incrementar: function() {
            cuenta++;
            console.log("Cuenta:", cuenta);
        },
        obtener: function() {
            return cuenta;
        }
    };
}

const contador1 = crearContador();
const contador2 = crearContador();

contador1.incrementar();
contador1.incrementar();
contador2.incrementar();

console.log("Contador 1:", contador1.obtener());
console.log("Contador 2:", contador2.obtener());</textarea>
            <button onclick="runCode('code-hof-11')">Ejecutar</button>
            <div class="output" id="output-hof-11"></div>
        </div>

        <hr>

        <h3>12. Currying</h3>
        <p>Transformar función de múltiples argumentos en serie de funciones.</p>

        <div class="example">
            <textarea id="code-hof-12" readonly>// Sin currying
function sumar(a, b, c) {
    return a + b + c;
}

console.log("Normal:", sumar(1, 2, 3));

// Con currying
function sumarCurry(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Curry:", sumarCurry(1)(2)(3));

// Con arrow functions
const multiplicar = a => b => c => a * b * c;
console.log("Multiplicar:", multiplicar(2)(3)(4));</textarea>
            <button onclick="runCode('code-hof-12')">Ejecutar</button>
            <div class="output" id="output-hof-12"></div>
        </div>

        <hr>

        <h3>13. Partial Application</h3>
        <p>Fijar algunos argumentos de antemano.</p>

        <div class="example">
            <textarea id="code-hof-13" readonly>function multiplicar(a, b) {
    return a * b;
}

function aplicarParcial(fn, valorFijo) {
    return function(valor) {
        return fn(valorFijo, valor);
    };
}

const duplicar = aplicarParcial(multiplicar, 2);
const triplicar = aplicarParcial(multiplicar, 3);

console.log("Duplicar 5:", duplicar(5));
console.log("Triplicar 5:", triplicar(5));

// Con bind
const quintuplicar = multiplicar.bind(null, 5);
console.log("Quintuplicar 4:", quintuplicar(4));</textarea>
            <button onclick="runCode('code-hof-13')">Ejecutar</button>
            <div class="output" id="output-hof-13"></div>
        </div>

        <hr>

        <h3>14. Composición de Funciones</h3>
        <p>Combinar funciones simples en complejas.</p>

        <div class="example">
            <textarea id="code-hof-14" readonly>const duplicar = x => x * 2;
const incrementar = x => x + 1;
const cuadrado = x => x ** 2;

function componer(...funciones) {
    return function(valor) {
        return funciones.reduceRight((acc, fn) => fn(acc), valor);
    };
}

const operacion = componer(incrementar, duplicar, cuadrado);
console.log("componer(inc, dup, cuad)(3):", operacion(3));
// 3 -> cuad -> 9 -> dup -> 18 -> inc -> 19

const otraOp = componer(cuadrado, incrementar);
console.log("(5 + 1)²:", otraOp(5));</textarea>
            <button onclick="runCode('code-hof-14')">Ejecutar</button>
            <div class="output" id="output-hof-14"></div>
        </div>

        <hr>

        <h3>15. Pipe (Flujo)</h3>
        <p>Composición de izquierda a derecha.</p>

        <div class="example">
            <textarea id="code-hof-15" readonly>const duplicar = x => x * 2;
const incrementar = x => x + 1;
const cuadrado = x => x ** 2;

function pipe(...funciones) {
    return function(valor) {
        return funciones.reduce((acc, fn) => fn(acc), valor);
    };
}

const flujo = pipe(cuadrado, duplicar, incrementar);
console.log("pipe(cuad, dup, inc)(3):", flujo(3));
// 3 -> cuad -> 9 -> dup -> 18 -> inc -> 19

const procesamiento = pipe(
    x => x + 10,
    x => x * 2,
    x => x - 5
);
console.log("Procesamiento(5):", procesamiento(5));</textarea>
            <button onclick="runCode('code-hof-15')">Ejecutar</button>
            <div class="output" id="output-hof-15"></div>
        </div>

        <hr>

        <h3>16. Memoization</h3>
        <p>Cachear resultados de funciones costosas.</p>

        <div class="example">
            <textarea id="code-hof-16" readonly>function memoize(fn) {
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

const cuadrado = n => n ** 2;
const cuadradoMemo = memoize(cuadrado);

console.log(cuadradoMemo(5));
console.log(cuadradoMemo(5)); // Desde cache
console.log(cuadradoMemo(10));
console.log(cuadradoMemo(10)); // Desde cache</textarea>
            <button onclick="runCode('code-hof-16')">Ejecutar</button>
            <div class="output" id="output-hof-16"></div>
        </div>

        <hr>

        <h3>17. Throttle</h3>
        <p>Limitar frecuencia de ejecución.</p>

        <div class="example">
            <textarea id="code-hof-17" readonly>function throttle(fn, delay) {
    let ultimaEjecucion = 0;
    
    return function(...args) {
        const ahora = Date.now();
        
        if (ahora - ultimaEjecucion >= delay) {
            fn(...args);
            ultimaEjecucion = ahora;
        }
    };
}

let contador = 0;
const incrementar = () => {
    contador++;
    console.log("Contador:", contador);
};

const incrementarThrottled = throttle(incrementar, 1000);

// Solo ejecutará cada 1 segundo
for (let i = 0; i < 5; i++) {
    incrementarThrottled();
}
console.log("Llamadas throttled completadas");</textarea>
            <button onclick="runCode('code-hof-17')">Ejecutar</button>
            <div class="output" id="output-hof-17"></div>
        </div>

        <hr>

        <h3>18. Debounce</h3>
        <p>Esperar hasta que dejen de llamar la función.</p>

        <div class="example">
            <textarea id="code-hof-18" readonly>function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

let contador = 0;
const buscar = (termino) => {
    contador++;
    console.log(\`Búsqueda #\${contador}: "\${termino}"\`);
};

const buscarDebounced = debounce(buscar, 500);

// Solo ejecutará una vez, 500ms después de la última llamada
console.log("Simulando escritura rápida...");
buscarDebounced("h");
buscarDebounced("ho");
buscarDebounced("hol");
buscarDebounced("hola");
console.log("Esperando debounce...");</textarea>
            <button onclick="runCode('code-hof-18')">Ejecutar</button>
            <div class="output" id="output-hof-18"></div>
        </div>

        <hr>

        <h3>19. Once</h3>
        <p>Función que solo se ejecuta una vez.</p>

        <div class="example">
            <textarea id="code-hof-19" readonly>function once(fn) {
    let ejecutada = false;
    let resultado;
    
    return function(...args) {
        if (!ejecutada) {
            resultado = fn(...args);
            ejecutada = true;
        }
        return resultado;
    };
}

const inicializar = once(() => {
    console.log("Inicializando aplicación...");
    return { estado: "iniciado" };
});

console.log("Primera llamada:", inicializar());
console.log("Segunda llamada:", inicializar());
console.log("Tercera llamada:", inicializar());</textarea>
            <button onclick="runCode('code-hof-19')">Ejecutar</button>
            <div class="output" id="output-hof-19"></div>
        </div>

        <hr>

        <h3>20. Before/After Hooks</h3>
        <p>Ejecutar código antes/después de una función.</p>

        <div class="example">
            <textarea id="code-hof-20" readonly>function conHooks(fn, antes, despues) {
    return function(...args) {
        antes && antes();
        const resultado = fn(...args);
        despues && despues(resultado);
        return resultado;
    };
}

const sumar = (a, b) => a + b;

const sumarConLog = conHooks(
    sumar,
    () => console.log("Antes de sumar"),
    (r) => console.log("Resultado:", r)
);

sumarConLog(5, 3);</textarea>
            <button onclick="runCode('code-hof-20')">Ejecutar</button>
            <div class="output" id="output-hof-20"></div>
        </div>

        <hr>

        <h3>21. Flip</h3>
        <p>Invertir orden de argumentos.</p>

        <div class="example">
            <textarea id="code-hof-21" readonly>function flip(fn) {
    return function(a, b) {
        return fn(b, a);
    };
}

const restar = (a, b) => a - b;
console.log("10 - 5 =", restar(10, 5));

const restarFlip = flip(restar);
console.log("flip(10, 5) = 5 - 10 =", restarFlip(10, 5));

const dividir = (a, b) => a / b;
const dividirFlip = flip(dividir);
console.log("20 / 4 =", dividir(20, 4));
console.log("flip(20, 4) = 4 / 20 =", dividirFlip(20, 4));</textarea>
            <button onclick="runCode('code-hof-21')">Ejecutar</button>
            <div class="output" id="output-hof-21"></div>
        </div>

        <hr>

        <h3>22. Negate</h3>
        <p>Negar resultado de función booleana.</p>

        <div class="example">
            <textarea id="code-hof-22" readonly>function negate(fn) {
    return function(...args) {
        return !fn(...args);
    };
}

const esPar = n => n % 2 === 0;
const esImpar = negate(esPar);

console.log("3 es par:", esPar(3));
console.log("3 es impar:", esImpar(3));

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(esPar);
const impares = numeros.filter(esImpar);

console.log("Pares:", pares);
console.log("Impares:", impares);</textarea>
            <button onclick="runCode('code-hof-22')">Ejecutar</button>
            <div class="output" id="output-hof-22"></div>
        </div>

        <hr>

        <h3>23. Array.flatMap</h3>
        <p>Map + flatten en una operación.</p>

        <div class="example">
            <textarea id="code-hof-23" readonly>const frases = ["Hola mundo", "JavaScript es genial"];

// Con map + flat
const palabras1 = frases
    .map(f => f.split(" "))
    .flat();
console.log("map + flat:", palabras1);

// Con flatMap
const palabras2 = frases.flatMap(f => f.split(" "));
console.log("flatMap:", palabras2);

const numeros = [1, 2, 3];
const resultado = numeros.flatMap(n => [n, n * 2]);
console.log("Duplicar elementos:", resultado);</textarea>
            <button onclick="runCode('code-hof-23')">Ejecutar</button>
            <div class="output" id="output-hof-23"></div>
        </div>

        <hr>

        <h3>24. Predicados</h3>
        <p>Funciones que retornan booleanos.</p>

        <div class="example">
            <textarea id="code-hof-24" readonly>const esMayorQue = limite => valor => valor > limite;
const esMenorQue = limite => valor => valor < limite;
const estaEntre = (min, max) => valor => valor >= min && valor <= max;

const numeros = [1, 5, 10, 15, 20, 25];

const mayoresQue10 = numeros.filter(esMayorQue(10));
console.log("Mayores que 10:", mayoresQue10);

const entre5y15 = numeros.filter(estaEntre(5, 15));
console.log("Entre 5 y 15:", entre5y15);

const menoresQue12 = numeros.filter(esMenorQue(12));
console.log("Menores que 12:", menoresQue12);</textarea>
            <button onclick="runCode('code-hof-24')">Ejecutar</button>
            <div class="output" id="output-hof-24"></div>
        </div>

        <hr>

        <h3>25. Map sobre Objetos</h3>
        <p>HOF personalizada para objetos.</p>

        <div class="example">
            <textarea id="code-hof-25" readonly>function mapObject(obj, fn) {
    const resultado = {};
    
    for (const [clave, valor] of Object.entries(obj)) {
        resultado[clave] = fn(valor, clave);
    }
    
    return resultado;
}

const precios = {
    laptop: 1000,
    mouse: 50,
    teclado: 100
};

const conImpuesto = mapObject(precios, precio => precio * 1.21);
console.log("Con impuesto:", conImpuesto);

const duplicados = mapObject(precios, p => p * 2);
console.log("Duplicados:", duplicados);</textarea>
            <button onclick="runCode('code-hof-25')">Ejecutar</button>
            <div class="output" id="output-hof-25"></div>
        </div>

        <hr>

        <h3>26. Recursión con HOF</h3>
        <p>Funciones recursivas como HOF.</p>

        <div class="example">
            <textarea id="code-hof-26" readonly>function hasta(condicion, transformar) {
    return function recursiva(valor) {
        if (condicion(valor)) {
            return valor;
        }
        return recursiva(transformar(valor));
    };
}

const llegarA100 = hasta(
    n => n >= 100,
    n => n * 2
);

console.log("Desde 1:", llegarA100(1));
console.log("Desde 7:", llegarA100(7));

const factorial = n => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};
console.log("Factorial(5):", factorial(5));</textarea>
            <button onclick="runCode('code-hof-26')">Ejecutar</button>
            <div class="output" id="output-hof-26"></div>
        </div>

        <hr>

        <h3>27. Tap (Side Effects)</h3>
        <p>Ejecutar efecto secundario sin cambiar valor.</p>

        <div class="example">
            <textarea id="code-hof-27" readonly>function tap(fn) {
    return function(valor) {
        fn(valor);
        return valor;
    };
}

const resultado = [1, 2, 3, 4, 5]
    .map(n => n * 2)
    .map(tap(n => console.log("Después de duplicar:", n)))
    .filter(n => n > 5)
    .map(tap(n => console.log("Después de filtrar:", n)))
    .reduce((acc, n) => acc + n, 0);

console.log("Resultado final:", resultado);</textarea>
            <button onclick="runCode('code-hof-27')">Ejecutar</button>
            <div class="output" id="output-hof-27"></div>
        </div>

        <hr>

        <h3>28. Trampoline</h3>
        <p>Optimizar recursión profunda.</p>

        <div class="example">
            <textarea id="code-hof-28" readonly>function trampoline(fn) {
    return function(...args) {
        let resultado = fn(...args);
        
        while (typeof resultado === 'function') {
            resultado = resultado();
        }
        
        return resultado;
    };
}

function sumarRec(n, acc = 0) {
    if (n === 0) return acc;
    return () => sumarRec(n - 1, acc + n);
}

const sumar = trampoline(sumarRec);
console.log("Suma 1 a 100:", sumar(100));
console.log("Suma 1 a 1000:", sumar(1000));</textarea>
            <button onclick="runCode('code-hof-28')">Ejecutar</button>
            <div class="output" id="output-hof-28"></div>
        </div>

        <hr>

        <h3>29. Async HOF</h3>
        <p>HOF con funciones asíncronas.</p>

        <div class="example">
            <textarea id="code-hof-29" readonly>function mapAsync(array, fn) {
    return Promise.all(array.map(fn));
}

async function duplicarAsync(n) {
    await new Promise(r => setTimeout(r, 100));
    return n * 2;
}

mapAsync([1, 2, 3, 4, 5], duplicarAsync)
    .then(resultado => {
        console.log("Resultado async:", resultado);
    });

// Filter async
async function filterAsync(array, fn) {
    const resultados = await Promise.all(array.map(fn));
    return array.filter((_, i) => resultados[i]);
}

console.log("Procesando asíncronamente...");</textarea>
            <button onclick="runCode('code-hof-29')">Ejecutar</button>
            <div class="output" id="output-hof-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con HOF.</p>

        <div class="example">
            <textarea id="code-hof-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar HOF nativas (map, filter, reduce)");
console.log("✅ Preferir composición sobre loops complejos");
console.log("✅ Nombres descriptivos para callbacks");
console.log("✅ Funciones puras cuando sea posible");
console.log("✅ Currying para funciones reusables");
console.log("\\n❌ No abusar de encadenamientos largos");
console.log("❌ No mutar datos en HOF");
console.log("❌ Evitar side effects ocultos");
console.log("\\n✨ HOF = código declarativo y componible");</textarea>
            <button onclick="runCode('code-hof-30')">Ejecutar</button>
            <div class="output" id="output-hof-30"></div>
        </div>

    </section>
`;
