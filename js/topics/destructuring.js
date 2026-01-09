const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Destructuring y Spread/Rest Operators</h2>
        <p>Características de ES6 para trabajar con arrays y objetos de forma más eficiente y legible.</p>

        <h3>1. Destructuring Básico de Objetos</h3>
        <p>Extraer propiedades de objetos en variables.</p>
        
        <div class="example">
            <textarea id="code-dest-1" readonly>const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

// Sin destructuring
const nombre1 = persona.nombre;
const edad1 = persona.edad;

// Con destructuring
const { nombre, edad } = persona;

console.log("Nombre:", nombre);
console.log("Edad:", edad);</textarea>
            <button onclick="runCode('code-dest-1')">Ejecutar</button>
            <div class="output" id="output-dest-1"></div>
        </div>

        <hr>

        <h3>2. Destructuring Básico de Arrays</h3>
        <p>Extraer elementos de arrays por posición.</p>

        <div class="example">
            <textarea id="code-dest-2" readonly>const colores = ["rojo", "verde", "azul", "amarillo"];

// Sin destructuring
const color1 = colores[0];
const color2 = colores[1];

// Con destructuring
const [primero, segundo, tercero] = colores;

console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Tercero:", tercero);</textarea>
            <button onclick="runCode('code-dest-2')">Ejecutar</button>
            <div class="output" id="output-dest-2"></div>
        </div>

        <hr>

        <h3>3. Renombrar Variables</h3>
        <p>Cambiar el nombre de las variables al destructurar objetos.</p>

        <div class="example">
            <textarea id="code-dest-3" readonly>const usuario = {
    nombre: "Luis",
    edad: 30,
    email: "luis@email.com"
};

// Renombrar al destructurar
const { nombre: nombreCompleto, edad: años } = usuario;

console.log("Nombre completo:", nombreCompleto);
console.log("Años:", años);</textarea>
            <button onclick="runCode('code-dest-3')">Ejecutar</button>
            <div class="output" id="output-dest-3"></div>
        </div>

        <hr>

        <h3>4. Valores por Defecto</h3>
        <p>Asignar valores por defecto si la propiedad no existe.</p>

        <div class="example">
            <textarea id="code-dest-4" readonly>const config = {
    host: "localhost"
};

// Sin valor por defecto
const { host, port } = config;
console.log("Sin defecto - port:", port); // undefined

// Con valor por defecto
const { host: h, port: p = 3000 } = config;
console.log("Con defecto - host:", h);
console.log("Con defecto - port:", p);</textarea>
            <button onclick="runCode('code-dest-4')">Ejecutar</button>
            <div class="output" id="output-dest-4"></div>
        </div>

        <hr>

        <h3>5. Destructuring Anidado</h3>
        <p>Extraer propiedades de objetos anidados.</p>

        <div class="example">
            <textarea id="code-dest-5" readonly>const usuario = {
    nombre: "Ana",
    direccion: {
        calle: "Gran Vía",
        ciudad: "Madrid",
        codigo: "28013"
    }
};

// Destructuring anidado
const { nombre, direccion: { ciudad, codigo } } = usuario;

console.log("Nombre:", nombre);
console.log("Ciudad:", ciudad);
console.log("Código:", codigo);</textarea>
            <button onclick="runCode('code-dest-5')">Ejecutar</button>
            <div class="output" id="output-dest-5"></div>
        </div>

        <hr>

        <h3>6. Rest en Destructuring de Objetos</h3>
        <p>Capturar las propiedades restantes en un objeto.</p>

        <div class="example">
            <textarea id="code-dest-6" readonly>const persona = {
    nombre: "Pedro",
    edad: 35,
    ciudad: "Barcelona",
    profesion: "Ingeniero"
};

const { nombre, edad, ...resto } = persona;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Resto:", resto);</textarea>
            <button onclick="runCode('code-dest-6')">Ejecutar</button>
            <div class="output" id="output-dest-6"></div>
        </div>

        <hr>

        <h3>7. Rest en Destructuring de Arrays</h3>
        <p>Capturar los elementos restantes en un array.</p>

        <div class="example">
            <textarea id="code-dest-7" readonly>const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [primero, segundo, ...resto] = numeros;

