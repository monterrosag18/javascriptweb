const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Fundamentos de Testing</h2>
        <p>Tipos de pruebas y pirámide de testing.</p>
        <div class="example">
            <textarea id="code-testing-basics-1" readonly>console.log('AAA: Arrange, Act, Assert');</textarea>
            <button onclick="runCode('code-testing-basics-1')">Ejecutar</button>
            <div class="output" id="output-testing-basics-1"></div>
        </div>
    </section>
`;
