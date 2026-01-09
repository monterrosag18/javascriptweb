const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Medición de Performance</h2>
        <p>Usar performance.now para medir tiempos.</p>
        <div class="example">
            <textarea id="code-performance-measure-1" readonly>const t1 = performance.now();
for (let i = 0; i < 1e5; i++) {}
const t2 = performance.now();
console.log('Duración ms:', (t2 - t1).toFixed(2));</textarea>
            <button onclick="runCode('code-performance-measure-1')">Ejecutar</button>
            <div class="output" id="output-performance-measure-1"></div>
        </div>
    </section>
`;
