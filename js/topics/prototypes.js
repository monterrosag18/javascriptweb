const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Prototipos y Herencia</h2>
        <p>Sistema de herencia nativo de JavaScript. Los prototipos son el mecanismo fundamental detrás de los objetos.</p>

        <h3>1. Prototipo Básico</h3>
        <p>Cada objeto tiene un prototipo del cual hereda propiedades.</p>
        
        <div class="example">
            <textarea id="code-proto-1" readonly>const persona = {
    nombre: "Ana",
    saludar: function() {
        console.log("Hola, soy", this.nombre);
    }
};

console.log("Persona:", persona);
console.log("Prototipo:", Object.getPrototypeOf(persona));
console.log("Constructor:", persona.constructor.name);

persona.saludar();</textarea>
            <button onclick="runCode('code-proto-1')">Ejecutar</button>
            <div class="output" id="output-proto-1"></div>
        </div>

        <hr>

        <h3>2. Object.create</h3>
        <p>Crear objetos con un prototipo específico.</p>

        <div class="example">
            <textarea id="code-proto-2" readonly>const animal = {
    tipo: "Animal",
    comer: function() {
        console.log(this.nombre, "está comiendo");
    }
};

const perro = Object.create(animal);
perro.nombre = "Firulais";
perro.ladrar = function() {
    console.log("¡Guau!");
};

console.log("Nombre:", perro.nombre);
console.log("Tipo (heredado):", perro.tipo);
perro.comer();
perro.ladrar();</textarea>
            <button onclick="runCode('code-proto-2')">Ejecutar</button>
            <div class="output" id="output-proto-2"></div>
        </div>

        <hr>

        <h3>3. Cadena de Prototipos</h3>
        <p>Los objetos heredan de prototipos en cadena.</p>

        <div class="example">
            <textarea id="code-proto-3" readonly>const ser = {
    vive: true
};

const animal = Object.create(ser);
animal.respira = true;

const perro = Object.create(animal);
perro.ladra = true;

console.log("perro.ladra:", perro.ladra);
console.log("perro.respira (de animal):", perro.respira);
console.log("perro.vive (de ser):", perro.vive);

