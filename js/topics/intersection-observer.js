const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Intersection Observer</h2>
        <p>Detectar cuando elementos entran o salen de la vista.</p>
        <div class="example">
            <textarea id="code-intersection-observer-1" readonly>console.log('IntersectionObserver permite lazy-loading de imágenes');</textarea>
            <button onclick="runCode('code-intersection-observer-1')">Ejecutar</button>
            <div class="output" id="output-intersection-observer-1"></div>
        </div>
    </section>
`;
