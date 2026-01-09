const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Memory Management</h2>
        <p>Buenas prácticas para evitar fugas de memoria.</p>
        <div class="example">
            <textarea id="code-memory-1" readonly>const cache = new Map();
cache.set('clave', { grande: true });
console.log('Liberar referencias cuando no se usan');</textarea>
            <button onclick="runCode('code-memory-1')">Ejecutar</button>
            <div class="output" id="output-memory-1"></div>
        </div>
    </section>
`;
