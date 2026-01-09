const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Objetos</h2>
        <p>Trabajar con objetos, propiedades y métodos en JavaScript.</p>

        <h3>1. Crear Objetos</h3>
        <p>Diferentes formas de crear objetos.</p>

        <div class="example">
            <textarea id="code-obj-1" readonly>// Literal
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log("Literal:", persona);

// Constructor
const obj = new Object();
obj.propiedad = "valor";
console.log("Constructor:", obj);

// Vacío
const vacio = {};
console.log("Vacío:", vacio);</textarea>
            <button onclick="runCode('code-obj-1')">Ejecutar</button>
            <div class="output" id="output-obj-1"></div>
        </div>

        <hr>

        <h3>2. Propiedades</h3>
        <p>Acceder y modificar propiedades.</p>

        <div class="example">
            <textarea id="code-obj-2" readonly>const usuario = {
    nombre: "Ana",
    apellido: "García",
    edad: 25
};

// Punto
console.log("usuario.nombre:", usuario.nombre);

// Corchetes
console.log("usuario['apellido']:", usuario["apellido"]);

// Dinámico
const prop = "edad";
console.log("usuario[prop]:", usuario[prop]);

// Asignar
usuario.email = "ana@email.com";
usuario["activo"] = true;
console.log("Con nuevas propiedades:", usuario);</textarea>
            <button onclick="runCode('code-obj-2')">Ejecutar</button>
            <div class="output" id="output-obj-2"></div>
        </div>

        <hr>

        <h3>3. Métodos</h3>
        <p>Funciones dentro de objetos.</p>

        <div class="example">
            <textarea id="code-obj-3" readonly>const persona = {
    nombre: "Juan",
    edad: 30,
    presentarse() {
        return \`Hola, soy \${this.nombre}\`;
    },
    cumplir() {
        this.edad++;
    }
};

console.log(persona.presentarse());
persona.cumplir();
console.log("Edad después:", persona.edad);</textarea>
            <button onclick="runCode('code-obj-3')">Ejecutar</button>
            <div class="output" id="output-obj-3"></div>
        </div>

        <hr>

        <h3>4. this</h3>
        <p>Referencia al contexto del objeto.</p>

        <div class="example">
            <textarea id="code-obj-4" readonly>const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    info() {
        return \`\${this.marca} \${this.modelo}\`;
    },
    mostrarEsto() {
        console.log("this:", this);
        console.log("this.marca:", this.marca);
    }
};

console.log(coche.info());
coche.mostrarEsto();</textarea>
            <button onclick="runCode('code-obj-4')">Ejecutar</button>
            <div class="output" id="output-obj-4"></div>
        </div>

        <hr>

        <h3>5. delete</h3>
        <p>Eliminar propiedades.</p>

        <div class="example">
            <textarea id="code-obj-5" readonly>const objeto = {
    a: 1,
    b: 2,
    c: 3
};

console.log("Original:", objeto);
delete objeto.b;
console.log("Después delete:", objeto);

console.log("b" in objeto); // false
console.log("a" in objeto); // true</textarea>
            <button onclick="runCode('code-obj-5')">Ejecutar</button>
            <div class="output" id="output-obj-5"></div>
        </div>

        <hr>

        <h3>6. in y hasOwnProperty</h3>
        <p>Verificar existencia de propiedades.</p>

        <div class="example">
            <textarea id="code-obj-6" readonly>const usuario = {
    nombre: "María",
    edad: 28
};

// in (incluye propiedades heredadas)
console.log("'nombre' in usuario:", "nombre" in usuario);
console.log("'email' in usuario:", "email" in usuario);

// hasOwnProperty (solo propias)
console.log("hasOwnProperty('nombre'):", usuario.hasOwnProperty("nombre"));
console.log("hasOwnProperty('toString'):", usuario.hasOwnProperty("toString"));

// Comparación
console.log("'toString' in usuario:", "toString" in usuario);</textarea>
            <button onclick="runCode('code-obj-6')">Ejecutar</button>
            <div class="output" id="output-obj-6"></div>
        </div>

        <hr>

        <h3>7. Keys, Values, Entries</h3>
        <p>Obtener propiedades, valores o pares.</p>

        <div class="example">
            <textarea id="code-obj-7" readonly>const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log("keys:", Object.keys(persona));
console.log("values:", Object.values(persona));
console.log("entries:", Object.entries(persona));

// Iterar
Object.entries(persona).forEach(([clave, valor]) => {
    console.log(\`\${clave}: \${valor}\`);
});</textarea>
            <button onclick="runCode('code-obj-7')">Ejecutar</button>
            <div class="output" id="output-obj-7"></div>
        </div>

        <hr>

        <h3>8. assign</h3>
        <p>Copiar propiedades entre objetos.</p>

        <div class="example">
            <textarea id="code-obj-8" readonly>const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

// Combinar
const resultado = Object.assign({}, obj1, obj2, obj3);
console.log("Combinado:", resultado);

// Copia superficial
const copia = Object.assign({}, obj1);
console.log("Copia:", copia);

// Modificar original
Object.assign(obj1, { b: 20, e: 5 });
console.log("obj1 modificado:", obj1);</textarea>
            <button onclick="runCode('code-obj-8')">Ejecutar</button>
            <div class="output" id="output-obj-8"></div>
        </div>

        <hr>

        <h3>9. Spread Operator</h3>
        <p>Desplegar propiedades de objetos.</p>

        <div class="example">
            <textarea id="code-obj-9" readonly>const base = { a: 1, b: 2 };
const adicional = { c: 3 };

// Combinar
const combinado = { ...base, ...adicional };
console.log("Combinado:", combinado);

// Sobrescribir
const modificado = { ...base, b: 20 };
console.log("Modificado:", modificado);

// Copiar
const copia = { ...base };
console.log("Copia:", copia);

// Extraer y rest
const { a, ...resto } = base;
console.log("a:", a);
console.log("resto:", resto);</textarea>
            <button onclick="runCode('code-obj-9')">Ejecutar</button>
            <div class="output" id="output-obj-9"></div>
        </div>

        <hr>

        <h3>10. Destructuring</h3>
        <p>Desestructuración de objetos.</p>

        <div class="example">
            <textarea id="code-obj-10" readonly>const usuario = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Barcelona"
};

// Básico
const { nombre, edad } = usuario;
console.log("nombre:", nombre, "edad:", edad);

// Renombrar
const { nombre: n, edad: a } = usuario;
console.log("n:", n, "a:", a);

// Defaults
const { nombre, pais = "España" } = usuario;
console.log("pais:", pais);

// Rest
const { nombre, ...datos } = usuario;
console.log("datos:", datos);</textarea>
            <button onclick="runCode('code-obj-10')">Ejecutar</button>
            <div class="output" id="output-obj-10"></div>
        </div>

        <hr>

        <h3>11. Descriptores de Propiedades</h3>
        <p>Configurar propiedades avanzadamente.</p>

        <div class="example">
            <textarea id="code-obj-11" readonly>const objeto = {};

Object.defineProperty(objeto, 'nombre', {
    value: 'Juan',
    writable: false,     // No se puede cambiar
    enumerable: true,    // Aparece en Object.keys()
    configurable: false  // No se puede reconfigurar
});

console.log(objeto.nombre);

// Intentar cambiar (fallará silenciosamente o error)
try {
    objeto.nombre = 'Ana';
} catch(e) {
    console.log("Error:", e.message);
}

// Ver descriptor
console.log("Descriptor:", 
    Object.getOwnPropertyDescriptor(objeto, 'nombre'));</textarea>
            <button onclick="runCode('code-obj-11')">Ejecutar</button>
            <div class="output" id="output-obj-11"></div>
        </div>

        <hr>

        <h3>12. Getters y Setters</h3>
        <p>Propiedades calculadas.</p>

        <div class="example">
            <textarea id="code-obj-12" readonly>const usuario = {
    _nombre: 'Juan',
    
    get nombre() {
        console.log("Accediendo a nombre");
        return this._nombre.toUpperCase();
    },
    
    set nombre(valor) {
        console.log("Asignando nombre");
        this._nombre = valor;
    }
};

console.log(usuario.nombre);
usuario.nombre = 'Ana';
console.log(usuario.nombre);</textarea>
            <button onclick="runCode('code-obj-12')">Ejecutar</button>
            <div class="output" id="output-obj-12"></div>
        </div>

        <hr>

        <h3>13. Copia Superficial vs Profunda</h3>
        <p>Diferencia entre copias.</p>

        <div class="example">
            <textarea id="code-obj-13" readonly>const original = {
    nombre: 'Juan',
    direccion: { calle: 'Mayor', ciudad: 'Madrid' }
};

// Copia superficial
const superficial = { ...original };
superficial.nombre = 'Ana';
superficial.direccion.ciudad = 'Barcelona';

console.log("Original:", original);
console.log("Superficial:", superficial);

// Copia profunda
const profunda = JSON.parse(JSON.stringify(original));
profunda.direccion.ciudad = 'Valencia';

console.log("\\nDespués de profunda:");
console.log("Original:", original);
console.log("Profunda:", profunda);</textarea>
            <button onclick="runCode('code-obj-13')">Ejecutar</button>
            <div class="output" id="output-obj-13"></div>
        </div>

        <hr>

        <h3>14. Freeze, Seal, Prevent</h3>
        <p>Proteger objetos.</p>

        <div class="example">
            <textarea id="code-obj-14" readonly>const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = { a: 1 };

// Object.freeze: no cambiar, agregar o eliminar
Object.freeze(obj1);
obj1.a = 2; // No funcionará
obj1.b = 2; // No funcionará
console.log("Frozen:", obj1);

// Object.seal: no agregar ni eliminar, pero sí cambiar
Object.seal(obj2);
obj2.a = 2; // Funciona
obj2.b = 3; // No funcionará
console.log("Sealed:", obj2);

// Object.preventExtensions: no agregar
Object.preventExtensions(obj3);
obj3.a = 2; // Funciona
obj3.b = 3; // No funcionará
console.log("Prevented:", obj3);</textarea>
            <button onclick="runCode('code-obj-14')">Ejecutar</button>
            <div class="output" id="output-obj-14"></div>
        </div>

        <hr>

        <h3>15. Iteración</h3>
        <p>Diferentes formas de iterar objetos.</p>

        <div class="example">
            <textarea id="code-obj-15" readonly>const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

console.log("for...in:");
for (const clave in persona) {
    console.log(\`\${clave}: \${persona[clave]}\`);
}

console.log("\\nObject.keys:");
Object.keys(persona).forEach(clave => {
    console.log(\`\${clave}: \${persona[clave]}\`);
});

console.log("\\nObject.entries:");
Object.entries(persona).forEach(([clave, valor]) => {
    console.log(\`\${clave}: \${valor}\`);
});</textarea>
            <button onclick="runCode('code-obj-15')">Ejecutar</button>
            <div class="output" id="output-obj-15"></div>
        </div>

        <hr>

        <h3>16. Cálculo de Valores</h3>
        <p>Usar objetos para mapeos y búsquedas.</p>

        <div class="example">
            <textarea id="code-obj-16" readonly>// Mapeo de estados
const estados = {
    1: 'Activo',
    2: 'Inactivo',
    3: 'Pausado'
};

console.log("Estado 1:", estados[1]);

// Diccionario de traducciones
const traducciones = {
    'hello': 'hola',
    'goodbye': 'adiós',
    'thanks': 'gracias'
};

console.log("'hello':", traducciones['hello']);

// Contador
const contador = {};
['a', 'b', 'a', 'c', 'b', 'a'].forEach(letra => {
    contador[letra] = (contador[letra] || 0) + 1;
});
console.log("Contador:", contador);</textarea>
            <button onclick="runCode('code-obj-16')">Ejecutar</button>
            <div class="output" id="output-obj-16"></div>
        </div>

        <hr>

        <h3>17. Combinar Objetos</h3>
        <p>Fusionar múltiples objetos.</p>

        <div class="example">
            <textarea id="code-obj-17" readonly>function combinar(...objetos) {
    return objetos.reduce((acc, obj) => ({
        ...acc,
        ...obj
    }), {});
}

const config1 = { timeout: 5000, retries: 3 };
const config2 = { timeout: 10000, debug: true };
const config3 = { debug: false, verbose: true };

const final = combinar(config1, config2, config3);
console.log("Combinado:", final);</textarea>
            <button onclick="runCode('code-obj-17')">Ejecutar</button>
            <div class="output" id="output-obj-17"></div>
        </div>

        <hr>

        <h3>18. Invertir Objeto</h3>
        <p>Intercambiar claves y valores.</p>

        <div class="example">
            <textarea id="code-obj-18" readonly>function invertir(obj) {
    return Object.entries(obj).reduce(
        (acc, [clave, valor]) => ({
            ...acc,
            [valor]: clave
        }), 
        {}
    );
}

const meses = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo'
};

const mesInvertido = invertir(meses);
console.log("Original:", meses);
console.log("Invertido:", mesInvertido);
console.log("Acceso:", mesInvertido['Febrero']);</textarea>
            <button onclick="runCode('code-obj-18')">Ejecutar</button>
            <div class="output" id="output-obj-18"></div>
        </div>

        <hr>

        <h3>19. Filtrar Objeto</h3>
        <p>Seleccionar propiedades específicas.</p>

        <div class="example">
            <textarea id="code-obj-19" readonly>function filtrar(obj, cond) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => cond(k, v))
    );
}

const usuario = {
    nombre: 'Juan',
    edad: 30,
    email: 'juan@email.com',
    telefono: '555-1234'
};

// Por tipo
const strings = filtrar(usuario, (k, v) => typeof v === 'string');
console.log("Strings:", strings);

// Por valor
const noVacío = filtrar(usuario, (k, v) => v);
console.log("No vacío:", noVacío);</textarea>
            <button onclick="runCode('code-obj-19')">Ejecutar</button>
            <div class="output" id="output-obj-19"></div>
        </div>

        <hr>

        <h3>20. Transformar Objeto</h3>
        <p>Modificar estructura de objeto.</p>

        <div class="example">
            <textarea id="code-obj-20" readonly>function transformar(obj, mapper) {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, mapper(v)])
    );
}

const numeros = {
    a: 1,
    b: 2,
    c: 3
};

const duplicados = transformar(numeros, n => n * 2);
console.log("Original:", numeros);
console.log("Duplicados:", duplicados);

// Strings a mayúsculas
const personas = {
    juan: 'juan',
    ana: 'ana',
    maria: 'maria'
};

const mayusculas = transformar(personas, s => s.toUpperCase());
console.log("Mayúsculas:", mayusculas);</textarea>
            <button onclick="runCode('code-obj-20')">Ejecutar</button>
            <div class="output" id="output-obj-20"></div>
        </div>

        <hr>

        <h3>21. Best Practices</h3>
        <p>Mejores prácticas con objetos.</p>

        <div class="example">
            <textarea id="code-obj-21" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar const para objetos");
console.log("✅ Desestructuración para acceso limpio");
console.log("✅ Spread operator para copias");
console.log("✅ Object.keys/values/entries para iterar");
console.log("✅ Preferir métodos de Object");
console.log("\\n✅ Usar claves descriptivas");
console.log("✅ Métodos cortos { método() {} }");
console.log("\\n❌ No confundir = con ==");
console.log("❌ Cuidado con copia superficial");</textarea>
            <button onclick="runCode('code-obj-21')">Ejecutar</button>
            <div class="output" id="output-obj-21"></div>
        </div>

    </section>
`;
