const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Principios SOLID</h2>
        <p>Buenas prácticas para diseño orientado a objetos.</p>
        <div class="example">
            <textarea id="code-solid-1" readonly>console.log('Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion');</textarea>
            <button onclick="runCode('code-solid-1')">Ejecutar</button>
            <div class="output" id="output-solid-1"></div>
        </div>
    </section>
`;
