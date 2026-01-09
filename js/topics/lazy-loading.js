const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Lazy Loading y Code Splitting</h2>
        <p>Cargar recursos solo cuando se necesitan.</p>
        <div class="example">
            <textarea id="code-lazy-loading-1" readonly>console.log('Lazy loading de imágenes y módulos dinámicos import()');</textarea>
            <button onclick="runCode('code-lazy-loading-1')">Ejecutar</button>
            <div class="output" id="output-lazy-loading-1"></div>
        </div>
    </section>
`;
