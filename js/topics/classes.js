const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Clases y Objetos</h2>
        <p>Sintaxis moderna para crear objetos y manejar herencia. Las clases son azúcar sintáctico sobre prototipos.</p>

        <h3>1. Clase Básica</h3>
        <p>Declarar una clase con constructor y métodos.</p>
        
        <div class="example">
            <textarea id="code-class-1" readonly>class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        console.log(\`Hola, soy \${this.nombre}\`);
    }
    
    cumpleanios() {
        this.edad++;
        console.log(\`Ahora tengo \${this.edad} años\`);
    }
}

const juan = new Persona("Juan", 30);
juan.saludar();
juan.cumpleanios();</textarea>
            <button onclick="runCode('code-class-1')">Ejecutar</button>
            <div class="output" id="output-class-1"></div>
        </div>

        <hr>

        <h3>2. Constructor</h3>
        <p>El constructor inicializa la instancia.</p>

        <div class="example">
            <textarea id="code-class-2" readonly>class Coche {
    constructor(marca, modelo, anio) {
        console.log("Creando coche...");
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2020);
console.log("Coche:", coche1);

const coche2 = new Coche("Honda", "Civic", 2021);
console.log("Coche:", coche2);</textarea>
            <button onclick="runCode('code-class-2')">Ejecutar</button>
            <div class="output" id="output-class-2"></div>
        </div>

        <hr>

        <h3>3. Métodos de Instancia</h3>
        <p>Métodos que pertenecen a cada instancia.</p>

        <div class="example">
            <textarea id="code-class-3" readonly>class Calculadora {
    constructor() {
        this.resultado = 0;
    }
    
    sumar(n) {
        this.resultado += n;
        return this;
    }
    
    restar(n) {
        this.resultado -= n;
        return this;
    }
    
    mostrar() {
        console.log("Resultado:", this.resultado);
    }
}

const calc = new Calculadora();
calc.sumar(10).sumar(5).restar(3).mostrar();</textarea>
            <button onclick="runCode('code-class-3')">Ejecutar</button>
            <div class="output" id="output-class-3"></div>
        </div>

        <hr>

        <h3>4. Getters y Setters</h3>
        <p>Controlar acceso y modificación de propiedades.</p>

        <div class="example">
            <textarea id="code-class-4" readonly>class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    get area() {
        return this.ancho * this.alto;
    }
    
    get perimetro() {
        return 2 * (this.ancho + this.alto);
    }
    
    set dimensiones(valor) {
        [this.ancho, this.alto] = valor;
    }
}

const rect = new Rectangulo(10, 5);
console.log("Área:", rect.area);
console.log("Perímetro:", rect.perimetro);

rect.dimensiones = [20, 10];
console.log("Nueva área:", rect.area);</textarea>
            <button onclick="runCode('code-class-4')">Ejecutar</button>
            <div class="output" id="output-class-4"></div>
        </div>

        <hr>

        <h3>5. Métodos Estáticos</h3>
        <p>Métodos que pertenecen a la clase, no a instancias.</p>

        <div class="example">
            <textarea id="code-class-5" readonly>class Utilidades {
    static PI = 3.14159;
    
    static areaCirculo(radio) {
        return this.PI * radio ** 2;
    }
    
    static maximo(a, b) {
        return a > b ? a : b;
    }
}

console.log("PI:", Utilidades.PI);
console.log("Área círculo r=5:", Utilidades.areaCirculo(5));
console.log("Máximo(10, 20):", Utilidades.maximo(10, 20));

// No se puede llamar desde instancia
// const u = new Utilidades();
// u.maximo(1, 2); // Error</textarea>
            <button onclick="runCode('code-class-5')">Ejecutar</button>
            <div class="output" id="output-class-5"></div>
        </div>

        <hr>

        <h3>6. Herencia con extends</h3>
        <p>Una clase puede heredar de otra.</p>

        <div class="example">
            <textarea id="code-class-6" readonly>class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    comer() {
        console.log(\`\${this.nombre} está comiendo\`);
    }
}

class Perro extends Animal {
    ladrar() {
        console.log(\`\${this.nombre} dice: ¡Guau!\`);
    }
}

const firulais = new Perro("Firulais");
firulais.comer();  // Heredado de Animal
firulais.ladrar(); // Propio de Perro</textarea>
            <button onclick="runCode('code-class-6')">Ejecutar</button>
            <div class="output" id="output-class-6"></div>
        </div>

        <hr>

        <h3>7. Super en Constructor</h3>
        <p>Llamar al constructor de la clase padre.</p>

        <div class="example">
            <textarea id="code-class-7" readonly>class Vehiculo {
    constructor(marca) {
        this.marca = marca;
        console.log(\`Vehículo \${marca} creado\`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca); // Llamar constructor padre
        this.modelo = modelo;
        console.log(\`Modelo \${modelo} añadido\`);
    }
}

const miCoche = new Coche("Toyota", "Corolla");
console.log("Coche:", miCoche);</textarea>
            <button onclick="runCode('code-class-7')">Ejecutar</button>
            <div class="output" id="output-class-7"></div>
        </div>

        <hr>

        <h3>8. Super en Métodos</h3>
        <p>Llamar métodos de la clase padre.</p>

        <div class="example">
            <textarea id="code-class-8" readonly>class Figura {
    constructor(color) {
        this.color = color;
    }
    
    describir() {
        console.log(\`Figura de color \${this.color}\`);
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }
    
    describir() {
        super.describir(); // Llamar método padre
        console.log(\`Radio: \${this.radio}\`);
    }
}

const circulo = new Circulo("rojo", 5);
circulo.describir();</textarea>
            <button onclick="runCode('code-class-8')">Ejecutar</button>
            <div class="output" id="output-class-8"></div>
        </div>

        <hr>

        <h3>9. Propiedades Privadas</h3>
        <p>Usar # para propiedades privadas.</p>

        <div class="example">
            <textarea id="code-class-9" readonly>class CuentaBancaria {
    #saldo = 0;
    
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    
    depositar(monto) {
        this.#saldo += monto;
        console.log(\`Depositado: \${monto}\`);
    }
    
    obtenerSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log("Saldo:", cuenta.obtenerSaldo());

// console.log(cuenta.#saldo); // Error: propiedad privada</textarea>
            <button onclick="runCode('code-class-9')">Ejecutar</button>
            <div class="output" id="output-class-9"></div>
        </div>

        <hr>

        <h3>10. Métodos Privados</h3>
        <p>Métodos privados con #.</p>

        <div class="example">
            <textarea id="code-class-10" readonly>class Usuario {
    #validarEmail(email) {
        return email.includes("@");
    }
    
    registrar(email) {
        if (this.#validarEmail(email)) {
            console.log(\`Email \${email} válido\`);
            return true;
        } else {
            console.log("Email inválido");
            return false;
        }
    }
}

const user = new Usuario();
user.registrar("ana@example.com");
user.registrar("invalido");

// user.#validarEmail("test"); // Error: método privado</textarea>
            <button onclick="runCode('code-class-10')">Ejecutar</button>
            <div class="output" id="output-class-10"></div>
        </div>

        <hr>

        <h3>11. Propiedades Estáticas</h3>
        <p>Propiedades compartidas por toda la clase.</p>

        <div class="example">
            <textarea id="code-class-11" readonly>class Contador {
    static cuenta = 0;
    
    constructor() {
        Contador.cuenta++;
    }
    
    static obtenerCuenta() {
        return Contador.cuenta;
    }
}

console.log("Cuenta inicial:", Contador.cuenta);

new Contador();
new Contador();
new Contador();

console.log("Cuenta final:", Contador.obtenerCuenta());</textarea>
            <button onclick="runCode('code-class-11')">Ejecutar</button>
            <div class="output" id="output-class-11"></div>
        </div>

        <hr>

        <h3>12. Factory Methods</h3>
        <p>Métodos estáticos para crear instancias.</p>

        <div class="example">
            <textarea id="code-class-12" readonly>class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static enOrigen() {
        return new Punto(0, 0);
    }
    
    static aleatorio() {
        return new Punto(
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10)
        );
    }
}

const origen = Punto.enOrigen();
console.log("Origen:", origen);

const aleatorio = Punto.aleatorio();
console.log("Aleatorio:", aleatorio);</textarea>
            <button onclick="runCode('code-class-12')">Ejecutar</button>
            <div class="output" id="output-class-12"></div>
        </div>

        <hr>

        <h3>13. Herencia Múltiple con Mixins</h3>
        <p>Simular herencia múltiple.</p>

        <div class="example">
            <textarea id="code-class-13" readonly>const nadador = {
    nadar() {
        console.log(\`\${this.nombre} está nadando\`);
    }
};

const volador = {
    volar() {
        console.log(\`\${this.nombre} está volando\`);
    }
};

class Pato {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Object.assign(Pato.prototype, nadador, volador);

const donald = new Pato("Donald");
donald.nadar();
donald.volar();</textarea>
            <button onclick="runCode('code-class-13')">Ejecutar</button>
            <div class="output" id="output-class-13"></div>
        </div>

        <hr>

        <h3>14. instanceof</h3>
        <p>Verificar tipo de instancia.</p>

        <div class="example">
            <textarea id="code-class-14" readonly>class Animal {}
class Perro extends Animal {}
class Gato extends Animal {}

const firulais = new Perro();
const misu = new Gato();

console.log("firulais instanceof Perro:", firulais instanceof Perro);
console.log("firulais instanceof Animal:", firulais instanceof Animal);
console.log("firulais instanceof Gato:", firulais instanceof Gato);
console.log("misu instanceof Gato:", misu instanceof Gato);</textarea>
            <button onclick="runCode('code-class-14')">Ejecutar</button>
            <div class="output" id="output-class-14"></div>
        </div>

        <hr>

        <h3>15. Class Expressions</h3>
        <p>Clases como expresiones.</p>

        <div class="example">
            <textarea id="code-class-15" readonly>// Clase anónima asignada a variable
const MiClase = class {
    constructor(valor) {
        this.valor = valor;
    }
    
    mostrar() {
        console.log("Valor:", this.valor);
    }
};

const instancia = new MiClase(42);
instancia.mostrar();

// Clase nombrada en expresión
const Otra = class ClaseNombrada {
    constructor() {
        console.log("Creada");
    }
};

new Otra();</textarea>
            <button onclick="runCode('code-class-15')">Ejecutar</button>
            <div class="output" id="output-class-15"></div>
        </div>

        <hr>

        <h3>16. toString Override</h3>
        <p>Personalizar conversión a string.</p>

        <div class="example">
            <textarea id="code-class-16" readonly>class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    toString() {
        return \`Persona(\${this.nombre}, \${this.edad})\`;
    }
}

const juan = new Persona("Juan", 30);

console.log("String:", juan.toString());
console.log("Template:", \`Info: \${juan}\`);
console.log("Concat:", "Datos: " + juan);</textarea>
            <button onclick="runCode('code-class-16')">Ejecutar</button>
            <div class="output" id="output-class-16"></div>
        </div>

        <hr>

        <h3>17. Symbol.iterator</h3>
        <p>Hacer clase iterable.</p>

        <div class="example">
            <textarea id="code-class-17" readonly>class Rango {
    constructor(inicio, fin) {
        this.inicio = inicio;
        this.fin = fin;
    }
    
    *[Symbol.iterator]() {
        for (let i = this.inicio; i <= this.fin; i++) {
            yield i;
        }
    }
}

const rango = new Rango(1, 5);

console.log("For...of:");
for (const num of rango) {
    console.log(num);
}

console.log("Array:", [...rango]);</textarea>
            <button onclick="runCode('code-class-17')">Ejecutar</button>
            <div class="output" id="output-class-17"></div>
        </div>

        <hr>

        <h3>18. Composición vs Herencia</h3>
        <p>Preferir composición cuando sea posible.</p>

        <div class="example">
            <textarea id="code-class-18" readonly>// Composición
class Motor {
    arrancar() {
        console.log("Motor arrancado");
    }
}

class Coche {
    constructor() {
        this.motor = new Motor();
    }
    
    arrancar() {
        this.motor.arrancar();
        console.log("Coche listo");
    }
}

const coche = new Coche();
coche.arrancar();

console.log("\\nComposición > Herencia para flexibilidad");</textarea>
            <button onclick="runCode('code-class-18')">Ejecutar</button>
            <div class="output" id="output-class-18"></div>
        </div>

        <hr>

        <h3>19. Abstract Pattern</h3>
        <p>Simular clases abstractas.</p>

        <div class="example">
            <textarea id="code-class-19" readonly>class Forma {
    constructor() {
        if (this.constructor === Forma) {
            throw new Error("No se puede instanciar clase abstracta");
        }
    }
    
    area() {
        throw new Error("Método area() debe ser implementado");
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    
    area() {
        return Math.PI * this.radio ** 2;
    }
}

const c = new Circulo(5);
console.log("Área:", c.area().toFixed(2));</textarea>
            <button onclick="runCode('code-class-19')">Ejecutar</button>
            <div class="output" id="output-class-19"></div>
        </div>

        <hr>

        <h3>20. Singleton Pattern</h3>
        <p>Una sola instancia de la clase.</p>

        <div class="example">
            <textarea id="code-class-20" readonly>class Singleton {
    static #instancia = null;
    
    constructor() {
        if (Singleton.#instancia) {
            return Singleton.#instancia;
        }
        Singleton.#instancia = this;
        this.valor = Math.random();
    }
    
    static obtenerInstancia() {
        if (!Singleton.#instancia) {
            Singleton.#instancia = new Singleton();
        }
        return Singleton.#instancia;
    }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log("Son la misma instancia:", s1 === s2);
console.log("Mismo valor:", s1.valor === s2.valor);</textarea>
            <button onclick="runCode('code-class-20')">Ejecutar</button>
            <div class="output" id="output-class-20"></div>
        </div>

        <hr>

        <h3>21. Builder Pattern</h3>
        <p>Construir objetos paso a paso.</p>

        <div class="example">
            <textarea id="code-class-21" readonly>class Usuario {
    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.email = "";
    }
    
    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }
    
    setEdad(edad) {
        this.edad = edad;
        return this;
    }
    
    setEmail(email) {
        this.email = email;
        return this;
    }
    
    build() {
        return this;
    }
}

const usuario = new Usuario()
    .setNombre("Ana")
    .setEdad(25)
    .setEmail("ana@example.com")
    .build();

console.log("Usuario:", usuario);</textarea>
            <button onclick="runCode('code-class-21')">Ejecutar</button>
            <div class="output" id="output-class-21"></div>
        </div>

        <hr>

        <h3>22. Encadenamiento de Métodos</h3>
        <p>Retornar this para encadenar llamadas.</p>

        <div class="example">
            <textarea id="code-class-22" readonly>class Query {
    constructor() {
        this.partes = [];
    }
    
    select(campos) {
        this.partes.push(\`SELECT \${campos}\`);
        return this;
    }
    
    from(tabla) {
        this.partes.push(\`FROM \${tabla}\`);
        return this;
    }
    
    where(condicion) {
        this.partes.push(\`WHERE \${condicion}\`);
        return this;
    }
    
    build() {
        return this.partes.join(" ");
    }
}

const sql = new Query()
    .select("*")
    .from("usuarios")
    .where("edad > 18")
    .build();

console.log("SQL:", sql);</textarea>
            <button onclick="runCode('code-class-22')">Ejecutar</button>
            <div class="output" id="output-class-22"></div>
        </div>

        <hr>

        <h3>23. Observer Pattern</h3>
        <p>Notificar cambios a observadores.</p>

        <div class="example">
            <textarea id="code-class-23" readonly>class Observable {
    constructor() {
        this.observadores = [];
    }
    
    suscribir(fn) {
        this.observadores.push(fn);
    }
    
    notificar(datos) {
        this.observadores.forEach(fn => fn(datos));
    }
}

const evento = new Observable();

evento.suscribir(datos => console.log("Obs 1:", datos));
evento.suscribir(datos => console.log("Obs 2:", datos * 2));

evento.notificar(10);</textarea>
            <button onclick="runCode('code-class-23')">Ejecutar</button>
            <div class="output" id="output-class-23"></div>
        </div>

        <hr>

        <h3>24. Proxy Pattern</h3>
        <p>Controlar acceso a un objeto.</p>

        <div class="example">
            <textarea id="code-class-24" readonly>class ServicioReal {
    operacion() {
        console.log("Ejecutando operación costosa...");
        return "Resultado";
    }
}

class Proxy {
    constructor() {
        this.servicio = null;
    }
    
    operacion() {
        if (!this.servicio) {
            console.log("Creando servicio...");
            this.servicio = new ServicioReal();
        }
        return this.servicio.operacion();
    }
}

const proxy = new Proxy();
console.log(proxy.operacion());
console.log(proxy.operacion()); // No crea de nuevo</textarea>
            <button onclick="runCode('code-class-24')">Ejecutar</button>
            <div class="output" id="output-class-24"></div>
        </div>

        <hr>

        <h3>25. Validación en Setters</h3>
        <p>Validar datos en setters.</p>

        <div class="example">
            <textarea id="code-class-25" readonly>class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this._precio = precio;
    }
    
    get precio() {
        return this._precio;
    }
    
    set precio(valor) {
        if (valor < 0) {
            throw new Error("Precio no puede ser negativo");
        }
        this._precio = valor;
    }
}

const prod = new Producto("Laptop", 1000);
console.log("Precio:", prod.precio);

prod.precio = 1200;
console.log("Nuevo precio:", prod.precio);

// prod.precio = -100; // Error</textarea>
            <button onclick="runCode('code-class-25')">Ejecutar</button>
            <div class="output" id="output-class-25"></div>
        </div>

        <hr>

        <h3>26. Lazy Loading</h3>
        <p>Cargar propiedades bajo demanda.</p>

        <div class="example">
            <textarea id="code-class-26" readonly>class Datos {
    constructor() {
        this._cache = null;
    }
    
    get datosGrandes() {
        if (!this._cache) {
            console.log("Cargando datos grandes...");
            this._cache = Array.from({ length: 5 }, (_, i) => i + 1);
        }
        return this._cache;
    }
}

const datos = new Datos();
console.log("Primera vez:", datos.datosGrandes);
console.log("Segunda vez:", datos.datosGrandes); // Usa cache</textarea>
            <button onclick="runCode('code-class-26')">Ejecutar</button>
            <div class="output" id="output-class-26"></div>
        </div>

        <hr>

        <h3>27. Method Overriding</h3>
        <p>Sobrescribir métodos en clases hijas.</p>

        <div class="example">
            <textarea id="code-class-27" readonly>class Animal {
    hacerSonido() {
        console.log("Algún sonido");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("¡Guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("¡Miau!");
    }
}

const animales = [new Animal(), new Perro(), new Gato()];

animales.forEach(a => a.hacerSonido());</textarea>
            <button onclick="runCode('code-class-27')">Ejecutar</button>
            <div class="output" id="output-class-27"></div>
        </div>

        <hr>

        <h3>28. Class Fields</h3>
        <p>Declarar propiedades directamente en clase.</p>

        <div class="example">
            <textarea id="code-class-28" readonly>class Config {
    // Propiedades públicas
    host = "localhost";
    port = 8080;
    
    // Propiedad privada
    #apiKey = "secret123";
    
    obtenerConfig() {
        return {
            host: this.host,
            port: this.port,
            key: this.#apiKey
        };
    }
}

const config = new Config();
console.log("Config:", config.obtenerConfig());
console.log("Host:", config.host);</textarea>
            <button onclick="runCode('code-class-28')">Ejecutar</button>
            <div class="output" id="output-class-28"></div>
        </div>

        <hr>

        <h3>29. Protected Members</h3>
        <p>Simular miembros protegidos con convención.</p>

        <div class="example">
            <textarea id="code-class-29" readonly>class Base {
    constructor() {
        this._protegido = "valor protegido"; // Convención _
    }
    
    _metodoProtegido() {
        return "método protegido";
    }
}

class Derivada extends Base {
    usar() {
        console.log("Accediendo:", this._protegido);
        console.log("Llamando:", this._metodoProtegido());
    }
}

const d = new Derivada();
d.usar();

// Nota: _ es solo convención, no es realmente privado</textarea>
            <button onclick="runCode('code-class-29')">Ejecutar</button>
            <div class="output" id="output-class-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con clases.</p>

        <div class="example">
            <textarea id="code-class-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Usar clases para objetos con comportamiento");
console.log("✅ Métodos en prototype (automático en clases)");
console.log("✅ Propiedades privadas con # cuando sea necesario");
console.log("✅ Getters/setters para validación");
console.log("✅ Métodos estáticos para utilidades");
console.log("\\n❌ No abusar de herencia profunda");
console.log("❌ No poner lógica pesada en constructor");
console.log("❌ No usar clases para objetos simples");
console.log("\\n✨ Composición > Herencia en muchos casos");</textarea>
            <button onclick="runCode('code-class-30')">Ejecutar</button>
            <div class="output" id="output-class-30"></div>
        </div>

    </section>
`;
