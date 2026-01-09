const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Proyecto: Chat en Tiempo Real (simulado)</h2>
        <p>Simulación de chat con colas, sockets mock y UI básica.</p>

        <h3>1) Modelo de mensaje</h3>
        <p>Definimos la estructura mínima.</p>
        <div class="example">
            <textarea id="code-project-chat-1" readonly>const message = {
  id: crypto.randomUUID(),
  from: 'alice',
  text: 'Hola',
  ts: Date.now(),
};

console.log(message);</textarea>
            <button onclick="runCode('code-project-chat-1')">Ejecutar</button>
            <div class="output" id="output-project-chat-1"></div>
        </div>

        <hr>

        <h3>2) Cola y suscripción</h3>
        <p>Listeners para nuevos mensajes.</p>
        <div class="example">
            <textarea id="code-project-chat-2" readonly>class ChatBus {
  constructor() {
    this.listeners = new Set();
  }
  send(msg) {
    this.listeners.forEach(fn => fn(msg));
  }
  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}

const bus = new ChatBus();
const unsubscribe = bus.subscribe(m => console.log('Nuevo:', m.text));
bus.send({ text: 'Hola!' });
unsubscribe();
bus.send({ text: 'No se ve' });</textarea>
            <button onclick="runCode('code-project-chat-2')">Ejecutar</button>
            <div class="output" id="output-project-chat-2"></div>
        </div>

        <hr>

        <h3>3) Mock WebSocket</h3>
        <p>Simular conexión remota.</p>
        <div class="example">
            <textarea id="code-project-chat-3" readonly>class MockSocket {
  constructor() { this.onmessage = null; }
  send(data) { setTimeout(() => this.onmessage?.({ data }), 200); }
}

const socket = new MockSocket();
socket.onmessage = (event) => console.log('Rx:', event.data);
socket.send('ping');</textarea>
            <button onclick="runCode('code-project-chat-3')">Ejecutar</button>
            <div class="output" id="output-project-chat-3"></div>
        </div>

        <hr>

        <h3>4) Estado y render</h3>
        <p>Lista de mensajes con render HTML.</p>
        <div class="example">
            <textarea id="code-project-chat-4" readonly>const messages = [];

function addMessage(text, from = 'yo') {
  messages.push({ id: crypto.randomUUID(), text, from, ts: Date.now() });
}

function renderChat(list) {
  return list.map(m => \`
    <div class="msg \${m.from === 'yo' ? 'self' : 'other'}">
      <span>\${m.from}</span>
      <p>\${m.text}</p>
    </div>\`).join('');
}

addMessage('Hola');
addMessage('Qué tal?', 'ana');
console.log(renderChat(messages));</textarea>
            <button onclick="runCode('code-project-chat-4')">Ejecutar</button>
            <div class="output" id="output-project-chat-4"></div>
        </div>

        <hr>

        <h3>5) Simulación de latencia</h3>
        <p>Retrasos en entrega.</p>
        <div class="example">
            <textarea id="code-project-chat-5" readonly>function sendWithLatency(text, delay = 300) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ text, ts: Date.now() }), delay);
  });
}

sendWithLatency('Hola', 100).then(console.log);
sendWithLatency('Lento', 500).then(console.log);</textarea>
            <button onclick="runCode('code-project-chat-5')">Ejecutar</button>
            <div class="output" id="output-project-chat-5"></div>
        </div>

        <hr>

        <h3>6) Persistencia básica</h3>
        <p>Guardar conversación.</p>
        <div class="example">
            <textarea id="code-project-chat-6" readonly>function saveMessages(list) {
  localStorage.setItem('chat', JSON.stringify(list));
}

function loadMessages() {
  return JSON.parse(localStorage.getItem('chat')) || [];
}

saveMessages(messages);
console.log(loadMessages());</textarea>
            <button onclick="runCode('code-project-chat-6')">Ejecutar</button>
            <div class="output" id="output-project-chat-6"></div>
        </div>

        <hr>

        <h3>7) Best practices</h3>
        <p>Checklist rápido.</p>
        <div class="example">
            <textarea id="code-project-chat-7" readonly>console.log('MEJORES PRÁCTICAS:\n');
console.log('✅ Reconectar automáticamente sockets');
console.log('✅ Hacer retry con backoff exponencial');
console.log('✅ Sanitizar texto de usuario');
console.log('✅ Usar ids estables (UUID)');
console.log('✅ Mostrar estados: typing, delivered, read');</textarea>
            <button onclick="runCode('code-project-chat-7')">Ejecutar</button>
            <div class="output" id="output-project-chat-7"></div>
        </div>

    </section>
`;
