document.addEventListener('DOMContentLoaded', () => {
    const topics = [
        {
            title: '🧩 Fundamentos básicos',
            id: 'fundamentos',
            subtopics: [
                { title: 'Variables, constantes y tipos de datos', id: 'variables' },
                { title: 'Operadores y estructuras de control', id: 'operadores' },
                { title: 'Funciones y alcance', id: 'funciones' },
                { title: 'Manejo de errores con try/catch', id: 'errores' },
                { title: 'DOM y eventos básicos', id: 'dom' },
            ]
        },
        {
            title: '📦 Tipos de datos avanzados',
            id: 'datos-avanzados',
            subtopics: [
                { title: 'Strings avanzados', id: 'strings' },
                { title: 'Arrays avanzados', id: 'arrays' },
                { title: 'Objetos avanzados', id: 'objects' },
                { title: 'Map y Set', id: 'set-map' },
                { title: 'Symbol', id: 'symbols' },
                { title: 'JSON', id: 'json' },
                { title: 'Dates y Math', id: 'dates-math' },
                { title: 'RegExp (Expresiones Regulares)', id: 'regex' },
            ]
        },
        {
            title: '🚀 ES6+ y características modernas',
            id: 'es6',
            subtopics: [
                { title: 'let, const y var', id: 'let-const' },
                { title: 'Arrow functions', id: 'arrow-functions' },
                { title: 'Template literals', id: 'template-literals' },
                { title: 'Destructuring y spread/rest', id: 'destructuring' },
                { title: 'Módulos (import/export)', id: 'modules' },
                { title: 'Promesas y Callbacks', id: 'promises' },
                { title: 'Async/Await', id: 'async-await' },
                { title: 'Generadores', id: 'generators' },
                { title: 'Proxy y Reflect', id: 'proxy-reflect' },
            ]
        },
        {
            title: '⚙️ Programación avanzada',
            id: 'avanzado',
            subtopics: [
                { title: 'Prototipos y herencia', id: 'prototypes' },
                { title: 'Clases y objetos', id: 'classes' },
                { title: 'Funciones de orden superior', id: 'higher-order-functions' },
                { title: 'Closures y Scope', id: 'closures' },
                { title: 'This y Binding', id: 'this-binding' },
                { title: 'Patrones de diseño', id: 'design-patterns' },
            ]
        },
        {
            title: '🌐 Asincronía y concurrencia',
            id: 'asincronia',
            subtopics: [
                { title: 'Callbacks', id: 'callbacks' },
                { title: 'El Event Loop', id: 'event-loop' },
                { title: 'API Fetch', id: 'fetch' },
                { title: 'Web Workers', id: 'web-workers' },
                { title: 'WebSockets', id: 'websockets' },
            ]
        },
        {
            title: '🖥️ APIs del navegador',
            id: 'browser-apis',
            subtopics: [
                { title: 'LocalStorage y SessionStorage', id: 'storage' },
                { title: 'Geolocalización', id: 'geolocation' },
                { title: 'Service Workers y PWA', id: 'service-workers' },
                { title: 'Intersection Observer', id: 'intersection-observer' },
                { title: 'Canvas y SVG', id: 'canvas-svg' },
                { title: 'Audio y Video', id: 'media' },
            ]
        },
        {
            title: '⚡ Performance y Optimización',
            id: 'performance',
            subtopics: [
                { title: 'Medición de Performance', id: 'performance-measure' },
                { title: 'Optimización de código', id: 'optimization' },
                { title: 'Lazy Loading y Code Splitting', id: 'lazy-loading' },
                { title: 'Memory Management', id: 'memory' },
            ]
        },
        {
            title: '🛠️ Ecosistema y herramientas',
            id: 'ecosistema',
            subtopics: [
                { title: 'Node.js (JavaScript fuera del navegador)', id: 'node' },
                { title: 'NPM/Yarn (Gestión de paquetes)', id: 'npm-yarn' },
                { title: 'Bundlers (Webpack, Vite)', id: 'bundlers' },
                { title: 'Babel y Transpilación', id: 'babel' },
                { title: 'ESLint y Prettier', id: 'linting' },
                { title: 'Git y GitHub', id: 'git' },
            ]
        },
        {
            title: '🧪 Testing',
            id: 'testing',
            subtopics: [
                { title: 'Fundamentos de Testing', id: 'testing-basics' },
                { title: 'Unit Testing (Jest, Vitest)', id: 'unit-testing' },
                { title: 'Integration Testing', id: 'integration-testing' },
                { title: 'E2E Testing (Cypress, Playwright)', id: 'e2e-testing' },
            ]
        },
        {
            title: '📚 Frameworks y librerías',
            id: 'frameworks',
            subtopics: [
                { title: '¿Qué son los Frameworks/Librerías?', id: 'frameworks-intro' },
                { title: 'React, Vue, Angular', id: 'frameworks-front' },
                { title: 'Express.js (Backend)', id: 'express' },
                { title: 'Next.js y Nuxt.js', id: 'meta-frameworks' },
            ]
        },
        {
            title: '🔒 Seguridad y Buenas prácticas',
            id: 'buenas-practicas',
            subtopics: [
                { title: 'Clean Code y Refactorización', id: 'clean-code' },
                { title: 'Seguridad (XSS, CSRF)', id: 'seguridad' },
                { title: 'Validación de Datos', id: 'validation' },
                { title: 'SOLID Principles', id: 'solid' },
                { title: 'Debugging y DevTools', id: 'debugging' },
            ]
        },
        {
            title: '🎯 Proyectos Prácticos',
            id: 'proyectos',
            subtopics: [
                { title: 'Todo List App', id: 'project-todo' },
                { title: 'Weather App', id: 'project-weather' },
                { title: 'E-commerce Cart', id: 'project-cart' },
                { title: 'Chat App', id: 'project-chat' },
            ]
        },
        {
            title: '🧪 Extras para ser experto',
            id: 'extras',
            subtopics: [
                { title: 'TypeScript', id: 'typescript' },
                { title: 'Deno', id: 'deno' },
                { title: 'GraphQL', id: 'graphql' },
                { title: 'Microservicios', id: 'microservices' },
            ]
        }
    ];

    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;

    let viewedTopics = JSON.parse(localStorage.getItem('viewedTopics')) || [];

    function renderMenu() {
        const menuHTML = topics.map(topic => `
            <ul>
                <li>
                    <strong>${topic.title}</strong>
                    <ul>
                        ${topic.subtopics.map(sub => {
                            const isViewed = viewedTopics.includes(sub.id) ? 'viewed' : '';
                            return `<li><a href="#" class="${isViewed}" data-topic="${topic.id}" data-subtopic="${sub.id}">${sub.title}</a></li>`;
                        }).join('')}
                    </ul>
                </li>
            </ul>
        `).join('');
        menu.innerHTML = menuHTML;
    }

    async function loadContent(subtopicId) {
        // Ocultar menú en móvil después de la selección
        if (window.innerWidth <= 768) {
            menu.classList.remove('open');
            body.classList.remove('menu-open');
        }
        
        try {
            const response = await fetch(`js/topics/${subtopicId}.js`);
            if (!response.ok) {
                throw new Error(`No se pudo cargar el contenido para '${subtopicId}'.`);
            }
            const topicContent = await response.text();
            
            // Limpiar contenido anterior y ejecutar el nuevo script.
            // Usar eval() es más robusto para este caso que inyectar un script
            // que pueda borrarse a sí mismo al hacer content.innerHTML.
            content.innerHTML = ''; 
            eval(topicContent);

            // Marcar como visto
            if (!viewedTopics.includes(subtopicId)) {
                viewedTopics.push(subtopicId);
                localStorage.setItem('viewedTopics', JSON.stringify(viewedTopics));
                renderMenu(); // Re-renderizar el menú para mostrar el check
            }

        } catch (error) {
            content.innerHTML = `<section><h2>Error</h2><p>Error al cargar el tema: ${error.message}</p></section>`;
            console.error(error); // Log para depuración
        }
    }
    
    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const { subtopic } = e.target.dataset;
            loadContent(subtopic);
        }
    });

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        body.classList.toggle('menu-open');
    });

    renderMenu();
});

