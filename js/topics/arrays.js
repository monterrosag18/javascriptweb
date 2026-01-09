const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Arrays Avanzados</h2>
        <p>Métodos modernos y técnicas avanzadas para trabajar con arrays en JavaScript.</p>

        <h3>1. Array Básico</h3>
        <p>Crear y acceder a elementos.</p>
        
        <div class="example">
            <textarea id="code-arr-1" readonly>const arr = [1, 2, 3, 4, 5];

console.log("Array:", arr);
console.log("Longitud:", arr.length);
console.log("Primer elemento:", arr[0]);
console.log("Último elemento:", arr[arr.length - 1]);

const mixed = [1, "texto", true, { a: 1 }, [1, 2]];
console.log("Array mixto:", mixed);</textarea>
            <button onclick="runCode('code-arr-1')">Ejecutar</button>
            <div class="output" id="output-arr-1"></div>
        </div>

        <hr>

        <h3>2. push, pop, shift, unshift</h3>
        <p>Agregar y quitar elementos.</p>

        <div class="example">
            <textarea id="code-arr-2" readonly>const arr = [1, 2, 3];

// push: agregar al final
arr.push(4);
console.log("Después de push(4):", arr);

// pop: quitar último
const ultimo = arr.pop();
console.log("pop() retornó:", ultimo);
console.log("Array después:", arr);

// unshift: agregar al inicio
arr.unshift(0);
console.log("Después de unshift(0):", arr);

// shift: quitar primero
const primero = arr.shift();
console.log("shift() retornó:", primero);
console.log("Array final:", arr);</textarea>
            <button onclick="runCode('code-arr-2')">Ejecutar</button>
            <div class="output" id="output-arr-2"></div>
        </div>

        <hr>

        <h3>3. slice</h3>
        <p>Extraer porciones del array.</p>

        <div class="example">
            <textarea id="code-arr-3" readonly>const arr = [1, 2, 3, 4, 5];

console.log("Original:", arr);
console.log("slice(0, 3):", arr.slice(0, 3));
console.log("slice(2):", arr.slice(2));
console.log("slice(-2):", arr.slice(-2));
console.log("slice(1, -1):", arr.slice(1, -1));

// NO modifica original
console.log("Original sin cambios:", arr);

// Copiar array
const copia = arr.slice();
console.log("Copia:", copia);</textarea>
            <button onclick="runCode('code-arr-3')">Ejecutar</button>
            <div class="output" id="output-arr-3"></div>
        </div>

        <hr>

        <h3>4. splice</h3>
        <p>Modificar array eliminando/insertando elementos.</p>

        <div class="example">
            <textarea id="code-arr-4" readonly>const arr = [1, 2, 3, 4, 5];

// Eliminara partir de índice 2, 2 elementos
const eliminados = arr.splice(2, 2);
console.log("Eliminados:", eliminados);
console.log("Array después:", arr);

// Insertar sin eliminar
const arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4);
console.log("Después de insertar:", arr2);

// Reemplazar
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 3, "a", "b");
console.log("Después de reemplazar:", arr3);</textarea>
            <button onclick="runCode('code-arr-4')">Ejecutar</button>
            <div class="output" id="output-arr-4"></div>
        </div>

        <hr>

        <h3>5. concat</h3>
        <p>Combinar arrays.</p>

        <div class="example">
            <textarea id="code-arr-5" readonly>const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const combinado = arr1.concat(arr2, arr3);
console.log("Combinado:", combinado);

// Con spread operator (moderno)
const combinado2 = [...arr1, ...arr2, ...arr3];
console.log("Con spread:", combinado2);

// No modifica originales
console.log("arr1:", arr1);</textarea>
            <button onclick="runCode('code-arr-5')">Ejecutar</button>
            <div class="output" id="output-arr-5"></div>
        </div>

        <hr>

        <h3>6. join</h3>
        <p>Convertir array a string.</p>

        <div class="example">
            <textarea id="code-arr-6" readonly>const arr = ["JavaScript", "Python", "Java"];

console.log("join():", arr.join());
console.log("join(', '):", arr.join(", "));
console.log("join(' | '):", arr.join(" | "));
console.log("join(''):", arr.join(""));

// Con números
const nums = [1, 2, 3, 4, 5];
console.log("Números:", nums.join("-"));

