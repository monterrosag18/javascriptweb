const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Symbols</h2>
        <p>Valores primitivos únicos para propiedades y protocolos especiales.</p>

        <h3>1. Crear Symbols</h3>
        <p>Símbolos únicos.</p>

        <div class="example">
            <textarea id="code-sym-1" readonly>// Crear símbolo
const sym1 = Symbol();
const sym2 = Symbol();

console.log("sym1:", sym1);
console.log("sym2:", sym2);
console.log("sym1 === sym2:", sym1 === sym2); // false

// Con descripción
const sym3 = Symbol('mi símbolo');
const sym4 = Symbol('mi símbolo');

console.log("\\nCon descripción:");
console.log("sym3:", sym3);
console.log("sym3.description:", sym3.description);
console.log("sym3 === sym4:", sym3 === sym4); // Diferentes aunque tengan igual descripción

// typeof
console.log("\\ntypeof sym1:", typeof sym1);</textarea>
            <button onclick="runCode('code-sym-1')">Ejecutar</button>
            <div class="output" id="output-sym-1"></div>
        </div>

        <hr>

        <h3>2. Propiedades Privadas</h3>
        <p>Usar symbols para privacidad.</p>

        <div class="example">
            <textarea id="code-sym-2" readonly>// Símbolos como propiedades privadas
const _password = Symbol('password');
const _ssn = Symbol('ssn');

class Usuario {
    constructor(nombre, password, ssn) {
        this.nombre = nombre;
        this[_password] = password;
        this[_ssn] = ssn;
    }
    
    validarPassword(pass) {
        return this[_password] === pass;
    }
    
    obtenerSSN() {
        return this[_ssn];
    }
}

const user = new Usuario('Juan', 'segura123', '123-45-6789');

console.log("Propiedades públicas:");
console.log("user.nombre:", user.nombre);

console.log("\\nAcceso directo a símbolo:");
console.log("user[_password]:", user[_password]);

console.log("\\nMétodos:");
console.log("validarPassword('segura123'):", user.validarPassword('segura123'));
console.log("obtenerSSN():", user.obtenerSSN());

console.log("\\nNo aparece en Object.keys:");
console.log("Object.keys(user):", Object.keys(user));</textarea>
            <button onclick="runCode('code-sym-2')">Ejecutar</button>
            <div class="output" id="output-sym-2"></div>
        </div>

        <hr>

        <h3>3. Símbolos Globales</h3>
        <p>Symbol.for y Symbol.keyFor.</p>

        <div class="example">
            <textarea id="code-sym-3" readonly>// Symbol.for: búsqueda global
const sym1 = Symbol.for('app.id');
const sym2 = Symbol.for('app.id');

console.log("sym1 === sym2:", sym1 === sym2); // true

// Symbol.keyFor: obtener clave
console.log("Symbol.keyFor(sym1):", Symbol.keyFor(sym1));

// Local vs Global
const local = Symbol('local');
console.log("Symbol.keyFor(local):", Symbol.keyFor(local)); // undefined

// Registro global
const miApp = Symbol.for('mi-app');
const misConfig = {};
misConfig[miApp] = { tema: 'oscuro' };

console.log("\\nConfig:", misConfig[Symbol.for('mi-app')]);</textarea>
            <button onclick="runCode('code-sym-3')">Ejecutar</button>
            <div class="output" id="output-sym-3"></div>
        </div>

        <hr>

        <h3>4. Symbol.iterator</h3>
        <p>Hacer objetos iterables.</p>

        <div class="example">
            <textarea id="code-sym-4" readonly>// Objeto iterable con Symbol.iterator
