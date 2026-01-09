const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Generators</h2>
        <p>Funciones que pueden pausarse y reanudarse con yield.</p>

        <h3>1. Sintaxis Básica</h3>
        <p>Crear y usar generators.</p>

        <div class="example">
            <textarea id="code-gen-1" readonly>// Declaración
function* contador() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = contador();
console.log("Generator:", gen);

// Iterar manualmente
console.log("next():", gen.next());
console.log("next():", gen.next());
console.log("next():", gen.next());
console.log("next():", gen.next());

// for...of
function* letras() {
    yield 'a';
    yield 'b';
    yield 'c';
}

console.log("\\nfor...of:");
for (const letra of letras()) {
    console.log(letra);
}</textarea>
            <button onclick="runCode('code-gen-1')">Ejecutar</button>
            <div class="output" id="output-gen-1"></div>
        </div>

        <hr>

        <h3>2. Valor Generado</h3>
        <p>Entender next().</p>

        <div class="example">
            <textarea id="code-gen-2" readonly>function* numerosAleatorios() {
    yield Math.random();
    yield Math.random();
    yield Math.random();
}

const gen = numerosAleatorios();

// next() retorna { value, done }
let resultado = gen.next();
console.log("Iteración 1:");
console.log("  value:", resultado.value);
console.log("  done:", resultado.done);

resultado = gen.next();
console.log("\\nIteración 2:");
console.log("  value:", resultado.value);
console.log("  done:", resultado.done);

resultado = gen.next();
console.log("\\nIteración 3:");
console.log("  value:", resultado.value);
console.log("  done:", resultado.done);

resultado = gen.next();
console.log("\\nIteración 4 (terminado):");
console.log("  value:", resultado.value);
console.log("  done:", resultado.done);</textarea>
            <button onclick="runCode('code-gen-2')">Ejecutar</button>
            <div class="output" id="output-gen-2"></div>
        </div>

        <hr>

        <h3>3. Return en Generator</h3>
        <p>Valor final.</p>

        <div class="example">
            <textarea id="code-gen-3" readonly>function* conReturn() {
    yield 1;
    yield 2;
    return 'Fin';
}

const gen = conReturn();

console.log("Iteración 1:", gen.next());
console.log("Iteración 2:", gen.next());
console.log("Return:", gen.next());

// El return no se itera en for...of
function* muestraReturn() {
    yield 'a';
    yield 'b';
    return 'no aparece';
}

console.log("\\nfor...of ignora return:");
for (const valor of muestraReturn()) {
    console.log(valor);
}</textarea>
            <button onclick="runCode('code-gen-3')">Ejecutar</button>
            <div class="output" id="output-gen-3"></div>
        </div>

        <hr>

        <h3>4. Comunicación con yield</h3>
        <p>Enviar valores al generator.</p>

        <div class="example">
            <textarea id="code-gen-4" readonly>function* ecogenedor() {
    const valor1 = yield 'Primer yield';
    console.log("Recibido después del 1º:", valor1);
    
    const valor2 = yield 'Segundo yield';
    console.log("Recibido después del 2º:", valor2);
    
    return 'Terminado';
}

const gen = ecogenedor();

console.log("1:", gen.next()); // Comienza, primer yield
console.log("2:", gen.next('mensaje 1')); // Continúa con valor
console.log("3:", gen.next('mensaje 2')); // Continúa con valor</textarea>
            <button onclick="runCode('code-gen-4')">Ejecutar</button>
            <div class="output" id="output-gen-4"></div>
        </div>

        <hr>

        <h3>5. Generador Infinito</h3>
        <p>Generators sin fin.</p>

        <div class="example">
            <textarea id="code-gen-5" readonly>function* infinito() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gen = infinito();

console.log("Primeros 5:");
for (let i = 0; i < 5; i++) {
    console.log(gen.next().value);
}

// ID único
function* idUnico() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const idGen = idUnico();
console.log("\\nIDs únicos:");
console.log("ID:", idGen.next().value);
console.log("ID:", idGen.next().value);
console.log("ID:", idGen.next().value);</textarea>
            <button onclick="runCode('code-gen-5')">Ejecutar</button>
            <div class="output" id="output-gen-5"></div>
        </div>

        <hr>

        <h3>6. Delegación: yield*</h3>
        <p>Delegar a otro generator.</p>

        <div class="example">
            <textarea id="code-gen-6" readonly>function* numeros() {
    yield 1;
    yield 2;
    yield 3;
}

function* letras() {
    yield 'a';
    yield 'b';
    yield 'c';
}

function* combinado() {
    yield* numeros();
    yield* letras();
}

console.log("Sin yield*:");
function* sinDelegacion() {
    yield numeros();
    yield letras();
}

for (const valor of sinDelegacion()) {
    console.log(typeof valor === 'object' ? 'Generator' : valor);
}

