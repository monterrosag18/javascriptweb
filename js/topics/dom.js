const content = document.getElementById('content');

content.innerHTML = `
<section>
    <h2>DOM y Eventos: ¡Magia para tu página!</h2>
    <p>Imagina que tu página web es una casa de legos. El HTML son las piezas y su orden. El <strong>DOM</strong> es como un mapa mágico que le permite a JavaScript ver todas las piezas y dónde están.</p>
    <p>Con este mapa, JavaScript puede hacer trucos increíbles: cambiar el color de una pieza, moverla, o incluso añadir piezas nuevas. ¡Vamos a probar con muchos ejemplos!</p>

    <hr>

    <h3>1. El Árbol Mágico: Cambiando el color de una fruta</h3>
    <p>Aquí tenemos un árbol con una fruta. Usaremos JavaScript para seleccionarla por su ID ("#fruta-magica") y cambiar su color.</p>
    
    <div class="example">
        <p><strong>Visualización:</strong></p>
        <div style="font-size: 4rem; text-align: center;">
            🌳<span id="fruta-magica" style="color: red; transition: color 0.5s;">🍎</span>
        </div>
        <p id="texto-fruta" style="text-align: center; font-weight: bold;">La manzana es roja.</p>

        <p><strong>Código Mágico:</strong></p>
        <textarea id="code-dom-1" readonly>// 1. Buscamos la fruta en el árbol usando su ID.
const fruta = document.getElementById('fruta-magica');
const texto = document.getElementById('texto-fruta');

// 2. Hacemos el truco: ¡cambiamos su color!
fruta.style.color = 'orange';
fruta.textContent = '🍊'; // También cambiamos la fruta
texto.textContent = '¡Ahora es una naranja!';

console.log('¡Magia! La fruta ha cambiado.');</textarea>
        <button onclick="runCode('code-dom-1')">Hacer Magia</button>
        <div class="output" id="output-dom-1"></div>
    </div>

    <hr>

    <h3>2. El Interruptor de Luz: Escuchando un Clic</h3>
    <p>Los <strong>eventos</strong> son acciones que ocurren, como un clic. Podemos decirle a JavaScript que "escuche" cuando alguien haga clic en un elemento y que reaccione.</p>
    
    <div class="example">
        <p><strong>Visualización:</strong></p>
        <div style="text-align: center;">
            <div id="bombilla" style="font-size: 4rem; cursor: pointer; transition: all 0.3s; display: inline-block; padding: 10px; border-radius: 50%; background-color: #333;">
                💡
            </div>
            <p id="estado-luz">La luz está apagada.</p>
        </div>

        <p><strong>Código para Conectar:</strong></p>
        <textarea id="code-dom-2" readonly>// 1. Seleccionamos la bombilla y el texto.
const bombilla = document.getElementById('bombilla');
const estadoLuz = document.getElementById('estado-luz');

// 2. Le decimos a la bombilla que "escuche" los clics.
bombilla.addEventListener('click', function() {
    // 3. Esto es lo que pasa CUANDO haces clic:
    bombilla.style.backgroundColor = '#f3ff9e';
    bombilla.style.transform = 'scale(1.1)';
    estadoLuz.textContent = '¡La luz está encendida!';
    console.log('¡Clic! Se encendió la luz.');
});

console.log('Cables conectados. Ahora haz clic en la bombilla.');</textarea>
        <button onclick="runCode('code-dom-2')">Conectar Cables</button>
        <div class="output" id="output-dom-2"></div>
    </div>

    <hr>

    <h3>3. El Jardín Creciente: Crear y Añadir Elementos</h3>
    <p>No solo podemos cambiar las cosas que ya existen. ¡También podemos crear elementos nuevos desde cero y añadirlos a nuestra página!</p>
    
    <div class="example">
        <p><strong>Jardín:</strong></p>
        <div id="jardin" style="font-size: 2rem; border: 2px dashed green; padding: 10px; min-height: 50px;">
            <!-- Aquí crecerán las flores -->
        </div>

        <p><strong>Código para Plantar:</strong></p>
        <textarea id="code-dom-3" readonly>// 1. Seleccionamos el jardín donde crecerá la flor.
const jardin = document.getElementById('jardin');

// 2. Creamos un nuevo elemento 'span' para nuestra flor.
const nuevaFlor = document.createElement('span');
nuevaFlor.textContent = '🌸';
nuevaFlor.style.margin = '5px';

// 3. ¡La "plantamos" en el jardín!
jardin.appendChild(nuevaFlor);

console.log('¡Has plantado una nueva flor en el jardín!');</textarea>
        <button onclick="runCode('code-dom-3')">Plantar una Flor</button>
        <div class="output" id="output-dom-3"></div>
    </div>

    <hr>

    <h3>4. Cambia el Fondo de la Página</h3>
    <p>Podemos seleccionar el elemento <code>body</code>, que es el contenedor de toda la página, y cambiar su color de fondo.</p>
    <div class="example">
        <p><strong>Paleta de Colores:</strong></p>
        <div id="paleta" style="display: flex; justify-content: center; gap: 10px;">
            <div class="color-box" style="width: 40px; height: 40px; background-color: lightblue; cursor: pointer; border: 1px solid black;"></div>
            <div class="color-box" style="width: 40px; height: 40px; background-color: lightgreen; cursor: pointer; border: 1px solid black;"></div>
            <div class="color-box" style="width: 40px; height: 40px; background-color: lightpink; cursor: pointer; border: 1px solid black;"></div>
            <div class="color-box" style="width: 40px; height: 40px; background-color: #282c34; cursor: pointer; border: 1px solid white;"></div>
        </div>
        <textarea id="code-dom-4" readonly>
const cajasDeColor = document.querySelectorAll('.color-box');
cajasDeColor.forEach(caja => {
    caja.addEventListener('click', function() {
        const color = caja.style.backgroundColor;
        document.body.style.backgroundColor = color;
        console.log('Color de fondo cambiado a: ' + color);
    });
});
console.log('Listeners añadidos a la paleta. Haz clic en un color.');
        </textarea>
        <button onclick="runCode('code-dom-4')">Activar Paleta</button>
        <div class="output" id="output-dom-4"></div>
    </div>

    <hr>

    <h3>5. El Espejo Mágico (Input en Tiempo Real)</h3>
    <p>El evento <code>input</code> se dispara cada vez que escribes algo en un campo de texto. Podemos usarlo para reflejar el texto en otro lugar.</p>
    <div class="example">
        <p><strong>Escribe aquí:</strong></p>
        <input type="text" id="texto-espejo-input" placeholder="Escribe algo...">
        <p><strong>Tu texto reflejado:</strong></p>
        <p id="texto-espejo-output"></p>
        <textarea id="code-dom-5" readonly>
const input = document.getElementById('texto-espejo-input');
const output = document.getElementById('texto-espejo-output');
input.addEventListener('input', function() {
    output.textContent = input.value;
});
console.log('El espejo mágico está listo.');
        </textarea>
        <button onclick="runCode('code-dom-5')">Activar Espejo</button>
        <div class="output" id="output-dom-5"></div>
    </div>

    <hr>

    <h3>6. El Fantasma Seguidor (Movimiento del Ratón)</h3>
    <p>El evento <code>mousemove</code> se activa cada vez que mueves el ratón. Podemos usar las coordenadas del ratón para mover un elemento.</p>
    <div class="example">
        <div id="caja-fantasma" style="height: 200px; border: 2px dashed #ccc; position: relative; overflow: hidden;">
            <div id="fantasma" style="font-size: 2rem; position: absolute; transition: all 0.1s linear;">👻</div>
        </div>
        <textarea id="code-dom-6" readonly>
const caja = document.getElementById('caja-fantasma');
const fantasma = document.getElementById('fantasma');
caja.addEventListener('mousemove', function(evento) {
    // evento.clientX y evento.clientY son las coordenadas del ratón
    // Restamos la posición de la caja para que el fantasma se mueva DENTRO de ella.
    const x = evento.clientX - caja.getBoundingClientRect().left;
    const y = evento.clientY - caja.getBoundingClientRect().top;
    fantasma.style.left = x + 'px';
    fantasma.style.top = y + 'px';
});
console.log('Mueve el ratón sobre la caja punteada.');
        </textarea>
        <button onclick="runCode('code-dom-6')">Activar Fantasma</button>
        <div class="output" id="output-dom-6"></div>
    </div>

    <hr>

    <h3>7. Galería de Animales (Cambiar Atributos)</h3>
    <p>Podemos cambiar atributos de los elementos, como el atributo <code>src</code> (la fuente) de una imagen.</p>
    <div class="example">
        <div style="text-align: center;">
            <img id="animal-img" src="https://place-hold.it/150/666/fff&text=Animal" alt="Animal" style="width: 150px; height: 150px; border: 2px solid black;">
            <div>
                <button id="btn-prev">Anterior</button>
                <button id="btn-next">Siguiente</button>
            </div>
        </div>
        <textarea id="code-dom-7" readonly>
const imagenes = [
    'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg',
    'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/cat-talk-eyes-553942-hero-df606397b6ff4711abe42a31b14798c6.jpg',
    'https://cdn.britannica.com/91/181391-050-1DA18304/cat.jpg'
];
let indiceActual = 0;
const img = document.getElementById('animal-img');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

function mostrarImagen() {
    img.src = imagenes[indiceActual];
    console.log('Mostrando imagen ' + (indiceActual + 1));
}

btnNext.addEventListener('click', function() {
    indiceActual = (indiceActual + 1) % imagenes.length; // El % hace que vuelva al inicio
    mostrarImagen();
});

btnPrev.addEventListener('click', function() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
});

// Mostrar la primera imagen al inicio
mostrarImagen();
        </textarea>
        <button onclick="runCode('code-dom-7')">Activar Galería</button>
        <div class="output" id="output-dom-7"></div>
    </div>

    <hr>

    <h3>8. Lista de Tareas Sencilla</h3>
    <p>Este es un ejemplo clásico: añadir elementos a una lista. Combina crear elementos, leer el valor de un input y un evento de clic.</p>
    <div class="example">
        <input type="text" id="nueva-tarea-input" placeholder="Nueva tarea">
        <button id="btn-add-tarea">Añadir</button>
        <ul id="lista-tareas-ul"></ul>
        <textarea id="code-dom-8" readonly>
const inputTarea = document.getElementById('nueva-tarea-input');
const btnAdd = document.getElementById('btn-add-tarea');
const lista = document.getElementById('lista-tareas-ul');

btnAdd.addEventListener('click', function() {
    const textoTarea = inputTarea.value;
    if (textoTarea === '') {
        console.log('No puedes añadir una tarea vacía.');
        return; // Detiene la función si no hay texto
    }

    const nuevaLi = document.createElement('li');
    nuevaLi.textContent = textoTarea;
    lista.appendChild(nuevaLi);

    inputTarea.value = ''; // Limpia el input
    console.log('Tarea añadida: ' + textoTarea);
});
        </textarea>
        <button onclick="runCode('code-dom-8')">Activar Lista</button>
        <div class="output" id="output-dom-8"></div>
    </div>

    <hr>

    <h3>9. Contador de Caracteres</h3>
    <p>Similar al espejo, podemos usar el evento <code>input</code> para contar los caracteres en un área de texto.</p>
    <div class="example">
        <textarea id="texto-contador" maxlength="100" placeholder="Escribe hasta 100 caracteres..."></textarea>
        <p>Caracteres restantes: <span id="contador-span">100</span></p>
        <textarea id="code-dom-9" readonly>
const textarea = document.getElementById('texto-contador');
const contador = document.getElementById('contador-span');
const maxChars = 100;

textarea.addEventListener('input', function() {
    const restantes = maxChars - textarea.value.length;
    contador.textContent = restantes;
});
        </textarea>
        <button onclick="runCode('code-dom-9')">Activar Contador</button>
        <div class="output" id="output-dom-9"></div>
    </div>

    <hr>

    <h3>10. Menú Desplegable (Evento Change)</h3>
    <p>El evento <code>change</code> se dispara cuando el valor de un elemento de formulario, como un <code>&lt;select&gt;</code>, cambia.</p>
    <div class="example">
        <select id="menu-animales">
            <option value="🐶">Perro</option>
            <option value="🐱">Gato</option>
            <option value="🐰">Conejo</option>
        </select>
        <p>Tu elección: <span id="eleccion-animal" style="font-size: 2rem;"></span></p>
        <textarea id="code-dom-10" readonly>
const menu = document.getElementById('menu-animales');
const eleccion = document.getElementById('eleccion-animal');

menu.addEventListener('change', function() {
    eleccion.textContent = menu.value;
    console.log('Has elegido: ' + menu.value);
});

// Mostrar valor inicial
eleccion.textContent = menu.value;
        </textarea>
        <button onclick="runCode('code-dom-10')">Activar Menú</button>
        <div class="output" id="output-dom-10"></div>
    </div>

    <hr>

    <h3>11. Mensaje Secreto (Toggle)</h3>
    <p>Una función "toggle" es algo que alterna entre dos estados, como encendido/apagado o visible/oculto.</p>
    <div class="example">
        <button id="btn-toggle">Mostrar/Ocultar Secreto</button>
        <div id="secreto" style="display: none; border: 1px solid gold; padding: 10px; margin-top: 10px;">
            💎 ¡Encontraste el tesoro!
        </div>
        <textarea id="code-dom-11" readonly>
const btnToggle = document.getElementById('btn-toggle');
const secreto = document.getElementById('secreto');

btnToggle.addEventListener('click', function() {
    if (secreto.style.display === 'none') {
        secreto.style.display = 'block';
        console.log('Secreto mostrado.');
    } else {
        secreto.style.display = 'none';
        console.log('Secreto oculto.');
    }
});
        </textarea>
        <button onclick="runCode('code-dom-11')">Activar Botón</button>
        <div class="output" id="output-dom-11"></div>
    </div>

    <hr>

    <h3>12. La Tecla Mágica (Eventos de Teclado)</h3>
    <p>Podemos escuchar eventos del teclado, como <code>keydown</code> (cuando presionas una tecla).</p>
    <div class="example">
        <p>Haz clic aquí y luego presiona la barra espaciadora.</p>
        <div id="caja-teclado" style="height: 100px; border: 2px solid blue; text-align: center; line-height: 100px;">Presiona ESPACIO</div>
        <textarea id="code-dom-12" readonly>
const caja = document.getElementById('caja-teclado');
document.addEventListener('keydown', function(evento) {
    // evento.code nos dice qué tecla se presionó
    if (evento.code === 'Space') {
        caja.style.backgroundColor = 'lightblue';
        caja.textContent = '¡ESPACIO!';
        console.log('¡Barra espaciadora presionada!');
    }
});
        </textarea>
        <button onclick="runCode('code-dom-12')">Activar Teclado</button>
        <div class="output" id="output-dom-12"></div>
    </div>

    <hr>

    <h3>13. Mini Formulario (Prevenir Comportamiento por Defecto)</h3>
    <p>A veces queremos detener lo que el navegador hace por defecto (como recargar la página al enviar un formulario). Usamos <code>event.preventDefault()</code>.</p>
    <div class="example">
        <form id="mini-form">
            <input type="text" id="nombre-input" placeholder="Tu nombre" required>
            <button type="submit">Saludar</button>
        </form>
        <p id="saludo-output"></p>
        <textarea id="code-dom-13" readonly>
const form = document.getElementById('mini-form');
const nombreInput = document.getElementById('nombre-input');
const saludoOutput = document.getElementById('saludo-output');

form.addEventListener('submit', function(evento) {
    evento.preventDefault(); // ¡Muy importante! Detiene la recarga de la página.
    
    const nombre = nombreInput.value;
    saludoOutput.textContent = '¡Hola, ' + nombre + '!';
    console.log('Formulario enviado sin recargar.');
});
        </textarea>
        <button onclick="runCode('code-dom-13')">Activar Formulario</button>
        <div class="output" id="output-dom-13"></div>
    </div>

    <hr>

    <h3>14. Eventos Focus y Blur (Enfoque de Campos)</h3>
    <p>Los eventos <code>focus</code> y <code>blur</code> se disparan cuando entras y sales de un campo de entrada.</p>
    <div class="example">
        <input type="text" id="campo-focus" placeholder="Haz clic aquí">
        <p id="mensaje-focus"></p>
        <textarea id="code-dom-14" readonly>
const campo = document.getElementById('campo-focus');
const mensaje = document.getElementById('mensaje-focus');

campo.addEventListener('focus', function() {
    mensaje.textContent = '¡Estás escribiendo en el campo!';
    mensaje.style.color = 'green';
    console.log('Campo enfocado.');
});

campo.addEventListener('blur', function() {
    mensaje.textContent = 'Has salido del campo.';
    mensaje.style.color = 'gray';
    console.log('Campo desenfocado.');
});
        </textarea>
        <button onclick="runCode('code-dom-14')">Activar Focus/Blur</button>
        <div class="output" id="output-dom-14"></div>
    </div>

    <hr>

    <h3>15. Doble Clic (dblclick)</h3>
    <p>El evento <code>dblclick</code> se dispara cuando haces doble clic rápidamente en un elemento.</p>
    <div class="example">
        <div id="caja-doble-click" style="width: 200px; height: 100px; background-color: lightcoral; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            Haz doble clic aquí
        </div>
        <textarea id="code-dom-15" readonly>
const caja = document.getElementById('caja-doble-click');
caja.addEventListener('dblclick', function() {
    caja.style.backgroundColor = 'gold';
    caja.textContent = '¡Doble clic detectado!';
    console.log('¡Doble clic realizado!');
});
        </textarea>
        <button onclick="runCode('code-dom-15')">Activar Doble Clic</button>
        <div class="output" id="output-dom-15"></div>
    </div>

    <hr>

    <h3>16. Clic Derecho / Menú Contextual (contextmenu)</h3>
    <p>El evento <code>contextmenu</code> se dispara cuando haces clic derecho. Podemos prevenir el menú por defecto.</p>
    <div class="example">
        <div id="caja-clic-derecho" style="width: 200px; height: 100px; background-color: lightblue; display: flex; align-items: center; justify-content: center; cursor: context-menu;">
            Clic derecho aquí
        </div>
        <p id="mensaje-clic-derecho"></p>
        <textarea id="code-dom-16" readonly>
const caja = document.getElementById('caja-clic-derecho');
const mensaje = document.getElementById('mensaje-clic-derecho');

caja.addEventListener('contextmenu', function(evento) {
    evento.preventDefault(); // Previene el menú contextual por defecto
    mensaje.textContent = '¡Clic derecho detectado! (Menú bloqueado)';
    console.log('Clic derecho en la caja.');
});
        </textarea>
        <button onclick="runCode('code-dom-16')">Activar Clic Derecho</button>
        <div class="output" id="output-dom-16"></div>
    </div>

    <hr>

    <h3>17. Manipulación de Clases CSS (classList)</h3>
    <p>En lugar de cambiar estilos directamente, podemos añadir y quitar clases CSS. Es más limpio y mantenible.</p>
    <div class="example">
        <style>
            .destacado { background-color: yellow; font-weight: bold; padding: 10px; }
        </style>
        <p id="parrafo-clases">Este es un párrafo normal.</p>
        <button id="btn-toggle-clase">Alternar Destacado</button>
        <textarea id="code-dom-17" readonly>
const parrafo = document.getElementById('parrafo-clases');
const btn = document.getElementById('btn-toggle-clase');

btn.addEventListener('click', function() {
    // toggle() añade la clase si no la tiene, y la quita si ya la tiene
    parrafo.classList.toggle('destacado');
    console.log('Clase "destacado" alternada.');
});
        </textarea>
        <button onclick="runCode('code-dom-17')">Activar Toggle de Clase</button>
        <div class="output" id="output-dom-17"></div>
    </div>

    <hr>

    <h3>18. Evento Scroll (Desplazamiento)</h3>
    <p>El evento <code>scroll</code> se dispara cuando haces scroll en la página o en un elemento con scroll.</p>
    <div class="example">
        <div id="caja-scroll" style="height: 150px; overflow-y: scroll; border: 2px solid #ccc; padding: 10px;">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <p id="mensaje-scroll">Posición del scroll: 0px</p>
        <textarea id="code-dom-18" readonly>
const caja = document.getElementById('caja-scroll');
const mensaje = document.getElementById('mensaje-scroll');

caja.addEventListener('scroll', function() {
    mensaje.textContent = 'Posición del scroll: ' + caja.scrollTop + 'px';
    console.log('Scroll detectado en: ' + caja.scrollTop + 'px');
});
        </textarea>
        <button onclick="runCode('code-dom-18')">Activar Scroll</button>
        <div class="output" id="output-dom-18"></div>
    </div>

    <hr>

    <h3>19. Evento Resize (Cambio de Tamaño de Ventana)</h3>
    <p>El evento <code>resize</code> se dispara cuando cambias el tamaño de la ventana del navegador.</p>
    <div class="example">
        <p id="mensaje-resize">Ancho actual: --px</p>
        <textarea id="code-dom-19" readonly>
const mensaje = document.getElementById('mensaje-resize');

function actualizarTamaño() {
    mensaje.textContent = 'Ancho actual: ' + window.innerWidth + 'px';
}

window.addEventListener('resize', actualizarTamaño);
actualizarTamaño(); // Mostrar el tamaño inicial
console.log('Listener de resize añadido. Cambia el tamaño de la ventana.');
        </textarea>
        <button onclick="runCode('code-dom-19')">Activar Resize</button>
        <div class="output" id="output-dom-19"></div>
    </div>

    <hr>

    <h3>20. Atributos de Datos (data-attributes)</h3>
    <p>Podemos guardar información personalizada en elementos HTML usando atributos <code>data-*</code>.</p>
    <div class="example">
        <button class="btn-producto" data-nombre="Manzana" data-precio="1.50">Producto 1</button>
        <button class="btn-producto" data-nombre="Banana" data-precio="0.80">Producto 2</button>
        <p id="info-producto"></p>
        <textarea id="code-dom-20" readonly>
const botones = document.querySelectorAll('.btn-producto');
const info = document.getElementById('info-producto');

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const nombre = boton.dataset.nombre; // Accedemos a data-nombre
        const precio = boton.dataset.precio; // Accedemos a data-precio
        info.textContent = nombre + ' cuesta $' + precio;
        console.log('Producto seleccionado: ' + nombre);
    });
});
        </textarea>
        <button onclick="runCode('code-dom-20')">Activar Data Attributes</button>
        <div class="output" id="output-dom-20"></div>
    </div>

    <hr>

    <h3>21. Recorrer el DOM: Padre, Hijos y Hermanos</h3>
    <p>Podemos navegar entre elementos relacionados usando propiedades como <code>parentElement</code>, <code>children</code>, <code>nextElementSibling</code>.</p>
    <div class="example">
        <div id="contenedor-familia">
            <p id="hijo1">Hijo 1</p>
            <p id="hijo2">Hijo 2 (el objetivo)</p>
            <p id="hijo3">Hijo 3</p>
        </div>
        <p id="info-familia"></p>
        <textarea id="code-dom-21" readonly>
const objetivo = document.getElementById('hijo2');
const info = document.getElementById('info-familia');

const padre = objetivo.parentElement;
const hermanoAnterior = objetivo.previousElementSibling;
const hermanoSiguiente = objetivo.nextElementSibling;

info.innerHTML = 
    'Padre: ' + padre.id + '<br>' +
    'Hermano anterior: ' + hermanoAnterior.textContent + '<br>' +
    'Hermano siguiente: ' + hermanoSiguiente.textContent;

console.log('Navegación del DOM completada.');
        </textarea>
        <button onclick="runCode('code-dom-21')">Ejecutar Navegación</button>
        <div class="output" id="output-dom-21"></div>
    </div>

    <hr>

    <h3>22. Crear Elementos Complejos</h3>
    <p>Podemos crear elementos más complejos, establecer múltiples propiedades y añadirlos al DOM.</p>
    <div class="example">
        <div id="contenedor-tarjeta"></div>
        <textarea id="code-dom-22" readonly>
const contenedor = document.getElementById('contenedor-tarjeta');

// Crear una tarjeta completa
const tarjeta = document.createElement('div');
tarjeta.style.border = '1px solid #ddd';
tarjeta.style.padding = '20px';
tarjeta.style.borderRadius = '8px';
tarjeta.style.maxWidth = '300px';

const titulo = document.createElement('h4');
titulo.textContent = 'Tarjeta de Producto';

const descripcion = document.createElement('p');
descripcion.textContent = 'Esta es una tarjeta creada completamente con JavaScript.';

const boton = document.createElement('button');
boton.textContent = 'Comprar';
boton.onclick = () => console.log('¡Producto añadido al carrito!');

tarjeta.appendChild(titulo);
tarjeta.appendChild(descripcion);
tarjeta.appendChild(boton);

contenedor.innerHTML = ''; // Limpiar
contenedor.appendChild(tarjeta);
console.log('Tarjeta creada y añadida al DOM.');
        </textarea>
        <button onclick="runCode('code-dom-22')">Crear Tarjeta</button>
        <div class="output" id="output-dom-22"></div>
    </div>

    <hr>

    <h3>23. Eliminar Elementos del DOM</h3>
    <p>Podemos eliminar elementos usando el método <code>remove()</code>.</p>
    <div class="example">
        <div id="contenedor-eliminar">
            <p class="item-eliminar">Elemento 1</p>
            <p class="item-eliminar">Elemento 2</p>
            <p class="item-eliminar">Elemento 3</p>
        </div>
        <button id="btn-eliminar">Eliminar Primer Elemento</button>
        <textarea id="code-dom-23" readonly>
const btn = document.getElementById('btn-eliminar');
btn.addEventListener('click', function() {
    const primerItem = document.querySelector('.item-eliminar');
    if (primerItem) {
        primerItem.remove();
        console.log('Elemento eliminado.');
    } else {
        console.log('No hay más elementos para eliminar.');
    }
});
        </textarea>
        <button onclick="runCode('code-dom-23')">Activar Eliminar</button>
        <div class="output" id="output-dom-23"></div>
    </div>

    <hr>

    <h3>24. Clonar Elementos (cloneNode)</h3>
    <p>Podemos duplicar elementos existentes usando <code>cloneNode()</code>.</p>
    <div class="example">
        <div id="original-clon" style="padding: 10px; background-color: lightgreen; margin-bottom: 10px;">
            Elemento Original 🌟
        </div>
        <div id="contenedor-clones"></div>
        <button id="btn-clonar">Clonar Elemento</button>
        <textarea id="code-dom-24" readonly>
const original = document.getElementById('original-clon');
const contenedor = document.getElementById('contenedor-clones');
const btn = document.getElementById('btn-clonar');

btn.addEventListener('click', function() {
    const clon = original.cloneNode(true); // true = copiar también el contenido
    clon.style.backgroundColor = 'lightblue';
    contenedor.appendChild(clon);
    console.log('Elemento clonado.');
});
        </textarea>
        <button onclick="runCode('code-dom-24')">Activar Clonar</button>
        <div class="output" id="output-dom-24"></div>
    </div>

    <hr>

    <h3>25. InnerHTML vs TextContent vs InnerText</h3>
    <p>Hay diferentes formas de cambiar el contenido de un elemento. Cada una tiene sus usos.</p>
    <div class="example">
        <div id="caja-contenido" style="border: 1px solid #ccc; padding: 10px;">
            Contenido original
        </div>
        <button id="btn-html">Usar innerHTML</button>
        <button id="btn-text">Usar textContent</button>
        <textarea id="code-dom-25" readonly>
const caja = document.getElementById('caja-contenido');
const btnHtml = document.getElementById('btn-html');
const btnText = document.getElementById('btn-text');

btnHtml.addEventListener('click', function() {
    // innerHTML interpreta el HTML
    caja.innerHTML = '<strong>Texto en negrita</strong> con HTML';
    console.log('Usado innerHTML (interpreta HTML).');
});

btnText.addEventListener('click', function() {
    // textContent NO interpreta HTML, lo muestra como texto
    caja.textContent = '<strong>Esto NO será negrita</strong>';
    console.log('Usado textContent (texto plano).');
});
        </textarea>
        <button onclick="runCode('code-dom-25')">Activar Comparación</button>
        <div class="output" id="output-dom-25"></div>
    </div>

    <hr>

    <h3>26. Propagación de Eventos (Event Bubbling)</h3>
    <p>Los eventos "burbujean" desde el elemento objetivo hacia arriba. Podemos detener esta propagación.</p>
    <div class="example">
        <div id="padre-burbuja" style="padding: 30px; background-color: lightcoral;">
            PADRE (clic aquí)
            <div id="hijo-burbuja" style="padding: 20px; background-color: lightblue; margin-top: 10px;">
                HIJO (clic aquí)
            </div>
        </div>
        <p id="info-burbuja"></p>
        <textarea id="code-dom-26" readonly>
const padre = document.getElementById('padre-burbuja');
const hijo = document.getElementById('hijo-burbuja');
const info = document.getElementById('info-burbuja');

padre.addEventListener('click', function() {
    info.textContent += ' -> Padre clickeado';
    console.log('Click en PADRE');
});

hijo.addEventListener('click', function(evento) {
    info.textContent = 'Hijo clickeado';
    console.log('Click en HIJO');
    // Descomenta la siguiente línea para detener la propagación:
    // evento.stopPropagation();
});
        </textarea>
        <button onclick="runCode('code-dom-26')">Activar Burbujeo</button>
        <div class="output" id="output-dom-26"></div>
    </div>

    <hr>

    <h3>27. Evento Load en Imágenes</h3>
    <p>El evento <code>load</code> se dispara cuando una imagen (u otro recurso) termina de cargar.</p>
    <div class="example">
        <img id="img-load" src="" alt="Imagen de prueba" style="max-width: 200px; display: none;">
        <p id="estado-img">Imagen no cargada aún.</p>
        <textarea id="code-dom-27" readonly>
const img = document.getElementById('img-load');
const estado = document.getElementById('estado-img');

img.addEventListener('load', function() {
    estado.textContent = '¡Imagen cargada con éxito!';
    estado.style.color = 'green';
    img.style.display = 'block';
    console.log('Imagen cargada.');
});

img.addEventListener('error', function() {
    estado.textContent = 'Error al cargar la imagen.';
    estado.style.color = 'red';
    console.log('Error al cargar imagen.');
});

// Establecer la fuente de la imagen para iniciar la carga
img.src = 'https://via.placeholder.com/200';
        </textarea>
        <button onclick="runCode('code-dom-27')">Cargar Imagen</button>
        <div class="output" id="output-dom-27"></div>
    </div>

    <hr>

    <h3>28. Drag and Drop Básico</h3>
    <p>Podemos hacer elementos arrastrables usando los atributos <code>draggable</code> y los eventos de arrastre.</p>
    <div class="example">
        <div id="elemento-arrastrable" draggable="true" style="width: 100px; padding: 20px; background-color: orange; cursor: move; margin-bottom: 10px;">
            Arrástrame
        </div>
        <div id="zona-soltar" style="width: 200px; height: 100px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
            Suelta aquí
        </div>
        <textarea id="code-dom-28" readonly>
const elemento = document.getElementById('elemento-arrastrable');
const zona = document.getElementById('zona-soltar');

elemento.addEventListener('dragstart', function(evento) {
    evento.dataTransfer.setData('text', elemento.id);
    console.log('Inicio del arrastre.');
});

zona.addEventListener('dragover', function(evento) {
    evento.preventDefault(); // Necesario para permitir el drop
});

zona.addEventListener('drop', function(evento) {
    evento.preventDefault();
    const id = evento.dataTransfer.getData('text');
    const elementoArrastrado = document.getElementById(id);
    zona.appendChild(elementoArrastrado);
    console.log('Elemento soltado en la zona.');
});
        </textarea>
        <button onclick="runCode('code-dom-28')">Activar Drag & Drop</button>
        <div class="output" id="output-dom-28"></div>
    </div>

    <hr>

    <h3>29. Detectar Copiar, Cortar y Pegar</h3>
    <p>Podemos escuchar los eventos del portapapeles: <code>copy</code>, <code>cut</code> y <code>paste</code>.</p>
    <div class="example">
        <textarea id="textarea-clipboard" placeholder="Selecciona texto y usa Ctrl+C, Ctrl+X o Ctrl+V"></textarea>
        <p id="info-clipboard"></p>
        <textarea id="code-dom-29" readonly>
const textarea = document.getElementById('textarea-clipboard');
const info = document.getElementById('info-clipboard');

textarea.addEventListener('copy', function() {
    info.textContent = 'Texto copiado al portapapeles.';
    console.log('Evento copy detectado.');
});

textarea.addEventListener('cut', function() {
    info.textContent = 'Texto cortado.';
    console.log('Evento cut detectado.');
});

textarea.addEventListener('paste', function() {
    info.textContent = 'Texto pegado.';
    console.log('Evento paste detectado.');
});
        </textarea>
        <button onclick="runCode('code-dom-29')">Activar Portapapeles</button>
        <div class="output" id="output-dom-29"></div>
    </div>

    <hr>

    <h3>30. Transiciones CSS y Eventos (transitionend)</h3>
    <p>El evento <code>transitionend</code> se dispara cuando una transición CSS termina.</p>
    <div class="example">
        <div id="caja-transicion" style="width: 100px; height: 100px; background-color: purple; transition: all 1s;">
        </div>
        <button id="btn-animar">Animar</button>
        <p id="estado-transicion"></p>
        <textarea id="code-dom-30" readonly>
const caja = document.getElementById('caja-transicion');
const btn = document.getElementById('btn-animar');
const estado = document.getElementById('estado-transicion');

btn.addEventListener('click', function() {
    caja.style.width = '200px';
    caja.style.backgroundColor = 'teal';
    estado.textContent = 'Animando...';
    console.log('Transición iniciada.');
});

caja.addEventListener('transitionend', function() {
    estado.textContent = '¡Transición completada!';
    console.log('Transición terminada.');
});
        </textarea>
        <button onclick="runCode('code-dom-30')">Activar Transición</button>
        <div class="output" id="output-dom-30"></div>
    </div>

</section>
`;
