const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Deno: Una alternativa moderna a Node.js</h2>
        <p>Deno es un entorno de ejecución para JavaScript y TypeScript, creado por el mismo desarrollador original de Node.js, Ryan Dahl. Deno intenta solucionar algunos de los problemas y arrepentimientos de diseño de Node.js.</p>

        <h3>Características Principales</h3>
        <ul>
            <li><strong>Seguro por defecto:</strong> A diferencia de Node, Deno no permite que un script acceda al sistema de archivos, a la red o al entorno sin que se le den permisos explícitos. Tienes que ejecutar un script con "flags" para darle permisos.
                <br><code>deno run --allow-net mi_script.js</code> (Permite acceso a la red)
                <br><code>deno run --allow-read=/home/ mi_script.js</code> (Permite leer archivos solo en la carpeta /home/)
            </li>
            <li><strong>Soporte nativo para TypeScript:</strong> Deno puede ejecutar archivos de TypeScript directamente, sin necesidad de configurar un compilador por separado. ¡Simplemente funciona!</li>
            <li><strong>Módulos ES6 por defecto:</strong> Deno usa el sistema de módulos estándar de JavaScript (<code>import</code>/<code>export</code>) y carga los módulos directamente desde URLs, como lo hace el navegador.
                <pre><code>import { serve } from "https://deno.land/std@0.123.0/http/server.ts";</code></pre>
            </li>
            <li><strong>Sin NPM ni <code>node_modules</code>:</strong> Deno no usa un gestor de paquetes centralizado como NPM. Los paquetes se importan directamente desde una URL. Deno los descarga y los guarda en caché en tu disco duro la primera vez. Esto elimina la necesidad de la pesada carpeta <code>node_modules</code>.</li>
            <li><strong>Amplia librería estándar:</strong> Deno viene con una librería estándar auditada y mantenida por el equipo de Deno, que proporciona herramientas para tareas comunes sin necesidad de instalar paquetes de terceros.</li>
        </ul>

        <div class="example">
            <p><strong>Ejemplo:</strong> Un servidor "Hola Mundo" en Deno (con TypeScript).</p>
            <p>Este código se guardaría en un archivo (ej: <code>server.ts</code>) y se ejecutaría con <code>deno run --allow-net server.ts</code>.</p>
            <pre><code>// Importamos la función 'serve' desde la librería estándar de Deno a través de una URL
import { serve } from "https://deno.land/std@0.123.0/http/server.ts";

console.log("Servidor escuchando en http://localhost:8000/");

// La función 'serve' toma un handler que se ejecuta para cada petición
serve((req: Request) => {
  // Respondemos con un objeto Response estándar del navegador
  return new Response("Hola Mundo desde Deno!", {
    headers: { "content-type": "text/plain" },
  });
});
</code></pre>
        </div>
        <p>Deno es una tecnología más nueva y su ecosistema no es tan grande como el de Node.js, pero representa una visión muy interesante y moderna de cómo debería ser el JavaScript del lado del servidor.</p>

        <h3>Caso de Uso Práctico: Un Script Seguro para Leer Archivos</h3>
        <p>Imagina que quieres crear una pequeña herramienta de línea de comandos que lea un archivo de texto y cuente el número de palabras. En Node.js, el script tendría acceso inmediato a todo tu sistema de archivos, lo cual podría ser un riesgo de seguridad si el script es de un tercero.</p>
        <p>Con Deno, el enfoque es "seguro por defecto". Escribirías un script similar, pero al ejecutarlo, tendrías que concederle permisos explícitamente.</p>
        <p><strong>El código (<code>contador.ts</code>):</strong></p>
        <pre><code>// contador.ts
try {
  // Deno.args contiene los argumentos de la línea de comandos
  const nombreArchivo = Deno.args[0]; 
  if (!nombreArchivo) {
    throw new Error("Por favor, proporciona un nombre de archivo.");
  }

  const contenido = await Deno.readTextFile(nombreArchivo);
  const palabras = contenido.split(/\\s+/).filter(p => p.length > 0);
  
  console.log(\`El archivo "\${nombreArchivo}" tiene \${palabras.length} palabras.\`);

} catch (error) {
  console.error(\`Error: \${error.message}\`);
}
</code></pre>
        <p><strong>La ejecución:</strong></p>
        <p>Si intentas ejecutarlo sin más (<code>deno run contador.ts mi_archivo.txt</code>), Deno te dará un error de permiso. Debes ser explícito:</p>
        <pre><code># Concedemos permiso de solo lectura al sistema de archivos
deno run --allow-read contador.ts mi_archivo.txt
</code></pre>
        <p>Este modelo de permisos hace que Deno sea una opción muy interesante para ejecutar scripts de fuentes no confiables o para asegurar que tus propias herramientas no accedan a recursos que no deberían, como la red o el sistema de archivos, sin tu consentimiento explícito.</p>
    </section>
`;
