const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Dates y Math</h2>
        <p>Operaciones esenciales con objetos Date y la librería Math.</p>
        <div class="example">
            <textarea id="code-dates-math-1" readonly>const ahora = new Date();
console.log('ISO:', ahora.toISOString());
console.log('Día:', ahora.getDate());
console.log('Random 0-1:', Math.random());</textarea>
            <button onclick="runCode('code-dates-math-1')">Ejecutar</button>
            <div class="output" id="output-dates-math-1"></div>
        </div>
    </section>
`;
