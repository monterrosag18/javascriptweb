const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Node.js (JavaScript fuera del navegador)</h2>
        <p>Hasta ahora, todo el JavaScript que hemos visto se ejecuta en el navegador. Pero, ¿y si quisiéramos usar JavaScript para crear un servidor, una aplicación de escritorio o una herramienta de línea de comandos?</p>
        <p>¡Eso es exactamente lo que hace <strong>Node.js</strong>! Es un entorno de ejecución que permite a los desarrolladores ejecutar código JavaScript fuera del navegador.</p>

        <h3>¿Para qué sirve?</h3>
        <ul>
            <li><strong>Desarrollo Backend:</strong> Es su uso más popular. Puedes crear servidores web rápidos y escalables para potenciar tus aplicaciones web, APIs, etc.</li>
            <li><strong>Herramientas de Desarrollo:</strong> La mayoría de las herramientas que usamos en el desarrollo web moderno (como Webpack, Babel, Jest, etc.) están construidas con Node.js.</li>
            <li><strong>Scripts:</strong> Puedes escribir scripts para automatizar tareas en tu computadora, como renombrar archivos, procesar datos, etc.</li>
        </ul>

        <h3>Diferencias Clave con el JavaScript del Navegador</h3>
        <p>Aunque el lenguaje es el mismo, el entorno es diferente:</p>
        <ul>
            <li><strong>Sin DOM:</strong> En Node.js no existe el <code>document</code>, <code>window</code> ni otros objetos relacionados con el navegador, porque no hay una página web que manipular.</li>
            <li><strong>Acceso al Sistema de Archivos:</strong> Node.js puede leer y escribir archivos en tu computadora, algo que el JavaScript del navegador no puede hacer por seguridad.</li>
            <li><strong>Módulos:</strong> Node.js utiliza un sistema de módulos llamado CommonJS (<code>require</code> y <code>module.exports</code>), aunque ya soporta los módulos ES6 (<code>import</code>/<code>export</code>) que vimos.</li>
        </ul>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Un servidor web "Hola Mundo" muy simple en Node.js.</p>
            <p>Este código no se puede ejecutar aquí, pero si tuvieras Node.js instalado, lo guardarías en un archivo (ej: <code>server.js</code>) y lo ejecutarías en tu terminal con el comando <code>node server.js</code>.</p>
            <pre><code>// 1. Importar el módulo 'http' que viene con Node.js
const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

// 2. Crear el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo desde Node.js!\\n');
});

// 3. Poner el servidor a escuchar peticiones
server.listen(port, hostname, () => {
  console.log(\`El servidor está corriendo en http://\${hostname}:\${port}/\`);
});
</code></pre>
        </div>

        <h3>Caso de Uso Práctico: Una API REST</h3>
        <p>Imagina que estás construyendo una aplicación de blog. El frontend (hecho con React, Angular o Vue) necesita obtener, crear, editar y borrar publicaciones. El frontend no puede acceder directamente a la base de datos por seguridad y eficiencia.</p>
        <p>Aquí es donde entra Node.js. Crearías una <strong>API REST</strong> con Node.js y un framework como <strong>Express.js</strong>. Esta API tendría "endpoints" (rutas) como:</p>
        <ul>
            <li><code>GET /posts</code>: Devuelve todas las publicaciones.</li>
            <li><code>GET /posts/123</code>: Devuelve la publicación con ID 123.</li>
            <li><code>POST /posts</code>: Crea una nueva publicación con los datos enviados desde el frontend.</li>
            <li><code>DELETE /posts/123</code>: Borra la publicación con ID 123.</li>
        </ul>
        <p>El frontend usaría <code>fetch()</code> para comunicarse con estas rutas. Node.js recibiría la petición, interactuaría con la base de datos (ej: MongoDB o PostgreSQL) y devolvería los datos en formato JSON. Esto desacopla el frontend del backend y permite que ambos se desarrollen de forma independiente.</p>
    </section>
`;