console.log("\\nCon yield*:");
for (const valor of combinado()) {
    console.log(valor);
}</textarea>
            <button onclick="runCode('code-gen-6')">Ejecutar</button>
            <div class="output" id="output-gen-6"></div>
        </div>

        <hr>

        <h3>7. Rango con Generator</h3>
        <p>Generar rangos.</p>

        <div class="example">
            <textarea id="code-gen-7" readonly>function* rango(inicio, fin, paso = 1) {
    for (let i = inicio; i < fin; i += paso) {
        yield i;
    }
}

console.log("Rango 1-5:");
for (const n of rango(1, 6)) {
    console.log(n);
}

console.log("\\nRango 0-10 de 2 en 2:");
for (const n of rango(0, 11, 2)) {
    console.log(n);
}

// Iterable personalizado
const miRango = rango(1, 5);
console.log("\\nSpread:", [...miRango]);</textarea>
            <button onclick="runCode('code-gen-7')">Ejecutar</button>
            <div class="output" id="output-gen-7"></div>
        </div>

        <hr>

        <h3>8. Pares de Objeto con Generator</h3>
        <p>Iterable personalizado.</p>

        <div class="example">
            <textarea id="code-gen-8" readonly>function* entradas(obj) {
    for (const clave in obj) {
        if (obj.hasOwnProperty(clave)) {
            yield [clave, obj[clave]];
        }
    }
}

const usuario = {
    nombre: 'Juan',
    edad: 30,
    email: 'juan@email.com'
};

console.log("Entradas del objeto:");
for (const [clave, valor] of entradas(usuario)) {
    console.log(\`\${clave}: \${valor}\`);
}

// Hacer objeto iterable con Symbol.iterator
const miObjeto = {
    datos: [1, 2, 3],
    *[Symbol.iterator]() {
        for (const valor of this.datos) {
            yield valor;
        }
    }
};

console.log("\\nObjeto iterable:");
for (const valor of miObjeto) {
    console.log(valor);
}</textarea>
            <button onclick="runCode('code-gen-8')">Ejecutar</button>
            <div class="output" id="output-gen-8"></div>
        </div>

        <hr>

        <h3>9. Fibonacci con Generator</h3>
        <p>Ejemplo práctico.</p>

        <div class="example">
            <textarea id="code-gen-9" readonly>function* fibonacci(max = Infinity) {
    let [a, b] = [0, 1];
    while (a < max) {
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log("Fibonacci primeros 10:");
let count = 0;
for (const num of fibonacci()) {
    if (count++ >= 10) break;
    console.log(num);
}

console.log("\\nFibonacci < 1000:");
const fibs = [...fibonacci(1000)];
console.log(fibs);

// Usar con map/filter
console.log("\\nFibonacci < 100, pares:");
const resultado = [...fibonacci(100)]
    .filter(n => n % 2 === 0);
console.log(resultado);</textarea>
            <button onclick="runCode('code-gen-9')">Ejecutar</button>
            <div class="output" id="output-gen-9"></div>
        </div>

        <hr>

        <h3>10. Corrutinas con Generator</h3>
        <p>Simular async/await.</p>

        <div class="example">
            <textarea id="code-gen-10" readonly>// Simulación de async con generator
function ejecutar(generador) {
    const iterador = generador();
    
    function manejar(resultado) {
        if (resultado.done) return Promise.resolve(resultado.value);
        
        return Promise.resolve(resultado.value)
            .then(res => manejar(iterador.next(res)))
            .catch(err => iterador.throw(err));
    }
    
    return manejar(iterador.next());
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function* miCorrutina() {
    console.log("Inicio");
    yield esperar(500);
    console.log("Después de 500ms");
    yield esperar(300);
    console.log("Después de 300ms");
    return "Terminado";
}

console.log("Corrutina:");
ejecutar(miCorrutina).then(resultado => {
    console.log("Resultado:", resultado);
});</textarea>
            <button onclick="runCode('code-gen-10')">Ejecutar</button>
            <div class="output" id="output-gen-10"></div>
        </div>

        <hr>

        <h3>11. Best Practices</h3>
        <p>Mejores prácticas.</p>

        <div class="example">
            <textarea id="code-gen-11" readonly>console.log("GENERATORS:\\n");

console.log("✅ Para iterables personalizados");
console.log("✅ Lazy evaluation (bajo demanda)");
console.log("✅ Reducir memoria");
console.log("✅ Procesamiento en streaming");

console.log("\\n❌ Evitar:");
console.log("❌ No para control de flujo (usa async)");
console.log("❌ No para paralelismo");

console.log("\\nCASOS DE USO:");
console.log("💡 Rangos y secuencias");
console.log("💡 Paginación");
console.log("💡 Lectura de archivos");
console.log("💡 Operaciones recursivas");
console.log("💡 DFS/BFS en árboles");</textarea>
            <button onclick="runCode('code-gen-11')">Ejecutar</button>
            <div class="output" id="output-gen-11"></div>
        </div>

    </section>
`;
