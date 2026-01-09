const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>NPM/Yarn (Gestión de Paquetes)</h2>
        <p>Imagina que estás construyendo algo con LEGO. En lugar de fabricar cada ladrillo tú mismo, compras cajas de ladrillos ya hechos por otros. En el mundo de JavaScript, esos "ladrillos" son <strong>paquetes</strong> (código reutilizable), y <strong>NPM</strong> y <strong>Yarn</strong> son las tiendas donde los consigues y gestionas.</p>
        <p>NPM (Node Package Manager) es el gestor de paquetes que viene por defecto con Node.js. Yarn es una alternativa creada por Facebook, que a menudo es más rápida.</p>

        <h3>¿Qué es un paquete?</h3>
        <p>Un paquete (o librería) es simplemente un conjunto de archivos de JavaScript que resuelven un problema específico. Por ejemplo:</p>
        <ul>
            <li><strong>React:</strong> Un paquete para construir interfaces de usuario.</li>
            <li><strong>Express:</strong> Un paquete para crear servidores web en Node.js.</li>
            <li><strong>Jest:</strong> Un paquete para hacer tests.</li>
        </ul>

        <h3>El archivo <code>package.json</code></h3>
        <p>Este es el corazón de cualquier proyecto de Node.js. Es un archivo JSON que contiene metadatos sobre el proyecto y, lo más importante, una lista de todos los paquetes (dependencias) que el proyecto necesita para funcionar.</p>
        <p>Para crear este archivo en un proyecto nuevo, ejecutarías en tu terminal:</p>
        <pre><code>npm init -y</code></pre>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Un <code>package.json</code> simple.</p>
            <pre><code>{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "Un proyecto de ejemplo",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^27.0.6"
  }
}
</code></pre>
            <p><code>dependencies</code> son los paquetes que la aplicación necesita para funcionar en producción. <code>devDependencies</code> son los que solo se necesitan para el desarrollo (como librerías de testing).</p>
        </div>

        <h3>Comandos Básicos</h3>
        <p>Estos comandos se ejecutan en la terminal, dentro de la carpeta de tu proyecto.</p>
        <ul>
            <li><code>npm install express</code>: Instala el paquete "express" y lo añade a las dependencias en <code>package.json</code>.</li>
            <li><code>npm install</code>: Lee el <code>package.json</code> e instala todos los paquetes listados en él. Esto es lo que haces cuando descargas un proyecto de otra persona.</li>
            <li><code>npm run start</code>: Ejecuta el script llamado "start" definido en <code>package.json</code>.</li>
        </ul>
        <p>Yarn usa comandos muy similares, como <code>yarn add express</code>, <code>yarn install</code> y <code>yarn start</code>.</p>

        <h3>Caso de Uso Práctico: Instalar y usar una librería</h3>
        <p>Supongamos que quieres trabajar con fechas y horas de una manera más sencilla de la que JavaScript ofrece por defecto. Una librería muy popular para esto es <code>date-fns</code>.</p>
        <ol>
            <li><strong>Inicializar el proyecto:</strong> En tu terminal, dentro de la carpeta de tu proyecto, ejecutarías <code>npm init -y</code>. Esto crea el archivo <code>package.json</code>.</li>
            <li><strong>Instalar el paquete:</strong> Luego, ejecutarías <code>npm install date-fns</code>. NPM descargará la librería en una carpeta llamada <code>node_modules</code> y añadirá <code>date-fns</code> a la sección de dependencias de tu <code>package.json</code>.</li>
            <li><strong>Usar el paquete:</strong> Ahora, en tu código JavaScript (si estás en un entorno de Node.js o usando un bundler como Webpack), podrías importarlo y usarlo:
                <pre><code>import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// Formatear una fecha
const fechaFormateada = format(new Date(), "'Hoy es' eeee d 'de' MMMM", { locale: es });

console.log(fechaFormateada); // "Hoy es jueves 8 de enero"
</code></pre>
            </li>
        </ol>
        <p>NPM y Yarn se encargan de gestionar cientos o miles de estas dependencias, resolver conflictos de versiones y asegurar que cualquier otro desarrollador que trabaje en el proyecto pueda instalar exactamente la misma configuración con un solo comando: <code>npm install</code>.</p>
    </section>
`;
