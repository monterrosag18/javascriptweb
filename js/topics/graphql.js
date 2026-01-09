const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>GraphQL</h2>
        <p>Consultas declarativas con tipos y resolvers.</p>
        <div class="example">
            <textarea id="code-graphql-1" readonly>const query = \`query { user { id name } }\`;
console.log('Ejemplo de query GraphQL:', query);</textarea>
            <button onclick="runCode('code-graphql-1')">Ejecutar</button>
            <div class="output" id="output-graphql-1"></div>
        </div>
    </section>
`;
