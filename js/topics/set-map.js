const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Set y Map</h2>
        <p>Estructuras de datos modernas: Set para colecciones únicas y Map para pares clave-valor.</p>

        <h3>1. Crear Set</h3>
        <p>Colección de valores únicos.</p>

        <div class="example">
            <textarea id="code-set-1" readonly>// Vacío
const set1 = new Set();
console.log("Set vacío:", set1);

// De array
const set2 = new Set([1, 2, 3, 3, 2]);
console.log("Set de array:", set2);
console.log("Tamaño:", set2.size);

// De string
const set3 = new Set('ABC');
console.log("Set de string:", set3);</textarea>
            <button onclick="runCode('code-set-1')">Ejecutar</button>
            <div class="output" id="output-set-1"></div>
        </div>

        <hr>

        <h3>2. Métodos Set: add, has, delete</h3>
        <p>Operaciones básicas.</p>

        <div class="example">
            <textarea id="code-set-2" readonly>const set = new Set();

// add: agregar
set.add(1);
set.add(2);
set.add(3);
console.log("Después de add:", set);

// has: verificar
console.log("has(2):", set.has(2));
console.log("has(99):", set.has(99));

// delete: eliminar
set.delete(2);
console.log("Después de delete:", set);

// clear: limpiar
const set2 = new Set([1, 2, 3]);
set2.clear();
console.log("Después clear:", set2);</textarea>
            <button onclick="runCode('code-set-2')">Ejecutar</button>
            <div class="output" id="output-set-2"></div>
        </div>

        <hr>

        <h3>3. Iteración Set</h3>
        <p>Formas de iterar.</p>

        <div class="example">
            <textarea id="code-set-3" readonly>const set = new Set(['a', 'b', 'c']);

console.log("forEach:");
set.forEach(valor => console.log(valor));

console.log("\\nfor...of:");
for (const valor of set) {
    console.log(valor);
}

console.log("\\nSpread:");
console.log([...set]);

console.log("\\nvalues(), keys(), entries():");
console.log("values:", [...set.values()]);
console.log("keys:", [...set.keys()]);
console.log("entries:", [...set.entries()]);</textarea>
            <button onclick="runCode('code-set-3')">Ejecutar</button>
            <div class="output" id="output-set-3"></div>
        </div>

        <hr>

        <h3>4. Usar Set</h3>
        <p>Casos prácticos.</p>

        <div class="example">
            <textarea id="code-set-4" readonly>// Eliminar duplicados
const arr = [1, 2, 2, 3, 3, 3, 4];
const sinDup = [...new Set(arr)];
console.log("Sin duplicados:", sinDup);

// Contar únicos
const letras = ['a', 'b', 'a', 'c', 'b', 'd'];
const setLetras = new Set(letras);
console.log("Únicas:", setLetras.size);

// Verificar membresía
const ids = new Set([1, 5, 10, 15]);
console.log("¿contiene 10?:", ids.has(10));
console.log("¿contiene 20?:", ids.has(20));</textarea>
            <button onclick="runCode('code-set-4')">Ejecutar</button>
            <div class="output" id="output-set-4"></div>
        </div>

        <hr>

        <h3>5. Operaciones Set</h3>
        <p>Unión, intersección, diferencia.</p>

        <div class="example">
            <textarea id="code-set-5" readonly>const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Unión
const union = new Set([...a, ...b]);
console.log("Unión:", union);

// Intersección
const interseccion = new Set([...a].filter(x => b.has(x)));
console.log("Intersección:", interseccion);

// Diferencia a - b
const dif_ab = new Set([...a].filter(x => !b.has(x)));
console.log("Diferencia a-b:", dif_ab);

// Diferencia b - a
const dif_ba = new Set([...b].filter(x => !a.has(x)));
console.log("Diferencia b-a:", dif_ba);

// Diferencia simétrica
const simetrica = new Set([...dif_ab, ...dif_ba]);
console.log("Diferencia simétrica:", simetrica);</textarea>
            <button onclick="runCode('code-set-5')">Ejecutar</button>
            <div class="output" id="output-set-5"></div>
        </div>

        <hr>

        <h3>6. Set vs Array</h3>
        <p>Comparación y cuándo usar cada uno.</p>

        <div class="example">
            <textarea id="code-set-6" readonly>const arr = [1, 2, 3, 4, 5];
const set = new Set(arr);

console.log("Array includes: O(n)");
console.log("Set has: O(1)");

// Búsqueda
console.log("\\narr.includes(3):", arr.includes(3));
console.log("set.has(3):", set.has(3));

