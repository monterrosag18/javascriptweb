const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Operadores y Estructuras de Control</h2>
        <p>Los operadores nos permiten realizar operaciones, y las estructuras de control nos ayudan a decidir qué código ejecutar.</p>

        <h3>1. Operadores Aritméticos Básicos</h3>
        <p>Son los que usas en matemáticas: sumar (+), restar (-), multiplicar (*) y dividir (/).</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Calculemos cuántos caramelos tienes.</p>
            <textarea id="code-ops-1" readonly>let caramelosEnMano = 5;
let caramelosEnBolsillo = 10;
let totalCaramelos = caramelosEnMano + caramelosEnBolsillo;

console.log("Total de caramelos:", totalCaramelos);
console.log("Si como 3:", totalCaramelos - 3);
console.log("Si duplico:", totalCaramelos * 2);
console.log("Si los reparto entre 3 amigos:", totalCaramelos / 3);</textarea>
            <button onclick="runCode('code-ops-1')">Ejecutar</button>
            <div class="output" id="output-ops-1"></div>
        </div>

        <hr>

        <h3>2. Operador Módulo (Resto)</h3>
        <p>El operador <code>%</code> devuelve el resto de una división.</p>

        <div class="example">
            <textarea id="code-ops-2" readonly>console.log("10 % 3 =", 10 % 3); // 1 (10 dividido 3 es 3, sobra 1)
console.log("15 % 4 =", 15 % 4); // 3
console.log("20 % 5 =", 20 % 5); // 0 (división exacta)

// Útil para saber si un número es par
let numero = 8;
if (numero % 2 === 0) {
    console.log(numero, "es par");
} else {
    console.log(numero, "es impar");
}</textarea>
            <button onclick="runCode('code-ops-2')">Ejecutar</button>
            <div class="output" id="output-ops-2"></div>
        </div>

        <hr>

        <h3>3. Operadores de Asignación Compuesta</h3>
        <p>Formas abreviadas de modificar variables: <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>.</p>

        <div class="example">
            <textarea id="code-ops-3" readonly>let puntos = 10;
console.log("Puntos iniciales:", puntos);

puntos += 5; // Equivale a: puntos = puntos + 5
console.log("Después de +=5:", puntos);

puntos -= 3; // Equivale a: puntos = puntos - 3
console.log("Después de -=3:", puntos);

puntos *= 2; // Equivale a: puntos = puntos * 2
console.log("Después de *=2:", puntos);

puntos /= 4; // Equivale a: puntos = puntos / 4
console.log("Después de /=4:", puntos);</textarea>
            <button onclick="runCode('code-ops-3')">Ejecutar</button>
            <div class="output" id="output-ops-3"></div>
        </div>

        <hr>

        <h3>4. Operadores de Comparación</h3>
        <p>Comparan valores y devuelven <code>true</code> o <code>false</code>.</p>

        <div class="example">
            <textarea id="code-ops-4" readonly>let edad = 18;
let edadMinima = 16;

console.log("edad > edadMinima:", edad > edadMinima);
console.log("edad < 20:", edad < 20);
console.log("edad >= 18:", edad >= 18);
console.log("edad <= 17:", edad <= 17);
console.log("edad === 18:", edad === 18);
console.log("edad !== 21:", edad !== 21);</textarea>
            <button onclick="runCode('code-ops-4')">Ejecutar</button>
            <div class="output" id="output-ops-4"></div>
        </div>

        <hr>

        <h3>5. Igualdad: == vs ===</h3>
        <p><code>==</code> compara valores (con conversión de tipo). <code>===</code> compara valor y tipo (recomendado).</p>

        <div class="example">
            <textarea id="code-ops-5" readonly>let numero = 5;
let texto = "5";

console.log("numero == texto:", numero == texto); // true (convierte tipos)
console.log("numero === texto:", numero === texto); // false (tipos diferentes)

console.log("Tipo de numero:", typeof numero);
console.log("Tipo de texto:", typeof texto);

