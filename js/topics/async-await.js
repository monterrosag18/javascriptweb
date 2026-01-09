const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Async/Await</h2>
        <p>Programación asíncrona moderna con async y await.</p>

        <h3>1. Función Async Básica</h3>
        <p>Declarar funciones asíncronas.</p>

        <div class="example">
            <textarea id="code-async-1" readonly>// Declaración
async function saludo() {
    return 'Hola';
}

// Expresión
const suma = async (a, b) => {
    return a + b;
};

// Método
const obj = {
    async metodo() {
        return 'en objeto';
    }
};

// Las funciones async siempre retornan Promise
console.log("saludo():", saludo());
console.log("suma() es Promise:", suma(2, 3) instanceof Promise);</textarea>
            <button onclick="runCode('code-async-1')">Ejecutar</button>
            <div class="output" id="output-async-1"></div>
        </div>

        <hr>

        <h3>2. Await Básico</h3>
        <p>Esperar promesas.</p>

        <div class="example">
            <textarea id="code-async-2" readonly>async function prueba() {
    // Promise que resuelve
    const promise = Promise.resolve(42);
    const valor = await promise;
    console.log("Valor:", valor);
    
    // Expresión normal
    const numero = await 10;
    console.log("Número:", numero);
    
    return "Listo";
}

// Llamar
prueba().then(resultado => {
    console.log("Resultado:", resultado);
});</textarea>
            <button onclick="runCode('code-async-2')">Ejecutar</button>
            <div class="output" id="output-async-2"></div>
        </div>

        <hr>

        <h3>3. Simulación de API</h3>
        <p>Simular llamadas HTTP.</p>

        <div class="example">
            <textarea id="code-async-3" readonly>// Simulación de API
function fetchUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, nombre: 'Juan', email: 'juan@email.com' });
            } else {
                reject('ID inválido');
            }
        }, 500);
    });
}

async function obtenerUsuario() {
    try {
        const usuario = await fetchUsuario(1);
        console.log("Usuario:", usuario);
        return usuario;
    } catch (error) {
        console.log("Error:", error);
    }
}

obtenerUsuario();</textarea>
            <button onclick="runCode('code-async-3')">Ejecutar</button>
            <div class="output" id="output-async-3"></div>
        </div>

        <hr>

        <h3>4. Try/Catch</h3>
        <p>Manejo de errores con try/catch.</p>

        <div class="example">
            <textarea id="code-async-4" readonly>function fetchDatos(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id % 2 === 0) {
                resolve({ datos: 'OK' });
            } else {
                reject(new Error('ID debe ser par'));
            }
        }, 200);
    });
}

async function procesarDatos() {
    try {
        console.log("Intentando con id=2");
        const res1 = await fetchDatos(2);
        console.log("Resultado:", res1);
        
        console.log("\\nIntentando con id=3");
        const res2 = await fetchDatos(3);
        console.log("Resultado:", res2);
        
    } catch (error) {
        console.log("❌ Error capturado:", error.message);
    } finally {
        console.log("Finally siempre se ejecuta");
    }
}

procesarDatos();</textarea>
            <button onclick="runCode('code-async-4')">Ejecutar</button>
            <div class="output" id="output-async-4"></div>
        </div>

        <hr>

        <h3>5. Secuencia de Calls</h3>
        <p>Await secuencial.</p>

        <div class="example">
            <textarea id="code-async-5" readonly>function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function secuencia() {
    console.log("1. Inicio");
    
    await delay(300);
    console.log("2. Después de 300ms");
    
    await delay(200);
    console.log("3. Después de 200ms más");
    
    await delay(300);
    console.log("4. Después de 300ms más");
    
    console.log("✓ Secuencia completada");
}