// Array es ordenado, Set no
console.log("\\nArray[0]:", arr[0]);
console.log("Set primero:", set.values().next().value);

// Map con Set
const usuarios = new Set();
usuarios.add({ id: 1, nombre: "Ana" });
usuarios.add({ id: 2, nombre: "Juan" });
console.log("\\nSet de objetos:", usuarios.size);</textarea>
            <button onclick="runCode('code-set-6')">Ejecutar</button>
            <div class="output" id="output-set-6"></div>
        </div>

        <hr>

        <h3>7. Crear Map</h3>
        <p>Colección de pares clave-valor.</p>

        <div class="example">
            <textarea id="code-set-7" readonly>// Vacío
const map1 = new Map();
console.log("Map vacío:", map1);

// De array de pares
const map2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
console.log("Map de array:", map2);
console.log("Tamaño:", map2.size);</textarea>
            <button onclick="runCode('code-set-7')">Ejecutar</button>
            <div class="output" id="output-set-7"></div>
        </div>

        <hr>

        <h3>8. Métodos Map: set, get, has, delete</h3>
        <p>Operaciones básicas.</p>

        <div class="example">
            <textarea id="code-set-8" readonly>const map = new Map();

// set: agregar/actualizar
map.set('nombre', 'Juan');
map.set('edad', 30);
console.log("Después set:", map);

// get: obtener
console.log("get nombre:", map.get('nombre'));
console.log("get no existe:", map.get('email'));

// has: verificar
console.log("has nombre:", map.has('nombre'));
console.log("has email:", map.has('email'));

// delete: eliminar
map.delete('edad');
console.log("Después delete:", map);

// clear: limpiar
const map2 = new Map([['a', 1]]);
map2.clear();
console.log("Después clear:", map2);</textarea>
            <button onclick="runCode('code-set-8')">Ejecutar</button>
            <div class="output" id="output-set-8"></div>
        </div>

        <hr>

        <h3>9. Claves Complejas</h3>
        <p>Usar objetos como claves.</p>

        <div class="example">
            <textarea id="code-set-9" readonly>const map = new Map();

// Objetos como claves
const obj1 = { id: 1 };
const obj2 = { id: 2 };

map.set(obj1, 'Objeto 1');
map.set(obj2, 'Objeto 2');

console.log("map.get(obj1):", map.get(obj1));

// Función como clave
const fn = () => {};
map.set(fn, 'Función');
console.log("map.get(fn):", map.get(fn));

// Numbers, strings, etc.
map.set(1, 'número');
map.set('1', 'string');
console.log("map.get(1):", map.get(1));
console.log("map.get('1'):", map.get('1'));</textarea>
            <button onclick="runCode('code-set-9')">Ejecutar</button>
            <div class="output" id="output-set-9"></div>
        </div>

        <hr>

        <h3>10. Iteración Map</h3>
        <p>Formas de iterar.</p>

        <div class="example">
            <textarea id="code-set-10" readonly>const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

