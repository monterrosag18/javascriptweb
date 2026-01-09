const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Closures</h2>
        <p>Funciones que recuerdan su entorno léxico.</p>
        <div class="example">
            <textarea id="code-closures-1" readonly>function contador() {
  let c = 0;
  return () => ++c;
}

const inc = contador();
console.log(inc());
console.log(inc());</textarea>
            <button onclick="runCode('code-closures-1')">Ejecutar</button>
            <div class="output" id="output-closures-1"></div>
        </div>
    </section>
`;
