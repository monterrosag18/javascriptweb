const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Validación de Datos</h2>
        <p>Técnicas para validar entrada y garantizar integridad de datos.</p>

        <h3>1. Validación Básica</h3>
        <p>Verificaciones simples.</p>

        <div class="example">
            <textarea id="code-valid-1" readonly>// Verificar tipo
function esNumero(valor) {
    return typeof valor === 'number' && !isNaN(valor);
}

// Verificar rango
function esEnRango(valor, min, max) {
    return esNumero(valor) && valor >= min && valor <= max;
}

// Verificar string vacío
function noVacio(valor) {
    return typeof valor === 'string' && valor.trim().length > 0;
}

// Verificar array
function esArray(valor) {
    return Array.isArray(valor);
}

console.log("Tipos:");
console.log("esNumero(42):", esNumero(42));
console.log("esNumero('42'):", esNumero('42'));
console.log("esNumero(NaN):", esNumero(NaN));

console.log("\\nRango:");
console.log("esEnRango(5, 1, 10):", esEnRango(5, 1, 10));
console.log("esEnRango(15, 1, 10):", esEnRango(15, 1, 10));

console.log("\\nString:");
console.log("noVacio('hola'):", noVacio('hola'));
console.log("noVacio(''):", noVacio(''));
console.log("noVacio('   '):", noVacio('   '));</textarea>
            <button onclick="runCode('code-valid-1')">Ejecutar</button>
            <div class="output" id="output-valid-1"></div>
        </div>

        <hr>

        <h3>2. Validación de Strings</h3>
        <p>Patrones y formato.</p>

        <div class="example">
            <textarea id="code-valid-2" readonly>// Email
function esEmail(email) {
    const regex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    return regex.test(email);
}

// URL
function esURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Teléfono
function esTelefono(tel) {
    return /^\+?[\d\s\-()]{7,}$/.test(tel);
}

// Longitud
function tieneLongitud(str, min, max) {
    const len = str.length;
    return len >= min && len <= max;
}

console.log("Email:");
console.log("admin@example.com:", esEmail('admin@example.com'));
console.log("invalido@:", esEmail('invalido@'));

console.log("\\nURL:");
console.log("https://example.com:", esURL('https://example.com'));
console.log("no-url:", esURL('no-url'));

console.log("\\nTeléfono:");
console.log("+34 555-123-4567:", esTelefono('+34 555-123-4567'));
console.log("invalid:", esTelefono('abc'));

console.log("\\nLongitud:");
console.log("tieneLongitud('hola', 2, 10):", tieneLongitud('hola', 2, 10));</textarea>
            <button onclick="runCode('code-valid-2')">Ejecutar</button>
            <div class="output" id="output-valid-2"></div>
        </div>

        <hr>

        <h3>3. Validador de Objeto</h3>
        <p>Validación estructurada.</p>

        <div class="example">
            <textarea id="code-valid-3" readonly>class Validador {
    constructor() {
        this.reglas = {};
        this.errores = {};
    }
    
    agregar(campo, validadores) {
        this.reglas[campo] = validadores;
        return this;
    }
    
    validar(datos) {
        this.errores = {};
        
        for (const [campo, validadores] of Object.entries(this.reglas)) {
            const valor = datos[campo];
            
            for (const validador of validadores) {
                const resultado = validador(valor);
                if (resultado !== true) {
                    if (!this.errores[campo]) {
                        this.errores[campo] = [];
                    }
                    this.errores[campo].push(resultado);
                }
            }
        }
        
        return Object.keys(this.errores).length === 0;
    }
    
    obtenerErrores() {
        return this.errores;
    }
}

