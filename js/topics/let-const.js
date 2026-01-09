const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>let, const y diferencias con var</h2>
        <p>ES6 introdujo <code>let</code> y <code>const</code> como nuevas formas de declarar variables, mejorando el antiguo <code>var</code>.</p>

        <h3>1. let - Alcance de Bloque Básico</h3>
        <p><code>let</code> crea variables con alcance de bloque, solo existen dentro del bloque donde se definen.</p>
        
        <div class="example">
            <textarea id="code-let-1" readonly>let x = 10;

if (true) {
    let y = 20;
    console.log("Dentro del bloque, x:", x);
    console.log("Dentro del bloque, y:", y);
}

console.log("Fuera del bloque, x:", x);

try {
    console.log("Fuera del bloque, y:", y);
} catch(e) {
    console.log("Error: y no existe fuera del bloque");
}</textarea>
            <button onclick="runCode('code-let-1')">Ejecutar</button>
            <div class="output" id="output-let-1"></div>
        </div>

        <hr>

        <h3>2. const - Constantes</h3>
        <p><code>const</code> crea constantes que no pueden ser reasignadas.</p>

        <div class="example">
            <textarea id="code-let-2" readonly>const PI = 3.14159;
console.log("PI:", PI);

try {
    PI = 3.14; // Error
} catch (e) {
    console.log("Error: No se puede reasignar una constante");
}

const nombre = "Ana";
console.log("Nombre:", nombre);</textarea>
            <button onclick="runCode('code-let-2')">Ejecutar</button>
            <div class="output" id="output-let-2"></div>
        </div>

        <hr>

        <h3>3. var vs let en Bucles</h3>
        <p><code>var</code> tiene alcance de función, <code>let</code> tiene alcance de bloque.</p>

        <div class="example">
            <textarea id="code-let-3" readonly>console.log("Con var:");
for (var i = 0; i < 3; i++) {
    console.log("Dentro:", i);
}
console.log("Fuera del bucle, i:", i); // i es accesible

console.log("\\nCon let:");
for (let j = 0; j < 3; j++) {
    console.log("Dentro:", j);
}

try {
    console.log("Fuera del bucle, j:", j);
} catch(e) {
    console.log("j no es accesible fuera del bucle");
}</textarea>
            <button onclick="runCode('code-let-3')">Ejecutar</button>
            <div class="output" id="output-let-3"></div>
        </div>

        <hr>

        <h3>4. Zona Muerta Temporal (TDZ)</h3>
        <p><code>let</code> y <code>const</code> tienen una zona muerta temporal antes de su declaración.</p>

        <div class="example">
            <textarea id="code-let-4" readonly>try {
    console.log(miLet); // TDZ
} catch (e) {
    console.log("Error con let:", e.message);
}
let miLet = "Declarado";

console.log("\\nCon var (hoisting):");
console.log("miVar antes de declarar:", miVar);
var miVar = "Declarado";
console.log("miVar después:", miVar);</textarea>
            <button onclick="runCode('code-let-4')">Ejecutar</button>
            <div class="output" id="output-let-4"></div>
        </div>

        <hr>

        <h3>5. const con Objetos</h3>
        <p><code>const</code> no permite reasignación, pero sí modificar propiedades de objetos.</p>

        <div class="example">
            <textarea id="code-let-5" readonly>const persona = { nombre: "Ana", edad: 25 };
console.log("Persona:", persona);

// Podemos modificar propiedades
persona.edad = 26;
persona.ciudad = "Madrid";
console.log("Persona modificada:", persona);

// Pero no podemos reasignar
try {
    persona = { nombre: "Luis" };
} catch (e) {
    console.log("Error: No se puede reasignar");
}</textarea>
            <button onclick="runCode('code-let-5')">Ejecutar</button>
            <div class="output" id="output-let-5"></div>
        </div>

        <hr>

        <h3>6. const con Arrays</h3>
        <p>Similar a objetos, puedes modificar el contenido de un array const.</p>

        <div class="example">
            <textarea id="code-let-6" readonly>const numeros = [1, 2, 3];
console.log("Array original:", numeros);

numeros.push(4);
numeros[0] = 10;
console.log("Array modificado:", numeros);