const coleccion = {
    datos: [1, 2, 3, 4, 5],
    
    [Symbol.iterator]() {
        let index = 0;
        const datos = this.datos;
        
        return {
            next: () => {
                if (index < datos.length) {
                    return { value: datos[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

console.log("for...of:");
for (const valor of coleccion) {
    console.log(valor);
}

console.log("\\nSpread:");
console.log([...coleccion]);

// String es iterable
console.log("\\nString iterable:");
for (const letra of 'ABC') {
    console.log(letra);
}</textarea>
            <button onclick="runCode('code-sym-4')">Ejecutar</button>
            <div class="output" id="output-sym-4"></div>
        </div>

        <hr>

        <h3>5. Symbol.hasInstance</h3>
        <p>Controlar instanceof.</p>

        <div class="example">
            <textarea id="code-sym-5" readonly>class Clase {
    static [Symbol.hasInstance](obj) {
        // Lógica personalizada
        return obj?.esInstancia === true;
    }
}

const obj1 = { esInstancia: true };
const obj2 = { esInstancia: false };
const obj3 = {};

console.log("obj1 instanceof Clase:", obj1 instanceof Clase); // true
console.log("obj2 instanceof Clase:", obj2 instanceof Clase); // false
console.log("obj3 instanceof Clase:", obj3 instanceof Clase); // false

// Ejemplo práctico: array-like
class ArrayLike {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj) || 
               (obj && 'length' in obj && 'forEach' in obj);
    }
}

console.log("\\nArrayLike:");
console.log("[] instanceof ArrayLike:", [] instanceof ArrayLike);
console.log("[1,2,3] instanceof ArrayLike:", [1,2,3] instanceof ArrayLike);</textarea>
            <button onclick="runCode('code-sym-5')">Ejecutar</button>
            <div class="output" id="output-sym-5"></div>
        </div>

        <hr>

        <h3>6. Symbol.toStringTag</h3>
        <p>Controlar toString.</p>

        <div class="example">
            <textarea id="code-sym-6" readonly>class MiClase {
    get [Symbol.toStringTag]() {
        return 'MiClase';
    }
}

const obj = new MiClase();
console.log(Object.prototype.toString.call(obj)); // [object MiClase]

// Built-in
console.log(Object.prototype.toString.call(new Map())); // [object Map]
console.log(Object.prototype.toString.call(new Set())); // [object Set]
console.log(Object.prototype.toString.call([])); // [object Array]

// Personalizado
const miObjeto = {
    [Symbol.toStringTag]: 'MiObjeto',
    datos: [1, 2, 3]
};

console.log(Object.prototype.toString.call(miObjeto)); // [object MiObjeto]</textarea>
            <button onclick="runCode('code-sym-6')">Ejecutar</button>
            <div class="output" id="output-sym-6"></div>
        </div>

        <hr>

        <h3>7. Symbol.toPrimitive</h3>
        <p>Conversión a primitivo.</p>

        <div class="example">
            <textarea id="code-sym-7" readonly>class Número {
    constructor(valor) {
        this.valor = valor;
    }
    
    [Symbol.toPrimitive](hint) {
        console.log("Hint:", hint);
        
        if (hint === 'number') {
            return this.valor;
        }
        if (hint === 'string') {
            return \`Número(\${this.valor})\`;
        }
        return this.valor;
    }
}

const num = new Número(42);

console.log("Número + 8:");
console.log(num + 8);

console.log("\\nString(Número):");
console.log(String(num));

console.log("\\nNumero == 42:");
console.log(num == 42);

console.log("\\nComparación:");
console.log(num > 40);</textarea>
            <button onclick="runCode('code-sym-7')">Ejecutar</button>
            <div class="output" id="output-sym-7"></div>
        </div>

        <hr>

        <h3>8. Symbol.species</h3>
        <p>Controlar tipo de derivados.</p>

        <div class="example">
            <textarea id="code-sym-8" readonly>class MiArray extends Array {
    static get [Symbol.species]() {
        // Al hacer map(), filter(), etc., qué tipo retornar
        return Array; // Retornar Array normal, no MiArray
    }
}

const arr = new MiArray(1, 2, 3);
console.log("arr:", arr);
console.log("arr instanceof MiArray:", arr instanceof MiArray);

const duplicados = arr.map(x => x * 2);
console.log("\\nDespués de map:");
console.log("duplicados:", duplicados);
console.log("duplicados instanceof MiArray:", duplicados instanceof MiArray);
console.log("duplicados instanceof Array:", duplicados instanceof Array);

// Sin Symbol.species, map() retornaría MiArray
class OtroArray extends Array {
    // No definimos Symbol.species, entonces retorna OtroArray
}

const arr2 = new OtroArray(1, 2, 3);
const duplicados2 = arr2.map(x => x * 2);
console.log("\\nOtroArray:", duplicados2 instanceof OtroArray);</textarea>
            <button onclick="runCode('code-sym-8')">Ejecutar</button>
            <div class="output" id="output-sym-8"></div>
        </div>

        <hr>

        <h3>9. Symbol.match, replace, search</h3>
        <p>Personalizar regex matching.</p>

        <div class="example">
            <textarea id="code-sym-9" readonly>// Objeto que actúa como regex
class MiPatron {
    constructor(patron) {
        this.patron = new RegExp(patron);
    }
    
    [Symbol.match](string) {
        console.log("Matcheando:", string);
        const resultado = string.match(this.patron);
        return resultado ? resultado.map(m => m.toUpperCase()) : null;
    }
}

const patron = new MiPatron('(\\w+)');
const resultado = 'hola mundo'.match(patron);
console.log("Resultado:", resultado);

// Búsqueda personalizada
const buscador = {
    [Symbol.search](string) {
        console.log("Buscando en:", string);
        return string.indexOf('x');
    }
};

console.log("\\nBúsqueda:", 'ejemplo'.search(buscador));</textarea>
            <button onclick="runCode('code-sym-9')">Ejecutar</button>
            <div class="output" id="output-sym-9"></div>
        </div>

        <hr>

        <h3>10. Descripción de Symbols</h3>
        <p>Debugging y descripción.</p>

        <div class="example">
            <textarea id="code-sym-10" readonly>const sym1 = Symbol('mi app - user id');
const sym2 = Symbol();
const sym3 = Symbol.for('global');

console.log("Con descripción:", sym1.description);
console.log("Sin descripción:", sym2.description);
console.log("Global:", sym3.description);

// Útil para debugging
const obj = {
    [Symbol('privado')]: 'valor',
    [Symbol('otro')]: 42,
    publico: 'visible'
};

console.log("\\nObjeto con symbols:");
console.log("Object.keys:", Object.keys(obj));
console.log("Object.getOwnPropertySymbols:", Object.getOwnPropertySymbols(obj));

// Iterar todo
console.log("\\nTodas las propiedades:");
[...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)]
    .forEach(prop => {
        console.log(prop, "=>", obj[prop]);
    });</textarea>
            <button onclick="runCode('code-sym-10')">Ejecutar</button>
            <div class="output" id="output-sym-10"></div>
        </div>

        <hr>

        <h3>11. Symbols Built-in</h3>
        <p>Referencia de símbolos especiales.</p>

        <div class="example">
            <textarea id="code-sym-11" readonly>console.log("SÍMBOLOS ESPECIALES BUILT-IN:\\n");

console.log("Symbol.iterator:", Symbol.iterator);
console.log("Symbol.hasInstance:", Symbol.hasInstance);
console.log("Symbol.toStringTag:", Symbol.toStringTag);
console.log("Symbol.toPrimitive:", Symbol.toPrimitive);
console.log("Symbol.species:", Symbol.species);
console.log("Symbol.match:", Symbol.match);
console.log("Symbol.replace:", Symbol.replace);
console.log("Symbol.search:", Symbol.search);
console.log("Symbol.split:", Symbol.split);
console.log("Symbol.asyncIterator:", Symbol.asyncIterator);
console.log("Symbol.isConcatSpreadable:", Symbol.isConcatSpreadable);
console.log("Symbol.unscopables:", Symbol.unscopables);
console.log("Symbol.hasInstance:", Symbol.hasInstance);</textarea>
            <button onclick="runCode('code-sym-11')">Ejecutar</button>
            <div class="output" id="output-sym-11"></div>
        </div>

        <hr>

        <h3>12. Enumeración sin Symbols</h3>
        <p>Símbolos no aparecen en enumeración.</p>

        <div class="example">
            <textarea id="code-sym-12" readonly>const id = Symbol('id');
const nombre = 'nombre';
const age = 'age';

const obj = {};
obj[id] = 1;
obj[nombre] = 'Juan';
obj[age] = 30;

console.log("for...in (no incluye symbols):");
for (const clave in obj) {
    console.log(clave);
}

console.log("\\nObject.keys (no incluye symbols):");
console.log(Object.keys(obj));

console.log("\\nObject.entries (no incluye symbols):");
console.log(Object.entries(obj));

console.log("\\nObject.getOwnPropertySymbols:");
console.log(Object.getOwnPropertySymbols(obj));

console.log("\\nJSON.stringify (ignora symbols):");
console.log(JSON.stringify(obj));

console.log("\\nSpread (ignora symbols):");
const copia = { ...obj };
console.log("Symbol en copia:", id in copia);</textarea>
            <button onclick="runCode('code-sym-12')">Ejecutar</button>
            <div class="output" id="output-sym-12"></div>
        </div>

        <hr>

        <h3>13. Caso Real: EventEmitter</h3>
        <p>Implementación con symbols.</p>

        <div class="example">
            <textarea id="code-sym-13" readonly>const _eventos = Symbol('eventos');

class EventEmitter {
    constructor() {
        this[_eventos] = {};
    }
    
    on(evento, callback) {
        if (!this[_eventos][evento]) {
            this[_eventos][evento] = [];
        }
        this[_eventos][evento].push(callback);
    }
    
    emit(evento, datos) {
        if (this[_eventos][evento]) {
            this[_eventos][evento].forEach(cb => cb(datos));
        }
    }
    
    off(evento, callback) {
        if (this[_eventos][evento]) {
            this[_eventos][evento] = 
                this[_eventos][evento].filter(cb => cb !== callback);
        }
    }
}

const emitter = new EventEmitter();

emitter.on('hola', (msg) => console.log('Recibido:', msg));
emitter.on('hola', (msg) => console.log('Otro listener:', msg));

console.log("Emitiendo evento:");
emitter.emit('hola', 'Mensaje importante');

console.log("\\nNo aparece en Object.keys:");
console.log("Object.keys(emitter):", Object.keys(emitter));</textarea>
            <button onclick="runCode('code-sym-13')">Ejecutar</button>
            <div class="output" id="output-sym-13"></div>
        </div>

        <hr>

        <h3>14. Best Practices</h3>
        <p>Mejores prácticas.</p>

        <div class="example">
            <textarea id="code-sym-14" readonly>console.log("SYMBOLS:\\n");

console.log("✅ Para propiedades privadas");
console.log("✅ Para protocolo Symbol.iterator");
console.log("✅ Registrar en el 'registry' global si necesario");
console.log("✅ Usar .description para debugging");

console.log("\\n❌ Evitar:");
console.log("❌ No son privacidad total (Object.getOwnPropertySymbols)");
console.log("❌ No para criptografía");

console.log("\\nCASOS DE USO:");
console.log("💡 Propiedades privadas");
console.log("💡 Métodos especiales (iterator)");
console.log("💡 Espacios de nombres");
console.log("💡 EventEmitters y patterns");</textarea>
            <button onclick="runCode('code-sym-14')">Ejecutar</button>
            <div class="output" id="output-sym-14"></div>
        </div>

    </section>
`;
