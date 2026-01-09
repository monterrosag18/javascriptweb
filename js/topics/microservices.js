const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Microservicios</h2>
        <p>Separar aplicaciones en servicios pequeños y desplegables.</p>
        <div class="example">
            <textarea id="code-microservices-1" readonly>console.log('API Gateway, comunicación HTTP o mensajería');</textarea>
            <button onclick="runCode('code-microservices-1')">Ejecutar</button>
            <div class="output" id="output-microservices-1"></div>
        </div>
    </section>
`;