// Path
const path = ["home", "user", "documents"];
console.log("Path:", path.join("/"));</textarea>
            <button onclick="runCode('code-arr-6')">Ejecutar</button>
            <div class="output" id="output-arr-6"></div>
        </div>

        <hr>

        <h3>7. indexOf y lastIndexOf</h3>
        <p>Buscar posición de elementos.</p>

        <div class="example">
            <textarea id="code-arr-7" readonly>const arr = [1, 2, 3, 2, 1];

console.log("indexOf(2):", arr.indexOf(2));
console.log("lastIndexOf(2):", arr.lastIndexOf(2));
console.log("indexOf(99):", arr.indexOf(99));

// Con objetos (compara referencia)
const objetos = [{ a: 1 }, { a: 1 }];
console.log("indexOf({a:1}):", objetos.indexOf({ a: 1 }));

// Verificar existencia
if (arr.indexOf(3) !== -1) {
    console.log("3 existe en el array");
}</textarea>
            <button onclick="runCode('code-arr-7')">Ejecutar</button>
            <div class="output" id="output-arr-7"></div>
        </div>

        <hr>

        <h3>8. includes</h3>
        <p>Verificar si elemento existe.</p>

        <div class="example">
            <textarea id="code-arr-8" readonly>const arr = [1, 2, 3, NaN];

console.log("includes(2):", arr.includes(2));
console.log("includes(99):", arr.includes(99));
console.log("includes(NaN):", arr.includes(NaN)); // ✅ Funciona!

// Con strings
const frutas = ["manzana", "plátano", "naranja"];
console.log("incluye plátano:", frutas.includes("plátano"));

// Desde posición
console.log("includes(1, 2):", arr.includes(1, 2));</textarea>
            <button onclick="runCode('code-arr-8')">Ejecutar</button>
            <div class="output" id="output-arr-8"></div>
        </div>

        <hr>

        <h3>9. reverse</h3>
        <p>Invertir array (modifica original).</p>

        <div class="example">
            <textarea id="code-arr-9" readonly>const arr = [1, 2, 3, 4, 5];

console.log("Original:", arr);
arr.reverse();
console.log("Invertido:", arr);

// Sin modificar original
const arr2 = [1, 2, 3];
const invertido = [...arr2].reverse();
console.log("Copia invertida:", invertido);
console.log("Original:", arr2);</textarea>
            <button onclick="runCode('code-arr-9')">Ejecutar</button>
            <div class="output" id="output-arr-9"></div>
        </div>

        <hr>

        <h3>10. sort</h3>
        <p>Ordenar array (modifica original).</p>

        <div class="example">
            <textarea id="code-arr-10" readonly>// Sort alfabético (por defecto)
const frutas = ["plátano", "manzana", "naranja"];
console.log("sort():", [...frutas].sort());

// Sort numérico
const nums = [10, 2, 30, 5];
console.log("sort números:", [...nums].sort());
console.log("sort correcto:", [...nums].sort((a, b) => a - b));

// Descendente
console.log("Descendente:", [...nums].sort((a, b) => b - a));

// Por propiedad
const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 }
];
personas.sort((a, b) => a.edad - b.edad);
console.log("Por edad:", personas);</textarea>
            <button onclick="runCode('code-arr-10')">Ejecutar</button>
            <div class="output" id="output-arr-10"></div>
        </div>

        <hr>

        <h3>11. flat</h3>
        <p>Aplanar array anidado.</p>

        <div class="example">
            <textarea id="code-arr-11" readonly>const arr = [1, [2, 3], [4, [5, 6]]];

console.log("Original:", arr);
console.log("flat():", arr.flat());
console.log("flat(2):", arr.flat(2));
console.log("flat(Infinity):", arr.flat(Infinity));

// Con arrays vacíos
const conHuecos = [1, [2, , 3], 4];
console.log("Con huecos flat():", conHuecos.flat());</textarea>
            <button onclick="runCode('code-arr-11')">Ejecutar</button>
            <div class="output" id="output-arr-11"></div>
        </div>

        <hr>

        <h3>12. flatMap</h3>
        <p>Combinar map y flat.</p>

        <div class="example">
            <textarea id="code-arr-12" readonly>const arr = [1, 2, 3, 4];

// Sin flatMap
const resultado1 = arr
    .map(n => [n, n * 2])
    .flat();
console.log("map + flat:", resultado1);

// Con flatMap
const resultado2 = arr.flatMap(n => [n, n * 2]);
console.log("flatMap:", resultado2);

