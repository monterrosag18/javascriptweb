const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>TypeScript: JavaScript con Superpoderes</h2>
        <p>TypeScript es un "superset" de JavaScript, lo que significa que es JavaScript, pero con características adicionales. La característica principal y más importante es el <strong>tipado estático</strong>.</p>
        <p>Fue creado por Microsoft y es de código abierto. Todo el código de JavaScript es código de TypeScript válido, pero no al revés.</p>

        <h3>¿Qué es el Tipado Estático?</h3>
        <p>En JavaScript normal, puedes hacer esto:</p>
        <pre><code>let miVariable = "Hola"; // miVariable es un string
miVariable = 123;         // Ahora es un número. JavaScript no se queja.
</code></pre>
        <p>Esto puede causar errores difíciles de encontrar en aplicaciones grandes. TypeScript te permite (de forma opcional) definir el tipo de tus variables. Si intentas asignar un tipo de dato incorrecto, TypeScript te avisará <strong>antes de que ejecutes el código</strong>, directamente en tu editor.</p>
        
        <div class="example">
            <p><strong>Ejemplo de código TypeScript:</strong></p>
            <p>Este código no se puede ejecutar aquí, porque los navegadores no entienden TypeScript. Necesitas un "transpilador" (como el propio compilador de TS o Babel) que lo convierta a JavaScript normal.</p>
            <pre><code>// Definimos los tipos de las variables
let miNombre: string = "Ana";
let miEdad: number = 10;

// miNombre = 5; // ¡ERROR! No puedes asignar un número a un string.

// También podemos definir los tipos de los parámetros de una función y su valor de retorno
function sumar(a: number, b: number): number {
    return a + b;
}

// const resultado = sumar("5", "3"); // ¡ERROR! La función espera números.
const resultadoCorrecto = sumar(5, 3);
console.log(resultadoCorrecto);
</code></pre>
        </div>

        <h3>Ventajas de usar TypeScript</h3>
        <ul>
            <li><strong>Detección temprana de errores:</strong> Atrapa errores de tipo durante el desarrollo, no en producción.</li>
            <li><strong>Mejor autocompletado y refactorización:</strong> El editor de código entiende mejor tu código, lo que le permite ofrecerte mejores sugerencias y hacer cambios de forma más segura.</li>
            <li><strong>Código más legible y mantenible:</strong> Los tipos sirven como documentación. Al ver una función, sabes exactamente qué tipo de datos espera y qué devuelve.</li>
            <li><strong>Ideal para proyectos grandes y equipos:</strong> Facilita la colaboración y reduce los errores cuando muchas personas trabajan en el mismo código.</li>
        </ul>
        <p>Hoy en día, muchos frameworks y librerías (como Angular, Vue 3 y NestJS) están escritos en o recomiendan usar TypeScript.</p>

        <h3>Caso de Uso Práctico: Definir la "Forma" de un Objeto con Interfaces</h3>
        <p>Imagina que estás trabajando con objetos "Usuario" que vienen de una API. Estos objetos siempre tienen la misma estructura: un ID numérico, un nombre en formato string y un estado booleano que indica si está activo. En JavaScript normal, podrías cometer un error y escribir <code>usuario.nombre</code> como <code>usuario.name</code>, y solo te darías cuenta cuando algo falle.</p>
        <p>Con TypeScript, defines una <strong>interfaz</strong> para describir la "forma" del objeto:</p>
        <pre><code>interface Usuario {
  id: number;
  nombre: string;
  estaActivo: boolean;
}

// Ahora puedes usar esta interfaz para tipar tus variables y funciones
function desactivarUsuario(usuario: Usuario): Usuario {
  if (usuario.estaActivo) {
    // El autocompletado del editor te sugerirá 'estaActivo'
    usuario.estaActivo = false; 
  }
  return usuario;
}

const miUsuario: Usuario = {
  id: 1,
  nombre: "Ana",
  estaActivo: true
};

// Si intentaras hacer esto, TypeScript te daría un error inmediatamente:
// const usuarioInvalido: Usuario = { id: 2, name: "Juan" }; 
// Error: La propiedad 'name' no existe en el tipo 'Usuario'. ¿Quisiste decir 'nombre'?

desactivarUsuario(miUsuario);
</code></pre>
        <p>Las interfaces son increíblemente poderosas para trabajar en equipo y con APIs externas, ya que documentan la estructura de los datos y permiten al compilador y al editor ayudarte a evitar errores comunes, haciendo que el desarrollo sea más rápido y seguro.</p>
    </section>
`;
