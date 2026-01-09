const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Frameworks de Frontend: React, Vue, Angular</h2>
        <p>Estos tres son los frameworks de JavaScript más populares para construir interfaces de usuario modernas e interactivas (el "frontend"). Todos se basan en el concepto de <strong>componentes</strong>: piezas de UI reutilizables e independientes (como un botón, un formulario, un encabezado).</p>

        <h3>React</h3>
        <p>Desarrollado por Facebook, React es técnicamente una librería, pero se usa como un framework. Es el más popular del mercado.</p>
        <ul>
            <li><strong>JSX:</strong> Permite escribir "HTML" dentro de JavaScript, lo que hace que la creación de componentes sea muy intuitiva.</li>
            <li><strong>Virtual DOM:</strong> React crea una copia del DOM en memoria. Cuando los datos cambian, actualiza esta copia y luego calcula la forma más eficiente de actualizar el DOM real, lo que lo hace muy rápido.</li>
            <li><strong>Ecosistema enorme:</strong> Hay miles de librerías y herramientas construidas para funcionar con React (ej. Redux para manejo de estado, Next.js para renderizado en servidor).</li>
        </ul>
        <pre><code>// Ejemplo de un componente simple en React con JSX
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
</code></pre>

        <h3>Vue.js</h3>
        <p>Creado por un ex-ingeniero de Google, Evan You. Vue es conocido por su curva de aprendizaje suave y su excelente documentación.</p>
        <ul>
            <li><strong>Progresivo:</strong> Puedes usar Vue para controlar solo una pequeña parte de una página existente o para construir una aplicación completa de una sola página (SPA).</li>
            <li><strong>Templates HTML:</strong> A diferencia de JSX, Vue usa plantillas más parecidas al HTML tradicional, lo que puede ser más fácil para principiantes.</li>
            <li><strong>Rendimiento:</strong> Al igual que React, usa un Virtual DOM y es muy rápido.</li>
        </ul>
        <pre><code>&lt;!-- Ejemplo de un componente simple en Vue --&gt;
&lt;div id="app"&gt;
  &lt;p&gt;{{ message }}&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
  const app = new Vue({
    el: '#app',
    data: {
      message: '¡Hola desde Vue!'
    }
  });
&lt;/script&gt;
</code></pre>

        <h3>Angular</h3>
        <p>Desarrollado y mantenido por Google. Angular es un framework completo y "opinado", lo que significa que viene con todo lo que necesitas para construir una aplicación grande (manejo de estado, enrutador, cliente HTTP, etc.).</p>
        <ul>
            <li><strong>TypeScript:</strong> Usa TypeScript por defecto, lo que añade tipado estático y ayuda a prevenir errores en aplicaciones grandes.</li>
            <li><strong>Completo:</strong> Es una solución "todo en uno", ideal para grandes equipos y proyectos empresariales.</li>
            <li><strong>Estructura robusta:</strong> Impone una arquitectura clara (basada en Módulos, Componentes y Servicios), lo que fomenta la organización.</li>
        </ul>

        <h3>Caso de Uso Práctico: Componentes Reutilizables</h3>
        <p>Imagina que en tu sitio web necesitas mostrar tarjetas de perfil de usuario en varios lugares: en una lista de amigos, en los resultados de búsqueda y en la página de perfil principal. Sin un framework, tendrías que copiar y pegar el mismo código HTML y CSS una y otra vez, y la lógica de JavaScript para cada una sería un desastre.</p>
        <p>Con un framework como <strong>React</strong>, crearías un único componente llamado <code>TarjetaUsuario.jsx</code>. Este archivo contendría el HTML (en formato JSX), el CSS y la lógica para una sola tarjeta. Recibiría los datos del usuario (nombre, foto, etc.) como "props".</p>
        <pre><code>// Ejemplo conceptual de un componente en React
function TarjetaUsuario({ nombre, imagenUrl, rol }) {
  return (
    &lt;div className="tarjeta"&gt;
      &lt;img src={imagenUrl} alt={nombre} /&gt;
      &lt;h3&gt;{nombre}&lt;/h3&gt;
      &lt;p&gt;{rol}&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>
        <p>Ahora, en cualquier parte de tu aplicación donde necesites una tarjeta, simplemente usarías tu componente como si fuera una etiqueta HTML, pasándole los datos correspondientes:</p>
        <pre><code>&lt;TarjetaUsuario nombre="Ana" imagenUrl="/ana.jpg" rol="Admin" /&gt;
&lt;TarjetaUsuario nombre="Juan" imagenUrl="/juan.jpg" rol="Usuario" /&gt;
</code></pre>
        <p>Si necesitas cambiar el diseño de todas las tarjetas, solo editas el archivo <code>TarjetaUsuario.jsx</code> una vez. Este principio de componentización es la base del desarrollo frontend moderno y es la razón principal por la que los frameworks son tan potentes.</p>
    </section>
`;
