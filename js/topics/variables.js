const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Variables, Constantes y Tipos de Datos</h2>
        <p>En JavaScript, usamos variables para guardar información que podemos usar y cambiar más adelante.</p>

        <h3>1. Variables con <code>let</code></h3>
        <p>Imagina que una variable es como una caja donde puedes guardar algo. Puedes ponerle una etiqueta (el nombre de la variable) para saber qué hay dentro.</p>
        <p><code>let</code> es la forma moderna y recomendada de crear variables que pueden cambiar de valor.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Crea una variable para tu edad y luego cámbiala.</p>
            <textarea id="code-vars-1" readonly>let miEdad = 10;
console.log("Mi edad es:", miEdad);

// El próximo año, tendrás un año más.
miEdad = 11;
console.log("Ahora mi edad es:", miEdad);</textarea>
            <button onclick="runCode('code-vars-1')">Ejecutar</button>
            <div class="output" id="output-vars-1"></div>
        </div>

        <hr>

        <h3>2. Constantes con <code>const</code></h3>
        <p>Una constante es como una caja que, una vez que guardas algo en ella, no puedes cambiarlo. Es útil para valores que no deben cambiar, como tu fecha de nacimiento.</p>

        <div class="example">
            <p><strong>Ejemplo:</strong> Guarda el número de planetas en el sistema solar.</p>
            <textarea id="code-vars-2" readonly>const numeroDePlanetas = 8;
console.log("Planetas en el sistema solar:", numeroDePlanetas);

// Intenta cambiarlo (esto dará un error)
try {
    numeroDePlanetas = 9;
} catch (error) {
    console.log("¡Error! No puedes cambiar una constante:", error.message);
}</textarea>
            <button onclick="runCode('code-vars-2')">Ejecutar</button>
            <div class="output" id="output-vars-2"></div>
        </div>

        <hr>

        <h3>3. Tipos de Datos: Number (Números)</h3>
        <p>Los números pueden ser enteros o decimales.</p>

        <div class="example">
            <textarea id="code-vars-3" readonly>let entero = 42;
let decimal = 3.14;
let negativo = -7;

console.log("Número entero:", entero);
console.log("Número decimal:", decimal);
console.log("Número negativo:", negativo);</textarea>
            <button onclick="runCode('code-vars-3')">Ejecutar</button>
            <div class="output" id="output-vars-3"></div>
        </div>

        <hr>

        <h3>4. Tipos de Datos: String (Texto)</h3>
        <p>Los strings son secuencias de caracteres. Pueden usar comillas simples, dobles o backticks.</p>

        <div class="example">
            <textarea id="code-vars-4" readonly>let nombre = "Ana";