console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Resto:", resto);
console.log("Cantidad de resto:", resto.length);</textarea>
            <button onclick="runCode('code-dest-7')">Ejecutar</button>
            <div class="output" id="output-dest-7"></div>
        </div>

        <hr>

        <h3>8. Saltar Elementos en Arrays</h3>
        <p>Omitir elementos que no necesitas.</p>

        <div class="example">
            <textarea id="code-dest-8" readonly>const datos = ["Ana", 25, "Madrid", "Ingeniera"];

// Saltar elementos con comas
const [nombre, , ciudad, profesion] = datos;

console.log("Nombre:", nombre);
console.log("Ciudad:", ciudad);
console.log("Profesión:", profesion);</textarea>
            <button onclick="runCode('code-dest-8')">Ejecutar</button>
            <div class="output" id="output-dest-8"></div>
        </div>

        <hr>

        <h3>9. Intercambiar Variables</h3>
        <p>Intercambiar valores sin variable temporal.</p>

        <div class="example">
            <textarea id="code-dest-9" readonly>let a = 10;
let b = 20;

console.log("Antes - a:", a, "b:", b);

// Intercambio usando destructuring
[a, b] = [b, a];

console.log("Después - a:", a, "b:", b);

let x = "primero", y = "segundo", z = "tercero";
[x, y, z] = [z, x, y];
console.log("Rotación:", x, y, z);</textarea>
            <button onclick="runCode('code-dest-9')">Ejecutar</button>
            <div class="output" id="output-dest-9"></div>
        </div>

        <hr>

        <h3>10. Destructuring en Parámetros de Función</h3>
        <p>Extraer propiedades directamente en los parámetros.</p>

        <div class="example">
            <textarea id="code-dest-10" readonly>function mostrarPersona({ nombre, edad, ciudad = "Desconocida" }) {
    console.log(\`\${nombre}, \${edad} años, de \${ciudad}\`);
}

const persona1 = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
const persona2 = { nombre: "Luis", edad: 30 };

mostrarPersona(persona1);
mostrarPersona(persona2);</textarea>
            <button onclick="runCode('code-dest-10')">Ejecutar</button>
            <div class="output" id="output-dest-10"></div>
        </div>

        <hr>

        <h3>11. Spread en Arrays</h3>
        <p>Expandir elementos de un array.</p>

        <div class="example">
            <textarea id="code-dest-11" readonly>const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combinar arrays
const combinado = [...arr1, ...arr2];
console.log("Combinado:", combinado);

// Añadir elementos
const conElementos = [0, ...arr1, 3.5, ...arr2, 7];
console.log("Con elementos:", conElementos);</textarea>
            <button onclick="runCode('code-dest-11')">Ejecutar</button>
            <div class="output" id="output-dest-11"></div>
        </div>

        <hr>

        <h3>12. Spread en Objetos</h3>
        <p>Expandir propiedades de un objeto.</p>

        <div class="example">
            <textarea id="code-dest-12" readonly>const persona = { nombre: "Ana", edad: 25 };
const ubicacion = { ciudad: "Madrid", pais: "España" };

// Combinar objetos
const completo = { ...persona, ...ubicacion };
console.log("Completo:", completo);

// Añadir/sobrescribir propiedades
const actualizado = { ...persona, edad: 26, profesion: "Ingeniera" };
console.log("Actualizado:", actualizado);</textarea>
            <button onclick="runCode('code-dest-12')">Ejecutar</button>
            <div class="output" id="output-dest-12"></div>
        </div>

        <hr>

        <h3>13. Copiar Arrays</h3>
        <p>Crear copias superficiales de arrays.</p>

        <div class="example">
            <textarea id="code-dest-13" readonly>const original = [1, 2, 3, 4, 5];

// Copia con spread
const copia = [...original];

copia.push(6);
copia[0] = 100;

console.log("Original:", original);
console.log("Copia:", copia);
console.log("Son diferentes arrays:", original !== copia);</textarea>
            <button onclick="runCode('code-dest-13')">Ejecutar</button>
            <div class="output" id="output-dest-13"></div>
        </div>

        <hr>

        <h3>14. Copiar Objetos</h3>
        <p>Crear copias superficiales de objetos.</p>

        <div class="example">
            <textarea id="code-dest-14" readonly>const original = { x: 1, y: 2, z: 3 };

// Copia con spread
const copia = { ...original };

copia.x = 100;
copia.w = 4;

console.log("Original:", original);
console.log("Copia:", copia);
console.log("Son diferentes objetos:", original !== copia);</textarea>
            <button onclick="runCode('code-dest-14')">Ejecutar</button>
            <div class="output" id="output-dest-14"></div>
        </div>

        <hr>

        <h3>15. Rest Parameters en Funciones</h3>
        <p>Capturar múltiples argumentos en un array.</p>

        <div class="example">
            <textarea id="code-dest-15" readonly>function sumar(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}

console.log("sumar(1, 2, 3):", sumar(1, 2, 3));
console.log("sumar(10, 20, 30, 40):", sumar(10, 20, 30, 40));

function crear(tipo, ...opciones) {
    console.log("Tipo:", tipo);
    console.log("Opciones:", opciones);
}

crear("usuario", "admin", "activo", "verificado");</textarea>
            <button onclick="runCode('code-dest-15')">Ejecutar</button>
            <div class="output" id="output-dest-15"></div>
        </div>

        <hr>

        <h3>16. Spread en Llamadas a Funciones</h3>
        <p>Pasar elementos de un array como argumentos individuales.</p>

        <div class="example">
            <textarea id="code-dest-16" readonly>function multiplicar(a, b, c) {
    return a * b * c;
}

const numeros = [2, 3, 4];

// Sin spread
console.log("Sin spread:", multiplicar(numeros[0], numeros[1], numeros[2]));

// Con spread
console.log("Con spread:", multiplicar(...numeros));

const valores = [5, 10, 15, 20];
console.log("Math.max:", Math.max(...valores));</textarea>
            <button onclick="runCode('code-dest-16')">Ejecutar</button>
            <div class="output" id="output-dest-16"></div>
        </div>

        <hr>

        <h3>17. Conversión de String a Array</h3>
        <p>Spread convierte strings en arrays de caracteres.</p>

        <div class="example">
            <textarea id="code-dest-17" readonly>const texto = "Hola";

const caracteres = [...texto];
console.log("Caracteres:", caracteres);

const palabra = "JavaScript";
const letras = [...palabra];
console.log("Letras:", letras);
console.log("Cantidad:", letras.length);</textarea>
            <button onclick="runCode('code-dest-17')">Ejecutar</button>
            <div class="output" id="output-dest-17"></div>
        </div>

        <hr>

        <h3>18. Spread con Sets y Maps</h3>
        <p>Convertir Sets y Maps a arrays.</p>

        <div class="example">
            <textarea id="code-dest-18" readonly>const set = new Set([1, 2, 3, 4, 5]);
const arrayDeSet = [...set];
console.log("Array de Set:", arrayDeSet);

// Eliminar duplicados de un array
const conDuplicados = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const sinDuplicados = [...new Set(conDuplicados)];
console.log("Sin duplicados:", sinDuplicados);</textarea>
            <button onclick="runCode('code-dest-18')">Ejecutar</button>
            <div class="output" id="output-dest-18"></div>
        </div>

        <hr>

        <h3>19. Merge de Objetos con Sobrescritura</h3>
        <p>Combinar objetos donde las últimas propiedades sobrescriben.</p>

        <div class="example">
            <textarea id="code-dest-19" readonly>const defecto = {
    color: "azul",
    tamano: "mediano",
    visible: true
};

const custom = {
    color: "rojo",
    posicion: "arriba"
};

const final = { ...defecto, ...custom };
console.log("Final:", final);
console.log("color fue sobrescrito a:", final.color);</textarea>
            <button onclick="runCode('code-dest-19')">Ejecutar</button>
            <div class="output" id="output-dest-19"></div>
        </div>

        <hr>

        <h3>20. Destructuring con Computed Properties</h3>
        <p>Usar variables como nombres de propiedades.</p>

        <div class="example">
            <textarea id="code-dest-20" readonly>const clave = "nombre";
const objeto = { nombre: "Ana", edad: 25 };

// Computed property names
const { [clave]: valor } = objeto;
console.log("Valor de", clave + ":", valor);

const prop = "edad";
const { [prop]: años } = objeto;
console.log("Años:", años);</textarea>
            <button onclick="runCode('code-dest-20')">Ejecutar</button>
            <div class="output" id="output-dest-20"></div>
        </div>

        <hr>

        <h3>21. Retornar Múltiples Valores</h3>
        <p>Funciones que retornan múltiples valores usando arrays u objetos.</p>

        <div class="example">
            <textarea id="code-dest-21" readonly>function obtenerCoordenadas() {
    return [10, 20];
}

const [x, y] = obtenerCoordenadas();
console.log("x:", x, "y:", y);

function obtenerUsuario() {
    return { nombre: "Ana", edad: 25, ciudad: "Madrid" };
}

const { nombre, edad } = obtenerUsuario();
console.log("Usuario:", nombre, edad);</textarea>
            <button onclick="runCode('code-dest-21')">Ejecutar</button>
            <div class="output" id="output-dest-21"></div>
        </div>

        <hr>

        <h3>22. Destructuring en Loops</h3>
        <p>Usar destructuring en bucles for...of.</p>

        <div class="example">
            <textarea id="code-dest-22" readonly>const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Pedro", edad: 35 }
];

for (const { nombre, edad } of usuarios) {
    console.log(\`\${nombre}: \${edad} años\`);
}

const puntos = [[0, 0], [10, 20], [30, 40]];
for (const [x, y] of puntos) {
    console.log(\`Punto: (\${x}, \${y})\`);
}</textarea>
            <button onclick="runCode('code-dest-22')">Ejecutar</button>
            <div class="output" id="output-dest-22"></div>
        </div>

        <hr>

        <h3>23. Spread con NodeList</h3>
        <p>Convertir NodeList (resultado de querySelectorAll) a array.</p>

        <div class="example">
            <textarea id="code-dest-23" readonly>// Simulación de NodeList
const nodeList = {
    0: "elemento1",
    1: "elemento2",
    2: "elemento3",
    length: 3
};

// Convertir a array
const arrayDeNodos = Array.from(nodeList);
console.log("Array de nodos:", arrayDeNodos);

console.log("\\nEn el DOM real:");
console.log("const divs = [...document.querySelectorAll('div')];");</textarea>
            <button onclick="runCode('code-dest-23')">Ejecutar</button>
            <div class="output" id="output-dest-23"></div>
        </div>

        <hr>

        <h3>24. Inmutabilidad con Spread</h3>
        <p>Actualizar arrays y objetos de forma inmutable.</p>

        <div class="example">
            <textarea id="code-dest-24" readonly>const original = [1, 2, 3, 4, 5];

// Añadir al inicio
const conInicio = [0, ...original];

// Añadir al final
const conFinal = [...original, 6];

// Reemplazar elemento en índice 2
const reemplazado = [...original.slice(0, 2), 999, ...original.slice(3)];

console.log("Original:", original);
console.log("Con inicio:", conInicio);
console.log("Con final:", conFinal);
console.log("Reemplazado:", reemplazado);</textarea>
            <button onclick="runCode('code-dest-24')">Ejecutar</button>
            <div class="output" id="output-dest-24"></div>
        </div>

        <hr>

        <h3>25. Concatenar Arrays Anidados</h3>
        <p>Aplanar un nivel de arrays anidados.</p>

        <div class="example">
            <textarea id="code-dest-25" readonly>const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const concatenado = [...array1, ...array2, ...array3];
console.log("Concatenado:", concatenado);

const anidado = [[1, 2], [3, 4], [5, 6]];
const plano = [].concat(...anidado);
console.log("Plano:", plano);</textarea>
            <button onclick="runCode('code-dest-25')">Ejecutar</button>
            <div class="output" id="output-dest-25"></div>
        </div>

        <hr>

        <h3>26. Partial Application</h3>
        <p>Aplicar parcialmente argumentos a funciones.</p>

        <div class="example">
            <textarea id="code-dest-26" readonly>function multiplicar(a, b, c) {
    return a * b * c;
}

const args1 = [2];
const args2 = [3, 4];

const resultado = multiplicar(...args1, ...args2);
console.log("Resultado:", resultado);

function saludar(saludo, nombre, puntuacion) {
    return \`\${saludo}, \${nombre}\${puntuacion}\`;
}

const partes = ["Hola"];
console.log(saludar(...partes, "Ana", "!"));</textarea>
            <button onclick="runCode('code-dest-26')">Ejecutar</button>
            <div class="output" id="output-dest-26"></div>
        </div>

        <hr>

        <h3>27. Extraer Propiedades Específicas</h3>
        <p>Crear nuevos objetos con solo algunas propiedades.</p>

        <div class="example">
            <textarea id="code-dest-27" readonly>const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    profesion: "Ingeniera",
    email: "ana@email.com"
};

// Extraer solo nombre y email
const { nombre, email } = persona;
const contacto = { nombre, email };

console.log("Contacto:", contacto);

// Excluir propiedades
const { profesion, ...sinProfesion } = persona;
console.log("Sin profesión:", sinProfesion);</textarea>
            <button onclick="runCode('code-dest-27')">Ejecutar</button>
            <div class="output" id="output-dest-27"></div>
        </div>

        <hr>

        <h3>28. Array Destructuring con Default</h3>
        <p>Valores por defecto en destructuring de arrays.</p>

        <div class="example">
            <textarea id="code-dest-28" readonly>const colores = ["rojo"];

// Sin default
const [c1, c2] = colores;
console.log("c1:", c1, "c2:", c2); // c2 es undefined

// Con default
const [color1, color2 = "azul", color3 = "verde"] = colores;
console.log("color1:", color1);
console.log("color2:", color2);
console.log("color3:", color3);</textarea>
            <button onclick="runCode('code-dest-28')">Ejecutar</button>
            <div class="output" id="output-dest-28"></div>
        </div>

        <hr>

        <h3>29. Destructuring con RegExp</h3>
        <p>Extraer grupos de captura de expresiones regulares.</p>

        <div class="example">
            <textarea id="code-dest-29" readonly>const texto = "Juan tiene 25 años";
const patron = /(\\w+) tiene (\\d+) años/;

const resultado = texto.match(patron);
console.log("Match completo:", resultado);

// Destructuring del resultado
const [, nombre, edad] = resultado;
console.log("Nombre:", nombre);
console.log("Edad:", edad);</textarea>
            <button onclick="runCode('code-dest-29')">Ejecutar</button>
            <div class="output" id="output-dest-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con destructuring y spread/rest.</p>

        <div class="example">
            <textarea id="code-dest-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar destructuring para extraer propiedades");
const { nombre } = { nombre: "Ana", edad: 25 };

console.log("✅ Usar spread para copiar arrays/objetos");
const original = [1, 2, 3];
const copia = [...original];

console.log("✅ Usar rest para capturar múltiples args");
const sumar = (...nums) => nums.reduce((a, b) => a + b, 0);

console.log("✅ Valores por defecto en destructuring");
const { port = 3000 } = {};

console.log("\\n❌ No abusar de destructuring profundo");
console.log("❌ Spread es copia superficial, no profunda");

console.log("\\n✨ Hace el código más limpio y declarativo");</textarea>
            <button onclick="runCode('code-dest-30')">Ejecutar</button>
            <div class="output" id="output-dest-30"></div>
        </div>

    </section>
`;
