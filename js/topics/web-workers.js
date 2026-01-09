const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Web Workers</h2>
        <p>Hilos ligeros para tareas pesadas sin bloquear el UI.</p>
        <div class="example">
            <textarea id="code-web-workers-1" readonly>console.log('Simula offload de trabajo pesado');
// En un worker real usarías new Worker('worker.js')</textarea>
            <button onclick="runCode('code-web-workers-1')">Ejecutar</button>
            <div class="output" id="output-web-workers-1"></div>
        </div>
    </section>
`;
