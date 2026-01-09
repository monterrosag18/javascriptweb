const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Promesas y async/await</h2>
        <p>Herramientas para manejar operaciones asíncronas de forma limpia y ordenada en JavaScript.</p>

        <h3>1. Crear una Promesa Básica</h3>
        <p>Una Promise representa el resultado eventual de una operación asíncrona.</p>
        
        <div class="example">
            <textarea id="code-prom-1" readonly>const promesa = new Promise((resolve, reject) => {
    console.log("Iniciando operación...");
    
    setTimeout(() => {
        resolve("¡Operación exitosa!");
    }, 1000);
});

promesa.then(resultado => {
    console.log("Resultado:", resultado);
});

console.log("Código sigue ejecutándose...");</textarea>
            <button onclick="runCode('code-prom-1')">Ejecutar</button>
            <div class="output" id="output-prom-1"></div>
        </div>

        <hr>

        <h3>2. Promise con Reject</h3>
        <p>Manejar errores en promesas con reject.</p>

        <div class="example">
            <textarea id="code-prom-2" readonly>const promesa = new Promise((resolve, reject) => {
    console.log("Procesando...");
    
    setTimeout(() => {
        const exito = false;
        
        if (exito) {
            resolve("Todo bien");
        } else {
            reject("Algo salió mal");
        }
    }, 1000);
});

promesa
    .then(resultado => console.log("Éxito:", resultado))
    .catch(error => console.log("Error:", error));</textarea>
            <button onclick="runCode('code-prom-2')">Ejecutar</button>
            <div class="output" id="output-prom-2"></div>
        </div>

        <hr>

        <h3>3. Finally en Promesas</h3>
        <p>Código que se ejecuta siempre, haya éxito o error.</p>

        <div class="example">
            <textarea id="code-prom-3" readonly>function operacion(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Completado");
            } else {
                reject("Falló");
            }
        }, 1000);
    });
}

operacion(true)
    .then(r => console.log("Resultado:", r))
    .catch(e => console.log("Error:", e))
    .finally(() => console.log("Operación terminada"));</textarea>
            <button onclick="runCode('code-prom-3')">Ejecutar</button>
            <div class="output" id="output-prom-3"></div>
        </div>

        <hr>

        <h3>4. Encadenamiento de Promesas</h3>
        <p>Ejecutar operaciones asíncronas en secuencia.</p>

        <div class="example">
            <textarea id="code-prom-4" readonly>function paso1() {
    return Promise.resolve("Paso 1 completo");
}

function paso2(resultado) {
    console.log(resultado);
    return Promise.resolve("Paso 2 completo");
}

function paso3(resultado) {
    console.log(resultado);
    return Promise.resolve("Paso 3 completo");
}

paso1()
    .then(resultado => paso2(resultado))
    .then(resultado => paso3(resultado))
    .then(resultado => console.log(resultado));</textarea>
            <button onclick="runCode('code-prom-4')">Ejecutar</button>
            <div class="output" id="output-prom-4"></div>
        </div>

        <hr>

        <h3>5. Promise.resolve y Promise.reject</h3>
        <p>Crear promesas resueltas o rechazadas instantáneamente.</p>

        <div class="example">
            <textarea id="code-prom-5" readonly>const promesaExito = Promise.resolve("Valor inmediato");
promesaExito.then(valor => console.log("Éxito:", valor));

const promesaError = Promise.reject("Error inmediato");
promesaError.catch(error => console.log("Error:", error));

// Útil para convertir valores en promesas
function obtenerDatos(fromCache) {
    if (fromCache) {
        return Promise.resolve("Datos en cache");
    }
    return fetch("url"); // Retorna promesa
}</textarea>
            <button onclick="runCode('code-prom-5')">Ejecutar</button>
            <div class="output" id="output-prom-5"></div>
        </div>

        <hr>

        <h3>6. Promise.all</h3>
        <p>Esperar a que todas las promesas se resuelvan.</p>

        <div class="example">
            <textarea id="code-prom-6" readonly>const promesa1 = Promise.resolve(1);
