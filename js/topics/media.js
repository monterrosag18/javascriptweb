const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Audio y Video</h2>
        <p>Control básico de medios en HTML5.</p>
        <div class="example">
            <textarea id="code-media-1" readonly>const video = document.createElement('video');
video.controls = true;
video.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
console.log('Video listo para reproducir:', !!video.src);</textarea>
            <button onclick="runCode('code-media-1')">Ejecutar</button>
            <div class="output" id="output-media-1"></div>
        </div>
    </section>
`;
