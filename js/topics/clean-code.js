const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Clean Code y Refactorización</h2>
        <p>Escribir código que funcione es solo el primer paso. Escribir código que sea fácil de leer, entender y mantener por ti (en el futuro) y por otros desarrolladores es igual de importante. A esto se le llama <strong>Clean Code</strong> (Código Limpio).</p>

        <h3>Principios de Clean Code</h3>
        <ul>
            <li><strong>Nombres Significativos:</strong> Las variables, funciones y clases deben tener nombres que describan claramente su propósito.
                <br>Mal: <code>let d = new Date();</code>
                <br>Bien: <code>let fechaActual = new Date();</code>
            </li>
            <li><strong>Funciones Pequeñas y Específicas:</strong> Una función debe hacer una sola cosa y hacerla bien. Si una función es muy larga o hace muchas cosas, es una señal de que debes dividirla en funciones más pequeñas.</li>
            <li><strong>Evita Comentarios Obvios:</strong> El código debe ser tan claro que se explique por sí mismo. Usa comentarios para explicar el "porqué" de algo complejo, no el "qué" hace el código.
                <br>Mal: <code>// Suma 1 a i</code><br><code>i++;</code>
            </li>
            <li><strong>DRY (Don't Repeat Yourself - No te repitas):</strong> Si tienes el mismo bloque de código en varios lugares, conviértelo en una función reutilizable.</li>
            <li><strong>Consistencia:</strong> Mantén un estilo de formato consistente en todo tu proyecto (indentación, uso de punto y coma, etc.). Herramientas como Prettier y ESLint son excelentes para automatizar esto.</li>
        </ul>

        <h3>Refactorización</h3>
        <p>La refactorización es el proceso de reestructurar el código existente, sin cambiar su comportamiento externo, para mejorar su diseño, legibilidad y mantenibilidad. Es el acto de "limpiar" el código.</p>
        <p>No es "añadir nuevas funcionalidades". Es mejorar las que ya existen.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Refactoricemos una función.</p>
            <p><strong>Código Original (funciona, pero no es muy claro):</strong></p>
            <pre><code>function procUsr(data) {
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].age > 18) {
                console.log(data[i].name + ' es mayor de edad.');
            }
        }
    }
}
</code></pre>
            <p><strong>Código Refactorizado (más limpio y legible):</strong></p>
            <pre><code>function imprimirAdultos(usuarios) {
    const EDAD_ADULTO = 18;

    if (!usuarios || usuarios.length === 0) {
        return; // Salida temprana si no hay datos
    }

    for (const usuario of usuarios) {
        if (usuario.edad > EDAD_ADULTO) {
            console.log(\`\${usuario.nombre} es mayor de edad.\`);
        }
    }
}
</code></pre>
            <p><strong>Mejoras:</strong> Nombre de función y parámetro más claros, uso de una constante para el "número mágico" 18, salida temprana (early return) para simplificar el <code>if</code> principal, y uso de un bucle <code>for...of</code> más legible.</p>
        </div>

        <h3>Avanzado: ¿Dónde se usa esto? (Funciones Puras)</h3>
        <p>Un concepto clave del código limpio y la programación funcional es el de las <strong>funciones puras</strong>. Una función pura es aquella que, para la misma entrada, siempre devuelve la misma salida y no tiene efectos secundarios observables (como modificar una variable externa, escribir en la consola o cambiar el DOM).</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Comparamos una función impura que modifica un array externo con una función pura que devuelve un nuevo array sin alterar el original. Las funciones puras son más predecibles, fáciles de testear y menos propensas a causar bugs en aplicaciones complejas.</p>
            <textarea id="code-advanced-clean-code">// Array original que será modificado por la función impura
const carritoImpuro = [
    { item: "Leche", precio: 2 }
];

// --- Función Impura ---
// Modifica directamente el array 'carritoImpuro' que está fuera de su scope.
// Esto es un efecto secundario.
function agregarItemImpuro(item, precio) {
    carritoImpuro.push({ item, precio });
    return carritoImpuro;
}

console.log("--- Usando función impura ---");
console.log("Carrito original:", JSON.stringify(carritoImpuro));
agregarItemImpuro("Pan", 1.5);
console.log("Carrito modificado por la función:", JSON.stringify(carritoImpuro));


// --- Función Pura ---
// No modifica el array original. En su lugar, devuelve uno nuevo.
function agregarItemPuro(carritoActual, item, precio) {
    // Usamos el spread operator para crear una copia y añadir el nuevo item
    return [...carritoActual, { item, precio }];
}

console.log("\\n--- Usando función pura ---");
const carritoPuroInicial = [{ item: "Jugo", precio: 3 }];
console.log("Carrito inicial:", JSON.stringify(carritoPuroInicial));
const nuevoCarrito = agregarItemPuro(carritoPuroInicial, "Galletas", 2.5);
console.log("Nuevo carrito devuelto por la función:", JSON.stringify(nuevoCarrito));
console.log("El carrito inicial no fue modificado:", JSON.stringify(carritoPuroInicial));
</textarea>
            <button onclick="runCode('code-advanced-clean-code')">Ejecutar</button>
            <div class="output" id="output-advanced-clean-code"></div>
        </div>
    </section>
`;
