const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Proxy y Reflect</h2>
        <p>Intercepción de operaciones sobre objetos usando Proxy y utilidades de Reflect.</p>
        <div class="example">
            <textarea id="code-proxy-reflect-1" readonly>const target = { mensaje: 'Hola' };
const handler = {
  get(obj, prop) {
    console.log('Acceso a', prop);
    return Reflect.get(obj, prop);
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.mensaje);</textarea>
            <button onclick="runCode('code-proxy-reflect-1')">Ejecutar</button>
            <div class="output" id="output-proxy-reflect-1"></div>
        </div>
    </section>
`;
