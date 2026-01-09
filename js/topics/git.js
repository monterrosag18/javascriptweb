const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Git y GitHub</h2>
        <p>Control de versiones distribuido.</p>
        <div class="example">
            <textarea id="code-git-1" readonly>console.log('git init, git add ., git commit -m "mensaje"');</textarea>
            <button onclick="runCode('code-git-1')">Ejecutar</button>
            <div class="output" id="output-git-1"></div>
        </div>
    </section>
`;