// Siempre es mejor usar === para evitar sorpresas
console.log("0 == false:", 0 == false); // true (conversión)
console.log("0 === false:", 0 === false); // false (tipos diferentes)</textarea>
            <button onclick="runCode('code-ops-5')">Ejecutar</button>
            <div class="output" id="output-ops-5"></div>
        </div>

        <hr>

        <h3>6. Estructura if Simple</h3>
        <p>Ejecuta código solo si una condición es verdadera.</p>

        <div class="example">
            <textarea id="code-ops-6" readonly>let temperatura = 30;

if (temperatura > 25) {
    console.log("Hace calor, usa ropa ligera.");
}

console.log("Programa continúa...");</textarea>
            <button onclick="runCode('code-ops-6')">Ejecutar</button>
            <div class="output" id="output-ops-6"></div>
        </div>

        <hr>

        <h3>7. Estructura if...else</h3>
        <p>Ejecuta un bloque u otro dependiendo de la condición.</p>

        <div class="example">
            <textarea id="code-ops-7" readonly>let estaLloviendo = false;

if (estaLloviendo) {
    console.log("Lleva paraguas.");
} else {
    console.log("No necesitas paraguas.");
}

let edad = 17;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}</textarea>
            <button onclick="runCode('code-ops-7')">Ejecutar</button>
            <div class="output" id="output-ops-7"></div>
        </div>

        <hr>

        <h3>8. Estructura if...else if...else</h3>
        <p>Múltiples condiciones en cascada.</p>

        <div class="example">
            <textarea id="code-ops-8" readonly>let nota = 85;

if (nota >= 90) {
    console.log("Calificación: A");
} else if (nota >= 80) {
    console.log("Calificación: B");
} else if (nota >= 70) {
    console.log("Calificación: C");
} else if (nota >= 60) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}</textarea>
            <button onclick="runCode('code-ops-8')">Ejecutar</button>
            <div class="output" id="output-ops-8"></div>
        </div>

        <hr>

        <h3>9. Operadores Lógicos: AND (&&)</h3>
        <p>Devuelve <code>true</code> solo si ambas condiciones son verdaderas.</p>

        <div class="example">
            <textarea id="code-ops-9" readonly>let tieneLicencia = true;
let esMayorDeEdad = true;

if (tieneLicencia && esMayorDeEdad) {
    console.log("Puede conducir.");
} else {
    console.log("No puede conducir.");
}

// Caso donde una condición es falsa
let tieneAuto = false;
if (tieneAuto && tieneLicencia) {
    console.log("Puede ir en su auto.");
} else {
    console.log("No puede ir en su auto (falta algo).");
}</textarea>
            <button onclick="runCode('code-ops-9')">Ejecutar</button>
            <div class="output" id="output-ops-9"></div>
        </div>

        <hr>

        <h3>10. Operadores Lógicos: OR (||)</h3>
        <p>Devuelve <code>true</code> si al menos una condición es verdadera.</p>

        <div class="example">
            <textarea id="code-ops-10" readonly>let esFinDeSemana = true;
let esVacaciones = false;

if (esFinDeSemana || esVacaciones) {
    console.log("Puedes descansar.");
} else {
    console.log("Es día de trabajo.");
}

// Ambas falsas
let lunes = false;
let miercoles = false;
if (lunes || miercoles) {
    console.log("Es uno de esos días.");
} else {
    console.log("No es lunes ni miércoles.");
}</textarea>
            <button onclick="runCode('code-ops-10')">Ejecutar</button>
            <div class="output" id="output-ops-10"></div>
        </div>

        <hr>

        <h3>11. Operador Lógico: NOT (!)</h3>
        <p>Invierte el valor booleano.</p>

        <div class="example">
            <textarea id="code-ops-11" readonly>let estaConectado = false;

if (!estaConectado) {
    console.log("Usuario desconectado.");
}

let tieneSaldo = true;
if (!tieneSaldo) {
    console.log("No tiene saldo.");
} else {
    console.log("Tiene saldo disponible.");
}</textarea>
            <button onclick="runCode('code-ops-11')">Ejecutar</button>
            <div class="output" id="output-ops-11"></div>
        </div>

        <hr>

        <h3>12. Estructura switch</h3>
        <p>Evalúa una expresión y ejecuta el caso que coincida.</p>

        <div class="example">
            <textarea id="code-ops-12" readonly>let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    default:
        nombreDia = "Fin de semana";
}