try {
    numeros = [5, 6, 7];
} catch (e) {
    console.log("Error: No se puede reasignar el array");
}</textarea>
            <button onclick="runCode('code-let-6')">Ejecutar</button>
            <div class="output" id="output-let-6"></div>
        </div>

        <hr>

        <h3>7. Bloques Arbitrarios</h3>
        <p>Puedes crear bloques con llaves para limitar el alcance de let/const.</p>

        <div class="example">
            <textarea id="code-let-7" readonly>{
    let bloqueA = "Bloque A";
    console.log("Dentro del bloque A:", bloqueA);
}

{
    let bloqueB = "Bloque B";
    console.log("Dentro del bloque B:", bloqueB);
}

try {
    console.log(bloqueA);
} catch (e) {
    console.log("bloqueA no existe fuera de su bloque");
}</textarea>
            <button onclick="runCode('code-let-7')">Ejecutar</button>
            <div class="output" id="output-let-7"></div>
        </div>

        <hr>

        <h3>8. let en switch</h3>
        <p><code>let</code> en switch requiere bloques para evitar conflictos.</p>

        <div class="example">
            <textarea id="code-let-8" readonly>const opcion = 1;

switch (opcion) {
    case 1: {
        let mensaje = "Opción uno";
        console.log(mensaje);
        break;
    }
    case 2: {
        let mensaje = "Opción dos"; // Sin error
        console.log(mensaje);
        break;
    }
    default:
        console.log("Otra opción");
}</textarea>
            <button onclick="runCode('code-let-8')">Ejecutar</button>
            <div class="output" id="output-let-8"></div>
        </div>

        <hr>

        <h3>9. Redeclaración</h3>
        <p><code>var</code> permite redeclaración, <code>let</code> y <code>const</code> no.</p>

        <div class="example">
            <textarea id="code-let-9" readonly>var x = 1;
var x = 2; // Permitido con var
console.log("var x:", x);

let y = 1;
try {
    // let y = 2; // Esto causaría error
    console.log("No se puede redeclarar let");
} catch (e) {
    console.log("Error de redeclaración");
}

console.log("let y:", y);</textarea>
            <button onclick="runCode('code-let-9')">Ejecutar</button>
            <div class="output" id="output-let-9"></div>
        </div>

        <hr>

        <h3>10. Alcance Global</h3>
        <p><code>var</code> en el alcance global se añade a window, <code>let</code> y <code>const</code> no.</p>

        <div class="example">
            <textarea id="code-let-10" readonly>// En alcance global (simulado en función)
(function() {
    var globalVar = "var global";
    let globalLet = "let global";
    
    console.log("globalVar:", globalVar);
    console.log("globalLet:", globalLet);
    
    console.log("\\nvar crea propiedad en el objeto contenedor");
    console.log("let/const NO crean propiedades globales");
})();</textarea>
            <button onclick="runCode('code-let-10')">Ejecutar</button>
            <div class="output" id="output-let-10"></div>
        </div>

        <hr>

        <h3>11. Closures con let vs var</h3>
        <p><code>let</code> crea una nueva binding en cada iteración, <code>var</code> no.</p>

        <div class="example">
            <textarea id="code-let-11" readonly>console.log("Con var:");
