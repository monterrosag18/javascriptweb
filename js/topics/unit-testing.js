const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Unit Testing (Jest, Vitest)</h2>
        <p>Pruebas pequeñas y aisladas.</p>
        <div class="example">
            <textarea id="code-unit-testing-1" readonly>function suma(a, b) { return a + b; }
console.log('suma(2,3) === 5', suma(2,3) === 5);</textarea>
            <button onclick="runCode('code-unit-testing-1')">Ejecutar</button>
            <div class="output" id="output-unit-testing-1"></div>
        </div>
    </section>
`;