console.log("Día número", dia, "es:", nombreDia);</textarea>
            <button onclick="runCode('code-ops-12')">Ejecutar</button>
            <div class="output" id="output-ops-12"></div>
        </div>

        <hr>

        <h3>13. Bucle for</h3>
        <p>Repite un bloque de código un número específico de veces.</p>

        <div class="example">
            <textarea id="code-ops-13" readonly>console.log("Cuenta regresiva:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("¡Despegue!");

// Sumar números del 1 al 10
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Suma del 1 al 10:", suma);</textarea>
            <button onclick="runCode('code-ops-13')">Ejecutar</button>
            <div class="output" id="output-ops-13"></div>
        </div>

        <hr>

        <h3>14. Bucle while</h3>
        <p>Repite mientras una condición sea verdadera.</p>

        <div class="example">
            <textarea id="code-ops-14" readonly>let contador = 1;

while (contador <= 5) {
    console.log("Vuelta número", contador);
    contador++;
}

// Ejemplo: llenar un vaso de agua
let vasoLleno = 0;
while (vasoLleno < 10) {
    vasoLleno++;
}
console.log("El vaso está lleno:", vasoLleno + "/10");</textarea>
            <button onclick="runCode('code-ops-14')">Ejecutar</button>
            <div class="output" id="output-ops-14"></div>
        </div>

        <hr>

        <h3>15. Bucle do...while</h3>
        <p>Similar a <code>while</code>, pero garantiza al menos una ejecución.</p>

        <div class="example">
            <textarea id="code-ops-15" readonly>let numero = 10;

do {
    console.log("Número actual:", numero);
    numero++;
} while (numero <= 12);

// Se ejecuta al menos una vez, incluso si la condición es falsa
let x = 100;
do {
    console.log("Esto se ejecuta aunque x > 5:", x);
} while (x < 5);</textarea>
            <button onclick="runCode('code-ops-15')">Ejecutar</button>
            <div class="output" id="output-ops-15"></div>
        </div>

        <hr>

        <h3>16. break en Bucles</h3>
        <p>La palabra clave <code>break</code> detiene un bucle inmediatamente.</p>

        <div class="example">
            <textarea id="code-ops-16" readonly>console.log("Buscando el número 7:");
for (let i = 1; i <= 10; i++) {
    console.log("Probando:", i);
    if (i === 7) {
        console.log("¡Encontrado!");
        break; // Sale del bucle
    }
}
console.log("Bucle terminado.");</textarea>
            <button onclick="runCode('code-ops-16')">Ejecutar</button>
            <div class="output" id="output-ops-16"></div>
        </div>

        <hr>

        <h3>17. continue en Bucles</h3>
        <p><code>continue</code> salta a la siguiente iteración del bucle.</p>

        <div class="example">
            <textarea id="code-ops-17" readonly>console.log("Números del 1 al 10, pero saltando el 5:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Salta esta iteración
    }
    console.log(i);
}</textarea>
            <button onclick="runCode('code-ops-17')">Ejecutar</button>
            <div class="output" id="output-ops-17"></div>
        </div>

        <hr>

        <h3>18. Bucles Anidados</h3>
        <p>Un bucle dentro de otro bucle.</p>

        <div class="example">
            <textarea id="code-ops-18" readonly>console.log("Tabla de multiplicar (del 1 al 3):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
    console.log("---");
}</textarea>
            <button onclick="runCode('code-ops-18')">Ejecutar</button>
            <div class="output" id="output-ops-18"></div>
        </div>

        <hr>

        <h3>19. for...of (Iterar Arrays)</h3>
        <p>Forma moderna de recorrer arrays.</p>

        <div class="example">
            <textarea id="code-ops-19" readonly>let frutas = ["manzana", "banana", "naranja"];

console.log("Lista de frutas:");
for (let fruta of frutas) {
    console.log("- " + fruta);
}

// También funciona con strings
let palabra = "Hola";
for (let letra of palabra) {
    console.log(letra);
}</textarea>
            <button onclick="runCode('code-ops-19')">Ejecutar</button>
            <div class="output" id="output-ops-19"></div>
        </div>

        <hr>

        <h3>20. for...in (Iterar Propiedades de Objetos)</h3>
        <p>Recorre las claves de un objeto.</p>

        <div class="example">
            <textarea id="code-ops-20" readonly>let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};

