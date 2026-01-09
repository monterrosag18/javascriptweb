const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Next.js y Nuxt.js</h2>
        <p>Meta-frameworks con SSR y SSG.</p>
        <div class="example">
            <textarea id="code-meta-frameworks-1" readonly>console.log('SSR, SSG y rutas basadas en archivos');</textarea>
            <button onclick="runCode('code-meta-frameworks-1')">Ejecutar</button>
            <div class="output" id="output-meta-frameworks-1"></div>
        </div>
    </section>
`;
