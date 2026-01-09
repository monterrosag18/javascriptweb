const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Express.js (Framework de Backend)</h2>
        <p>Express.js es el framework más popular para construir aplicaciones de backend y APIs con Node.js. Es minimalista, rápido y flexible.</p>
        <p>Si Node.js es el motor que te permite usar JavaScript en el servidor, Express es el chasis y el volante que te ayudan a construir un coche (tu aplicación web) de forma estructurada.</p>

        <h3>Características Principales</h3>
        <ul>
            <li><strong>Enrutamiento (Routing):</strong> Permite definir cómo responderá tu aplicación a las peticiones de los clientes a diferentes URLs (rutas) y con diferentes métodos HTTP (GET, POST, etc.).</li>
            <li><strong>Middleware:</strong> Esta es la característica más potente de Express. Un middleware es una función que se ejecuta entre la petición del cliente y la respuesta final del servidor. Se usan para todo: validar usuarios, registrar logs, comprimir respuestas, manejar errores, etc.</li>
            <li><strong>Minimalista:</strong> Express no te impone una forma estricta de hacer las cosas. Te da las herramientas básicas y tú decides cómo construir el resto de la aplicación.</li>
        </ul>

        <div class="example">
            <p><strong>Ejemplo:</strong> Un servidor simple con Express que tiene dos rutas.</p>
                        <p>Este código, al ejecutarse con <code>node server.js</code>, iniciaría un servidor que responde con "¡Hola desde Express!" a cualquier petición a la ruta raíz.</p>
        </div>

        <h3>Caso de Uso Práctico: API REST para una Lista de Tareas</h3>
        <p>Imagina que estás construyendo una aplicación de lista de tareas (To-Do). El frontend (hecho en React, por ejemplo) necesita comunicarse con el servidor para gestionar las tareas.</p>
        <p>Con Express, definirías rutas para cada operación CRUD (Crear, Leer, Actualizar, Borrar):</p>
        <pre><code>const express = require('express');
const app = express();
app.use(express.json()); // Middleware para entender JSON

let tareas = [
  { id: 1, texto: "Comprar leche", completada: false },
  { id: 2, texto: "Aprender Express", completada: true },
];

// LEER todas las tareas (GET)
app.get('/api/tareas', (req, res) => {
  res.json(tareas);
});

// CREAR una nueva tarea (POST)
app.post('/api/tareas', (req, res) => {
  const nuevaTarea = {
    id: Date.now(), // ID único
    texto: req.body.texto,
    completada: false
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// ACTUALIZAR una tarea (PUT)
app.put('/api/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).send('Tarea no encontrada.');

    tarea.completada = req.body.completada;
    res.json(tarea);
});

app.listen(3000, () => console.log('Servidor de tareas escuchando en el puerto 3000...'));
</code></pre>
        <p>Tu frontend ahora podría hacer una petición <code>GET</code> a <code>/api/tareas</code> para obtener la lista, una petición <code>POST</code> a la misma ruta para añadir una nueva, y así sucesivamente. Express se encarga de dirigir cada petición al bloque de código correcto, haciendo que la lógica del servidor sea limpia y organizada.</p>
    </section>
`;
            <pre><code>const express = require('express');
const app = express();
const port = 3000;

// Ruta para la página de inicio ('/')
// req = petición (request), res = respuesta (response)
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi servidor con Express!');
});

// Ruta para una página de API que devuelve JSON
app.get('/api/usuario', (req, res) => {
  res.json({ id: 1, nombre: 'Juan' });
});

// El servidor se pone a escuchar en el puerto 3000
app.listen(port, () => {
  console.log(\`Servidor escuchando en http://localhost:\${port}\`);
});
</code></pre>
        </div>

        <h3>¿Por qué usar Express?</h3>
        <p>Construir un servidor solo con el módulo <code>http</code> de Node.js (como vimos en la sección de Node) es posible, pero se vuelve muy complejo rápidamente. Express simplifica enormemente la gestión de rutas, el análisis del cuerpo de las peticiones, el manejo de cookies y mucho más, permitiéndote centrarte en la lógica de tu aplicación.</p>
    </section>
`;