console.log("entries():");
for (const [clave, valor] of map.entries()) {
    console.log(\`\${clave}: \${valor}\`);
}

console.log("\\nkeys():");
for (const clave of map.keys()) {
    console.log(clave);
}

console.log("\\nvalues():");
for (const valor of map.values()) {
    console.log(valor);
}

console.log("\\nforEach:");
map.forEach((valor, clave) => {
    console.log(\`\${clave}: \${valor}\`);
});</textarea>
            <button onclick="runCode('code-set-10')">Ejecutar</button>
            <div class="output" id="output-set-10"></div>
        </div>

        <hr>

        <h3>11. Usar Map</h3>
        <p>Casos prácticos.</p>

        <div class="example">
            <textarea id="code-set-11" readonly>// Cache
const cache = new Map();

function calcular(n) {
    if (cache.has(n)) {
        console.log("Del cache:", n);
        return cache.get(n);
    }
    console.log("Calculando:", n);
    const resultado = n * n;
    cache.set(n, resultado);
    return resultado;
}

console.log(calcular(5));
console.log(calcular(5));
console.log(calcular(3));

// Contar ocurrencias
const contador = new Map();
['a', 'b', 'a', 'c', 'b', 'a'].forEach(letra => {
    contador.set(letra, (contador.get(letra) || 0) + 1);
});
console.log("\\nContador:", contador);</textarea>
            <button onclick="runCode('code-set-11')">Ejecutar</button>
            <div class="output" id="output-set-11"></div>
        </div>

        <hr>

        <h3>12. Map a Objeto y Viceversa</h3>
        <p>Conversión entre estructuras.</p>

        <div class="example">
            <textarea id="code-set-12" readonly>// Map a Objeto
const map = new Map([
    ['nombre', 'Juan'],
    ['edad', 30],
    ['ciudad', 'Madrid']
]);

const obj = Object.fromEntries(map);
console.log("Map to Object:", obj);

// Objeto a Map
const persona = {
    nombre: 'Ana',
    edad: 25,
    email: 'ana@email.com'
};

const map2 = new Map(Object.entries(persona));
console.log("Object to Map:", map2);

// Convertir de vuelta
const obj2 = Object.fromEntries(map2);
console.log("Back to Object:", obj2);</textarea>
            <button onclick="runCode('code-set-12')">Ejecutar</button>
            <div class="output" id="output-set-12"></div>
        </div>

        <hr>

        <h3>13. Map vs Objeto</h3>
        <p>Cuándo usar cada uno.</p>

        <div class="example">
            <textarea id="code-set-13" readonly>console.log("MAP:");
console.log("✅ Cualquier tipo de clave");
console.log("✅ Mantiene orden de inserción");
console.log("✅ Iteración sencilla");
console.log("✅ size automático");
console.log("✅ Mejor rendimiento búsquedas");

console.log("\\nOBJETO:");
console.log("✅ Sintaxis más limpia");
console.log("✅ JSON.stringify fácil");
console.log("✅ Acceso con punto");
console.log("✅ Propiedades y métodos");

// Comparación
const map = new Map([['a', 1]]);
const obj = { a: 1 };

console.log("\\nmap.size:", map.size);
console.log("Object.keys(obj).length:", Object.keys(obj).length);</textarea>
            <button onclick="runCode('code-set-13')">Ejecutar</button>
            <div class="output" id="output-set-13"></div>
        </div>

        <hr>

        <h3>14. WeakSet</h3>
        <p>Set con referencias débiles.</p>

        <div class="example">
            <textarea id="code-set-14" readonly>// WeakSet: solo objetos, referencias débiles
const ws = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

ws.add(obj1);
ws.add(obj2);

console.log("has obj1:", ws.has(obj1));
console.log("has obj2:", ws.has(obj2));

// Si eliminamos referencia, el objeto puede ser basura colectada
obj1 = null;
console.log("Después de null, has obj1:", ws.has(obj1)); // undefined !== obj

// WeakSet NO es iterable
console.log("WeakSet no tiene .size");
console.log("WeakSet no tiene .forEach()");</textarea>
            <button onclick="runCode('code-set-14')">Ejecutar</button>
            <div class="output" id="output-set-14"></div>
        </div>

        <hr>

        <h3>15. WeakMap</h3>
        <p>Map con referencias débiles.</p>

        <div class="example">
            <textarea id="code-set-15" readonly>// WeakMap: solo claves de objeto, referencias débiles
const wm = new WeakMap();

let user1 = { name: 'Juan' };
let user2 = { name: 'Ana' };

wm.set(user1, 'datos de Juan');
wm.set(user2, 'datos de Ana');

console.log("get user1:", wm.get(user1));

// Útil para datos privados
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        privados.set(this, {
            dni: '12345678',
            ssn: 'xxx-xx-xxxx'
        });
    }
}

const privados = new WeakMap();

const p = new Persona('Juan');
console.log("Públicos:", p);
console.log("Privados:", privados.get(p));</textarea>
            <button onclick="runCode('code-set-15')">Ejecutar</button>
            <div class="output" id="output-set-15"></div>
        </div>

        <hr>

        <h3>16. Ejercicio: Histórico de Búsquedas</h3>
        <p>Guardar búsquedas únicas en orden.</p>

        <div class="example">
            <textarea id="code-set-16" readonly>class HistóricoSearches {
    constructor(maxItems = 5) {
        this.maxItems = maxItems;
        this.searches = [];
        this.set = new Set();
    }
    
    agregar(query) {
        if (this.set.has(query)) {
            // Mover al final
            this.searches = this.searches.filter(s => s !== query);
        } else if (this.searches.length >= this.maxItems) {
            // Eliminar primero
            const eliminado = this.searches.shift();
            this.set.delete(eliminado);
        }
        
        this.searches.push(query);
        this.set.add(query);
    }
    
    obtener() {
        return this.searches;
    }
    
    limpiar() {
        this.searches = [];
        this.set.clear();
    }
}

const hist = new HistóricoSearches(3);
hist.agregar('JavaScript');
hist.agregar('Python');
hist.agregar('Java');
console.log("Histórico:", hist.obtener());

hist.agregar('JavaScript'); // Mueve al final
console.log("Después de repetir:", hist.obtener());

hist.agregar('Go'); // Elimina 'Python'
console.log("Después de nuevo:", hist.obtener());</textarea>
            <button onclick="runCode('code-set-16')">Ejecutar</button>
            <div class="output" id="output-set-16"></div>
        </div>

        <hr>

        <h3>17. Ejercicio: Grafo con Map</h3>
        <p>Representar grafo con Map.</p>

        <div class="example">
            <textarea id="code-set-17" readonly>class Grafo {
    constructor() {
        this.nodos = new Map();
    }
    
    agregarNodo(id) {
        this.nodos.set(id, []);
    }
    
    agregarArista(de, a) {
        this.nodos.get(de).push(a);
        this.nodos.get(a).push(de); // No dirigido
    }
    
    obtenerVecinos(id) {
        return this.nodos.get(id);
    }
    
    bfs(inicio) {
        const visitados = new Set();
        const cola = [inicio];
        const resultado = [];
        
        while (cola.length > 0) {
            const nodo = cola.shift();
            if (!visitados.has(nodo)) {
                visitados.add(nodo);
                resultado.push(nodo);
                cola.push(...this.obtenerVecinos(nodo));
            }
        }
        return resultado;
    }
}

const g = new Grafo();
[1, 2, 3, 4].forEach(i => g.agregarNodo(i));
g.agregarArista(1, 2);
g.agregarArista(1, 3);
g.agregarArista(2, 4);

console.log("BFS desde 1:", g.bfs(1));</textarea>
            <button onclick="runCode('code-set-17')">Ejecutar</button>
            <div class="output" id="output-set-17"></div>
        </div>

        <hr>

        <h3>18. Performance: Set vs Array</h3>
        <p>Diferencia de rendimiento.</p>

        <div class="example">
            <textarea id="code-set-18" readonly>const tamaño = 100000;
const arr = Array.from({ length: tamaño }, (_, i) => i);
const set = new Set(arr);

// Búsqueda
console.time("Array includes");
for (let i = 0; i < 1000; i++) {
    arr.includes(50000);
}
console.timeEnd("Array includes");

console.time("Set has");
for (let i = 0; i < 1000; i++) {
    set.has(50000);
}
console.timeEnd("Set has");

console.log("\\nSet es mucho más rápido para búsquedas!");</textarea>
            <button onclick="runCode('code-set-18')">Ejecutar</button>
            <div class="output" id="output-set-18"></div>
        </div>

        <hr>

        <h3>19. Best Practices</h3>
        <p>Mejores prácticas.</p>

        <div class="example">
            <textarea id="code-set-19" readonly>console.log("SET:");
console.log("✅ Para colecciones únicas");
console.log("✅ Verificar membresía O(1)");
console.log("✅ Usar [...set] para array");

console.log("\\nMAP:");
console.log("✅ Para pares clave-valor");
console.log("✅ Claves complejas");
console.log("✅ Mantiene orden");
console.log("✅ for...of o .entries()");

console.log("\\nWEAKSET / WEAKMAP:");
console.log("✅ Datos privados");
console.log("✅ Evitar memory leaks");
console.log("✅ No son iterables");</textarea>
            <button onclick="runCode('code-set-19')">Ejecutar</button>
            <div class="output" id="output-set-19"></div>
        </div>

        <hr>

        <h3>20. Cheat Sheet</h3>
        <p>Referencia rápida.</p>

        <div class="example">
            <textarea id="code-set-20" readonly>// SET
const set = new Set([1, 2, 3]);
set.add(4);           // Agregar
set.has(2);           // true
set.delete(2);        // Eliminar
set.clear();          // Limpiar
set.size;             // Tamaño
[...set];             // A array

// MAP
const map = new Map();
map.set('a', 1);      // Agregar
map.get('a');         // 1
map.has('a');         // true
map.delete('a');      // Eliminar
map.clear();          // Limpiar
map.size;             // Tamaño
[...map];             // [[clave, valor]]

// CONVERSIONES
new Set(array);
Array.from(set);
new Map(Object.entries(obj));
Object.fromEntries(map);</textarea>
            <button onclick="runCode('code-set-20')">Ejecutar</button>
            <div class="output" id="output-set-20"></div>
        </div>

    </section>
`;
