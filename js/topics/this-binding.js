const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>This y Binding</h2>
        <p>Controlar el contexto de ejecución con bind, call y apply.</p>
        <div class="example">
            <textarea id="code-this-binding-1" readonly>const user = {
  nombre: 'Ada',
  saludar() { console.log('Hola', this.nombre); }
};

const saludar = user.saludar;
saludar();
const bound = user.saludar.bind(user);
bound();</textarea>
            <button onclick="runCode('code-this-binding-1')">Ejecutar</button>
            <div class="output" id="output-this-binding-1"></div>
        </div>
    </section>
`;
