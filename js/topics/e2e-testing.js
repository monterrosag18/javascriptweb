const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>E2E Testing (Cypress, Playwright)</h2>
        <p>Simular al usuario final de punta a punta.</p>
        <div class="example">
            <textarea id="code-e2e-testing-1" readonly>console.log('Automatiza flujos completos en el navegador');</textarea>
            <button onclick="runCode('code-e2e-testing-1')">Ejecutar</button>
            <div class="output" id="output-e2e-testing-1"></div>
        </div>
    </section>
`;
