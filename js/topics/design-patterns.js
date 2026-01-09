const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Patrones de diseño</h2>
        <p>Ejemplo mínimo de Singleton en JavaScript.</p>
        <div class="example">
            <textarea id="code-design-patterns-1" readonly>const Singleton = (() => {
  let instance;
  function create() { return { id: Date.now() }; }
  return { getInstance: () => instance || (instance = create()) };
})();

console.log(Singleton.getInstance() === Singleton.getInstance());</textarea>
            <button onclick="runCode('code-design-patterns-1')">Ejecutar</button>
            <div class="output" id="output-design-patterns-1"></div>
        </div>
    </section>
`;
