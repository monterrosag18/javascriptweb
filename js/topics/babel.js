const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Babel y Transpilación</h2>
        <p>Transformar código moderno a versiones compatibles.</p>
        <div class="example">
            <textarea id="code-babel-1" readonly>console.log('Babel convierte ESNext a ES5');</textarea>
            <button onclick="runCode('code-babel-1')">Ejecutar</button>
            <div class="output" id="output-babel-1"></div>
        </div>
    </section>
`;
