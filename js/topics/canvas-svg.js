const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Canvas y SVG</h2>
        <p>Gráficos 2D con canvas y vectoriales con SVG.</p>
        <div class="example">
            <textarea id="code-canvas-svg-1" readonly>console.log('Canvas: dibujo imperativo');
console.log('SVG: dibujo declarativo');</textarea>
            <button onclick="runCode('code-canvas-svg-1')">Ejecutar</button>
            <div class="output" id="output-canvas-svg-1"></div>
        </div>
    </section>
`;
