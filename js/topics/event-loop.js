const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Event Loop y Cola de Tareas</h2>
        <p>¿Alguna vez te has preguntado cómo JavaScript, que es de un solo hilo (solo puede hacer una cosa a la vez), maneja operaciones asíncronas como <code>setTimeout</code> o peticiones a un servidor sin bloquear la página?</p>
        <p>La respuesta es el <strong>Event Loop</strong> (Bucle de Eventos).</p>

        <h3>Componentes Clave</h3>
        <ul>
            <li><strong>Call Stack (Pila de llamadas):</strong> Donde se apilan las funciones que se están ejecutando. Si llamas a una función, se pone en la cima de la pila. Cuando termina, se quita.</li>
            <li><strong>Web APIs:</strong> Son proporcionadas por el navegador (no por el motor de JS). Aquí es donde viven las operaciones asíncronas como <code>setTimeout</code> o <code>fetch</code> mientras esperan a completarse.</li>
            <li><strong>Callback Queue (Cola de Callbacks):</strong> Cuando una operación asíncrona termina (ej: pasa el tiempo de un <code>setTimeout</code>), su función callback se pone en esta cola, esperando su turno.</li>
            <li><strong>Event Loop:</strong> Es un proceso que constantemente revisa si la <strong>Call Stack</strong> está vacía. Si lo está, toma la primera función de la <strong>Callback Queue</strong> y la empuja a la Call Stack para que se ejecute.</li>
        </ul>

        <div class="example">
            <p><strong>Ejemplo:</strong> Visualiza el orden de ejecución.</p>
            <textarea id="code-event-loop">console.log("1. Inicio del script (síncrono)");

// setTimeout es una Web API. Su callback se va a la cola después de 0ms.
setTimeout(() => {
  console.log("3. setTimeout de 0 segundos (asíncrono)");
}, 0);

console.log("2. Fin del script (síncrono)");

// El Event Loop espera a que la pila esté vacía (después del log "2")
// para mover el callback del setTimeout a la pila y ejecutarlo.
</textarea>
            <button onclick="runCode('code-event-loop')">Ejecutar</button>
            <div class="output" id="output-event-loop">
                <p><strong>Orden de salida esperado:</strong></p>
                <ol>
                    <li>1. Inicio del script (síncrono)</li>
                    <li>2. Fin del script (síncrono)</li>
                    <li>3. setTimeout de 0 segundos (asíncrono)</li>
                </ol>
                <p>Esto demuestra que el código síncrono siempre se ejecuta antes de que el Event Loop procese los callbacks de la cola.</p>
            </div>
        </div>

        <h3>Avanzado: ¿Dónde se usa esto? (Microtareas vs. Macrotareas)</h3>
        <p>No todas las tareas asíncronas son iguales. Las promesas (<code>.then</code>, <code>.catch</code>, <code>await</code>) y <code>queueMicrotask()</code> usan una cola especial de alta prioridad llamada <strong>Cola de Microtareas</strong>. <code>setTimeout</code>, <code>setInterval</code> y eventos de I/O usan la <strong>Cola de Macrotareas</strong> (la que vimos antes).</p>
        <p><strong>Regla de oro:</strong> Después de cada macrotarea, el Event Loop procesa <strong>TODAS</strong> las microtareas que haya en la cola antes de ejecutar la siguiente macrotarea. Esto hace que las promesas se resuelvan de forma más predecible y rápida que los callbacks de <code>setTimeout</code>.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Observa cómo la microtarea de la promesa se ejecuta antes que la macrotarea de <code>setTimeout</code>, aunque ambos tengan un "retraso" de 0ms.</p>
            <textarea id="code-advanced-event-loop">console.log("1. Inicio (Síncrono)");

// Macrotarea
setTimeout(() => {
  console.log("4. Fin de Macrotarea (setTimeout)");
}, 0);

// Microtarea
Promise.resolve().then(() => {
  console.log("3. Fin de Microtarea (Promesa)");
});

console.log("2. Fin (Síncrono)");

// El Event Loop hace lo siguiente:
// 1. Ejecuta todo el código síncrono (logs 1 y 2).
// 2. La pila de llamadas queda vacía.
// 3. Revisa la cola de microtareas. ¿Hay algo? Sí, el .then() de la promesa.
// 4. Ejecuta TODAS las microtareas (log 3).
// 5. La cola de microtareas está vacía. Revisa la cola de macrotareas.
// 6. ¿Hay algo? Sí, el callback del setTimeout. Lo ejecuta (log 4).
</textarea>
            <button onclick="runCode('code-advanced-event-loop')">Ejecutar</button>
            <div class="output" id="output-advanced-event-loop"></div>
        </div>
    </section>
`;
