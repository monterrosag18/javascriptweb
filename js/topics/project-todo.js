const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Proyecto: Todo List</h2>
        <p>Construye un gestor de tareas con estado en memoria, render dinámico y persistencia.</p>

        <h3>1) Modelo de datos</h3>
        <p>Representamos cada tarea como un objeto simple.</p>
        <div class="example">
            <textarea id="code-project-todo-1" readonly>const tasks = [
  { id: 1, text: 'Aprender JS', done: false },
  { id: 2, text: 'Practicar arrays', done: true },
];

console.log('Tareas:', tasks);</textarea>
            <button onclick="runCode('code-project-todo-1')">Ejecutar</button>
            <div class="output" id="output-project-todo-1"></div>
        </div>

        <hr>

        <h3>2) Crear y listar</h3>
        <p>Agregar tareas nuevas y listarlas.</p>
        <div class="example">
            <textarea id="code-project-todo-2" readonly>let tasks = [];
let nextId = 1;

function addTask(text) {
  tasks.push({ id: nextId++, text, done: false });
}

function listTasks() {
  return tasks.map(t => \`\${t.id}. \${t.done ? '✅' : '⬜'} \${t.text}\`);
}

addTask('Escribir requerimientos');
addTask('Implementar UI');
console.log(listTasks().join('\n'));</textarea>
            <button onclick="runCode('code-project-todo-2')">Ejecutar</button>
            <div class="output" id="output-project-todo-2"></div>
        </div>

        <hr>

        <h3>3) Toggle y delete</h3>
        <p>Completar tareas y eliminarlas.</p>
        <div class="example">
            <textarea id="code-project-todo-3" readonly>let tasks = [
  { id: 1, text: 'Configurar proyecto', done: false },
  { id: 2, text: 'Diseñar UI', done: false },
];

function toggleTask(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

toggleTask(1);
console.log('Después de toggle:', tasks);

deleteTask(2);
console.log('Después de delete:', tasks);</textarea>
            <button onclick="runCode('code-project-todo-3')">Ejecutar</button>
            <div class="output" id="output-project-todo-3"></div>
        </div>

        <hr>

        <h3>4) Filtrar y contar</h3>
        <p>Separar pendientes y completadas.</p>
        <div class="example">
            <textarea id="code-project-todo-4" readonly>const tasks = [
  { id: 1, text: 'A', done: false },
  { id: 2, text: 'B', done: true },
  { id: 3, text: 'C', done: false },
];

const pending = tasks.filter(t => !t.done);
const done = tasks.filter(t => t.done);

console.log('Pendientes:', pending.length);
console.log('Hechas:', done.length);</textarea>
            <button onclick="runCode('code-project-todo-4')">Ejecutar</button>
            <div class="output" id="output-project-todo-4"></div>
        </div>

        <hr>

        <h3>5) Render minimal con template</h3>
        <p>Generar HTML desde datos.</p>
        <div class="example">
            <textarea id="code-project-todo-5" readonly>const tasks = [
  { id: 1, text: 'Prueba UI', done: false },
  { id: 2, text: 'Revisar estilos', done: true },
];

const html = tasks.map(t => \`
  <li data-id="\${t.id}">
    <input type="checkbox" \${t.done ? 'checked' : ''} />
    <span>\${t.text}</span>
  </li>\`).join('');

console.log('HTML generado:\n', html);</textarea>
            <button onclick="runCode('code-project-todo-5')">Ejecutar</button>
            <div class="output" id="output-project-todo-5"></div>
        </div>

        <hr>

        <h3>6) Persistencia local</h3>
        <p>Guardar/cargar con localStorage (simulado aquí).</p>
        <div class="example">
            <textarea id="code-project-todo-6" readonly>const storage = {};

function save(tasks) {
  storage['tasks'] = JSON.stringify(tasks);
}

function load() {
  const raw = storage['tasks'];
  return raw ? JSON.parse(raw) : [];
}

const tasks = [ { id: 1, text: 'Persistir', done: false } ];
save(tasks);
console.log('Guardado:', storage['tasks']);
console.log('Cargado:', load());</textarea>
            <button onclick="runCode('code-project-todo-6')">Ejecutar</button>
            <div class="output" id="output-project-todo-6"></div>
        </div>

        <hr>

        <h3>7) Best practices</h3>
        <p>Checklist rápido.</p>
        <div class="example">
            <textarea id="code-project-todo-7" readonly>console.log('MEJORES PRÁCTICAS:\n');
console.log('✅ Inmutabilidad en las operaciones');
console.log('✅ IDs únicos predecibles');
console.log('✅ Separar estado y render');
console.log('✅ Validar texto antes de crear');
console.log('✅ Guardar en localStorage tras cambios');
console.log('❌ No mutar arrays originales');</textarea>
            <button onclick="runCode('code-project-todo-7')">Ejecutar</button>
            <div class="output" id="output-project-todo-7"></div>
        </div>

    </section>
`;
