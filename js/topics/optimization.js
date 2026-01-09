const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Optimización de código</h2>
        <p>Pequeños tips para evitar trabajo extra.</p>
        <div class="example">
            <textarea id="code-optimization-1" readonly>const nums = Array.from({ length: 5 }, (_, i) => i);
console.log('Evita recalcular:', nums.map(n => n * 2));</textarea>
            <button onclick="runCode('code-optimization-1')">Ejecutar</button>
            <div class="output" id="output-optimization-1"></div>
        </div>
    </section>
`;