// Caso práctico
const frases = ["Hola mundo", "JavaScript genial"];
const palabras = frases.flatMap(f => f.split(" "));
console.log("Palabras:", palabras);</textarea>
            <button onclick="runCode('code-arr-12')">Ejecutar</button>
            <div class="output" id="output-arr-12"></div>
        </div>

        <hr>

        <h3>13. at()</h3>
        <p>Acceso a elementos con índices negativos.</p>

        <div class="example">
            <textarea id="code-arr-13" readonly>const arr = ["a", "b", "c", "d"];

console.log("at(0):", arr.at(0));
console.log("at(2):", arr.at(2));
console.log("at(-1):", arr.at(-1)); // Último
console.log("at(-2):", arr.at(-2));

// Práctico
const scores = [100, 95, 88, 92];
console.log("Mejor score:", scores.at(0));
console.log("Peor score:", scores.at(-1));</textarea>
            <button onclick="runCode('code-arr-13')">Ejecutar</button>
            <div class="output" id="output-arr-13"></div>
        </div>

        <hr>

        <h3>14. fill</h3>
        <p>Llenar array con un valor.</p>

        <div class="example">
            <textarea id="code-arr-14" readonly>const arr1 = new Array(5);
arr1.fill(0);
console.log("Llenado con 0:", arr1);

const arr2 = [1, 2, 3, 4, 5];
arr2.fill("x", 1, 4);
console.log("fill('x', 1, 4):", arr2);

// Tabla
const tabla = Array(3)
    .fill(null)
    .map(() => Array(3).fill(0));
console.log("Tabla 3x3:", tabla);</textarea>
            <button onclick="runCode('code-arr-14')">Ejecutar</button>
            <div class="output" id="output-arr-14"></div>
        </div>

        <hr>

        <h3>15. from</h3>
        <p>Crear array desde iterable.</p>

        <div class="example">
            <textarea id="code-arr-15" readonly>// De string
console.log("Array.from('Hola'):", Array.from("Hola"));

// De Set
const set = new Set([1, 2, 3, 3, 2]);
console.log("De Set:", Array.from(set));

// De Map
const map = new Map([["a", 1], ["b", 2]]);
console.log("De Map:", Array.from(map));

// Con mapper
const numeros = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Números 1-5:", numeros);

// Con rango
const letras = Array.from({ length: 3 }, (_, i) => String.fromCharCode(65 + i));
console.log("Letras:", letras);</textarea>
            <button onclick="runCode('code-arr-15')">Ejecutar</button>
            <div class="output" id="output-arr-15"></div>
        </div>

        <hr>

        <h3>16. isArray</h3>
        <p>Verificar si es array.</p>

        <div class="example">
            <textarea id="code-arr-16" readonly>console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray({}):", Array.isArray({}));
console.log("Array.isArray('texto'):", Array.isArray("texto"));
console.log("Array.isArray(123):", Array.isArray(123));

const arr = [1, 2, 3];
console.log("Array.isArray(arr):", Array.isArray(arr));

// instanceof vs Array.isArray
console.log("arr instanceof Array:", arr instanceof Array);</textarea>
            <button onclick="runCode('code-arr-16')">Ejecutar</button>
            <div class="output" id="output-arr-16"></div>
        </div>

        <hr>

        <h3>17. Destructuring</h3>
        <p>Desestructuración de arrays.</p>

        <div class="example">
            <textarea id="code-arr-17" readonly>const [a, b, c] = [1, 2, 3];
console.log("a:", a, "b:", b, "c:", c);

// Saltar elementos
const [x, , z] = [10, 20, 30];
console.log("x:", x, "z:", z);

// Rest
const [primero, ...resto] = [1, 2, 3, 4, 5];
console.log("Primero:", primero);
console.log("Resto:", resto);

// Con defaults
const [n1 = 0, n2 = 0, n3 = 0] = [1];
console.log("n1:", n1, "n2:", n2, "n3:", n3);</textarea>
            <button onclick="runCode('code-arr-17')">Ejecutar</button>
            <div class="output" id="output-arr-17"></div>
        </div>

        <hr>

        <h3>18. Spread Operator</h3>
        <p>Desplegar elementos de array.</p>

        <div class="example">
            <textarea id="code-arr-18" readonly>const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combinar
const combinado = [...arr, ...arr2];
console.log("Combinado:", combinado);

// Insertar
const insert = [0, ...arr, 3.5, ...arr2, 7];
console.log("Insertado:", insert);

// Copiar
const copia = [...arr];
console.log("Copia:", copia);

