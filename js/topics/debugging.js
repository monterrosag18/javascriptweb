const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Debugging y DevTools</h2>
        <p>Uso de console, breakpoints y performance panel.</p>
        <div class="example">
            <textarea id="code-debugging-1" readonly>console.log('Usa breakpoints y watch expressions');</textarea>
            <button onclick="runCode('code-debugging-1')">Ejecutar</button>
            <div class="output" id="output-debugging-1"></div>
        </div>
    </section>
`;