const promesa2 = Promise.resolve(2);
const promesa3 = Promise.resolve(3);

Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log("Todos los resultados:", resultados);
    });

// Si una falla, todas fallan
const p1 = Promise.resolve("A");
const p2 = Promise.reject("Error en B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .catch(error => console.log("Promise.all falló:", error));</textarea>
            <button onclick="runCode('code-prom-6')">Ejecutar</button>
            <div class="output" id="output-prom-6"></div>
        </div>

        <hr>

        <h3>7. Promise.allSettled</h3>
        <p>Esperar a que todas terminen, sin importar el resultado.</p>

        <div class="example">
            <textarea id="code-prom-7" readonly>const p1 = Promise.resolve("Éxito");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Otro éxito");

Promise.allSettled([p1, p2, p3])
    .then(resultados => {
        console.log("Todos terminaron:");
        resultados.forEach((r, i) => {
            console.log(\`Promesa \${i + 1}:\`, r);
        });
    });</textarea>
            <button onclick="runCode('code-prom-7')">Ejecutar</button>
            <div class="output" id="output-prom-7"></div>
        </div>

        <hr>

        <h3>8. Promise.race</h3>
        <p>La primera promesa que se resuelva gana.</p>

        <div class="example">
            <textarea id="code-prom-8" readonly>const lenta = new Promise(resolve => 
    setTimeout(() => resolve("Lenta"), 2000)
);

const rapida = new Promise(resolve => 
    setTimeout(() => resolve("Rápida"), 500)
);

Promise.race([lenta, rapida])
    .then(ganador => {
        console.log("Primera en resolverse:", ganador);
    });

console.log("Esperando la más rápida...");</textarea>
            <button onclick="runCode('code-prom-8')">Ejecutar</button>
            <div class="output" id="output-prom-8"></div>
        </div>

        <hr>

        <h3>9. Promise.any</h3>
        <p>Primera promesa exitosa gana, ignora las rechazadas.</p>

        <div class="example">
            <textarea id="code-prom-9" readonly>const p1 = Promise.reject("Error 1");
const p2 = new Promise(resolve => 
    setTimeout(() => resolve("Éxito"), 1000)
);
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
    .then(resultado => {
        console.log("Primer éxito:", resultado);
    })
    .catch(error => {
        console.log("Todas fallaron:", error);
    });</textarea>
            <button onclick="runCode('code-prom-9')">Ejecutar</button>
            <div class="output" id="output-prom-9"></div>
        </div>

        <hr>

        <h3>10. Async Function Básica</h3>
        <p>Declarar funciones asíncronas con async.</p>

        <div class="example">
            <textarea id="code-prom-10" readonly>async function miFuncion() {
    console.log("Inicio de función async");
    return "Valor retornado";
}

// Función async siempre retorna una promesa
const resultado = miFuncion();
console.log("Resultado es Promise:", resultado instanceof Promise);

resultado.then(valor => {
    console.log("Valor:", valor);
});</textarea>
            <button onclick="runCode('code-prom-10')">Ejecutar</button>
            <div class="output" id="output-prom-10"></div>
        </div>

        <hr>

        <h3>11. Await Básico</h3>
        <p>Esperar promesas con await.</p>

        <div class="example">
            <textarea id="code-prom-11" readonly>function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log("Antes de esperar");
    await esperar(1000);
    console.log("Después de 1 segundo");
    await esperar(1000);
    console.log("Después de 2 segundos");
}

demo();
console.log("Código continúa...");</textarea>
            <button onclick="runCode('code-prom-11')">Ejecutar</button>
            <div class="output" id="output-prom-11"></div>
        </div>

        <hr>

        <h3>12. Try/Catch con Async/Await</h3>
        <p>Manejar errores en funciones async.</p>

        <div class="example">
            <textarea id="code-prom-12" readonly>async function obtenerDatos() {
    try {
        const promesa = Promise.reject("Error al obtener datos");
        const resultado = await promesa;
        console.log("Resultado:", resultado);
    } catch (error) {
        console.log("Error capturado:", error);
    }
}

obtenerDatos();

async function conFinally() {
    try {
        await Promise.reject("Fallo");
    } catch (e) {
        console.log("Error:", e);
    } finally {
        console.log("Limpieza");
    }
}

conFinally();</textarea>
            <button onclick="runCode('code-prom-12')">Ejecutar</button>
            <div class="output" id="output-prom-12"></div>
        </div>

        <hr>

        <h3>13. Múltiples Awaits Secuenciales</h3>
        <p>Ejecutar operaciones asíncronas en secuencia.</p>

        <div class="example">
            <textarea id="code-prom-13" readonly>function tarea(nombre, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(\`\${nombre} completada\`);
            resolve(nombre);
        }, tiempo);
    });
}

async function ejecutarSecuencial() {
    console.log("Iniciando tareas secuenciales");
    
    const t1 = await tarea("Tarea 1", 500);
    const t2 = await tarea("Tarea 2", 500);
    const t3 = await tarea("Tarea 3", 500);
    
    console.log("Todas completadas:", [t1, t2, t3]);
}

ejecutarSecuencial();</textarea>
            <button onclick="runCode('code-prom-13')">Ejecutar</button>
            <div class="output" id="output-prom-13"></div>
        </div>

        <hr>

        <h3>14. Múltiples Awaits en Paralelo</h3>
        <p>Ejecutar operaciones asíncronas en paralelo.</p>

        <div class="example">
            <textarea id="code-prom-14" readonly>function tarea(nombre, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(\`\${nombre} completada\`);
            resolve(nombre);
        }, tiempo);
    });
}

async function ejecutarParalelo() {
    console.log("Iniciando tareas en paralelo");
    
    // Iniciar todas a la vez
    const promesas = [
        tarea("Tarea A", 1000),
        tarea("Tarea B", 1000),
        tarea("Tarea C", 1000)
    ];
    
    const resultados = await Promise.all(promesas);
    console.log("Todas completadas:", resultados);
}

ejecutarParalelo();</textarea>
            <button onclick="runCode('code-prom-14')">Ejecutar</button>
            <div class="output" id="output-prom-14"></div>
        </div>

        <hr>

        <h3>15. Retornar en Async</h3>
        <p>Valores retornados se envuelven en promesas.</p>

        <div class="example">
            <textarea id="code-prom-15" readonly>async function obtenerNumero() {
    return 42; // Automáticamente envuelto en Promise
}

async function obtenerTexto() {
    return "Hola";
}

async function combinar() {
    const num = await obtenerNumero();
    const texto = await obtenerTexto();
    return \`\${texto}: \${num}\`;
}

combinar().then(resultado => {
    console.log("Resultado:", resultado);
});</textarea>
            <button onclick="runCode('code-prom-15')">Ejecutar</button>
            <div class="output" id="output-prom-15"></div>
        </div>

        <hr>

        <h3>16. Async Arrow Functions</h3>
        <p>Usar async con arrow functions.</p>

        <div class="example">
            <textarea id="code-prom-16" readonly>const obtenerDatos = async () => {
    await new Promise(r => setTimeout(r, 500));
    return "Datos obtenidos";
};

const procesar = async (datos) => {
    console.log("Procesando:", datos);
    return datos.toUpperCase();
};

(async () => {
    const datos = await obtenerDatos();
    const resultado = await procesar(datos);
    console.log("Resultado:", resultado);
})();</textarea>
            <button onclick="runCode('code-prom-16')">Ejecutar</button>
            <div class="output" id="output-prom-16"></div>
        </div>

        <hr>

        <h3>17. Await en Loops</h3>
        <p>Usar await dentro de bucles.</p>

        <div class="example">
            <textarea id="code-prom-17" readonly>async function procesar(numero) {
    await new Promise(r => setTimeout(r, 500));
    return numero * 2;
}

async function procesarLista() {
    const numeros = [1, 2, 3, 4, 5];
    
    console.log("Procesando secuencialmente:");
    for (const num of numeros) {
        const resultado = await procesar(num);
        console.log(\`\${num} -> \${resultado}\`);
    }
}

procesarLista();</textarea>
            <button onclick="runCode('code-prom-17')">Ejecutar</button>
            <div class="output" id="output-prom-17"></div>
        </div>

        <hr>

        <h3>18. Promise Wrapping</h3>
        <p>Convertir callbacks en promesas.</p>

        <div class="example">
            <textarea id="code-prom-18" readonly>// Función con callback estilo antiguo
function operacionConCallback(valor, callback) {
    setTimeout(() => {
        callback(null, valor * 2);
    }, 500);
}

// Envolver en promesa
function operacionPromise(valor) {
    return new Promise((resolve, reject) => {
        operacionConCallback(valor, (error, resultado) => {
            if (error) reject(error);
            else resolve(resultado);
        });
    });
}

async function usar() {
    const resultado = await operacionPromise(5);
    console.log("Resultado:", resultado);
}

usar();</textarea>
            <button onclick="runCode('code-prom-18')">Ejecutar</button>
            <div class="output" id="output-prom-18"></div>
        </div>

        <hr>

        <h3>19. Timeout con Promesas</h3>
        <p>Implementar timeout para operaciones asíncronas.</p>

        <div class="example">
            <textarea id="code-prom-19" readonly>function conTimeout(promesa, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject("Timeout excedido"), ms);
    });
    
    return Promise.race([promesa, timeout]);
}

async function demo() {
    const operacionLenta = new Promise(resolve => 
        setTimeout(() => resolve("Completado"), 2000)
    );
    
    try {
        const resultado = await conTimeout(operacionLenta, 1000);
        console.log(resultado);
    } catch (error) {
        console.log("Error:", error);
    }
}

demo();</textarea>
            <button onclick="runCode('code-prom-19')">Ejecutar</button>
            <div class="output" id="output-prom-19"></div>
        </div>

        <hr>

        <h3>20. Retry Pattern</h3>
        <p>Reintentar operaciones que fallan.</p>

        <div class="example">
            <textarea id="code-prom-20" readonly>let intentos = 0;

async function operacionInestable() {
    intentos++;
    console.log("Intento", intentos);
    
    if (intentos < 3) {
        throw new Error("Falló");
    }
    return "Éxito";
}

async function retry(fn, maxIntentos) {
    for (let i = 0; i < maxIntentos; i++) {
        try {
            return await fn();
        } catch (error) {
            console.log("Error:", error.message);
            if (i === maxIntentos - 1) throw error;
        }
    }
}

retry(operacionInestable, 5)
    .then(r => console.log("Resultado:", r))
    .catch(e => console.log("Falló definitivamente"));</textarea>
            <button onclick="runCode('code-prom-20')">Ejecutar</button>
            <div class="output" id="output-prom-20"></div>
        </div>

        <hr>

        <h3>21. Async IIFE</h3>
        <p>Función async inmediatamente invocada.</p>

        <div class="example">
            <textarea id="code-prom-21" readonly>(async () => {
    console.log("Inicio de IIFE async");
    
    await new Promise(r => setTimeout(r, 500));
    console.log("Después de 500ms");
    
    await new Promise(r => setTimeout(r, 500));
    console.log("Después de 1000ms");
    
    return "Completado";
})().then(resultado => {
    console.log("IIFE terminada:", resultado);
});</textarea>
            <button onclick="runCode('code-prom-21')">Ejecutar</button>
            <div class="output" id="output-prom-21"></div>
        </div>

        <hr>

        <h3>22. Promesas en Métodos de Clase</h3>
        <p>Usar async en clases.</p>

        <div class="example">
            <textarea id="code-prom-22" readonly>class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async obtenerUsuario(id) {
        console.log(\`Obteniendo usuario \${id}...\`);
        await new Promise(r => setTimeout(r, 500));
        return { id, nombre: "Usuario " + id };
    }
    
    async obtenerMultiples(ids) {
        const promesas = ids.map(id => this.obtenerUsuario(id));
        return await Promise.all(promesas);
    }
}

(async () => {
    const api = new ApiClient("https://api.com");
    const usuarios = await api.obtenerMultiples([1, 2, 3]);
    console.log("Usuarios:", usuarios);
})();</textarea>
            <button onclick="runCode('code-prom-22')">Ejecutar</button>
            <div class="output" id="output-prom-22"></div>
        </div>

        <hr>

        <h3>23. Promesas con Map</h3>
        <p>Mapear arrays con operaciones asíncronas.</p>

        <div class="example">
            <textarea id="code-prom-23" readonly>async function duplicar(n) {
    await new Promise(r => setTimeout(r, 300));
    return n * 2;
}

async function procesarArray() {
    const numeros = [1, 2, 3, 4, 5];
    
    // Crear array de promesas
    const promesas = numeros.map(n => duplicar(n));
    
    // Esperar todas
    const resultados = await Promise.all(promesas);
    
    console.log("Original:", numeros);
    console.log("Duplicados:", resultados);
}

procesarArray();</textarea>
            <button onclick="runCode('code-prom-23')">Ejecutar</button>
            <div class="output" id="output-prom-23"></div>
        </div>

        <hr>

        <h3>24. Async Reduce</h3>
        <p>Reduce con operaciones asíncronas.</p>

        <div class="example">
            <textarea id="code-prom-24" readonly>async function sumarAsync(a, b) {
    await new Promise(r => setTimeout(r, 200));
    return a + b;
}

async function sumaTotal(numeros) {
    let total = 0;
    
    for (const num of numeros) {
        total = await sumarAsync(total, num);
        console.log("Parcial:", total);
    }
    
    return total;
}

sumaTotal([1, 2, 3, 4, 5])
    .then(total => console.log("Total:", total));</textarea>
            <button onclick="runCode('code-prom-24')">Ejecutar</button>
            <div class="output" id="output-prom-24"></div>
        </div>

        <hr>

        <h3>25. Error Handling Avanzado</h3>
        <p>Manejo complejo de errores en async.</p>

        <div class="example">
            <textarea id="code-prom-25" readonly>class ErrorDeRed extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorDeRed";
    }
}

async function operacion(fallar) {
    if (fallar) {
        throw new ErrorDeRed("Sin conexión");
    }
    return "Éxito";
}

async function manejarErrores() {
    try {
        const resultado = await operacion(true);
        console.log(resultado);
    } catch (error) {
        if (error instanceof ErrorDeRed) {
            console.log("Error de red:", error.message);
        } else {
            console.log("Error desconocido:", error);
        }
    }
}

manejarErrores();</textarea>
            <button onclick="runCode('code-prom-25')">Ejecutar</button>
            <div class="output" id="output-prom-25"></div>
        </div>

        <hr>

        <h3>26. Promise Chaining vs Async/Await</h3>
        <p>Comparación de estilos.</p>

        <div class="example">
            <textarea id="code-prom-26" readonly>function obtener(id) {
    return Promise.resolve({ id, nombre: "Usuario" + id });
}

// Con .then()
console.log("Con .then():");
obtener(1)
    .then(usuario => {
        console.log("Usuario:", usuario);
        return obtener(2);
    })
    .then(usuario => {
        console.log("Usuario:", usuario);
    });

// Con async/await (más legible)
(async () => {
    console.log("\\nCon async/await:");
    const usuario1 = await obtener(1);
    console.log("Usuario:", usuario1);
    const usuario2 = await obtener(2);
    console.log("Usuario:", usuario2);
})();</textarea>
            <button onclick="runCode('code-prom-26')">Ejecutar</button>
            <div class="output" id="output-prom-26"></div>
        </div>

        <hr>

        <h3>27. Cancelación de Promesas</h3>
        <p>Simulación de cancelación con AbortController.</p>

        <div class="example">
            <textarea id="code-prom-27" readonly>function operacionCancelable(signal) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve("Completado");
        }, 2000);
        
        signal.addEventListener("abort", () => {
            clearTimeout(timeout);
            reject("Operación cancelada");
        });
    });
}

const controller = new AbortController();

operacionCancelable(controller.signal)
    .then(r => console.log(r))
    .catch(e => console.log(e));

// Cancelar después de 500ms
setTimeout(() => controller.abort(), 500);</textarea>
            <button onclick="runCode('code-prom-27')">Ejecutar</button>
            <div class="output" id="output-prom-27"></div>
        </div>

        <hr>

        <h3>28. Promesas con Generadores</h3>
        <p>Combinar promesas con generators (patrón antiguo).</p>

        <div class="example">
            <textarea id="code-prom-28" readonly>function* generador() {
    const resultado1 = yield Promise.resolve(1);
    console.log("Resultado 1:", resultado1);
    
    const resultado2 = yield Promise.resolve(2);
    console.log("Resultado 2:", resultado2);
    
    return resultado1 + resultado2;
}

function ejecutar(gen) {
    const it = gen();
    
    function manejar(resultado) {
        if (resultado.done) return resultado.value;
        return resultado.value.then(val => manejar(it.next(val)));
    }
    
    return manejar(it.next());
}

ejecutar(generador).then(total => console.log("Total:", total));</textarea>
            <button onclick="runCode('code-prom-28')">Ejecutar</button>
            <div class="output" id="output-prom-28"></div>
        </div>

        <hr>

        <h3>29. Promesas Anidadas (Anti-pattern)</h3>
        <p>Evitar el callback hell con promesas.</p>

        <div class="example">
            <textarea id="code-prom-29" readonly>// ❌ Malo: Promesas anidadas (callback hell)
console.log("❌ Anti-pattern:");
Promise.resolve(1)
    .then(n => {
        console.log(n);
        return Promise.resolve(2)
            .then(n => {
                console.log(n);
                return Promise.resolve(3);
            });
    })
    .then(n => console.log(n));

// ✅ Bueno: Promesas encadenadas
console.log("\\n✅ Buena práctica:");
Promise.resolve(1)
    .then(n => { console.log(n); return 2; })
    .then(n => { console.log(n); return 3; })
    .then(n => console.log(n));</textarea>
            <button onclick="runCode('code-prom-29')">Ejecutar</button>
            <div class="output" id="output-prom-29"></div>
        </div>

        <hr>

        <h3>30. Best Practices</h3>
        <p>Mejores prácticas con promesas y async/await.</p>

        <div class="example">
            <textarea id="code-prom-30" readonly>console.log("MEJORES PRÁCTICAS:\\n");

console.log("✅ Preferir async/await sobre .then()");
console.log("✅ Siempre usar try/catch con await");
console.log("✅ Promise.all para operaciones paralelas");
console.log("✅ Evitar await en loops si puedes paralelizar");
console.log("✅ Usar Promise.allSettled si necesitas todos los resultados");
console.log("\\n❌ No mezclar callbacks y promesas");
console.log("❌ No olvidar return en .then()");
console.log("❌ No anidar promesas");
console.log("\\n✨ Async/await hace código asíncrono legible");</textarea>
            <button onclick="runCode('code-prom-30')">Ejecutar</button>
            <div class="output" id="output-prom-30"></div>
        </div>

    </section>
`;