console.time("Total");
secuencia().then(() => console.timeEnd("Total"));</textarea>
            <button onclick="runCode('code-async-5')">Ejecutar</button>
            <div class="output" id="output-async-5"></div>
        </div>

        <hr>

        <h3>6. Llamadas en Paralelo</h3>
        <p>Múltiples awaits sin bloquear.</p>

        <div class="example">
            <textarea id="code-async-6" readonly>function fetchDato(id, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(\`Dato \${id}\`), ms);
    });
}

async function sequential() {
    console.time("Secuencial");
    const a = await fetchDato(1, 500);
    const b = await fetchDato(2, 500);
    const c = await fetchDato(3, 500);
    console.timeEnd("Secuencial");
    console.log(a, b, c);
}

async function parallel() {
    console.time("Paralelo");
    const [a, b, c] = await Promise.all([
        fetchDato(1, 500),
        fetchDato(2, 500),
        fetchDato(3, 500)
    ]);
    console.timeEnd("Paralelo");
    console.log(a, b, c);
}

console.log("\\nSEQUENCIAL:");
await sequential();
console.log("\\nPARALELO:");
await parallel();</textarea>
            <button onclick="runCode('code-async-6')">Ejecutar</button>
            <div class="output" id="output-async-6"></div>
        </div>

        <hr>

        <h3>7. Promise.all()</h3>
        <p>Esperar múltiples promesas.</p>

        <div class="example">
            <textarea id="code-async-7" readonly>async function usuarios() {
    const promises = [
        Promise.resolve({ id: 1, nombre: 'Ana' }),
        Promise.resolve({ id: 2, nombre: 'Juan' }),
        Promise.resolve({ id: 3, nombre: 'María' })
    ];
    
    try {
        const resultado = await Promise.all(promises);
        console.log("Todos resueltos:", resultado);
    } catch (error) {
        console.log("Alguno falló:", error);
    }
}

async function conError() {
    const promises = [
        Promise.resolve('OK'),
        Promise.reject('ERROR'),
        Promise.resolve('OK')
    ];
    
    try {
        await Promise.all(promises);
    } catch (error) {
        console.log("Promise.all falló:", error);
    }
}

console.log("SIN ERRORES:");
await usuarios();
console.log("\\nCON ERROR:");
await conError();</textarea>
            <button onclick="runCode('code-async-7')">Ejecutar</button>
            <div class="output" id="output-async-7"></div>
        </div>

        <hr>

        <h3>8. Promise.allSettled()</h3>
        <p>Esperar todos sin fallar.</p>

        <div class="example">
            <textarea id="code-async-8" readonly>async function ejemplo() {
    const promises = [
        Promise.resolve('✓ A'),
        Promise.reject('✗ B'),
        Promise.resolve('✓ C'),
        Promise.reject('✗ D')
    ];
    
    console.log("Promise.all falla si hay un reject");
    console.log("\\nPromise.allSettled espera todos:");
    
    const resultados = await Promise.allSettled(promises);
    
    resultados.forEach((resultado, i) => {
        if (resultado.status === 'fulfilled') {
            console.log(\`[\${i}] ✓ \${resultado.value}\`);
        } else {
            console.log(\`[\${i}] ✗ \${resultado.reason}\`);
        }
    });
    
    // Filtrar solo exitosos
    const exitosos = resultados
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value);
    console.log("\\nExitosos:", exitosos);
}

await ejemplo();</textarea>
            <button onclick="runCode('code-async-8')">Ejecutar</button>
            <div class="output" id="output-async-8"></div>
        </div>

        <hr>

        <h3>9. Promise.race()</h3>
        <p>Primera promesa en resolver.</p>

        <div class="example">
            <textarea id="code-async-9" readonly>function delay(ms, valor) {
    return new Promise(resolve => 
        setTimeout(() => resolve(valor), ms)
    );
}

async function carrera() {
    const ganador = await Promise.race([
        delay(500, '🐢 Tortuga'),
        delay(200, '🐇 Liebre'),
        delay(800, '🐌 Caracol')
    ]);
    
    console.log("Ganador:", ganador);
}

async function timeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('TIMEOUT')), ms)
        )
    ]);
}

console.log("CARRERA:");
await carrera();

console.log("\\nCON TIMEOUT:");
try {
    const p = delay(2000, 'muy lento');
    await timeout(p, 500);
} catch (e) {
    console.log("Error:", e.message);
}</textarea>
            <button onclick="runCode('code-async-9')">Ejecutar</button>
            <div class="output" id="output-async-9"></div>
        </div>

        <hr>

        <h3>10. API Real con Fetch</h3>
        <p>Llamadas reales a API.</p>

        <div class="example">
            <textarea id="code-async-10" readonly>// Simulación de fetch real
function simuloFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.includes('usuario')) {
                resolve({
                    ok: true,
                    json: () => Promise.resolve({
                        id: 1,
                        nombre: 'Juan'
                    })
                });
            } else {
                reject(new Error('URL no encontrada'));
            }
        }, 300);
    });
}

async function obtenerDatos() {
    try {
        const response = await simuloFetch('api/usuario');
        if (!response.ok) throw new Error('Error en respuesta');
        
        const data = await response.json();
        console.log("Datos:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

await obtenerDatos();</textarea>
            <button onclick="runCode('code-async-10')">Ejecutar</button>
            <div class="output" id="output-async-10"></div>
        </div>

        <hr>

        <h3>11. Retry Pattern</h3>
        <p>Reintentos automáticos.</p>

        <div class="example">
            <textarea id="code-async-11" readonly>let intentos = 0;

function apiInestable() {
    return new Promise((resolve, reject) => {
        intentos++;
        setTimeout(() => {
            if (intentos < 3) {
                reject(new Error('Fallo ' + intentos));
            } else {
                resolve('✓ Éxito en intento ' + intentos);
            }
        }, 200);
    });
}

async function conReintentos(fn, maxReintentos = 3) {
    for (let i = 0; i < maxReintentos; i++) {
        try {
            console.log(\`Intento \${i + 1}...\`);
            return await fn();
        } catch (error) {
            console.log(\`Falló: \${error.message}\`);
            if (i === maxReintentos - 1) throw error;
        }
    }
}

try {
    const resultado = await conReintentos(apiInestable);
    console.log(resultado);
} catch (error) {
    console.log("Falló completamente:", error.message);
}</textarea>
            <button onclick="runCode('code-async-11')">Ejecutar</button>
            <div class="output" id="output-async-11"></div>
        </div>

        <hr>

        <h3>12. Timeout Pattern</h3>
        <p>Promesa con límite de tiempo.</p>

        <div class="example">
            <textarea id="code-async-12" readonly>function conTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(
                () => reject(new Error(\`Timeout después de \${ms}ms\`)),
                ms
            )
        )
    ]);
}

function lentaAPI(ms) {
    return new Promise(resolve => 
        setTimeout(() => resolve('Datos'), ms)
    );
}

async function pruebas() {
    // Éxito
    try {
        const res1 = await conTimeout(lentaAPI(300), 500);
        console.log("✓ Rápido:", res1);
    } catch (e) {
        console.log("✗ Error:", e.message);
    }
    
    // Timeout
    try {
        const res2 = await conTimeout(lentaAPI(2000), 500);
        console.log("✓ Lento:", res2);
    } catch (e) {
        console.log("✗ Error:", e.message);
    }
}

await pruebas();</textarea>
            <button onclick="runCode('code-async-12')">Ejecutar</button>
            <div class="output" id="output-async-12"></div>
        </div>

        <hr>

        <h3>13. Execução Condicional</h3>
        <p>Async con condicionales.</p>

        <div class="example">
            <textarea id="code-async-13" readonly>async function cargarDatos(id) {
    try {
        // Validar
        if (!id) throw new Error('ID requerido');
        
        // Simulación
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id > 0) {
                    resolve({ id, nombre: 'Usuario ' + id });
                } else {
                    reject('ID inválido');
                }
            }, 300);
        });
        
        // Procesar
        if (response.id < 10) {
            console.log("Usuario nuevo:", response);
        } else {
            console.log("Usuario antiguo:", response);
        }
        
        return response;
        
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
}

await cargarDatos(5);
await cargarDatos(15);
await cargarDatos(-1);</textarea>
            <button onclick="runCode('code-async-13')">Ejecutar</button>
            <div class="output" id="output-async-13"></div>
        </div>

        <hr>

        <h3>14. Iteración Asíncrona</h3>
        <p>for...of con async/await.</p>

        <div class="example">
            <textarea id="code-async-14" readonly>async function procesarIDs(ids) {
    for (const id of ids) {
        try {
            const usuario = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({ id, nombre: 'Usuario ' + id });
                }, 200);
            });
            console.log("Procesado:", usuario);
        } catch (error) {
            console.log("Error en", id);
        }
    }
    console.log("✓ Todos procesados");
}

// En paralelo
async function procesarEnParalelo(ids) {
    const promises = ids.map(id =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve({ id, nombre: 'Usuario ' + id });
            }, 200);
        })
    );
    
    const usuarios = await Promise.all(promises);
    console.log("Todos en paralelo:", usuarios.length);
}

console.log("SECUENCIAL:");
await procesarIDs([1, 2, 3]);

console.log("\\nPARALELO:");
await procesarEnParalelo([1, 2, 3]);</textarea>
            <button onclick="runCode('code-async-14')">Ejecutar</button>
            <div class="output" id="output-async-14"></div>
        </div>

        <hr>

        <h3>15. Async Generator</h3>
        <p>Generadores asíncronos.</p>

        <div class="example">
            <textarea id="code-async-15" readonly>async function* contadorAsync() {
    for (let i = 1; i <= 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        yield i;
    }
}

async function usarGenerador() {
    console.log("Valores del generador:");
    for await (const valor of contadorAsync()) {
        console.log("Valor:", valor);
    }
}

// Simulación API paginada
async function* fetchPages(url, maxPages = 3) {
    for (let page = 1; page <= maxPages; page++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        yield { page, data: 'Página ' + page };
    }
}

async function procesarPaginas() {
    console.log("\\nPáginas:");
    for await (const pagina of fetchPages('api', 3)) {
        console.log(pagina);
    }
}

await usarGenerador();
await procesarPaginas();</textarea>
            <button onclick="runCode('code-async-15')">Ejecutar</button>
            <div class="output" id="output-async-15"></div>
        </div>

        <hr>

        <h3>16. Errores Comunes</h3>
        <p>Errores típicos.</p>

        <div class="example">
            <textarea id="code-async-16" readonly>async function ejemplosErrores() {
    
    console.log("❌ Olvidar await:");
    async function lento() {
        return new Promise(r => setTimeout(() => r('valor'), 100));
    }
    
    const p = lento(); // Promise pendiente
    console.log("p:", p); // Promise pending
    
    console.log("\\n✅ Con await:");
    const v = await lento();
    console.log("v:", v); // "valor"
    
    console.log("\\n❌ await fuera de async:");
    console.log("(sería syntax error)");
    
    console.log("\\n✅ En top-level (modern):");
    console.log("Esto es un módulo modern");
}

await ejemplosErrores();</textarea>
            <button onclick="runCode('code-async-16')">Ejecutar</button>
            <div class="output" id="output-async-16"></div>
        </div>

        <hr>

        <h3>17. Best Practices</h3>
        <p>Mejores prácticas.</p>

        <div class="example">
            <textarea id="code-async-17" readonly>console.log("ASYNC/AWAIT:");
console.log("✅ Usar try/catch para errores");
console.log("✅ Promise.all() para paralelo");
console.log("✅ await solo en async");
console.log("✅ No olvidar await en promises");

console.log("\\n❌ Evitar:");
console.log("❌ await en loop (si es paralelo)");
console.log("❌ Múltiples await secuencial si pueden ser paralelos");
console.log("❌ Olvidar error handling");
console.log("❌ Bloquear el evento loop");

console.log("\\n✨ Patrón ideal:");
console.log("async function() {");
console.log("  try {");
console.log("    const data = await fetch();");
console.log("    return data;");
console.log("  } catch(e) {");
console.log("    handle error");
console.log("  }");
console.log("}");</textarea>
            <button onclick="runCode('code-async-17')">Ejecutar</button>
            <div class="output" id="output-async-17"></div>
        </div>

        <hr>

        <h3>18. Comparación con Promises</h3>
        <p>async/await vs .then().</p>

        <div class="example">
            <textarea id="code-async-18" readonly>function fetchDatos() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ data: 'OK' }), 200);
    });
}

// Con .then()
function conThen() {
    return fetchDatos()
        .then(data => {
            console.log("Dato:", data);
            return data.data;
        })
        .then(val => {
            console.log("Valor:", val);
            return "Listo";
        });
}

// Con async/await
async function conAsync() {
    const data = await fetchDatos();
    console.log("Dato:", data);
    const val = data.data;
    console.log("Valor:", val);
    return "Listo";
}

console.log("CON .then():");
await conThen();

console.log("\\nCON async/await:");
await conAsync();

console.log("\\nasync/await es más legible ✓");</textarea>
            <button onclick="runCode('code-async-18')">Ejecutar</button>
            <div class="output" id="output-async-18"></div>
        </div>

        <hr>

        <h3>19. Cheat Sheet</h3>
        <p>Referencia rápida.</p>

        <div class="example">
            <textarea id="code-async-19" readonly>// BÁSICO
async function fn() { return valor; }
const result = await fn();

// MANEJO ERRORES
try {
    await fn();
} catch (error) {
    console.error(error);
} finally {
    // siempre
}

// PARALELO
const [a, b] = await Promise.all([p1, p2]);

// ALLSETTLED
const resultados = await Promise.allSettled(promises);

// RACE
const primero = await Promise.race([p1, p2]);

// SECUENCIAL
for (const id of ids) {
    await fetch(id);
}

// TIMEOUT
await Promise.race([promise, timeout(1000)]);</textarea>
            <button onclick="runCode('code-async-19')">Ejecutar</button>
            <div class="output" id="output-async-19"></div>
        </div>

        <hr>

        <h3>20. Ejercicio: Cargar Múltiples URLs</h3>
        <p>Ejercicio práctico.</p>

        <div class="example">
            <textarea id="code-async-20" readonly>// Simular fetch
function fetchURL(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.includes('error')) {
                reject(new Error('URL: ' + url));
            } else {
                resolve({ url, data: 'Contenido de ' + url });
            }
        }, Math.random() * 500);
    });
}

async function cargarMultiples(urls) {
    console.log("Cargando", urls.length, "URLs...");
    
    const resultados = await Promise.allSettled(
        urls.map(url => fetchURL(url))
    );
    
    const exitosos = resultados.filter(r => r.status === 'fulfilled');
    const fallos = resultados.filter(r => r.status === 'rejected');
    
    console.log("✓ Exitosos:", exitosos.length);
    exitosos.forEach(r => console.log("  -", r.value.url));
    
    console.log("✗ Fallos:", fallos.length);
    fallos.forEach(r => console.log("  -", r.reason.message));
    
    return { exitosos, fallos };
}

const urls = ['api/datos1', 'api/error', 'api/datos2', 'api/datos3'];
await cargarMultiples(urls);</textarea>
            <button onclick="runCode('code-async-20')">Ejecutar</button>
            <div class="output" id="output-async-20"></div>
        </div>

    </section>
`;
