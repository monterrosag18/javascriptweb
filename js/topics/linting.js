const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>ESLint y Prettier</h2>
        <p>Linter y formateador para código consistente.</p>
        <div class="example">
            <textarea id="code-linting-1" readonly>console.log('Linters encuentran problemas estáticos');</textarea>
            <button onclick="runCode('code-linting-1')">Ejecutar</button>
            <div class="output" id="output-linting-1"></div>
        </div>
    </section>
`;