// Pasar argumentos
function suma(a, b, c) {
    return a + b + c;
}
console.log("suma(...arr):", suma(...arr));</textarea>
            <button onclick="runCode('code-arr-18')">Ejecutar</button>
            <div class="output" id="output-arr-18"></div>
        </div>

        <hr>

        <h3>19. Métodos con Callback</h3>
        <p>map, filter, reduce, forEach, etc.</p>

        <div class="example">
            <textarea id="code-arr-19" readonly>const nums = [1, 2, 3, 4, 5];

// map: transformar
const duplicados = nums.map(n => n * 2);
console.log("map:", duplicados);

// filter: filtrar
const pares = nums.filter(n => n % 2 === 0);
console.log("filter:", pares);

// reduce: reducir a valor
const suma = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce suma:", suma);

// forEach: iterar
nums.forEach((n, i) => console.log(\`[\${i}]: \${n}\`));</textarea>
            <button onclick="runCode('code-arr-19')">Ejecutar</button>
            <div class="output" id="output-arr-19"></div>
        </div>

        <hr>

        <h3>20. find y findIndex</h3>
        <p>Encontrar elementos.</p>

        <div class="example">
            <textarea id="code-arr-20" readonly>const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Juan" },
    { id: 3, nombre: "María" }
];

const usuario = usuarios.find(u => u.id === 2);
console.log("find:", usuario);

const indice = usuarios.findIndex(u => u.nombre === "María");
console.log("findIndex:", indice);

// No encontrado
const noExiste = usuarios.find(u => u.id === 99);
console.log("No existe:", noExiste);</textarea>
            <button onclick="runCode('code-arr-20')">Ejecutar</button>
            <div class="output" id="output-arr-20"></div>
        </div>

        <hr>

        <h3>21. some y every</h3>
        <p>Verificar condiciones.</p>

        <div class="example">
            <textarea id="code-arr-21" readonly>const nums = [2, 4, 6, 8, 10];

// some: ¿alguno cumple?
console.log("¿hay mayor que 5?:", nums.some(n => n > 5));

// every: ¿todos cumplen?
console.log("¿todos son pares?:", nums.every(n => n % 2 === 0));
console.log("¿todos > 5?:", nums.every(n => n > 5));

// Con strings
const emails = ["a@test.com", "b@test.com"];
console.log("¿son emails?:", emails.every(e => e.includes("@")));</textarea>
            <button onclick="runCode('code-arr-21')">Ejecutar</button>
            <div class="output" id="output-arr-21"></div>
        </div>

        <hr>

        <h3>22. Eliminar Duplicados</h3>
        <p>Mantener solo elementos únicos.</p>

        <div class="example">
            <textarea id="code-arr-22" readonly>const arr = [1, 2, 2, 3, 3, 3, 4];

// Con Set
const sinDuplicados = [...new Set(arr)];
console.log("Con Set:", sinDuplicados);

// Con filter e indexOf
const sinDup2 = arr.filter((v, i) => arr.indexOf(v) === i);
console.log("Con filter:", sinDup2);

// Objetos por propiedad
const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Juan" },
    { id: 1, nombre: "Ana" }
];

const usuariosUnicos = [];
const ids = new Set();
usuarios.forEach(u => {
    if (!ids.has(u.id)) {
        usuariosUnicos.push(u);
        ids.add(u.id);
    }
});
console.log("Usuarios únicos:", usuariosUnicos);</textarea>
            <button onclick="runCode('code-arr-22')">Ejecutar</button>
            <div class="output" id="output-arr-22"></div>
        </div>

        <hr>

        <h3>23. Agrupar por Propiedad</h3>
        <p>Agrupar elementos por criterio.</p>

        <div class="example">
            <textarea id="code-arr-23" readonly>const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 30 }
];

function agrupar(arr, propiedad) {
    return arr.reduce((grupos, item) => {
        const clave = item[propiedad];
        if (!grupos[clave]) grupos[clave] = [];
        grupos[clave].push(item);
        return grupos;
    }, {});
}

const porEdad = agrupar(personas, "edad");
console.log("Agrupado por edad:", porEdad);</textarea>
            <button onclick="runCode('code-arr-23')">Ejecutar</button>
            <div class="output" id="output-arr-23"></div>
        </div>

        <hr>

        <h3>24. Transposar Matriz</h3>
        <p>Invertir filas y columnas.</p>

        <div class="example">
            <textarea id="code-arr-24" readonly>const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transposar(m) {
    return m[0].map((_, i) => m.map(row => row[i]));
}

const transpuesta = transposar(matriz);
console.log("Original:", matriz);
console.log("Transpuesta:", transpuesta);</textarea>
            <button onclick="runCode('code-arr-24')">Ejecutar</button>
            <div class="output" id="output-arr-24"></div>
        </div>

        <hr>

        <h3>25. Zip (Mezclar Arrays)</h3>
        <p>Combinar elementos de múltiples arrays.</p>

        <div class="example">
            <textarea id="code-arr-25" readonly>function zip(...arrays) {
    const longitud = Math.min(...arrays.map(a => a.length));
    return Array.from({ length: longitud }, (_, i) => 
        arrays.map(a => a[i])
    );
}

const nombres = ["Ana", "Juan", "María"];
const edades = [25, 30, 28];
const ciudades = ["Madrid", "Barcelona", "Valencia"];

const resultado = zip(nombres, edades, ciudades);
console.log("Zipped:", resultado);</textarea>
            <button onclick="runCode('code-arr-25')">Ejecutar</button>
            <div class="output" id="output-arr-25"></div>
        </div>

        <hr>

        <h3>26. Rango de Números</h3>
        <p>Generar arrays de números.</p>

        <div class="example">
            <textarea id="code-arr-26" readonly>function rango(inicio, fin, paso = 1) {
    return Array.from(
        { length: Math.ceil((fin - inicio) / paso) },
        (_, i) => inicio + i * paso
    );
}

console.log("1-5:", rango(1, 5));
console.log("0-20 de 5 en 5:", rango(0, 20, 5));
console.log("0-1 decimales:", rango(0, 1, 0.2));

// Negativo
console.log("10-1:", rango(10, 1, -1));</textarea>
            <button onclick="runCode('code-arr-26')">Ejecutar</button>
            <div class="output" id="output-arr-26"></div>
        </div>

        <hr>

        <h3>27. Chunk (Dividir en Partes)</h3>
        <p>Dividir array en subgrupos.</p>

        <div class="example">
            <textarea id="code-arr-27" readonly>function chunk(arr, size) {
    const resultado = [];
    for (let i = 0; i < arr.length; i += size) {
        resultado.push(arr.slice(i, i + size));
    }
    return resultado;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Chunks de 3:", chunk(arr, 3));
console.log("Chunks de 4:", chunk(arr, 4));

// Paginación
const items = Array.from({ length: 25 }, (_, i) => i + 1);
const paginas = chunk(items, 10);
console.log("Página 1:", paginas[0]);
console.log("Página 2:", paginas[1]);</textarea>
            <button onclick="runCode('code-arr-27')">Ejecutar</button>
            <div class="output" id="output-arr-27"></div>
        </div>

        <hr>

        <h3>28. Diferencia entre Arrays</h3>
        <p>Encontrar elementos diferentes.</p>

        <div class="example">
            <textarea id="code-arr-28" readonly>function diferencia(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}

function interseccion(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

console.log("Diferencia a-b:", diferencia(a, b));
console.log("Diferencia b-a:", diferencia(b, a));
console.log("Intersección:", interseccion(a, b));

// Diferencia simétrica
const simetrica = [
    ...diferencia(a, b),
    ...diferencia(b, a)
];
console.log("Diferencia simétrica:", simetrica);</textarea>
            <button onclick="runCode('code-arr-28')">Ejecutar</button>
            <div class="output" id="output-arr-28"></div>
        </div>

        <hr>

        <h3>29. Shuffle (Mezclar)</h3>
        <p>Ordenar array aleatoriamente.</p>

        <div class="example">
            <textarea id="code-arr-29" readonly>function shuffle(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

const numeros = [1, 2, 3, 4, 5];
console.log("Original:", numeros);
console.log("Shuffle:", shuffle(numeros));
console.log("Shuffle:", shuffle(numeros));</textarea>
            <button onclick="runCode('code-arr-29')">Ejecutar</button>
            <div class="output" id="output-arr-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con arrays.</p>

        <div class="example">
            <textarea id="code-arr-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar métodos HOF (map, filter, reduce)");
console.log("✅ Preferir spread [...arr] para copias");
console.log("✅ Usar Set para eliminar duplicados");
console.log("✅ Array.isArray() para verificar tipo");
console.log("✅ flat() y flatMap() para anidar");
console.log("\\n❌ No mutar arrays con splice en loops");
console.log("❌ Evitar cambiar length directamente");
console.log("\\n✨ Los arrays son ordenados y eficientes");</textarea>
            <button onclick="runCode('code-arr-30')">Ejecutar</button>
            <div class="output" id="output-arr-30"></div>
        </div>

    </section>
`;
