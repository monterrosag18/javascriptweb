const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Integration Testing</h2>
        <p>Validar que módulos funcionen juntos.</p>
        <div class="example">
            <textarea id="code-integration-testing-1" readonly>console.log('Pruebas de componentes que colaboran');</textarea>
            <button onclick="runCode('code-integration-testing-1')">Ejecutar</button>
            <div class="output" id="output-integration-testing-1"></div>
        </div>
    </section>
`;