// Validadores reutilizables
const validadores = {
    requerido: (v) => (v ? true : 'Requerido'),
    email: (v) => /^[^@]+@[^@]+\.[a-z]+$/i.test(v) ? true : 'Email inválido',
    minLongitud: (n) => (v) => v.length >= n ? true : \`Mín. \${n} caracteres\`,
    numero: (v) => !isNaN(v) && v !== '' ? true : 'Debe ser número',
    mayor: (n) => (v) => v > n ? true : \`Debe ser > \${n}\`
};

// Usar
const val = new Validador();
val.agregar('nombre', [validadores.requerido, validadores.minLongitud(3)]);
val.agregar('email', [validadores.requerido, validadores.email]);
val.agregar('edad', [validadores.numero, validadores.mayor(18)]);

const datos1 = { nombre: 'Jo', email: 'no', edad: 15 };
const datos2 = { nombre: 'Juan', email: 'juan@email.com', edad: 25 };

console.log("Datos inválidos:");
val.validar(datos1);
console.log(val.obtenerErrores());

console.log("\\nDatos válidos:");
console.log("¿Válido?:", val.validar(datos2));</textarea>
            <button onclick="runCode('code-valid-3')">Ejecutar</button>
            <div class="output" id="output-valid-3"></div>
        </div>

        <hr>

        <h3>4. Esquema de Validación</h3>
        <p>Validación declarativa.</p>

        <div class="example">
            <textarea id="code-valid-4" readonly>const esquema = {
    nombre: {
        tipo: 'string',
        requerido: true,
        minLongitud: 3,
        maxLongitud: 50
    },
    email: {
        tipo: 'string',
        requerido: true,
        patron: /^[^@]+@[^@]+\.[a-z]+$/i
    },
    edad: {
        tipo: 'number',
        requerido: true,
        minimo: 0,
        maximo: 150
    },
    roles: {
        tipo: 'array',
        items: { tipo: 'string' }
    }
};

function validarConEsquema(datos, esquema) {
    const errores = {};
    
    for (const [campo, config] of Object.entries(esquema)) {
        const valor = datos[campo];
        const campoErrores = [];
        
        // Requerido
        if (config.requerido && !valor) {
            campoErrores.push('Requerido');
            continue;
        }
        
        if (!valor) continue;
        
        // Tipo
        if (config.tipo && typeof valor !== config.tipo) {
            campoErrores.push(\`Tipo debe ser \${config.tipo}\`);
        }
        
        // Longitud
        if (config.minLongitud && valor.length < config.minLongitud) {
            campoErrores.push(\`Mín. \${config.minLongitud}\`);
        }
        
        // Patrón
        if (config.patron && !config.patron.test(valor)) {
            campoErrores.push('Formato inválido');
        }
        
        // Rango
        if (config.minimo !== undefined && valor < config.minimo) {
            campoErrores.push(\`Mín. \${config.minimo}\`);
        }
        
        if (campoErrores.length > 0) {
            errores[campo] = campoErrores;
        }
    }
    
    return errores;
}

const datos = {
    nombre: 'ab',
    email: 'invalido',
    edad: 200,
    roles: ['admin']
};

const errores = validarConEsquema(datos, esquema);
console.log("Errores:", errores);</textarea>
            <button onclick="runCode('code-valid-4')">Ejecutar</button>
            <div class="output" id="output-valid-4"></div>
        </div>

        <hr>

        <h3>5. Validación de Números</h3>
        <p>Casos con números.</p>

        <div class="example">
            <textarea id="code-valid-5" readonly>// Número válido
function esNumeroValido(valor) {
    return typeof valor === 'number' && !isNaN(valor) && isFinite(valor);
}

// Número entero
function esEntero(valor) {
    return esNumeroValido(valor) && Number.isInteger(valor);
}

// Número positivo
function esPositivo(valor) {
    return esNumeroValido(valor) && valor > 0;
}

// Dentro de rango
function enRango(valor, min, max) {
    return esNumeroValido(valor) && valor >= min && valor <= max;
}

// Decimal específico
function esDecimal(valor, decimales = 2) {
    if (!esNumeroValido(valor)) return false;
    const str = valor.toString();
    const partes = str.split('.');
    return partes[1]?.length <= decimales;
}

console.log("Número válido:");
console.log("123:", esNumeroValido(123));
console.log("NaN:", esNumeroValido(NaN));
console.log("Infinity:", esNumeroValido(Infinity));

console.log("\\nEntero:");
console.log("123:", esEntero(123));
console.log("123.5:", esEntero(123.5));

console.log("\\nPositivo:");
console.log("5:", esPositivo(5));
console.log("-5:", esPositivo(-5));

console.log("\\nRango [1, 100]:");
console.log("50:", enRango(50, 1, 100));
console.log("150:", enRango(150, 1, 100));

console.log("\\nDecimal (2):");
console.log("19.99:", esDecimal(19.99, 2));
console.log("19.999:", esDecimal(19.999, 2));</textarea>
            <button onclick="runCode('code-valid-5')">Ejecutar</button>
            <div class="output" id="output-valid-5"></div>
        </div>

        <hr>

        <h3>6. Sanitización</h3>
        <p>Limpiar entrada.</p>

        <div class="example">
            <textarea id="code-valid-6" readonly>// Trim
function limpiarEspacios(str) {
    return str.trim();
}

// Solo números
function soloNumeros(str) {
    return str.replace(/\D/g, '');
}

// Solo letras
function soloLetras(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

// Lowercase
function aMinusculas(str) {
    return str.toLowerCase();
}

// Capitalizar
function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Remover etiquetas HTML (básico)
function sinHTML(str) {
    return str.replace(/<[^>]*>/g, '');
}

console.log("Limpiar espacios: '  hola  ' ->", \`'\${limpiarEspacios('  hola  ')}'\`);
console.log("Solo números: 'tel 555-123' ->", soloNumeros('tel 555-123'));
console.log("Solo letras: 'test123' ->", soloLetras('test123'));
console.log("Minúsculas: 'HOLA' ->", aMinusculas('HOLA'));
console.log("Capitalizar: 'hOLA' ->", capitalizar('hOLA'));
console.log("Sin HTML: '<p>Hola</p>' ->", sinHTML('<p>Hola</p>'));</textarea>
            <button onclick="runCode('code-valid-6')">Ejecutar</button>
            <div class="output" id="output-valid-6"></div>
        </div>

        <hr>

        <h3>7. Validación de Fecha</h3>
        <p>Fechas válidas.</p>

        <div class="example">
            <textarea id="code-valid-7" readonly>// Fecha válida
function esFechaValida(fecha) {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha);
    }
    return fecha instanceof Date && !isNaN(fecha);
}

// Mayor de edad
function esMayorDeEdad(fechaNacimiento) {
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        return edad - 1 >= 18;
    }
    return edad >= 18;
}

// Fecha en futuro
function enFuturo(fecha) {
    return fecha > new Date();
}

// Entre dos fechas
function entreFechas(fecha, inicio, fin) {
    return fecha >= inicio && fecha <= fin;
}

console.log("Fecha válida:");
console.log("'2024-01-01':", esFechaValida('2024-01-01'));
console.log("'invalid':", esFechaValida('invalid'));

console.log("\\nMayor de edad:");
const nacimiento = new Date('2000-01-01');
console.log("'2000-01-01':", esMayorDeEdad(nacimiento));

console.log("\\nEn futuro:");
const futura = new Date('2099-01-01');
console.log("'2099-01-01':", enFuturo(futura));

console.log("\\nEntre fechas:");
const f1 = new Date('2024-01-01');
const f2 = new Date('2024-06-15');
const f3 = new Date('2024-12-31');
console.log("'2024-06-15' entre '2024-01-01' y '2024-12-31':", entreFechas(f2, f1, f3));</textarea>
            <button onclick="runCode('code-valid-7')">Ejecutar</button>
            <div class="output" id="output-valid-7"></div>
        </div>

        <hr>

        <h3>8. Validación de Tarjeta de Crédito</h3>
        <p>Algoritmo de Luhn.</p>

        <div class="example">
            <textarea id="code-valid-8" readonly>// Validar número con algoritmo de Luhn
function validarLuhn(numero) {
    const digitos = numero.toString().split('').reverse();
    let suma = 0;
    
    for (let i = 0; i < digitos.length; i++) {
        let digito = parseInt(digitos[i]);
        
        if (i % 2 === 1) { // Posiciones pares (desde el final)
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        
        suma += digito;
    }
    
    return suma % 10 === 0;
}

// Formato de tarjeta
function esTarjetaValida(numero) {
    const limpio = numero.replace(/\s/g, '');
    
    // 13-19 dígitos
    if (!/^\d{13,19}$/.test(limpio)) {
        return false;
    }
    
    // Algoritmo Luhn
    return validarLuhn(limpio);
}

// Tipo de tarjeta
function tipoTarjeta(numero) {
    const limpio = numero.replace(/\s/g, '');
    
    if (/^4/.test(limpio)) return 'Visa';
    if (/^5[1-5]/.test(limpio)) return 'MasterCard';
    if (/^3[47]/.test(limpio)) return 'AmEx';
    if (/^6(?:011|5)/.test(limpio)) return 'Discover';
    return 'Desconocida';
}

console.log("Validar tarjeta:");
console.log("4532015112830366:", esTarjetaValida('4532015112830366'));
console.log("1234 5678 9012 3456:", esTarjetaValida('1234 5678 9012 3456'));

console.log("\\nTipo:");
console.log("4532015112830366:", tipoTarjeta('4532015112830366'));
console.log("5425233010103442:", tipoTarjeta('5425233010103442'));</textarea>
            <button onclick="runCode('code-valid-8')">Ejecutar</button>
            <div class="output" id="output-valid-8"></div>
        </div>

        <hr>

        <h3>9. Validación con Promesas</h3>
        <p>Validación asíncrona.</p>

        <div class="example">
            <textarea id="code-valid-9" readonly>// Simular verificación en servidor
function verificarEmailEnServidor(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const existe = ['admin@example.com', 'user@example.com'].includes(email);
            resolve(!existe); // true si está disponible
        }, 500);
    });
}

async function validarFormulario(datos) {
    const errores = {};
    
    // Validación local
    if (!datos.nombre || datos.nombre.length < 3) {
        errores.nombre = 'Nombre requerido, mín. 3 caracteres';
    }
    
    const regexEmail = /^[^@]+@[^@]+\.[a-z]+$/i;
    if (!regexEmail.test(datos.email)) {
        errores.email = 'Email inválido';
    }
    
    if (datos.password?.length < 8) {
        errores.password = 'Contraseña mín. 8 caracteres';
    }
    
    // Validación asíncrona
    if (!errores.email) {
        const disponible = await verificarEmailEnServidor(datos.email);
        if (!disponible) {
            errores.email = 'Email ya registrado';
        }
    }
    
    return errores;
}

async function prueba() {
    console.log("Validando...");
    
    const resultado = await validarFormulario({
        nombre: 'Juan',
        email: 'admin@example.com',
        password: 'segura123'
    });
    
    console.log("Errores:", resultado);
}

await prueba();</textarea>
            <button onclick="runCode('code-valid-9')">Ejecutar</button>
            <div class="output" id="output-valid-9"></div>
        </div>

        <hr>

        <h3>10. Best Practices</h3>
        <p>Mejores prácticas.</p>

        <div class="example">
            <textarea id="code-valid-10" readonly>console.log("VALIDACIÓN:");
console.log("✅ Validar en cliente Y servidor");
console.log("✅ Mensajes de error claros");
console.log("✅ Sanitizar entrada");
console.log("✅ Usar mensajes localizados");
console.log("✅ Feedback inmediato");

console.log("\\n❌ Evitar:");
console.log("❌ Solo validación cliente");
console.log("❌ Confiar en el usuario");
console.log("❌ Mensajes técnicos");
console.log("❌ Revelar información sensible");

console.log("\\n💡 Tips:");
console.log("💡 Validación temprana");
console.log("💡 Reutilizar validadores");
console.log("💡 Usar librerías (zod, joi)");
console.log("💡 Schema validation");</textarea>
            <button onclick="runCode('code-valid-10')">Ejecutar</button>
            <div class="output" id="output-valid-10"></div>
        </div>

    </section>
`;