console.log("¿perro tiene 'ladra'?", perro.hasOwnProperty("ladra"));
console.log("¿perro tiene 'vive'?", perro.hasOwnProperty("vive"));</textarea>
            <button onclick="runCode('code-proto-3')">Ejecutar</button>
            <div class="output" id="output-proto-3"></div>
        </div>

        <hr>

        <h3>4. Función Constructora</h3>
        <p>Patrón clásico para crear objetos.</p>

        <div class="example">
            <textarea id="code-proto-4" readonly>function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log(\`Hola, soy \${this.nombre}, tengo \${this.edad} años\`);
};

const juan = new Persona("Juan", 30);
const maria = new Persona("María", 25);

juan.saludar();
maria.saludar();

console.log("Constructor:", juan.constructor.name);</textarea>
            <button onclick="runCode('code-proto-4')">Ejecutar</button>
            <div class="output" id="output-proto-4"></div>
        </div>

        <hr>

        <h3>5. Prototype Property</h3>
        <p>Las funciones tienen una propiedad prototype.</p>

        <div class="example">
            <textarea id="code-proto-5" readonly>function Coche(marca) {
    this.marca = marca;
}

console.log("Coche.prototype:", Coche.prototype);

Coche.prototype.arrancar = function() {
    console.log(\`\${this.marca} arrancando...\`);
};

const coche1 = new Coche("Toyota");
const coche2 = new Coche("Honda");

coche1.arrancar();
coche2.arrancar();

console.log("Comparten método:", coche1.arrancar === coche2.arrancar);</textarea>
            <button onclick="runCode('code-proto-5')">Ejecutar</button>
            <div class="output" id="output-proto-5"></div>
        </div>

        <hr>

        <h3>6. __proto__ vs prototype</h3>
        <p>Diferencia entre __proto__ y prototype.</p>

        <div class="example">
            <textarea id="code-proto-6" readonly>function Animal(nombre) {
    this.nombre = nombre;
}

const gato = new Animal("Misu");

console.log("Animal.prototype:", Animal.prototype);
console.log("gato.__proto__:", gato.__proto__);
console.log("Son iguales:", Animal.prototype === gato.__proto__);

// prototype es propiedad de función
// __proto__ es propiedad de instancia</textarea>
            <button onclick="runCode('code-proto-6')">Ejecutar</button>
            <div class="output" id="output-proto-6"></div>
        </div>

        <hr>

        <h3>7. Herencia Prototipal</h3>
        <p>Heredar de una función constructora.</p>

        <div class="example">
            <textarea id="code-proto-7" readonly>function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.comer = function() {
    console.log(\`\${this.nombre} come\`);
};

function Perro(nombre, raza) {
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
    console.log(\`\${this.nombre} ladra: ¡Guau!\`);
};

const firulais = new Perro("Firulais", "Labrador");
firulais.comer();
firulais.ladrar();</textarea>
            <button onclick="runCode('code-proto-7')">Ejecutar</button>
            <div class="output" id="output-proto-7"></div>
        </div>

        <hr>

        <h3>8. Object.getPrototypeOf</h3>
        <p>Obtener el prototipo de un objeto.</p>

        <div class="example">
            <textarea id="code-proto-8" readonly>const obj = { a: 1 };

const proto = Object.getPrototypeOf(obj);
console.log("Prototipo:", proto);
console.log("Es Object.prototype:", proto === Object.prototype);

const arr = [1, 2, 3];
const arrProto = Object.getPrototypeOf(arr);
console.log("Prototipo de array:", arrProto);
console.log("Es Array.prototype:", arrProto === Array.prototype);</textarea>
            <button onclick="runCode('code-proto-8')">Ejecutar</button>
            <div class="output" id="output-proto-8"></div>
        </div>

        <hr>

        <h3>9. Object.setPrototypeOf</h3>
        <p>Cambiar el prototipo de un objeto (no recomendado).</p>

        <div class="example">
            <textarea id="code-proto-9" readonly>const obj = { x: 1 };

const nuevoProto = {
    saludar: function() {
        console.log("Hola desde prototipo");
    }
};

Object.setPrototypeOf(obj, nuevoProto);

console.log("obj.x:", obj.x);
obj.saludar();

// Nota: setPrototypeOf es lento, mejor usar Object.create</textarea>
            <button onclick="runCode('code-proto-9')">Ejecutar</button>
            <div class="output" id="output-proto-9"></div>
        </div>

        <hr>

        <h3>10. hasOwnProperty</h3>
        <p>Verificar si una propiedad es propia o heredada.</p>

        <div class="example">
            <textarea id="code-proto-10" readonly>function Persona(nombre) {
    this.nombre = nombre;
}

Persona.prototype.tipo = "humano";

const juan = new Persona("Juan");

console.log("nombre:", juan.nombre);
console.log("tipo:", juan.tipo);

console.log("¿Tiene 'nombre' propio?", juan.hasOwnProperty("nombre"));
console.log("¿Tiene 'tipo' propio?", juan.hasOwnProperty("tipo"));
console.log("¿Tiene 'toString' propio?", juan.hasOwnProperty("toString"));</textarea>
            <button onclick="runCode('code-proto-10')">Ejecutar</button>
            <div class="output" id="output-proto-10"></div>
        </div>

        <hr>

        <h3>11. in Operator</h3>
        <p>Verificar si una propiedad existe (propia o heredada).</p>

        <div class="example">
            <textarea id="code-proto-11" readonly>const obj = { a: 1 };

console.log("'a' in obj:", "a" in obj);
console.log("'toString' in obj:", "toString" in obj);
console.log("'xyz' in obj:", "xyz" in obj);

// 'in' busca en toda la cadena de prototipos
console.log("\\nPropiedad propia 'a':", obj.hasOwnProperty("a"));
console.log("Propiedad propia 'toString':", obj.hasOwnProperty("toString"));</textarea>
            <button onclick="runCode('code-proto-11')">Ejecutar</button>
            <div class="output" id="output-proto-11"></div>
        </div>

        <hr>

        <h3>12. Object.keys vs for...in</h3>
        <p>Diferencias al iterar propiedades.</p>

        <div class="example">
            <textarea id="code-proto-12" readonly>function Padre() {
    this.a = 1;
}
Padre.prototype.b = 2;

const hijo = new Padre();
hijo.c = 3;

console.log("Object.keys (solo propias):", Object.keys(hijo));

console.log("\\nfor...in (propias + heredadas):");
for (let key in hijo) {
    console.log(key, "-", hijo[key]);
}</textarea>
            <button onclick="runCode('code-proto-12')">Ejecutar</button>
            <div class="output" id="output-proto-12"></div>
        </div>

        <hr>

        <h3>13. Constructor Property</h3>
        <p>Referencia a la función constructora.</p>

        <div class="example">
            <textarea id="code-proto-13" readonly>function MiClase(valor) {
    this.valor = valor;
}

const instancia = new MiClase(42);

console.log("Constructor:", instancia.constructor);
console.log("Nombre:", instancia.constructor.name);
console.log("Es MiClase:", instancia.constructor === MiClase);

// Crear otra instancia usando constructor
const otra = new instancia.constructor(100);
console.log("Otra instancia:", otra);</textarea>
            <button onclick="runCode('code-proto-13')">Ejecutar</button>
            <div class="output" id="output-proto-13"></div>
        </div>

        <hr>

        <h3>14. instanceof</h3>
        <p>Verificar si un objeto es instancia de una clase.</p>

        <div class="example">
            <textarea id="code-proto-14" readonly>function Animal() {}
function Perro() {}

Perro.prototype = Object.create(Animal.prototype);

const firulais = new Perro();

console.log("firulais instanceof Perro:", firulais instanceof Perro);
console.log("firulais instanceof Animal:", firulais instanceof Animal);
console.log("firulais instanceof Object:", firulais instanceof Object);

const obj = {};
console.log("obj instanceof Animal:", obj instanceof Animal);</textarea>
            <button onclick="runCode('code-proto-14')">Ejecutar</button>
            <div class="output" id="output-proto-14"></div>
        </div>

        <hr>

        <h3>15. isPrototypeOf</h3>
        <p>Verificar si un objeto está en la cadena de prototipos.</p>

        <div class="example">
            <textarea id="code-proto-15" readonly>const abuelo = { a: 1 };
const padre = Object.create(abuelo);
const hijo = Object.create(padre);

console.log("¿padre es prototipo de hijo?", padre.isPrototypeOf(hijo));
console.log("¿abuelo es prototipo de hijo?", abuelo.isPrototypeOf(hijo));
console.log("¿hijo es prototipo de padre?", hijo.isPrototypeOf(padre));

console.log("\\nObject.prototype es prototipo de todo:");
console.log(Object.prototype.isPrototypeOf(hijo));</textarea>
            <button onclick="runCode('code-proto-15')">Ejecutar</button>
            <div class="output" id="output-proto-15"></div>
        </div>

        <hr>

        <h3>16. Propiedades en Prototype vs Instancia</h3>
        <p>Compartir métodos, no propiedades mutables.</p>

        <div class="example">
            <textarea id="code-proto-16" readonly>function Usuario(nombre) {
    this.nombre = nombre;
}

// ❌ Malo: array compartido
Usuario.prototype.amigos = [];

const user1 = new Usuario("Juan");
const user2 = new Usuario("María");

user1.amigos.push("Ana");
console.log("user1.amigos:", user1.amigos);
console.log("user2.amigos:", user2.amigos); // ¡También tiene "Ana"!

// ✅ Bueno: array por instancia
function UsuarioBien(nombre) {
    this.nombre = nombre;
    this.amigos = [];
}</textarea>
            <button onclick="runCode('code-proto-16')">Ejecutar</button>
            <div class="output" id="output-proto-16"></div>
        </div>

        <hr>

        <h3>17. Métodos Nativos de Prototipos</h3>
        <p>Todos los tipos tienen prototipos con métodos.</p>

        <div class="example">
            <textarea id="code-proto-17" readonly>// Array.prototype
console.log("Array.prototype.map:", typeof Array.prototype.map);

// String.prototype
console.log("String.prototype.toUpperCase:", typeof String.prototype.toUpperCase);

// Object.prototype
console.log("Object.prototype.toString:", typeof Object.prototype.toString);

const arr = [1, 2, 3];
console.log("\\narr hereda de Array.prototype:");
console.log(Object.getPrototypeOf(arr) === Array.prototype);</textarea>
            <button onclick="runCode('code-proto-17')">Ejecutar</button>
            <div class="output" id="output-proto-17"></div>
        </div>

        <hr>

        <h3>18. Extender Prototipos Nativos (No Recomendado)</h3>
        <p>Agregar métodos a prototipos nativos.</p>

        <div class="example">
            <textarea id="code-proto-18" readonly>// ⚠️ No hacer esto en producción
Array.prototype.ultimo = function() {
    return this[this.length - 1];
};

const numeros = [1, 2, 3, 4, 5];
console.log("Último elemento:", numeros.ultimo());

// Problema: puede causar conflictos
console.log("\\nCuidado: afecta TODOS los arrays");
[10, 20, 30].ultimo(); // Funciona en todos</textarea>
            <button onclick="runCode('code-proto-18')">Ejecutar</button>
            <div class="output" id="output-proto-18"></div>
        </div>

        <hr>

        <h3>19. Object.create con Propiedades</h3>
        <p>Crear objetos con propiedades descriptoras.</p>

        <div class="example">
            <textarea id="code-proto-19" readonly>const proto = {
    saludar: function() {
        console.log("Hola");
    }
};

const obj = Object.create(proto, {
    nombre: {
        value: "Ana",
        writable: true,
        enumerable: true
    },
    edad: {
        value: 30,
        writable: false,
        enumerable: true
    }
});

console.log("obj:", obj);
obj.saludar();

obj.nombre = "María"; // Funciona
console.log("Nombre cambiado:", obj.nombre);</textarea>
            <button onclick="runCode('code-proto-19')">Ejecutar</button>
            <div class="output" id="output-proto-19"></div>
        </div>

        <hr>

        <h3>20. Prototipo Null</h3>
        <p>Crear objetos sin prototipo.</p>

        <div class="example">
            <textarea id="code-proto-20" readonly>const objNormal = {};
const objSinProto = Object.create(null);

console.log("Objeto normal:");
console.log("toString:", typeof objNormal.toString);

console.log("\\nObjeto sin prototipo:");
console.log("toString:", typeof objSinProto.toString);

objSinProto.x = 1;
console.log("objSinProto.x:", objSinProto.x);

// Útil para diccionarios puros
console.log("\\nSin métodos heredados");</textarea>
            <button onclick="runCode('code-proto-20')">Ejecutar</button>
            <div class="output" id="output-proto-20"></div>
        </div>

        <hr>

        <h3>21. Mixins con Prototipos</h3>
        <p>Combinar funcionalidades de múltiples fuentes.</p>

        <div class="example">
            <textarea id="code-proto-21" readonly>const nadador = {
    nadar: function() {
        console.log(\`\${this.nombre} está nadando\`);
    }
};

const volador = {
    volar: function() {
        console.log(\`\${this.nombre} está volando\`);
    }
};

function Pato(nombre) {
    this.nombre = nombre;
}

Object.assign(Pato.prototype, nadador, volador);

const donald = new Pato("Donald");
donald.nadar();
donald.volar();</textarea>
            <button onclick="runCode('code-proto-21')">Ejecutar</button>
            <div class="output" id="output-proto-21"></div>
        </div>

        <hr>

        <h3>22. Shadowing (Sombreado)</h3>
        <p>Propiedad de instancia oculta propiedad del prototipo.</p>

        <div class="example">
            <textarea id="code-proto-22" readonly>function Clase() {}
Clase.prototype.valor = "del prototipo";

const instancia = new Clase();

console.log("Antes:", instancia.valor);

// Crear propiedad en instancia
instancia.valor = "de la instancia";

console.log("Después:", instancia.valor);
console.log("Prototipo sigue igual:", Clase.prototype.valor);

delete instancia.valor;
console.log("Después de delete:", instancia.valor);</textarea>
            <button onclick="runCode('code-proto-22')">Ejecutar</button>
            <div class="output" id="output-proto-22"></div>
        </div>

        <hr>

        <h3>23. Cadena Hasta Object.prototype</h3>
        <p>Todos los objetos terminan en Object.prototype.</p>

        <div class="example">
            <textarea id="code-proto-23" readonly>function MiClase() {}
const instancia = new MiClase();

let proto = instancia;
let nivel = 0;

console.log("Cadena de prototipos:");
while (proto !== null) {
    console.log(\`Nivel \${nivel}:\`, proto.constructor ? proto.constructor.name : "null");
    proto = Object.getPrototypeOf(proto);
    nivel++;
}

console.log("\\nTodos llegan a Object.prototype");</textarea>
            <button onclick="runCode('code-proto-23')">Ejecutar</button>
            <div class="output" id="output-proto-23"></div>
        </div>

        <hr>

        <h3>24. Performance: Prototype vs Closures</h3>
        <p>Métodos en prototype son más eficientes.</p>

        <div class="example">
            <textarea id="code-proto-24" readonly>// ❌ Closure: crea nueva función cada vez
function PersonaClosure(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
        console.log("Hola,", this.nombre);
    };
}

// ✅ Prototype: función compartida
function PersonaPrototype(nombre) {
    this.nombre = nombre;
}
PersonaPrototype.prototype.saludar = function() {
    console.log("Hola,", this.nombre);
};

const p1 = new PersonaPrototype("Juan");
const p2 = new PersonaPrototype("María");

console.log("Mismo método:", p1.saludar === p2.saludar);</textarea>
            <button onclick="runCode('code-proto-24')">Ejecutar</button>
            <div class="output" id="output-proto-24"></div>
        </div>

        <hr>

        <h3>25. Patrón de Herencia Clásica</h3>
        <p>Implementar herencia completa con prototipos.</p>

        <div class="example">
            <textarea id="code-proto-25" readonly>function Forma(color) {
    this.color = color;
}

Forma.prototype.describir = function() {
    console.log("Forma de color", this.color);
};

function Circulo(color, radio) {
    Forma.call(this, color); // Llamar constructor padre
    this.radio = radio;
}

// Establecer herencia
Circulo.prototype = Object.create(Forma.prototype);
Circulo.prototype.constructor = Circulo;

Circulo.prototype.area = function() {
    return Math.PI * this.radio ** 2;
};

const c = new Circulo("rojo", 5);
c.describir();
console.log("Área:", c.area().toFixed(2));</textarea>
            <button onclick="runCode('code-proto-25')">Ejecutar</button>
            <div class="output" id="output-proto-25"></div>
        </div>

        <hr>

        <h3>26. Super Pattern</h3>
        <p>Llamar métodos del prototipo padre.</p>

        <div class="example">
            <textarea id="code-proto-26" readonly>function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.moverse = function() {
    console.log(\`\${this.nombre} se mueve\`);
};

function Perro(nombre, raza) {
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.moverse = function() {
    Animal.prototype.moverse.call(this); // Llamar super
    console.log(\`\${this.nombre} corre rápido\`);
};

const firulais = new Perro("Firulais", "Labrador");
firulais.moverse();</textarea>
            <button onclick="runCode('code-proto-26')">Ejecutar</button>
            <div class="output" id="output-proto-26"></div>
        </div>

        <hr>

        <h3>27. Object Composition</h3>
        <p>Composición sobre herencia con prototipos.</p>

        <div class="example">
            <textarea id="code-proto-27" readonly>const conNombre = {
    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }
};

const conEdad = {
    setEdad(edad) {
        this.edad = edad;
        return this;
    }
};

function crearPersona() {
    return Object.assign(
        {},
        conNombre,
        conEdad
    );
}

const persona = crearPersona()
    .setNombre("Ana")
    .setEdad(25);

console.log("Persona:", persona);</textarea>
            <button onclick="runCode('code-proto-27')">Ejecutar</button>
            <div class="output" id="output-proto-27"></div>
        </div>

        <hr>

        <h3>28. Property Lookup</h3>
        <p>Cómo JavaScript busca propiedades.</p>

        <div class="example">
            <textarea id="code-proto-28" readonly>const abuelo = { valor: "abuelo" };
const padre = Object.create(abuelo);
padre.valor = "padre";
const hijo = Object.create(padre);

console.log("hijo.valor:", hijo.valor);

// Busca: hijo -> padre (encontrado) -> abuelo
hijo.valor = "hijo";
console.log("hijo.valor:", hijo.valor);

delete hijo.valor;
console.log("Después de delete:", hijo.valor);

console.log("\\nBusca en cadena hasta encontrar o llegar a null");</textarea>
            <button onclick="runCode('code-proto-28')">Ejecutar</button>
            <div class="output" id="output-proto-28"></div>
        </div>

        <hr>

        <h3>29. Factory con Prototipos</h3>
        <p>Patrón factory usando prototipos.</p>

        <div class="example">
            <textarea id="code-proto-29" readonly>const protoPersona = {
    saludar() {
        console.log(\`Hola, soy \${this.nombre}\`);
    },
    cumpleanios() {
        this.edad++;
        console.log(\`Ahora tengo \${this.edad} años\`);
    }
};

function crearPersona(nombre, edad) {
    const persona = Object.create(protoPersona);
    persona.nombre = nombre;
    persona.edad = edad;
    return persona;
}

const juan = crearPersona("Juan", 30);
juan.saludar();
juan.cumpleanios();</textarea>
            <button onclick="runCode('code-proto-29')">Ejecutar</button>
            <div class="output" id="output-proto-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con prototipos.</p>

        <div class="example">
            <textarea id="code-proto-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Métodos en prototype, datos en instancia");
console.log("✅ Usar Object.create para herencia");
console.log("✅ Siempre restablecer constructor después de herencia");
console.log("✅ Preferir composición sobre herencia compleja");
console.log("✅ hasOwnProperty para verificar propiedades propias");
console.log("\\n❌ No modificar prototipos nativos");
console.log("❌ No usar setPrototypeOf (lento)");
console.log("❌ No poner arrays/objetos mutables en prototype");
console.log("\\n✨ Hoy en día, usa clases ES6 (son sintaxis sobre prototipos)");</textarea>
            <button onclick="runCode('code-proto-30')">Ejecutar</button>
            <div class="output" id="output-proto-30"></div>
        </div>

    </section>
`;