// Función global para ejecutar código de los ejemplos
window.runCode = function(textareaId) {
    const code = document.getElementById(textareaId).value;
    const outputId = textareaId.replace('code-', 'output-');
    const outputElement = document.getElementById(outputId);
    
    if (!outputElement) {
        console.error('No se encontró el elemento de salida:', outputId);
        return;
    }

    outputElement.innerHTML = ''; // Limpiar salida anterior

    const oldLog = console.log;
    const newLogs = [];

    console.log = function(...args) {
        // Captura los logs para mostrarlos en el div de salida
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' ');
        newLogs.push(message);
    };

    try {
        eval(code);
    } catch (e) {
        newLogs.push(`Error: ${e.message}`);
        outputElement.style.color = 'red';
    } finally {
        console.log = oldLog; // Restaura el console.log original
        
        if (newLogs.length > 0) {
            outputElement.innerHTML = newLogs.map(log => `<pre>> ${log}</pre>`).join('');
        } else {
            // Si no hubo logs, pero el código se ejecutó (ej. manipulación del DOM),
            // muestra un mensaje genérico de éxito.
            outputElement.innerHTML = '<pre>> Ejecutado con éxito. Mira los cambios en la página.</pre>';
            outputElement.style.color = 'green';
        }
        
        // Resetea el color si no hubo error
        if (!outputElement.style.color) {
            outputElement.style.color = 'inherit';
        }
    }
};
// ========================================
// PLAYGROUND - EDITOR EN VIVO
// ========================================

// Función para ejecutar el código del playground
window.runCode = function() {
    const htmlCode = document.getElementById('html-editor')?.value || '';
    const cssCode = document.getElementById('css-editor')?.value || '';
    const jsCode = document.getElementById('js-editor')?.value || '';
    
    const preview = document.getElementById('preview');
    if (!preview) return;
    
    const previewDoc = preview.contentDocument || preview.contentWindow.document;
    
    // Construir el documento completo
    const fullCode = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode}
            <script>
                try {
                    ${jsCode}
                } catch (error) {
                    document.body.innerHTML += '<div style="color: red; padding: 10px; background: #ffebee; border: 1px solid #f44336; margin: 10px; border-radius: 4px;"><strong>Error:</strong> ' + error.message + '</div>';
                }
            <\/script>
        </body>
        </html>
    `;
    
    // Escribir en el iframe
    previewDoc.open();
    previewDoc.write(fullCode);
    previewDoc.close();
};

// Función para limpiar un editor específico
window.clearEditor = function(editorType) {
    const editor = document.getElementById(`${editorType}-editor`);
    if (editor) {
        editor.value = '';
        runCode();
    }
};

// Auto-ejecutar cuando el usuario deja de escribir (debounce)
let typingTimer;
const doneTypingInterval = 1000; // 1 segundo

function setupAutoRun() {
    const editors = ['html-editor', 'css-editor', 'js-editor'];
    
    editors.forEach(editorId => {
        const editor = document.getElementById(editorId);
        if (editor) {
            editor.addEventListener('input', function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(runCode, doneTypingInterval);
            });
        }
    });
}

// Inicializar el playground
setTimeout(() => {
    if (document.getElementById('playground')) {
        setupAutoRun();
        runCode();
    }
}, 500);