var funcionesVar = [];
for (var i = 0; i < 3; i++) {
    funcionesVar.push(function() { return i; });
}
funcionesVar.forEach((fn, idx) => console.log(\`fn\${idx}():\`, fn()));

console.log("\\nCon let:");
let funcionesLet = [];
for (let j = 0; j < 3; j++) {
    funcionesLet.push(function() { return j; });
}
funcionesLet.forEach((fn, idx) => console.log(\`fn\${idx}():\`, fn()));</textarea>
            <button onclick="runCode('code-let-11')">Ejecutar</button>
            <div class="output" id="output-let-11"></div>
        </div>

        <hr>

        <h3>12. const Requiere Inicialización</h3>
        <p><code>const</code> debe ser inicializada al declararse.</p>

        <div class="example">
            <textarea id="code-let-12" readonly>let sinValor;
console.log("let sin valor:", sinValor); // undefined

try {
    // const sinValorConst; // Error de sintaxis
    console.log("const DEBE tener un valor inicial");
    eval("const sinValorConst;");
} catch (e) {
    console.log("Error:", e.message);
}

const conValor = 42;
console.log("const con valor:", conValor);</textarea>
            <button onclick="runCode('code-let-12')">Ejecutar</button>
            <div class="output" id="output-let-12"></div>
        </div>

        <hr>

        <h3>13. let en for...of</h3>
        <p><code>let</code> es perfecto para iteradores modernos.</p>

        <div class="example">
            <textarea id="code-let-13" readonly>const frutas = ["manzana", "banana", "naranja"];

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

const persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };

for (let [clave, valor] of Object.entries(persona)) {
    console.log(\`\${clave}: \${valor}\`);
}</textarea>
            <button onclick="runCode('code-let-13')">Ejecutar</button>
            <div class="output" id="output-let-13"></div>
        </div>

        <hr>

        <h3>14. Hoisting Diferente</h3>
        <p>Todas las declaraciones hacen hoisting, pero con diferente comportamiento.</p>

        <div class="example">
            <textarea id="code-let-14" readonly>console.log("var hace hoisting y es undefined:");
console.log("varVariable:", typeof varVariable);

console.log("\\nlet hace hoisting pero está en TDZ:");
console.log("letVariable:", typeof letVariable);

var varVariable = "var";
let letVariable = "let";

console.log("\\nDespués de declarar:");
console.log("varVariable:", varVariable);
console.log("letVariable:", letVariable);</textarea>
            <button onclick="runCode('code-let-14')">Ejecutar</button>
            <div class="output" id="output-let-14"></div>
        </div>

        <hr>

        <h3>15. Alcance de Función con var</h3>
        <p><code>var</code> tiene alcance de función, no de bloque.</p>

        <div class="example">
            <textarea id="code-let-15" readonly>function ejemploVar() {
    if (true) {
        var dentroIf = "Definida en if";
    }
    console.log("Accesible fuera del if:", dentroIf);
}

function ejemploLet() {
    if (true) {
        let dentroIf = "Definida en if";
    }
    try {
        console.log(dentroIf);
    } catch (e) {
        console.log("No accesible fuera del if");
    }
}

ejemploVar();
ejemploLet();</textarea>
            <button onclick="runCode('code-let-15')">Ejecutar</button>
            <div class="output" id="output-let-15"></div>
        </div>

        <hr>

        <h3>16. const con Valores Primitivos</h3>
        <p>Con primitivos, <code>const</code> es verdaderamente inmutable.</p>

        <div class="example">
            <textarea id="code-let-16" readonly>const numero = 42;
const texto = "Hola";
const booleano = true;

console.log("numero:", numero);
console.log("texto:", texto);
console.log("booleano:", booleano);

try {
    numero = 43;
} catch (e) {
    console.log("\\nNo se pueden modificar valores primitivos const");
}</textarea>
            <button onclick="runCode('code-let-16')">Ejecutar</button>
            <div class="output" id="output-let-16"></div>
        </div>

        <hr>

        <h3>17. Múltiples Declaraciones</h3>
        <p>Declarar múltiples variables en una línea.</p>

        <div class="example">
            <textarea id="code-let-17" readonly>let a = 1, b = 2, c = 3;
console.log("let múltiple:", a, b, c);

const x = 10, y = 20, z = 30;
console.log("const múltiple:", x, y, z);

var m, n, o;
m = n = o = 5;
console.log("var sin inicializar:", m, n, o);</textarea>
            <button onclick="runCode('code-let-17')">Ejecutar</button>
            <div class="output" id="output-let-17"></div>
        </div>

        <hr>

        <h3>18. Alcance de try...catch</h3>
        <p>Variables en bloques try...catch también tienen alcance de bloque.</p>

        <div class="example">
            <textarea id="code-let-18" readonly>try {
    let enTry = "Dentro de try";
    console.log("En try:", enTry);
    throw new Error("Error");
} catch (error) {
    let enCatch = "Dentro de catch";
    console.log("En catch:", enCatch);
    console.log("Error:", error.message);
}

try {
    console.log(enTry);
} catch (e) {
    console.log("enTry no existe fuera");
}</textarea>
            <button onclick="runCode('code-let-18')">Ejecutar</button>
            <div class="output" id="output-let-18"></div>
        </div>

        <hr>

        <h3>19. let en Parámetros de Función</h3>
        <p>Los parámetros se comportan como declaraciones let.</p>

        <div class="example">
            <textarea id="code-let-19" readonly>function ejemplo(parametro) {
    console.log("Parámetro:", parametro);
    
    try {
        // let parametro = "nuevo"; // Error
        console.log("No se puede redeclarar parámetro");
    } catch (e) {
        console.log("Error de redeclaración");
    }
    
    parametro = "modificado";
    console.log("Parámetro modificado:", parametro);
}

ejemplo("original");</textarea>
            <button onclick="runCode('code-let-19')">Ejecutar</button>
            <div class="output" id="output-let-19"></div>
        </div>

        <hr>

        <h3>20. Object.freeze con const</h3>
        <p><code>const</code> no congela objetos, usa Object.freeze para eso.</p>

        <div class="example">
            <textarea id="code-let-20" readonly>const obj1 = { x: 1 };
obj1.x = 2;
console.log("const sin freeze:", obj1);

const obj2 = Object.freeze({ x: 1 });
obj2.x = 2; // No hace nada en modo no estricto
console.log("const con freeze:", obj2);

console.log("\\nObject.freeze previene modificaciones");</textarea>
            <button onclick="runCode('code-let-20')">Ejecutar</button>
            <div class="output" id="output-let-20"></div>
        </div>

        <hr>

        <h3>21. Destructuring con const y let</h3>
        <p>Usar destructuring con let y const.</p>

        <div class="example">
            <textarea id="code-let-21" readonly>const [a, b, c] = [1, 2, 3];
console.log("Destructuring const:", a, b, c);

let [x, y] = [10, 20];
console.log("Destructuring let:", x, y);

[x, y] = [y, x]; // Intercambio
console.log("Después de intercambiar:", x, y);

const { nombre, edad } = { nombre: "Ana", edad: 25 };
console.log("Objeto:", nombre, edad);</textarea>
            <button onclick="runCode('code-let-21')">Ejecutar</button>
            <div class="output" id="output-let-21"></div>
        </div>

        <hr>

        <h3>22. Shadowing (Sombreado)</h3>
        <p>Variables internas pueden "sombrear" variables externas.</p>

        <div class="example">
            <textarea id="code-let-22" readonly>let x = "exterior";
console.log("Exterior:", x);

{
    let x = "interior";
    console.log("Interior:", x);
    
    {
        let x = "más interior";
        console.log("Más interior:", x);
    }
}

console.log("De vuelta al exterior:", x);</textarea>
            <button onclick="runCode('code-let-22')">Ejecutar</button>
            <div class="output" id="output-let-22"></div>
        </div>

        <hr>

        <h3>23. let en Array.forEach</h3>
        <p>Cada iteración de forEach tiene su propio alcance.</p>

        <div class="example">
            <textarea id="code-let-23" readonly>const numeros = [1, 2, 3];

numeros.forEach(function(num) {
    let doble = num * 2;
    console.log(\`\${num} * 2 = \${doble}\`);
});

try {
    console.log(doble);
} catch (e) {
    console.log("doble no existe fuera de forEach");
}</textarea>
            <button onclick="runCode('code-let-23')">Ejecutar</button>
            <div class="output" id="output-let-23"></div>
        </div>

        <hr>

        <h3>24. const en Funciones</h3>
        <p>Usar const para declarar funciones como expresiones.</p>

        <div class="example">
            <textarea id="code-let-24" readonly>const suma = function(a, b) {
    return a + b;
};

const multiplicar = (a, b) => a * b;

console.log("suma(5, 3):", suma(5, 3));
console.log("multiplicar(5, 3):", multiplicar(5, 3));

try {
    suma = function() {}; // Error
} catch (e) {
    console.log("No se puede reasignar");
}</textarea>
            <button onclick="runCode('code-let-24')">Ejecutar</button>
            <div class="output" id="output-let-24"></div>
        </div>

        <hr>

        <h3>25. Temporal Dead Zone en Detalle</h3>
        <p>La TDZ existe desde el inicio del bloque hasta la declaración.</p>

        <div class="example">
            <textarea id="code-let-25" readonly>{
    console.log("Inicio del bloque");
    // TDZ para 'variable' empieza aquí
    
    try {
        console.log(variable); // Error
    } catch (e) {
        console.log("En TDZ:", e.message);
    }
    
    let variable = "Declarada"; // TDZ termina aquí
    console.log("Después de declarar:", variable);
}</textarea>
            <button onclick="runCode('code-let-25')">Ejecutar</button>
            <div class="output" id="output-let-25"></div>
        </div>

        <hr>

        <h3>26. var sin Bloque en Loops</h3>
        <p>Problema común con var en loops y timeouts.</p>

        <div class="example">
            <textarea id="code-let-26" readonly>console.log("Problema con var:");
for (var i = 1; i <= 3; i++) {
    // En un timeout real, todas mostrarían 4
    console.log("Valor de i:", i);
}
console.log("i después del loop:", i);

console.log("\\nSolución con let:");
for (let j = 1; j <= 3; j++) {
    console.log("Valor de j:", j);
}
try {
    console.log(j);
} catch (e) {
    console.log("j no existe fuera del loop");
}</textarea>
            <button onclick="runCode('code-let-26')">Ejecutar</button>
            <div class="output" id="output-let-26"></div>
        </div>

        <hr>

        <h3>27. Const y Referencias</h3>
        <p><code>const</code> mantiene constante la referencia, no el contenido.</p>

        <div class="example">
            <textarea id="code-let-27" readonly>const arr = [1, 2, 3];
console.log("Array original:", arr);

arr.push(4); // Modifica contenido
arr[0] = 10;
console.log("Array modificado:", arr);
console.log("Referencia sigue siendo la misma");

try {
    arr = []; // Error: cambiar referencia
} catch (e) {
    console.log("No se puede cambiar la referencia");
}</textarea>
            <button onclick="runCode('code-let-27')">Ejecutar</button>
            <div class="output" id="output-let-27"></div>
        </div>

        <hr>

        <h3>28. Best Practices</h3>
        <p>Reglas recomendadas para elegir entre const, let y var.</p>

        <div class="example">
            <textarea id="code-let-28" readonly>// 1. Preferir const por defecto
const CONFIG = { api: "https://api.com" };

// 2. Usar let solo cuando necesites reasignar
let contador = 0;
contador++;

// 3. Evitar var en código moderno
// var legado = "no usar";

console.log("✅ const por defecto");
console.log("✅ let cuando necesites reasignar");
console.log("✅ var solo en código legacy");
console.log("\\nContador:", contador);</textarea>
            <button onclick="runCode('code-let-28')">Ejecutar</button>
            <div class="output" id="output-let-28"></div>
        </div>

        <hr>

        <h3>29. Ámbito Léxico</h3>
        <p>let y const respetan el ámbito léxico (donde se escriben).</p>

        <div class="example">
            <textarea id="code-let-29" readonly>function exterior() {
    const mensaje = "exterior";
    
    function interior() {
        const mensaje = "interior";
        console.log("Desde interior:", mensaje);
    }
    
    interior();
    console.log("Desde exterior:", mensaje);
}

exterior();

const global = "global";
function accederGlobal() {
    console.log("Acceso a global:", global);
}
accederGlobal();</textarea>
            <button onclick="runCode('code-let-29')">Ejecutar</button>
            <div class="output" id="output-let-29"></div>
        </div>

        <hr>

        <h3>30. Comparativa Completa</h3>
        <p>Resumen de todas las diferencias entre var, let y const.</p>

        <div class="example">
            <textarea id="code-let-30" readonly>console.log("COMPARATIVA var vs let vs const:\\n");

console.log("Alcance:");
console.log("- var: función o global");
console.log("- let: bloque");
console.log("- const: bloque\\n");

console.log("Hoisting:");
console.log("- var: sí (undefined)");
console.log("- let: sí (TDZ)");
console.log("- const: sí (TDZ)\\n");

console.log("Reasignación:");
console.log("- var: ✅");
console.log("- let: ✅");
console.log("- const: ❌\\n");

console.log("Redeclaración:");
console.log("- var: ✅");
console.log("- let: ❌");
console.log("- const: ❌");</textarea>
            <button onclick="runCode('code-let-30')">Ejecutar</button>
            <div class="output" id="output-let-30"></div>
        </div>

    </section>
`;
