const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Bundlers (Webpack, Vite)</h2>
        <p>Empaquetan módulos y optimizan assets.</p>
        <div class="example">
            <textarea id="code-bundlers-1" readonly>console.log('Bundlers generan bundles y hacen tree-shaking');</textarea>
            <button onclick="runCode('code-bundlers-1')">Ejecutar</button>
            <div class="output" id="output-bundlers-1"></div>
        </div>
    </section>
`;