let apellido = 'García';
let saludo = \`Hola, \${nombre} \${apellido}!\`;

console.log(nombre);
console.log(apellido);
console.log(saludo);</textarea>
            <button onclick="runCode('code-vars-4')">Ejecutar</button>
            <div class="output" id="output-vars-4"></div>
        </div>

        <hr>

        <h3>5. Tipos de Datos: Boolean (Verdadero/Falso)</h3>
        <p>Los booleanos solo tienen dos valores posibles: <code>true</code> o <code>false</code>.</p>

        <div class="example">
            <textarea id="code-vars-5" readonly>let esMayorDeEdad = true;
let tienePermiso = false;

console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("¿Tiene permiso?", tienePermiso);</textarea>
            <button onclick="runCode('code-vars-5')">Ejecutar</button>
            <div class="output" id="output-vars-5"></div>
        </div>

        <hr>

        <h3>6. Tipos de Datos: null y undefined</h3>
        <p><code>null</code> representa la ausencia intencional de valor. <code>undefined</code> significa que la variable fue declarada pero no tiene valor asignado.</p>

        <div class="example">
            <textarea id="code-vars-6" readonly>let sinValor;
let valorNulo = null;

console.log("Variable sin asignar:", sinValor);
console.log("Variable con null:", valorNulo);
console.log("Tipo de undefined:", typeof sinValor);
console.log("Tipo de null:", typeof valorNulo);</textarea>
            <button onclick="runCode('code-vars-6')">Ejecutar</button>
            <div class="output" id="output-vars-6"></div>
        </div>

        <hr>

        <h3>7. Operador typeof</h3>
        <p>El operador <code>typeof</code> nos dice qué tipo de dato tiene una variable.</p>

        <div class="example">
            <textarea id="code-vars-7" readonly>console.log(typeof 42);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // ¡Cuidado! Esto retorna "object" (es un bug histórico)
console.log(typeof {nombre: "Juan"}); // Objeto
console.log(typeof [1, 2, 3]); // Array (también es "object")</textarea>
            <button onclick="runCode('code-vars-7')">Ejecutar</button>
            <div class="output" id="output-vars-7"></div>
        </div>

        <hr>

        <h3>8. Concatenación de Strings</h3>
        <p>Podemos unir strings usando el operador <code>+</code>.</p>

        <div class="example">
            <textarea id="code-vars-8" readonly>let nombre = "Carlos";
let edad = 25;
let mensaje = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";

console.log(mensaje);</textarea>
            <button onclick="runCode('code-vars-8')">Ejecutar</button>
            <div class="output" id="output-vars-8"></div>
        </div>

        <hr>

        <h3>9. Template Literals (Plantillas de Texto)</h3>
        <p>Con backticks (\`) podemos crear strings más fáciles de leer usando <code>\${}</code> para insertar variables.</p>

        <div class="example">
            <textarea id="code-vars-9" readonly>let producto = "laptop";
let precio = 999;
let mensaje = \`El precio de tu \${producto} es $\${precio}.\`;

console.log(mensaje);</textarea>
            <button onclick="runCode('code-vars-9')">Ejecutar</button>
            <div class="output" id="output-vars-9"></div>
        </div>

        <hr>

        <h3>10. Conversión de Tipos: String a Number</h3>
        <p>Podemos convertir un string a número usando <code>Number()</code> o <code>parseInt()</code>.</p>

        <div class="example">
            <textarea id="code-vars-10" readonly>let textoNumero = "123";
let numero = Number(textoNumero);

console.log("Tipo original:", typeof textoNumero);
console.log("Valor:", textoNumero);
console.log("Tipo convertido:", typeof numero);
console.log("Valor:", numero);
console.log("Suma: 123 + 100 =", numero + 100);</textarea>
            <button onclick="runCode('code-vars-10')">Ejecutar</button>
            <div class="output" id="output-vars-10"></div>
        </div>

        <hr>

        <h3>11. Conversión de Tipos: Number a String</h3>
        <p>Podemos convertir un número a string usando <code>String()</code> o el método <code>.toString()</code>.</p>

        <div class="example">
            <textarea id="code-vars-11" readonly>let numero = 456;
let textoNumero = String(numero);

console.log("Tipo original:", typeof numero);
console.log("Tipo convertido:", typeof textoNumero);
console.log("Concatenación:", textoNumero + " es mi número favorito");</textarea>
            <button onclick="runCode('code-vars-11')">Ejecutar</button>
            <div class="output" id="output-vars-11"></div>
        </div>

        <hr>

        <h3>12. NaN (Not a Number)</h3>
        <p><code>NaN</code> es un valor especial que representa algo que "no es un número" tras una operación fallida.</p>

        <div class="example">
            <textarea id="code-vars-12" readonly>let resultado = Number("abc");
console.log("Resultado:", resultado);
console.log("¿Es NaN?", isNaN(resultado));

let operacion = 10 / "texto";
console.log("10 / 'texto' =", operacion);
console.log("¿Es NaN?", isNaN(operacion));</textarea>
            <button onclick="runCode('code-vars-12')">Ejecutar</button>
            <div class="output" id="output-vars-12"></div>
        </div>

        <hr>

        <h3>13. Variables sin Declarar vs undefined</h3>
        <p>Usar una variable sin declararla causa un error. Declararla sin asignarle valor la hace <code>undefined</code>.</p>

        <div class="example">
            <textarea id="code-vars-13" readonly>let declarada;
console.log("Variable declarada sin valor:", declarada);

try {
    console.log(noDeclarada); // Esto causará un error
} catch (error) {
    console.log("Error:", error.message);
}</textarea>
            <button onclick="runCode('code-vars-13')">Ejecutar</button>
            <div class="output" id="output-vars-13"></div>
        </div>

        <hr>

        <h3>14. Reasignación de Variables let</h3>
        <p>Con <code>let</code> podemos cambiar el valor de una variable cuantas veces queramos.</p>

        <div class="example">
            <textarea id="code-vars-14" readonly>let puntos = 0;
console.log("Puntos iniciales:", puntos);

puntos = 10;
console.log("Después de ganar:", puntos);

puntos = puntos + 5;
console.log("Después de un bonus:", puntos);

puntos += 3; // Forma abreviada
console.log("Puntos finales:", puntos);</textarea>
            <button onclick="runCode('code-vars-14')">Ejecutar</button>
            <div class="output" id="output-vars-14"></div>
        </div>

        <hr>

        <h3>15. Incremento y Decremento</h3>
        <p>Los operadores <code>++</code> y <code>--</code> aumentan o disminuyen un valor en 1.</p>

        <div class="example">
            <textarea id="code-vars-15" readonly>let contador = 5;
console.log("Contador inicial:", contador);

contador++;
console.log("Después de ++:", contador);

contador--;
console.log("Después de --:", contador);</textarea>
            <button onclick="runCode('code-vars-15')">Ejecutar</button>
            <div class="output" id="output-vars-15"></div>
        </div>

        <hr>

        <h3>16. Scope Global vs Local</h3>
        <p>Las variables declaradas fuera de funciones son globales. Las de dentro son locales.</p>

        <div class="example">
            <textarea id="code-vars-16" readonly>let global = "Soy global";

function miFuncion() {
    let local = "Soy local";
    console.log("Dentro de la función:");
    console.log("- Acceso a global:", global);
    console.log("- Acceso a local:", local);
}

miFuncion();

console.log("Fuera de la función:");
console.log("- Acceso a global:", global);

try {
    console.log("- Acceso a local:", local);
} catch (error) {
    console.log("- Error al acceder a local:", error.message);
}</textarea>
            <button onclick="runCode('code-vars-16')">Ejecutar</button>
            <div class="output" id="output-vars-16"></div>
        </div>

        <hr>

        <h3>17. const con Objetos</h3>
        <p><code>const</code> evita reasignar la variable, pero SI podemos modificar las propiedades de un objeto.</p>

        <div class="example">
            <textarea id="code-vars-17" readonly>const persona = {
    nombre: "María",
    edad: 30
};

console.log("Persona original:", persona);

// Podemos modificar propiedades
persona.edad = 31;
console.log("Después de cambiar edad:", persona);

// Pero NO podemos reasignar el objeto completo
try {
    persona = { nombre: "Juan" };
} catch (error) {
    console.log("Error al reasignar:", error.message);
}</textarea>
            <button onclick="runCode('code-vars-17')">Ejecutar</button>
            <div class="output" id="output-vars-17"></div>
        </div>

        <hr>

        <h3>18. const con Arrays</h3>
        <p>Lo mismo aplica a los arrays: no podemos reasignar, pero sí modificar su contenido.</p>

        <div class="example">
            <textarea id="code-vars-18" readonly>const colores = ["rojo", "azul"];
console.log("Array original:", colores);

// Podemos añadir elementos
colores.push("verde");
console.log("Después de push:", colores);

// Pero NO podemos reasignar
try {
    colores = ["amarillo"];
} catch (error) {
    console.log("Error al reasignar:", error.message);
}</textarea>
            <button onclick="runCode('code-vars-18')">Ejecutar</button>
            <div class="output" id="output-vars-18"></div>
        </div>

        <hr>

        <h3>19. Nombres de Variables: Buenas Prácticas</h3>
        <p>Los nombres deben ser descriptivos y seguir convenciones (camelCase para variables).</p>

        <div class="example">
            <textarea id="code-vars-19" readonly>// ✅ Buenos nombres
let nombreCompleto = "Juan Pérez";
let edadUsuario = 25;
let estaActivo = true;

// ❌ Malos nombres
let x = "Juan Pérez"; // No descriptivo
let n1 = 25; // Ambiguo
let a = true; // Confuso

console.log("Buenos nombres son más fáciles de entender:");
console.log("Nombre:", nombreCompleto);
console.log("Edad:", edadUsuario);
console.log("¿Activo?", estaActivo);</textarea>
            <button onclick="runCode('code-vars-19')">Ejecutar</button>
            <div class="output" id="output-vars-19"></div>
        </div>

        <hr>

        <h3>20. Operaciones Matemáticas Básicas</h3>
        <p>JavaScript puede hacer operaciones matemáticas con números.</p>

        <div class="example">
            <textarea id="code-vars-20" readonly>let a = 10;
let b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Potencia:", a ** b);</textarea>
            <button onclick="runCode('code-vars-20')">Ejecutar</button>
            <div class="output" id="output-vars-20"></div>
        </div>

        <hr>

        <h3>21. Comparación de Valores</h3>
        <p>Podemos comparar valores usando operadores de comparación.</p>

        <div class="example">
            <textarea id="code-vars-21" readonly>let x = 5;
let y = 10;
let z = "5";

console.log("x == z (igualdad débil):", x == z); // true (convierte tipos)
console.log("x === z (igualdad estricta):", x === z); // false (compara tipo y valor)
console.log("x != y:", x != y);
console.log("x < y:", x < y);
console.log("x > y:", x > y);
console.log("x <= 5:", x <= 5);
console.log("y >= 10:", y >= 10);</textarea>
            <button onclick="runCode('code-vars-21')">Ejecutar</button>
            <div class="output" id="output-vars-21"></div>
        </div>

        <hr>

        <h3>22. Operadores Lógicos</h3>
        <p>Los operadores lógicos combinan condiciones booleanas.</p>

        <div class="example">
            <textarea id="code-vars-22" readonly>let tieneLicencia = true;
let esMayorDeEdad = true;
let tieneAuto = false;

console.log("¿Puede conducir? (licencia Y mayor de edad):", 
    tieneLicencia && esMayorDeEdad);

console.log("¿Necesita transporte? (NO tiene auto):", 
    !tieneAuto);

console.log("¿Puede ir en auto? (tiene auto O tiene licencia):", 
    tieneAuto || tieneLicencia);</textarea>
            <button onclick="runCode('code-vars-22')">Ejecutar</button>
            <div class="output" id="output-vars-22"></div>
        </div>

        <hr>

        <h3>23. Valores Truthy y Falsy</h3>
        <p>En JavaScript, algunos valores se consideran "falsos" en contextos booleanos.</p>

        <div class="example">
            <textarea id="code-vars-23" readonly>// Valores Falsy: false, 0, "", null, undefined, NaN
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));

// Cualquier otro valor es Truthy
console.log("Boolean(1):", Boolean(1));
console.log("Boolean('hola'):", Boolean("hola"));
console.log("Boolean([]):", Boolean([]));</textarea>
            <button onclick="runCode('code-vars-23')">Ejecutar</button>
            <div class="output" id="output-vars-23"></div>
        </div>

        <hr>

        <h3>24. Operador Ternario</h3>
        <p>Una forma abreviada de escribir un <code>if-else</code> en una sola línea.</p>

        <div class="example">
            <textarea id="code-vars-24" readonly>let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje);

let puntos = 85;
let calificacion = puntos >= 90 ? "A" : puntos >= 80 ? "B" : "C";
console.log("Calificación:", calificacion);</textarea>
            <button onclick="runCode('code-vars-24')">Ejecutar</button>
            <div class="output" id="output-vars-24"></div>
        </div>

        <hr>

        <h3>25. Valores por Defecto con OR</h3>
        <p>Podemos usar <code>||</code> para asignar valores por defecto.</p>

        <div class="example">
            <textarea id="code-vars-25" readonly>let nombreUsuario;
let nombreMostrar = nombreUsuario || "Invitado";

console.log("Nombre a mostrar:", nombreMostrar);

let config = null;
let modoOscuro = config || false;
console.log("Modo oscuro:", modoOscuro);</textarea>
            <button onclick="runCode('code-vars-25')">Ejecutar</button>
            <div class="output" id="output-vars-25"></div>
        </div>

        <hr>

        <h3>26. Nullish Coalescing (??)</h3>
        <p>Similar a <code>||</code>, pero solo verifica <code>null</code> o <code>undefined</code>.</p>

        <div class="example">
            <textarea id="code-vars-26" readonly>let valor1 = 0;
let valor2 = null;

// Con ||, 0 es considerado falsy
console.log("valor1 || 100:", valor1 || 100); // 100

// Con ??, 0 es un valor válido
console.log("valor1 ?? 100:", valor1 ?? 100); // 0

console.log("valor2 ?? 'sin valor':", valor2 ?? "sin valor");</textarea>
            <button onclick="runCode('code-vars-26')">Ejecutar</button>
            <div class="output" id="output-vars-26"></div>
        </div>

        <hr>

        <h3>27. Destructuración de Objetos</h3>
        <p>Podemos extraer propiedades de un objeto de forma rápida.</p>

        <div class="example">
            <textarea id="code-vars-27" readonly>const usuario = {
    nombre: "Laura",
    edad: 28,
    ciudad: "Madrid"
};

// Forma tradicional
const nombreTradicional = usuario.nombre;
console.log("Tradicional:", nombreTradicional);

// Destructuración
const { nombre, edad, ciudad } = usuario;
console.log("Con destructuración:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);</textarea>
            <button onclick="runCode('code-vars-27')">Ejecutar</button>
            <div class="output" id="output-vars-27"></div>
        </div>

        <hr>

        <h3>28. Destructuración de Arrays</h3>
        <p>También podemos destructurar arrays para obtener sus elementos.</p>

        <div class="example">
            <textarea id="code-vars-28" readonly>const colores = ["rojo", "verde", "azul"];

// Destructuración
const [primero, segundo, tercero] = colores;

console.log("Primer color:", primero);
console.log("Segundo color:", segundo);
console.log("Tercer color:", tercero);

// Podemos omitir elementos
const [, , ultimoColor] = colores;
console.log("Solo el último:", ultimoColor);</textarea>
            <button onclick="runCode('code-vars-28')">Ejecutar</button>
            <div class="output" id="output-vars-28"></div>
        </div>

        <hr>

        <h3>29. Intercambiar Variables</h3>
        <p>Con destructuración, intercambiar valores es muy fácil.</p>

        <div class="example">
            <textarea id="code-vars-29" readonly>let a = 5;
let b = 10;

console.log("Antes del intercambio:");
console.log("a =", a);
console.log("b =", b);

// Intercambio usando destructuración
[a, b] = [b, a];

console.log("Después del intercambio:");
console.log("a =", a);
console.log("b =", b);</textarea>
            <button onclick="runCode('code-vars-29')">Ejecutar</button>
            <div class="output" id="output-vars-29"></div>
        </div>

        <hr>

        <h3>30. Propiedades Dinámicas de Objetos</h3>
        <p>Podemos acceder a propiedades de objetos usando variables con notación de corchetes.</p>

        <div class="example">
            <textarea id="code-vars-30" readonly>const configuraciones = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true
};

function obtenerConfig(clave) {
    // Usamos la variable 'clave' para acceder a la propiedad
    const valor = configuraciones[clave];
    
    if (valor === undefined) {
        return \`La configuración '\${clave}' no existe.\`;
    }
    
    return \`\${clave}: \${valor}\`;
}

console.log(obtenerConfig("tema"));
console.log(obtenerConfig("idioma"));
console.log(obtenerConfig("volumen")); // No existe</textarea>
            <button onclick="runCode('code-vars-30')">Ejecutar</button>
            <div class="output" id="output-vars-30"></div>
        </div>

    </section>
`;
