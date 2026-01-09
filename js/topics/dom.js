const content = document.getElementById('content');

content.innerHTML = `
<section>
    <h2>DOM y Eventos: ¡Magia para tu página!</h2>
    <p>Imagina que tu página web es una casa de legos. El HTML son las piezas y su orden. El <strong>DOM</strong> es como un mapa mágico que le permite a JavaScript ver todas las piezas y dónde están.</p>
    <p>Con este mapa, JavaScript puede hacer trucos increíbles: cambiar el color de una pieza, moverla, o incluso añadir piezas nuevas. ¡Vamos a probar con muchos ejemplos!</p>

    <hr>

    <h3>📌 PARTE 1: Selectores del DOM - Cómo encontrar elementos en tu página</h3>
    <p>El <strong>DOM (Document Object Model)</strong> es como un árbol genealógico de tu página HTML. Cada elemento (div, p, button, etc.) es un "nodo" en ese árbol.</p>
    <p>Para poder modificar, mover o eliminar elementos, primero necesitas <strong>seleccionarlos</strong>. JavaScript te da varios métodos para hacerlo, cada uno con sus ventajas:</p>

    <hr>

    <div class="example">
        <h4>🎯 Método 1: getElementById() - Buscar por ID único</h4>
        <p><strong>¿Cuándo usarlo?</strong> Cuando el elemento tiene un atributo <code>id</code> único.</p>
        <p><strong>¿Qué devuelve?</strong> UN solo elemento (o null si no existe).</p>
        <p><strong>Velocidad:</strong> ⚡⚡⚡ Muy rápido (el más rápido de todos).</p>
        
        <p><strong>Ejemplo práctico:</strong></p>
        <textarea id="code-selector-1" readonly>// Supongamos que en tu HTML tienes:
// <div id="miCaja">Este es el contenido de la caja</div>

// 1. Seleccionamos el elemento por su ID
const elemento = document.getElementById('miCaja');

// 2. Ahora podemos leer su contenido
console.log('Contenido:', elemento.textContent);

// 3. O modificarlo
elemento.textContent = 'Nuevo contenido';
elemento.style.color = 'blue';

// IMPORTANTE: NO uses el # antes del ID
// ✅ Correcto: getElementById('miCaja')
// ❌ Incorrecto: getElementById('#miCaja')</textarea>
        <button onclick="runCode('code-selector-1')">Ejecutar</button>
        <div class="output" id="output-selector-1"></div>
        
        <p><strong>💡 Caso de uso real:</strong> Perfecto para botones únicos, formularios, o cualquier elemento que sabes que existe una sola vez.</p>
    </div>

    <hr>

    <div class="example">
        <h4>🎯 Método 2: getElementsByClassName() - Buscar por clase CSS</h4>
        <p><strong>¿Cuándo usarlo?</strong> Cuando varios elementos comparten la misma clase CSS.</p>
        <p><strong>¿Qué devuelve?</strong> Una <strong>HTMLCollection</strong> (parecida a un array) con TODOS los elementos que tengan esa clase.</p>
        <p><strong>Velocidad:</strong> ⚡⚡ Rápido.</p>
        
        <p><strong>Ejemplo práctico:</strong></p>
        <textarea id="code-selector-2" readonly>// HTML imaginario:
// <div class="tarjeta">Tarjeta 1</div>
// <div class="tarjeta">Tarjeta 2</div>
// <div class="tarjeta">Tarjeta 3</div>

// 1. Selecciona TODAS las tarjetas
const tarjetas = document.getElementsByClassName('tarjeta');

// 2. Veamos cuántas encontró
console.log('Total de tarjetas:', tarjetas.length);

// 3. Accede a la primera tarjeta (índice 0)
console.log('Primera tarjeta:', tarjetas[0].textContent);

// 4. Recorrer todas con un bucle
for (let i = 0; i < tarjetas.length; i++) {
    console.log('Tarjeta ' + (i + 1) + ':', tarjetas[i].textContent);
}

// IMPORTANTE: NO uses el punto (.) antes de la clase
// ✅ Correcto: getElementsByClassName('tarjeta')
// ❌ Incorrecto: getElementsByClassName('.tarjeta')</textarea>
        <button onclick="runCode('code-selector-2')">Ejecutar</button>
        <div class="output" id="output-selector-2"></div>
        
        <p><strong>💡 Caso de uso real:</strong> Ideal para listas de productos, galerías de imágenes, o cualquier grupo de elementos similares.</p>
    </div>

    <hr>

    <div class="example">
        <h4>🎯 Método 3: getElementsByTagName() - Buscar por tipo de etiqueta HTML</h4>
        <p><strong>¿Cuándo usarlo?</strong> Cuando quieres todos los elementos de un tipo específico (todos los párrafos, todos los botones, todas las imágenes, etc.).</p>
        <p><strong>¿Qué devuelve?</strong> Una <strong>HTMLCollection</strong> con todos los elementos de ese tipo.</p>
        <p><strong>Velocidad:</strong> ⚡⚡ Rápido.</p>
        
        <p><strong>Ejemplo práctico:</strong></p>
        <textarea id="code-selector-3" readonly>// Ejemplo 1: Encontrar todos los párrafos <p>
const parrafos = document.getElementsByTagName('p');
console.log('Párrafos en la página:', parrafos.length);

// Ejemplo 2: Encontrar todas las imágenes <img>
const imagenes = document.getElementsByTagName('img');
console.log('Imágenes en la página:', imagenes.length);

// Ejemplo 3: Cambiar el color de TODOS los párrafos
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = 'green';
}

// Ejemplo 4: Encontrar todos los divs
const divs = document.getElementsByTagName('div');
console.log('Divs encontrados:', divs.length);</textarea>
        <button onclick="runCode('code-selector-3')">Ejecutar</button>
        <div class="output" id="output-selector-3"></div>
        
        <p><strong>💡 Caso de uso real:</strong> Útil cuando necesitas aplicar un estilo o comportamiento a todos los elementos de un tipo, sin importar su clase o ID.</p>
    </div>

    <hr>

    <div class="example">
        <h4>🎯 Método 4: querySelector() - Selector CSS flexible (PRIMER elemento)</h4>
        <p><strong>¿Cuándo usarlo?</strong> Cuando quieres usar selectores CSS complejos y solo necesitas el PRIMER elemento que coincida.</p>
        <p><strong>¿Qué devuelve?</strong> UN solo elemento (el primero que encuentre) o null.</p>
        <p><strong>Velocidad:</strong> ⚡ Moderado (pero muy flexible).</p>
        
        <p><strong>Ejemplo práctico con muchas opciones:</strong></p>
        <textarea id="code-selector-4" readonly>// Ejemplo 1: Buscar por clase (con punto)
const elemento1 = document.querySelector('.importante');
console.log('Por clase:', elemento1);

// Ejemplo 2: Buscar por ID (con #)
const elemento2 = document.querySelector('#miCaja');
console.log('Por ID:', elemento2);

// Ejemplo 3: Buscar por atributo
const elemento3 = document.querySelector('[type="text"]');
console.log('Input tipo texto:', elemento3);

// Ejemplo 4: Combinaciones complejas
const primerBoton = document.querySelector('button.primary');
console.log('Botón con clase primary:', primerBoton);

// Ejemplo 5: Buscar dentro de un contenedor
const primerParrafo = document.querySelector('section p');
console.log('Primer párrafo dentro de section:', primerParrafo);

// Ejemplo 6: Pseudo-selectores CSS
const primerHijo = document.querySelector('div:first-child');
console.log('Primer div hijo:', primerHijo);</textarea>
        <button onclick="runCode('code-selector-4')">Ejecutar</button>
        <div class="output" id="output-selector-4"></div>
        
        <p><strong>💡 Caso de uso real:</strong> Perfecto cuando necesitas flexibilidad y selectores complejos. Es la opción más moderna y recomendada.</p>
    </div>

    <hr>

    <div class="example">
        <h4>🎯 Método 5: querySelectorAll() - Selector CSS flexible (TODOS los elementos)</h4>
        <p><strong>¿Cuándo usarlo?</strong> Cuando quieres usar selectores CSS y necesitas TODOS los elementos que coincidan.</p>
        <p><strong>¿Qué devuelve?</strong> Una <strong>NodeList</strong> (como un array) con todos los elementos que coincidan.</p>
        <p><strong>Velocidad:</strong> ⚡ Moderado pero muy potente.</p>
        
        <p><strong>Ejemplo práctico completo:</strong></p>
        <textarea id="code-selector-5" readonly>// Ejemplo 1: Todas las cajas con clase 'color-box'
const cajas = document.querySelectorAll('.color-box');
console.log('Cajas encontradas:', cajas.length);

// Ejemplo 2: forEach es muy útil con querySelectorAll
cajas.forEach((caja, index) => {
    console.log('Caja ' + (index + 1) + ':', caja.className);
    // También podemos modificarlas
    caja.style.border = '2px solid red';
});

// Ejemplo 3: Todos los botones de la página
const botones = document.querySelectorAll('button');
console.log('Botones en la página:', botones.length);

// Ejemplo 4: Selectores complejos
const enlacesExternos = document.querySelectorAll('a[target="_blank"]');
console.log('Enlaces externos:', enlacesExternos.length);

// Ejemplo 5: Convertir a array real para usar métodos de array
const cajasArray = Array.from(cajas);
const primerasTres = cajasArray.slice(0, 3);
console.log('Primeras 3 cajas:', primerasTres.length);</textarea>
        <button onclick="runCode('code-selector-5')">Ejecutar</button>
        <div class="output" id="output-selector-5"></div>
        
        <p><strong>💡 Caso de uso real:</strong> La opción más versátil y moderna. Perfecta para trabajar con múltiples elementos usando selectores CSS avanzados.</p>
    </div>

    <hr>

    <div class="example">
        <h4>📊 TABLA COMPARATIVA COMPLETA</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
                <tr style="background-color: #444;">
                    <th style="border: 1px solid #666; padding: 10px;">Método</th>
                    <th style="border: 1px solid #666; padding: 10px;">Sintaxis</th>
                    <th style="border: 1px solid #666; padding: 10px;">¿Qué devuelve?</th>
                    <th style="border: 1px solid #666; padding: 10px;">Velocidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #666; padding: 10px;"><code>getElementById</code></td>
                    <td style="border: 1px solid #666; padding: 10px;"><code>('miId')</code></td>
                    <td style="border: 1px solid #666; padding: 10px;">1 elemento o null</td>
                    <td style="border: 1px solid #666; padding: 10px;">⚡⚡⚡ Muy rápido</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #666; padding: 10px;"><code>getElementsByClassName</code></td>
                    <td style="border: 1px solid #666; padding: 10px;"><code>('miClase')</code></td>
                    <td style="border: 1px solid #666; padding: 10px;">HTMLCollection (varios)</td>
                    <td style="border: 1px solid #666; padding: 10px;">⚡⚡ Rápido</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #666; padding: 10px;"><code>getElementsByTagName</code></td>
                    <td style="border: 1px solid #666; padding: 10px;"><code>('div')</code></td>
                    <td style="border: 1px solid #666; padding: 10px;">HTMLCollection (varios)</td>
                    <td style="border: 1px solid #666; padding: 10px;">⚡⚡ Rápido</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #666; padding: 10px;"><code>querySelector</code></td>
                    <td style="border: 1px solid #666; padding: 10px;"><code>('.clase')</code></td>
                    <td style="border: 1px solid #666; padding: 10px;">1 elemento o null</td>
                    <td style="border: 1px solid #666; padding: 10px;">⚡ Moderado</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #666; padding: 10px;"><code>querySelectorAll</code></td>
                    <td style="border: 1px solid #666; padding: 10px;"><code>('.clase')</code></td>
                    <td style="border: 1px solid #666; padding: 10px;">NodeList (varios)</td>
                    <td style="border: 1px solid #666; padding: 10px;">⚡ Moderado</td>
                </tr>
            </tbody>
        </table>

        <h4>🔥 Ejemplos de selectores CSS avanzados (para querySelector/All)</h4>
        <pre><code>// Por clase
document.querySelector('.miClase')

// Por ID
document.querySelector('#miId')

// Por etiqueta
document.querySelector('div')

// Combinación: div con clase específica
document.querySelector('div.miClase')

// Hijo directo
document.querySelector('div > p')

// Atributo específico
document.querySelector('input[type="email"]')

// Múltiples clases
document.querySelector('.clase1.clase2')

// Pseudo-selectores
document.querySelector('li:first-child')
document.querySelector('div:hover')
document.querySelector('input:checked')

// Descendiente (cualquier nivel)
document.querySelector('.contenedor .boton')

// Hermano adyacente
document.querySelector('h2 + p')

// Por data-attribute
document.querySelector('[data-id="123"]')
</code></pre>
    </div>

    <hr>

    <div class="example">
        <h4>✅ RECOMENDACIONES Y MEJORES PRÁCTICAS</h4>
        <ul style="line-height: 1.8;">
            <li><strong>Para proyectos modernos:</strong> Usa principalmente <code>querySelector()</code> y <code>querySelectorAll()</code>. Son más flexibles y el código es más fácil de leer.</li>
            <li><strong>Para elementos únicos:</strong> Si el elemento tiene un ID único, <code>getElementById()</code> es la opción más rápida.</li>
            <li><strong>Para colecciones dinámicas:</strong> <code>getElementsByClassName()</code> y <code>getElementsByTagName()</code> devuelven colecciones "vivas" (se actualizan automáticamente).</li>
            <li><strong>Para colecciones estáticas:</strong> <code>querySelectorAll()</code> devuelve una lista estática (snapshot del momento).</li>
            <li><strong>Siempre verifica si existe:</strong> Usa <code>if (elemento)</code> antes de manipular para evitar errores si el elemento no existe.</li>
            <li><strong>Performance:</strong> Si tu página tiene miles de elementos, los selectores simples (ID, clase) son más rápidos que los complejos.</li>
        </ul>
        
        <textarea id="code-selector-best" readonly>// ✅ Buena práctica: Verificar antes de usar
const boton = document.getElementById('miBoton');
if (boton) {
    boton.addEventListener('click', () => {
        console.log('Clic en el botón');
    });
} else {
    console.log('El botón no existe en la página');
}

// ✅ Buena práctica: Guardar referencias
const contenedor = document.querySelector('.contenedor');
const items = contenedor.querySelectorAll('.item');

// ❌ Mala práctica: Buscar múltiples veces
// document.querySelector('.item').style.color = 'red';
// document.querySelector('.item').style.fontSize = '20px';

// ✅ Mejor: Buscar una vez y guardar
const item = document.querySelector('.item');
item.style.color = 'red';
item.style.fontSize = '20px';</textarea>
        <button onclick="runCode('code-selector-best')">Ejecutar</button>
        <div class="output" id="output-selector-best"></div>
    </div>

    <hr>
    <hr>

    <h3>🛠️ PARTE 2: Manipulación del DOM - Crear, Modificar y Eliminar Elementos</h3>
    <p>Ahora que sabes cómo <strong>seleccionar</strong> elementos, es hora de aprender a <strong>manipularlos</strong>. Esto incluye cambiar contenido, estilos, atributos, crear nuevos elementos y eliminarlos.</p>

    <hr>

    <div class="example">
        <h4>📝 1. Cambiar el CONTENIDO de un elemento</h4>
        <p>Hay tres propiedades principales para cambiar el contenido:</p>
        
        <h5>a) textContent - Solo texto plano</h5>
        <p>Cambia el texto dentro del elemento. NO interpreta HTML, todo se muestra como texto.</p>
        <textarea id="code-manip-1a" readonly>// HTML: <div id="caja1">Texto original</div>

const caja = document.getElementById('caja1');

// Cambiar el texto
caja.textContent = 'Nuevo texto';
console.log('Contenido cambiado:', caja.textContent);

// Si pones HTML, se mostrará como texto
caja.textContent = '<strong>Negrita</strong>';
// Resultado: Se ve literalmente "<strong>Negrita</strong>"</textarea>
        <button onclick="runCode('code-manip-1a')">Ejecutar</button>
        <div class="output" id="output-manip-1a"></div>

        <h5>b) innerHTML - Texto con HTML</h5>
        <p>Cambia el contenido Y sí interpreta etiquetas HTML.</p>
        <textarea id="code-manip-1b" readonly>// HTML: <div id="caja2">Contenido original</div>

const caja2 = document.getElementById('caja2');

// Cambiar con HTML
caja2.innerHTML = '<strong>Texto en negrita</strong>';
console.log('HTML insertado');

// También puedes construir estructuras complejas
caja2.innerHTML = \`
    <h4>Lista de compras:</h4>
    <ul>
        <li>Manzanas</li>
        <li>Plátanos</li>
        <li>Naranjas</li>
    </ul>
\`;
console.log('Estructura HTML completa insertada');</textarea>
        <button onclick="runCode('code-manip-1b')">Ejecutar</button>
        <div class="output" id="output-manip-1b"></div>

        <h5>c) value - Para inputs y formularios</h5>
        <p>Para leer o cambiar el valor de inputs, textareas y selects.</p>
        <textarea id="code-manip-1c" readonly>// HTML: <input type="text" id="miInput" value="inicial">

const input = document.getElementById('miInput');

// Leer el valor actual
console.log('Valor actual:', input.value);

// Cambiar el valor
input.value = 'Nuevo valor programáticamente';
console.log('Valor cambiado:', input.value);

// Limpiar un input
input.value = '';
console.log('Input limpiado');</textarea>
        <button onclick="runCode('code-manip-1c')">Ejecutar</button>
        <div class="output" id="output-manip-1c"></div>

        <p><strong>⚠️ Diferencia importante:</strong></p>
        <ul>
            <li><code>textContent</code>: Más rápido y seguro. Usa cuando solo necesites texto.</li>
            <li><code>innerHTML</code>: Más lento pero flexible. CUIDADO con contenido de usuarios (riesgo XSS).</li>
            <li><code>value</code>: Solo para elementos de formulario.</li>
        </ul>
    </div>

    <hr>

    <div class="example">
        <h4>🎨 2. Cambiar ESTILOS CSS</h4>
        <p>Puedes modificar estilos CSS directamente desde JavaScript.</p>
        
        <h5>a) Propiedad style - Estilos inline individuales</h5>
        <textarea id="code-manip-2a" readonly>// HTML: <div id="caja3">Caja de ejemplo</div>

const caja3 = document.getElementById('caja3');

// Cambiar estilos individuales
caja3.style.color = 'blue';
caja3.style.backgroundColor = 'yellow';
caja3.style.fontSize = '24px';
caja3.style.padding = '20px';
caja3.style.border = '2px solid red';
caja3.style.borderRadius = '10px';

// Nota: Las propiedades CSS con guión se convierten a camelCase
// background-color → backgroundColor
// font-size → fontSize
// border-radius → borderRadius

console.log('Estilos aplicados');</textarea>
        <button onclick="runCode('code-manip-2a')">Ejecutar</button>
        <div class="output" id="output-manip-2a"></div>

        <h5>b) classList - Trabajar con clases CSS</h5>
        <p>Mejor práctica: Define estilos en CSS y añade/quita clases desde JS.</p>
        <textarea id="code-manip-2b" readonly>// HTML: <div id="caja4" class="activo">Caja con clase</div>
// CSS imaginario: .destacado { background: gold; font-weight: bold; }

const caja4 = document.getElementById('caja4');

// Añadir una clase
caja4.classList.add('destacado');
console.log('Clase añadida:', caja4.className);

// Quitar una clase
caja4.classList.remove('activo');
console.log('Clase quitada:', caja4.className);

// Toggle (si está la quita, si no está la añade)
caja4.classList.toggle('destacado');
console.log('Toggle 1:', caja4.className);
caja4.classList.toggle('destacado');
console.log('Toggle 2:', caja4.className);

// Verificar si tiene una clase
if (caja4.classList.contains('destacado')) {
    console.log('Tiene la clase destacado');
} else {
    console.log('NO tiene la clase destacado');
}

// Reemplazar una clase por otra
caja4.classList.replace('activo', 'inactivo');</textarea>
        <button onclick="runCode('code-manip-2b')">Ejecutar</button>
        <div class="output" id="output-manip-2b"></div>
    </div>

    <hr>

    <div class="example">
        <h4>🏷️ 3. Trabajar con ATRIBUTOS</h4>
        <p>Los atributos son propiedades HTML como src, href, alt, data-*, etc.</p>
        
        <textarea id="code-manip-3" readonly>// HTML: <img id="foto" src="imagen1.jpg" alt="Foto">

const foto = document.getElementById('foto');

// Leer un atributo
console.log('Atributo src:', foto.getAttribute('src'));
console.log('Atributo alt:', foto.getAttribute('alt'));

// Cambiar un atributo
foto.setAttribute('src', 'imagen2.jpg');
foto.setAttribute('alt', 'Nueva foto');
console.log('Atributos cambiados');

// Verificar si tiene un atributo
if (foto.hasAttribute('src')) {
    console.log('La imagen tiene atributo src');
}

// Eliminar un atributo
foto.removeAttribute('alt');
console.log('Atributo alt eliminado');

// Atributos data-* (dataset)
// HTML: <div id="usuario" data-id="123" data-nombre="Juan"></div>
const usuario = document.getElementById('usuario');
console.log('Data ID:', usuario.dataset.id);
console.log('Data Nombre:', usuario.dataset.nombre);

// Cambiar atributos data-*
usuario.dataset.id = '456';
usuario.dataset.rol = 'admin';
console.log('Dataset actualizado');</textarea>
        <button onclick="runCode('code-manip-3')">Ejecutar</button>
        <div class="output" id="output-manip-3"></div>
    </div>

    <hr>

    <div class="example">
        <h4>➕ 4. CREAR nuevos elementos</h4>
        <p>Puedes crear elementos HTML desde cero con JavaScript.</p>
        
        <h5>Método completo paso a paso:</h5>
        <textarea id="code-manip-4" readonly>// Paso 1: Crear el elemento
const nuevoDiv = document.createElement('div');

// Paso 2: Configurar el contenido
nuevoDiv.textContent = 'Soy un div nuevo';

// Paso 3: Añadir estilos o clases
nuevoDiv.style.backgroundColor = 'lightblue';
nuevoDiv.style.padding = '10px';
nuevoDiv.style.margin = '10px';
nuevoDiv.classList.add('caja-nueva');

// Paso 4: Añadirlo al DOM
document.body.appendChild(nuevoDiv);
console.log('Nuevo div añadido al body');

// Ejemplo más completo: Crear una tarjeta
const tarjeta = document.createElement('article');
tarjeta.innerHTML = \`
    <h3>Producto</h3>
    <p>Descripción del producto</p>
    <button>Comprar</button>
\`;
tarjeta.style.border = '1px solid gray';
tarjeta.style.padding = '15px';
tarjeta.style.margin = '10px';
tarjeta.style.borderRadius = '8px';

// Añadir a un contenedor específico
const contenedor = document.querySelector('.contenedor');
if (contenedor) {
    contenedor.appendChild(tarjeta);
    console.log('Tarjeta añadida al contenedor');
}</textarea>
        <button onclick="runCode('code-manip-4')">Ejecutar</button>
        <div class="output" id="output-manip-4"></div>
    </div>

    <hr>

    <div class="example">
        <h4>📍 5. Métodos para INSERTAR elementos en diferentes posiciones</h4>
        
        <h5>a) appendChild() - Al final (ya lo vimos)</h5>
        <textarea id="code-manip-5a" readonly>const lista = document.querySelector('ul');
const nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Último elemento';

lista.appendChild(nuevoItem);
console.log('Elemento añadido al final');</textarea>
        <button onclick="runCode('code-manip-5a')">Ejecutar</button>
        <div class="output" id="output-manip-5a"></div>

        <h5>b) insertBefore() - Antes de un elemento específico</h5>
        <textarea id="code-manip-5b" readonly>// HTML: <ul><li id="item2">Item 2</li></ul>

const lista2 = document.querySelector('ul');
const item2 = document.getElementById('item2');
const nuevoItem2 = document.createElement('li');
nuevoItem2.textContent = 'Item insertado antes';

// Insertar ANTES del item2
lista2.insertBefore(nuevoItem2, item2);
console.log('Elemento insertado antes del item2');</textarea>
        <button onclick="runCode('code-manip-5b')">Ejecutar</button>
        <div class="output" id="output-manip-5b"></div>

        <h5>c) insertAdjacentHTML() - Insertar HTML en posiciones específicas</h5>
        <textarea id="code-manip-5c" readonly>// HTML: <div id="contenedor">Contenido actual</div>

const cont = document.getElementById('contenedor');

// beforebegin: ANTES del elemento
cont.insertAdjacentHTML('beforebegin', '<p>Antes del contenedor</p>');

// afterbegin: DENTRO, al principio
cont.insertAdjacentHTML('afterbegin', '<p>Inicio interno</p>');

// beforeend: DENTRO, al final
cont.insertAdjacentHTML('beforeend', '<p>Final interno</p>');

// afterend: DESPUÉS del elemento
cont.insertAdjacentHTML('afterend', '<p>Después del contenedor</p>');

console.log('HTML insertado en 4 posiciones');</textarea>
        <button onclick="runCode('code-manip-5c')">Ejecutar</button>
        <div class="output" id="output-manip-5c"></div>
    </div>

    <hr>

    <div class="example">
        <h4>🗑️ 6. ELIMINAR elementos</h4>
        
        <h5>a) remove() - Eliminar el elemento mismo (moderno)</h5>
        <textarea id="code-manip-6a" readonly>// HTML: <div id="eliminar1">Elimíname</div>

const elemento = document.getElementById('eliminar1');

// Método moderno y simple
elemento.remove();
console.log('Elemento eliminado con remove()');</textarea>
        <button onclick="runCode('code-manip-6a')">Ejecutar</button>
        <div class="output" id="output-manip-6a"></div>

        <h5>b) removeChild() - Eliminar un hijo específico</h5>
        <textarea id="code-manip-6b" readonly>// HTML: <ul id="lista"><li id="item-a">A</li></ul>

const lista3 = document.getElementById('lista');
const itemA = document.getElementById('item-a');

// Método clásico: el padre elimina al hijo
lista3.removeChild(itemA);
console.log('Elemento eliminado con removeChild()');</textarea>
        <button onclick="runCode('code-manip-6b')">Ejecutar</button>
        <div class="output" id="output-manip-6b"></div>

        <h5>c) innerHTML = '' - Vaciar todo el contenido</h5>
        <textarea id="code-manip-6c" readonly>// HTML: <div id="contenedor2"><p>A</p><p>B</p></div>

const cont2 = document.getElementById('contenedor2');

// Vaciar completamente el contenedor
cont2.innerHTML = '';
console.log('Contenedor vaciado completamente');</textarea>
        <button onclick="runCode('code-manip-6c')">Ejecutar</button>
        <div class="output" id="output-manip-6c"></div>
    </div>

    <hr>

    <div class="example">
        <h4>🔄 7. CLONAR elementos</h4>
        <p>Puedes duplicar un elemento existente con todas sus propiedades.</p>
        
        <textarea id="code-manip-7" readonly>// HTML: <div id="original">Elemento original</div>

const original = document.getElementById('original');

// Clonar SIN hijos internos
const clon1 = original.cloneNode(false);
console.log('Clon superficial creado');

// Clonar CON todos los hijos (deep clone)
const clon2 = original.cloneNode(true);
clon2.textContent = 'Soy un clon profundo';
console.log('Clon profundo creado');

// Añadir los clones al DOM
document.body.appendChild(clon1);
document.body.appendChild(clon2);
console.log('Clones añadidos al DOM');</textarea>
        <button onclick="runCode('code-manip-7')">Ejecutar</button>
        <div class="output" id="output-manip-7"></div>
    </div>

    <hr>

    <div class="example">
        <h4>📦 EJEMPLO PRÁCTICO COMPLETO: Sistema de tarjetas</h4>
        <p>Combina todo lo aprendido para crear un sistema dinámico.</p>
        
        <textarea id="code-manip-practica" readonly>// Crear un contenedor
const contenedorTarjetas = document.createElement('div');
contenedorTarjetas.id = 'galeria-tarjetas';
contenedorTarjetas.style.display = 'flex';
contenedorTarjetas.style.gap = '10px';
contenedorTarjetas.style.padding = '20px';
contenedorTarjetas.style.flexWrap = 'wrap';

// Datos de ejemplo
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 80 }
];

// Crear una tarjeta por cada producto
productos.forEach(producto => {
    // Crear elementos
    const tarjeta = document.createElement('div');
    const titulo = document.createElement('h4');
    const precio = document.createElement('p');
    const boton = document.createElement('button');
    
    // Configurar contenido
    titulo.textContent = producto.nombre;
    precio.textContent = '$' + producto.precio;
    boton.textContent = 'Añadir al carrito';
    
    // Estilos
    tarjeta.style.border = '1px solid #ddd';
    tarjeta.style.padding = '15px';
    tarjeta.style.borderRadius = '8px';
    tarjeta.style.width = '150px';
    tarjeta.style.textAlign = 'center';
    
    // Atributos data
    tarjeta.dataset.productId = producto.id;
    
    // Evento al botón
    boton.addEventListener('click', () => {
        console.log('Añadido:', producto.nombre);
        boton.textContent = '✓ Añadido';
        boton.style.backgroundColor = 'green';
        boton.style.color = 'white';
    });
    
    // Ensamblar la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    
    // Añadir al contenedor
    contenedorTarjetas.appendChild(tarjeta);
});

// Añadir el contenedor completo al body
document.body.appendChild(contenedorTarjetas);
console.log('Galería de ' + productos.length + ' tarjetas creada');</textarea>
        <button onclick="runCode('code-manip-practica')">Ejecutar</button>
        <div class="output" id="output-manip-practica"></div>
    </div>

    <hr>
    <hr>

    <h3>⚡ PARTE 3: Eventos del DOM - Hacer tu página interactiva</h3>
    
    <div class="example">
        <h4>📢 ¿Qué son los EVENTOS?</h4>
        <p>Los <strong>eventos</strong> son acciones o sucesos que ocurren en el navegador. Pueden ser provocados por el usuario (como hacer clic, mover el ratón, escribir) o por el propio navegador (como cuando termina de cargar la página).</p>
        
        <p>JavaScript puede "escuchar" estos eventos y ejecutar código cuando ocurren. Esto es lo que hace a las páginas web <strong>interactivas</strong>.</p>

        <h5>🎯 addEventListener() - La forma profesional</h5>
        <p>Es el método principal para escuchar eventos. Tiene esta sintaxis:</p>
        <textarea readonly>elemento.addEventListener(tipoDeEvento, función);

// Ejemplo:
const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});</textarea>

        <h5>📋 Tipos de Eventos más comunes</h5>
        
        <h6>1. Eventos de RATÓN (Mouse Events)</h6>
        <ul>
            <li><code>click</code> - Cuando haces clic en un elemento</li>
            <li><code>dblclick</code> - Doble clic en un elemento</li>
            <li><code>mouseenter</code> - Cuando el ratón entra en el área del elemento</li>
            <li><code>mouseleave</code> - Cuando el ratón sale del área del elemento</li>
            <li><code>mousemove</code> - Mientras el ratón se mueve sobre el elemento</li>
            <li><code>mousedown</code> - Cuando presionas el botón del ratón</li>
            <li><code>mouseup</code> - Cuando sueltas el botón del ratón</li>
            <li><code>contextmenu</code> - Cuando haces clic derecho</li>
        </ul>

        <textarea readonly>// Ejemplo de eventos de ratón:
const caja = document.getElementById('miCaja');

caja.addEventListener('mouseenter', function() {
    caja.style.backgroundColor = 'yellow';
});

caja.addEventListener('mouseleave', function() {
    caja.style.backgroundColor = 'white';
});

caja.addEventListener('click', function() {
    console.log('Caja clickeada');
});</textarea>

        <h6>2. Eventos de TECLADO (Keyboard Events)</h6>
        <ul>
            <li><code>keydown</code> - Cuando presionas una tecla (se repite si la mantienes)</li>
            <li><code>keyup</code> - Cuando sueltas una tecla</li>
            <li><code>keypress</code> - Cuando una tecla produce un carácter (obsoleto, usa keydown)</li>
        </ul>

        <textarea readonly>// Ejemplo de eventos de teclado:
document.addEventListener('keydown', function(evento) {
    console.log('Tecla presionada:', evento.key);
    console.log('Código:', evento.code);
    
    if (evento.key === 'Enter') {
        console.log('¡Enter presionado!');
    }
    
    if (evento.key === 'Escape') {
        console.log('¡Escape presionado!');
    }
});</textarea>

        <h6>3. Eventos de FORMULARIO (Form Events)</h6>
        <ul>
            <li><code>submit</code> - Cuando se envía un formulario</li>
            <li><code>input</code> - Cada vez que cambia el valor de un input (tiempo real)</li>
            <li><code>change</code> - Cuando un input pierde el foco después de cambiar</li>
            <li><code>focus</code> - Cuando un elemento recibe el foco</li>
            <li><code>blur</code> - Cuando un elemento pierde el foco</li>
            <li><code>reset</code> - Cuando se resetea un formulario</li>
        </ul>

        <textarea readonly>// Ejemplo de eventos de formulario:
const formulario = document.getElementById('miForm');
const input = document.getElementById('miInput');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // ¡IMPORTANTE! Evita recargar la página
    console.log('Formulario enviado');
});

input.addEventListener('input', function() {
    console.log('Valor actual:', input.value);
});

input.addEventListener('focus', function() {
    input.style.borderColor = 'blue';
});

input.addEventListener('blur', function() {
    input.style.borderColor = 'gray';
});</textarea>

        <h6>4. Eventos de VENTANA y DOCUMENTO (Window/Document Events)</h6>
        <ul>
            <li><code>load</code> - Cuando la página termina de cargar completamente</li>
            <li><code>DOMContentLoaded</code> - Cuando el HTML está cargado (antes que las imágenes)</li>
            <li><code>resize</code> - Cuando cambia el tamaño de la ventana</li>
            <li><code>scroll</code> - Cuando se hace scroll</li>
            <li><code>beforeunload</code> - Antes de cerrar/salir de la página</li>
        </ul>

        <textarea readonly>// Ejemplo de eventos de ventana:
window.addEventListener('load', function() {
    console.log('Página completamente cargada');
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM listo (antes de imágenes)');
});

window.addEventListener('resize', function() {
    console.log('Ancho:', window.innerWidth);
});

window.addEventListener('scroll', function() {
    console.log('Scroll Y:', window.scrollY);
});</textarea>

        <h6>5. Eventos de ARRASTRAR (Drag Events)</h6>
        <ul>
            <li><code>dragstart</code> - Cuando empiezas a arrastrar</li>
            <li><code>drag</code> - Mientras arrastras</li>
            <li><code>dragend</code> - Cuando terminas de arrastrar</li>
            <li><code>dragenter</code> - Cuando entras en una zona de soltar</li>
            <li><code>dragover</code> - Mientras estás sobre una zona de soltar</li>
            <li><code>drop</code> - Cuando sueltas en una zona</li>
        </ul>

        <h6>6. Eventos de PORTAPAPELES (Clipboard Events)</h6>
        <ul>
            <li><code>copy</code> - Cuando copias contenido</li>
            <li><code>cut</code> - Cuando cortas contenido</li>
            <li><code>paste</code> - Cuando pegas contenido</li>
        </ul>

        <h6>7. Eventos de MEDIOS (Media Events)</h6>
        <ul>
            <li><code>play</code> - Cuando se reproduce audio/video</li>
            <li><code>pause</code> - Cuando se pausa</li>
            <li><code>ended</code> - Cuando termina la reproducción</li>
            <li><code>volumechange</code> - Cuando cambia el volumen</li>
        </ul>

        <h5>🎁 El objeto EVENT (evento)</h5>
        <p>Cuando un evento ocurre, JavaScript pasa automáticamente un objeto <code>event</code> a la función. Este objeto contiene información útil sobre el evento:</p>

        <textarea readonly>elemento.addEventListener('click', function(evento) {
    // Propiedades comunes del objeto event:
    
    console.log(evento.type);        // Tipo de evento: 'click'
    console.log(evento.target);      // El elemento que disparó el evento
    console.log(evento.currentTarget); // El elemento que tiene el listener
    console.log(evento.timeStamp);   // Cuándo ocurrió (milisegundos)
    
    // Para eventos de ratón:
    console.log(evento.clientX);     // Posición X del cursor
    console.log(evento.clientY);     // Posición Y del cursor
    console.log(evento.button);      // Qué botón del ratón (0=izq, 1=medio, 2=der)
    
    // Para eventos de teclado:
    console.log(evento.key);         // La tecla presionada: 'a', 'Enter', etc.
    console.log(evento.code);        // Código físico: 'KeyA', 'Enter', etc.
    console.log(evento.ctrlKey);     // true si Ctrl está presionado
    console.log(evento.shiftKey);    // true si Shift está presionado
    console.log(evento.altKey);      // true si Alt está presionado
});</textarea>

        <h5>🚫 Métodos importantes del evento</h5>
        
        <h6>1. preventDefault() - Prevenir comportamiento por defecto</h6>
        <p>Algunos elementos tienen comportamientos por defecto (enlaces navegan, formularios recargan la página). Puedes prevenirlos:</p>
        
        <textarea readonly>// Ejemplo: Prevenir que un formulario recargue la página
const form = document.getElementById('miForm');
form.addEventListener('submit', function(evento) {
    evento.preventDefault(); // ¡Detiene el comportamiento por defecto!
    console.log('Formulario procesado sin recargar');
});

// Ejemplo: Prevenir que un enlace navegue
const enlace = document.getElementById('miEnlace');
enlace.addEventListener('click', function(evento) {
    evento.preventDefault();
    console.log('Enlace clickeado pero no navegó');
});

// Ejemplo: Prevenir el menú contextual (clic derecho)
document.addEventListener('contextmenu', function(evento) {
    evento.preventDefault();
    console.log('Clic derecho bloqueado');
});</textarea>

        <h6>2. stopPropagation() - Detener la propagación (bubbling)</h6>
        <p>Los eventos "burbujean" hacia arriba en el árbol del DOM. A veces quieres detener esta propagación:</p>
        
        <textarea readonly>// Ejemplo: Event Bubbling
// HTML: <div id="padre"><button id="hijo">Clic aquí</button></div>

const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

padre.addEventListener('click', function() {
    console.log('Click en PADRE');
});

hijo.addEventListener('click', function(evento) {
    console.log('Click en HIJO');
    evento.stopPropagation(); // Detiene el bubbling, no llegará al padre
});

// Sin stopPropagation, al hacer clic en hijo verías:
// "Click en HIJO"
// "Click en PADRE" (por el bubbling)

// Con stopPropagation, solo verás:
// "Click en HIJO"</textarea>

        <h6>3. stopImmediatePropagation() - Detener TODOS los listeners</h6>
        <p>Similar a stopPropagation, pero también detiene otros listeners en el MISMO elemento:</p>
        
        <textarea readonly>const boton = document.getElementById('miBoton');

boton.addEventListener('click', function(evento) {
    console.log('Listener 1');
    evento.stopImmediatePropagation(); // Detiene TODO
});

boton.addEventListener('click', function() {
    console.log('Listener 2'); // Esto NO se ejecutará
});</textarea>

        <h5>🎯 Event Delegation (Delegación de Eventos)</h5>
        <p>En lugar de añadir listeners a muchos elementos, añades uno solo al padre y usas <code>event.target</code> para saber qué elemento fue clickeado. ¡Muy eficiente!</p>
        
        <textarea readonly>// ❌ Forma INEFICIENTE (muchos listeners):
const botones = document.querySelectorAll('.boton');
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        console.log('Botón clickeado');
    });
});

// ✅ Forma EFICIENTE (Event Delegation):
const contenedor = document.getElementById('contenedor');
contenedor.addEventListener('click', function(evento) {
    // Verificar si el elemento clickeado es un botón
    if (evento.target.classList.contains('boton')) {
        console.log('Botón clickeado:', evento.target.textContent);
    }
});

// Ejemplo práctico: Lista de tareas donde puedes eliminar items
const lista = document.getElementById('lista-tareas');

lista.addEventListener('click', function(evento) {
    // Si clickeaste un botón de eliminar
    if (evento.target.classList.contains('btn-eliminar')) {
        const tarea = evento.target.closest('li');
        tarea.remove();
        console.log('Tarea eliminada');
    }
});</textarea>

        <h5>📊 Comparación: Event Bubbling vs Capturing</h5>
        <p>Los eventos tienen dos fases de propagación:</p>
        <ul>
            <li><strong>Capturing (Captura)</strong>: El evento viaja HACIA ABAJO desde window hasta el elemento objetivo</li>
            <li><strong>Bubbling (Burbujeo)</strong>: El evento viaja HACIA ARRIBA desde el elemento objetivo hasta window</li>
        </ul>
        
        <p>Por defecto, los listeners se ejecutan en la fase de <strong>bubbling</strong>. Puedes cambiar esto con el tercer parámetro:</p>
        
        <textarea readonly>// Listening en fase de BUBBLING (por defecto)
elemento.addEventListener('click', funcion);
elemento.addEventListener('click', funcion, false);

// Listening en fase de CAPTURING
elemento.addEventListener('click', funcion, true);

// Ejemplo completo:
// HTML: <div id="abuelo"><div id="padre"><div id="hijo">CLIC</div></div></div>

const abuelo = document.getElementById('abuelo');
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

// Todos en capturing (true)
abuelo.addEventListener('click', () => console.log('Abuelo'), true);
padre.addEventListener('click', () => console.log('Padre'), true);
hijo.addEventListener('click', () => console.log('Hijo'), true);

// Al hacer clic en "hijo" verás:
// "Abuelo" (capturing: de arriba hacia abajo)
// "Padre"
// "Hijo"

// Si fueran bubbling (false o sin parámetro):
// "Hijo"
// "Padre"
// "Abuelo" (bubbling: de abajo hacia arriba)</textarea>

        <h5>🔄 Remover Event Listeners</h5>
        <p>Para remover un listener, la función debe estar guardada en una variable (no puede ser anónima):</p>
        
        <textarea readonly>// ❌ NO puedes remover funciones anónimas:
boton.addEventListener('click', function() {
    console.log('Click');
});
// No hay forma de remover esto

// ✅ Forma correcta (función con nombre):
function manejarClick() {
    console.log('Click');
}

boton.addEventListener('click', manejarClick);
boton.removeEventListener('click', manejarClick); // Ahora sí puedes removerlo

// Ejemplo práctico: Listener que se ejecuta solo UNA vez
function alertarUnaVez() {
    console.log('¡Solo me verás una vez!');
    boton.removeEventListener('click', alertarUnaVez);
}

boton.addEventListener('click', alertarUnaVez);

// Forma moderna (más fácil):
boton.addEventListener('click', function() {
    console.log('¡Solo una vez!');
}, { once: true }); // El { once: true } lo hace automáticamente</textarea>

        <h5>⚙️ Opciones avanzadas de addEventListener</h5>
        <p>El tercer parámetro puede ser un objeto con opciones:</p>
        
        <textarea readonly>elemento.addEventListener('click', funcion, {
    capture: false,   // false = bubbling (default), true = capturing
    once: true,       // Se ejecuta solo una vez y se remueve automáticamente
    passive: true     // Optimización: indica que nunca llamarás preventDefault()
});

// Ejemplo: Listener que se ejecuta una sola vez
boton.addEventListener('click', function() {
    console.log('Primera vez');
}, { once: true });

// Ejemplo: Scroll optimizado (passive)
window.addEventListener('scroll', function() {
    console.log('Scrolling...');
}, { passive: true }); // Mejora el rendimiento</textarea>

        <h5>🎨 Ejemplo completo: Sistema de pestañas (Tabs)</h5>
        <textarea readonly>// HTML imaginario:
// <div class="tabs">
//   <button class="tab-btn active" data-tab="tab1">Pestaña 1</button>
//   <button class="tab-btn" data-tab="tab2">Pestaña 2</button>
//   <button class="tab-btn" data-tab="tab3">Pestaña 3</button>
// </div>
// <div class="tab-content active" id="tab1">Contenido 1</div>
// <div class="tab-content" id="tab2">Contenido 2</div>
// <div class="tab-content" id="tab3">Contenido 3</div>

const tabsContainer = document.querySelector('.tabs');

// Event delegation: un solo listener para todos los botones
tabsContainer.addEventListener('click', function(evento) {
    // Verificar que se clickeó un botón de pestaña
    if (!evento.target.classList.contains('tab-btn')) return;
    
    // 1. Remover clase 'active' de todos los botones
    const todosBotones = document.querySelectorAll('.tab-btn');
    todosBotones.forEach(btn => btn.classList.remove('active'));
    
    // 2. Añadir 'active' al botón clickeado
    evento.target.classList.add('active');
    
    // 3. Obtener el id del contenido a mostrar
    const tabId = evento.target.dataset.tab;
    
    // 4. Ocultar todo el contenido
    const todosContenidos = document.querySelectorAll('.tab-content');
    todosContenidos.forEach(content => content.classList.remove('active'));
    
    // 5. Mostrar el contenido correspondiente
    const contenidoActivo = document.getElementById(tabId);
    contenidoActivo.classList.add('active');
    
    console.log('Cambiado a pestaña:', tabId);
});</textarea>

        <h5>⚡ Mejores Prácticas con Eventos</h5>
        <ul>
            <li>✅ Usa <code>addEventListener()</code> en lugar de atributos HTML como <code>onclick</code></li>
            <li>✅ Usa Event Delegation cuando tengas muchos elementos similares</li>
            <li>✅ Siempre usa <code>preventDefault()</code> en formularios si los manejas con JS</li>
            <li>✅ Guarda funciones en variables si necesitas removerlas después</li>
            <li>✅ Usa <code>{ once: true }</code> para listeners que solo se ejecutan una vez</li>
            <li>✅ Usa <code>{ passive: true }</code> en eventos de scroll/touch para mejor rendimiento</li>
            <li>❌ Evita funciones anónimas si necesitas remover el listener</li>
            <li>❌ No olvides <code>preventDefault()</code> en formularios o navegarás/recargarás</li>
            <li>❌ No añadas demasiados listeners; usa event delegation</li>
        </ul>

        <h5>🔍 Debugging de Eventos</h5>
        <textarea readonly>// Ver TODOS los datos de un evento:
elemento.addEventListener('click', function(evento) {
    console.log('Evento completo:', evento);
    console.dir(evento); // Muestra todas las propiedades
});

// Ver el "path" del evento (por dónde pasó):
elemento.addEventListener('click', function(evento) {
    console.log('Camino del evento:', evento.composedPath());
    // Muestra: [elemento, padre, abuelo, body, html, document, window]
});

// Usar las DevTools:
// 1. Inspecciona un elemento
// 2. Ve a la pestaña "Event Listeners"
// 3. Verás todos los listeners en ese elemento</textarea>
    </div>

    <hr>
    <hr>

    <h3>💡 EJEMPLOS PRÁCTICOS DE EVENTOS</h3>
    <p>Ahora que conoces la teoría completa, vamos a practicar con ejemplos interactivos organizados pedagógicamente. Empezaremos con eventos simples de ratón, luego formularios, teclado, ventana, y finalmente conceptos avanzados.</p>

    <hr>

    <h3>🖱️ A) EVENTOS DE RATÓN (Mouse Events)</h3>
    <p>Los eventos de ratón son los más comunes y fáciles de entender. Perfectos para comenzar.</p>

    <h3>1. Click Básico - El Interruptor de Luz</h3>
    <p>El evento <code>click</code> es el más básico y común. Se dispara cuando haces clic en un elemento.</p>
    
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

    <h3>2. Click con querySelectorAll - Paleta de Colores</h3>
    <p>Podemos añadir eventos click a múltiples elementos usando <code>querySelectorAll()</code> y un bucle forEach.</p>
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

    <h3>3. Doble Clic (dblclick)</h3>
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

    <h3>4. Clic Derecho / Menú Contextual (contextmenu)</h3>
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

    <h3>5. Movimiento del Ratón (mousemove) - El Fantasma Seguidor</h3>
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
    <hr>

    <h3>📝 B) EVENTOS DE FORMULARIO (Form Events)</h3>
    <p>Los eventos de formulario son esenciales para crear interfaces interactivas y validación de datos.</p>

    <h3>6. Evento Input - El Espejo Mágico</h3>
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

    <h3>7. Contador de Caracteres (también con input)</h3>
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

    <h3>8. Evento Change - Menú Desplegable</h3>
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

    <h3>9. Evento Submit - Mini Formulario (y preventDefault)</h3>
    <p>El evento <code>submit</code> se dispara al enviar un formulario. Usamos <code>event.preventDefault()</code> para prevenir la recarga de la página.</p>
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

    <h3>10. Eventos Focus y Blur (Enfoque de Campos)</h3>
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
    <hr>

    <h3>⌨️ C) EVENTOS DE TECLADO (Keyboard Events)</h3>
    <p>Los eventos de teclado permiten crear atajos, juegos y experiencias interactivas avanzadas.</p>

    <h3>11. Keydown - La Tecla Mágica</h3>
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
    <hr>

    <h3>⌨️ C) EVENTOS DE TECLADO (Keyboard Events)</h3>
    <p>Los eventos de teclado permiten crear atajos, juegos y experiencias interactivas avanzadas.</p>

    <h3>11. Keydown - La Tecla Mágica</h3>
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
    <hr>

    <h3>🪟 D) EVENTOS DE VENTANA Y DOCUMENTO (Window/Document Events)</h3>
    <p>Estos eventos responden a cambios en la ventana del navegador o al cargar recursos.</p>

    <h3>12. Evento Scroll (Desplazamiento)</h3>
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

    <h3>13. Evento Resize (Cambio de Tamaño de Ventana)</h3>
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

    <h3>14. Evento Load en Imágenes</h3>
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
    <hr>

    <h3>⚡ E) CONCEPTOS AVANZADOS DE EVENTOS</h3>
    <p>Estos conceptos son fundamentales para entender cómo funcionan los eventos en profundidad.</p>

    <h3>15. Event Bubbling - Propagación de Eventos</h3>
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

    <h3>16. Event Delegation - Data Attributes</h3>
    <p>Usamos event delegation con atributos <code>data-*</code> para añadir un solo listener que maneje múltiples elementos eficientemente.</p>
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

    <h3>17. Toggle con classList</h3>
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
    <hr>

    <h3>🎯 F) EVENTOS ESPECIALES</h3>
    <p>Eventos avanzados para funcionalidades específicas.</p>

    <h3>18. Drag and Drop Básico</h3>
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

    <h3>19. Eventos de Portapapeles (copy, cut, paste)</h3>
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

    <h3>20. Transiciones CSS y Eventos (transitionend)</h3>
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

    <hr>
    <hr>

    <h3>🚀 G) PROYECTOS COMBINADOS (Múltiples Conceptos)</h3>
    <p>Estos ejemplos combinan varios conceptos de eventos, manipulación del DOM y lógica.</p>

    <h3>21. Lista de Tareas Interactiva</h3>
    <p>Combina eventos de click, creación de elementos, lectura de input y validación.</p>
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

    <h3>22. Galería de Imágenes con Navegación</h3>
    <p>Combina eventos click en botones, manejo de arrays, y cambio de atributos.</p>
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

    <h3>23. Toggle - Mostrar/Ocultar Contenido</h3>
    <p>Un patrón muy común en interfaces: alternar la visibilidad de elementos.</p>
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
    <hr>

    <h3>📚 H) REFERENCIA RÁPIDA - Manipulación DOM (sin eventos)</h3>
    <p>Estos ejemplos complementarios muestran técnicas de manipulación del DOM que usarás junto con eventos.</p>

    <h3>24. Navegación del DOM: Padre, Hijos y Hermanos</h3>
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

    <h3>📚 H) REFERENCIA RÁPIDA - Manipulación DOM (sin eventos)</h3>
    <p>Estos ejemplos complementarios muestran técnicas de manipulación del DOM que usarás junto con eventos.</p>

    <h3>24. Navegación del DOM: Padre, Hijos y Hermanos</h3>
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

    <h3>25. Crear Elementos Complejos desde Cero</h3>
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

    <h3>26. Eliminar Elementos del DOM</h3>
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

    <h3>27. Clonar Elementos (cloneNode)</h3>
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

    <h3>28. innerHTML vs textContent vs innerText</h3>
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

</section>
`;