console.log("Propiedades de persona:");
for (let clave in persona) {
    console.log(\`\${clave}: \${persona[clave]}\`);
}</textarea>
            <button onclick="runCode('code-ops-20')">Ejecutar</button>
            <div class="output" id="output-ops-20"></div>
        </div>

        <hr>

        <h3>21. Operador Ternario</h3>
        <p>Forma abreviada de <code>if...else</code> en una línea.</p>

        <div class="example">
            <textarea id="code-ops-21" readonly>let edad = 20;
let tipo = edad >= 18 ? "adulto" : "menor";
console.log("Tipo:", tipo);

let puntos = 75;
let resultado = puntos >= 60 ? "Aprobado" : "Reprobado";
console.log("Resultado:", resultado);

// Ternarios anidados (no muy recomendado, pero es posible)
let nota = 85;
let calificacion = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "F";
console.log("Calificación:", calificacion);</textarea>
            <button onclick="runCode('code-ops-21')">Ejecutar</button>
            <div class="output" id="output-ops-21"></div>
        </div>

        <hr>

        <h3>22. Operador Spread (...) con Arrays</h3>
        <p>Expande los elementos de un array.</p>

        <div class="example">
            <textarea id="code-ops-22" readonly>let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];

// Combinar arrays
let todosLosNumeros = [...numeros1, ...numeros2];
console.log("Arrays combinados:", todosLosNumeros);

// Copiar un array
let copia = [...numeros1];
console.log("Copia:", copia);

// Añadir elementos
let masNumeros = [...numeros1, 10, 20];
console.log("Con más elementos:", masNumeros);</textarea>
            <button onclick="runCode('code-ops-22')">Ejecutar</button>
            <div class="output" id="output-ops-22"></div>
        </div>

        <hr>

        <h3>23. Operador Spread con Objetos</h3>
        <p>También funciona con objetos para copiar o combinar.</p>

        <div class="example">
            <textarea id="code-ops-23" readonly>let persona = { nombre: "Juan", edad: 25 };
let direccion = { ciudad: "Barcelona", pais: "España" };

// Combinar objetos
let completo = { ...persona, ...direccion };
console.log("Objeto combinado:", completo);

// Copiar y modificar
let personaModificada = { ...persona, edad: 26, trabajo: "Programador" };
console.log("Persona modificada:", personaModificada);
console.log("Persona original:", persona);</textarea>
            <button onclick="runCode('code-ops-23')">Ejecutar</button>
            <div class="output" id="output-ops-23"></div>
        </div>

        <hr>

        <h3>24. Operador Rest (...) en Funciones</h3>
        <p>Recoge múltiples argumentos en un array.</p>

        <div class="example">
            <textarea id="code-ops-24" readonly>function sumar(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

console.log("sumar(1, 2, 3):", sumar(1, 2, 3));
console.log("sumar(10, 20, 30, 40):", sumar(10, 20, 30, 40));
console.log("sumar(5):", sumar(5));</textarea>
            <button onclick="runCode('code-ops-24')">Ejecutar</button>
            <div class="output" id="output-ops-24"></div>
        </div>

        <hr>

        <h3>25. Short-circuit con OR (||)</h3>
        <p>Devuelve el primer valor truthy. Útil para valores por defecto.</p>

        <div class="example">
            <textarea id="code-ops-25" readonly>function saludar(nombre) {
    // Si nombre es undefined, null o "", usa "Invitado"
    let nombreFinal = nombre || "Invitado";
    console.log("Hola,", nombreFinal);
}

saludar("Carlos");
saludar();
saludar("");

let config = null;
let tema = config || "claro";
console.log("Tema:", tema);</textarea>
            <button onclick="runCode('code-ops-25')">Ejecutar</button>
            <div class="output" id="output-ops-25"></div>
        </div>

        <hr>

        <h3>26. Short-circuit con AND (&&)</h3>
        <p>Devuelve el primer valor falsy o el último valor si todos son truthy.</p>

        <div class="example">
            <textarea id="code-ops-26" readonly>let usuario = {
    nombre: "Ana",
    enviarMensaje: function() {
        console.log("Mensaje enviado por", this.nombre);
    }
};

// Solo llama al método si usuario existe
usuario && usuario.enviarMensaje();

let usuarioNull = null;
// Esto no causa error porque se detiene en el primer valor falsy
usuarioNull && usuarioNull.enviarMensaje();
console.log("No hubo error con usuario null.");</textarea>
            <button onclick="runCode('code-ops-26')">Ejecutar</button>
            <div class="output" id="output-ops-26"></div>
        </div>

        <hr>

        <h3>27. Nullish Coalescing (??)</h3>
        <p>Similar a <code>||</code> pero solo considera <code>null</code> o <code>undefined</code> como falsy.</p>

        <div class="example">
            <textarea id="code-ops-27" readonly>let valor1 = 0;
let valor2 = "";
let valor3 = null;

// Con ||, 0 y "" se consideran falsy
console.log("valor1 || 100:", valor1 || 100); // 100
console.log("valor2 || 'default':", valor2 || "default"); // 'default'

// Con ??, 0 y "" son valores válidos
console.log("valor1 ?? 100:", valor1 ?? 100); // 0
console.log("valor2 ?? 'default':", valor2 ?? "default"); // ""
console.log("valor3 ?? 'default':", valor3 ?? "default"); // 'default'</textarea>
            <button onclick="runCode('code-ops-27')">Ejecutar</button>
            <div class="output" id="output-ops-27"></div>
        </div>

        <hr>

        <h3>28. Optional Chaining (?.)</h3>
        <p>Accede a propiedades anidadas sin causar errores si algo es <code>null</code> o <code>undefined</code>.</p>

        <div class="example">
            <textarea id="code-ops-28" readonly>let usuario = {
    nombre: "Luis",
    direccion: {
        ciudad: "Madrid"
    }
};

// Acceso seguro
console.log("Ciudad:", usuario.direccion?.ciudad);
console.log("Código postal:", usuario.direccion?.codigoPostal); // undefined

let usuarioNull = null;
console.log("Intentar acceder a null:", usuarioNull?.nombre); // undefined (no causa error)

// Sin optional chaining causaría error:
try {
    console.log(usuarioNull.nombre);
} catch (e) {
    console.log("Error sin ?. :", e.message);
}</textarea>
            <button onclick="runCode('code-ops-28')">Ejecutar</button>
            <div class="output" id="output-ops-28"></div>
        </div>

        <hr>

        <h3>29. Operador de Exponenciación (**)</h3>
        <p>Eleva un número a una potencia.</p>

        <div class="example">
            <textarea id="code-ops-29" readonly>console.log("2 ** 3:", 2 ** 3); // 8
console.log("5 ** 2:", 5 ** 2); // 25
console.log("10 ** 0:", 10 ** 0); // 1

// Equivalente a Math.pow()
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8

// Raíz cuadrada usando exponente 0.5
console.log("9 ** 0.5:", 9 ** 0.5); // 3</textarea>
            <button onclick="runCode('code-ops-29')">Ejecutar</button>
            <div class="output" id="output-ops-29"></div>
        </div>

        <hr>

        <h3>30. Precedencia de Operadores</h3>
        <p>El orden en que se evalúan las operaciones. Las multiplicaciones y divisiones se hacen antes que sumas y restas.</p>

        <div class="example">
            <textarea id="code-ops-30" readonly>// Sin paréntesis
console.log("2 + 3 * 4:", 2 + 3 * 4); // 14 (no 20)

// Con paréntesis
console.log("(2 + 3) * 4:", (2 + 3) * 4); // 20

// Más ejemplos
console.log("10 - 2 * 3:", 10 - 2 * 3); // 4
console.log("(10 - 2) * 3:", (10 - 2) * 3); // 24

// Comparaciones
console.log("5 + 5 === 10:", 5 + 5 === 10); // true
console.log("3 * 3 > 5 + 2:", 3 * 3 > 5 + 2); // true (9 > 7)</textarea>
            <button onclick="runCode('code-ops-30')">Ejecutar</button>
            <div class="output" id="output-ops-30"></div>
        </div>

    </section>
`;
