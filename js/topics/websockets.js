const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>WebSockets</h2>
        <p>Comunicación bidireccional en tiempo real.</p>
        <div class="example">
            <textarea id="code-websockets-1" readonly>console.log('WebSocket demo: ws://echo');
// new WebSocket('wss://echo.websocket.org')</textarea>
            <button onclick="runCode('code-websockets-1')">Ejecutar</button>
            <div class="output" id="output-websockets-1"></div>
        </div>
    </section>
`;
