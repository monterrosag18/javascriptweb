const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Service Workers y PWA</h2>
        <p>Cacheo offline y control de red para PWAs.</p>
        <div class="example">
            <textarea id="code-service-workers-1" readonly>if ('serviceWorker' in navigator) {
  console.log('Puedes registrar un Service Worker');
}</textarea>
            <button onclick="runCode('code-service-workers-1')">Ejecutar</button>
            <div class="output" id="output-service-workers-1"></div>
        </div>
    </section>
`;
