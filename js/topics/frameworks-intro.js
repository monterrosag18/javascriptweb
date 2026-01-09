const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>¿Qué son los Frameworks y las Librerías?</h2>
        <p>A medida que las aplicaciones web se vuelven más complejas, escribirlas desde cero con "JavaScript puro" (Vanilla JS) puede ser lento y repetitivo. Los frameworks y las librerías son herramientas que nos ayudan a construir aplicaciones más grandes de forma más rápida y organizada.</p>

        <h3>Librería (Library)</h3>
        <p>Una librería es una colección de código reutilizable que resuelve problemas específicos. Tú tienes el control y decides cuándo y dónde llamar a la librería.</p>
        <p><strong>Analogía:</strong> Una librería es como ir a una ferretería. Necesitas un martillo, así que vas, tomas el martillo (una función de la librería) y lo usas como quieras en tu proyecto. <strong>Tú llamas a la librería.</strong></p>
        <p><strong>Ejemplo:</strong> jQuery (aunque menos común hoy en día) es una librería clásica que simplifica la manipulación del DOM y las peticiones AJAX. Tú decides en qué parte de tu código usar una función de jQuery.</p>

        <h3>Framework</h3>
        <p>Un framework es un conjunto de herramientas y reglas que te da una estructura para construir tu aplicación. El framework te impone una forma de trabajar y él se encarga de llamar a tu código cuando es necesario.</p>
        <p><strong>Analogía:</strong> Un framework es como construir una casa prefabricada. Te dan los cimientos, las paredes y la estructura (el esqueleto de la aplicación). Tú te encargas de rellenar los huecos con tus propias personalizaciones (tu código). <strong>El framework te llama a ti.</strong> A esto se le llama "Inversión de Control".</p>
        <p><strong>Ejemplo:</strong> React, Angular y Vue son frameworks de frontend. Te dicen cómo estructurar tus componentes, cómo manejar el estado y cómo se renderizará tu aplicación.</p>

        <h3>¿Cuál es la diferencia clave?</h3>
        <p>La <strong>Inversión de Control</strong>. Con una librería, tú estás al mando. Con un framework, él está al mando y te dice dónde poner tu código.</p>
        
        <div class="example">
            <h4>En resumen:</h4>
            <ul>
                <li><strong>Librería:</strong> Un conjunto de herramientas. La usas cuando quieres.</li>
                <li><strong>Framework:</strong> Un esqueleto para tu aplicación. Te adaptas a su forma de trabajar.</li>
            </ul>
            <p>Ambos son increíblemente útiles y la elección depende de la escala y las necesidades de tu proyecto.</p>
        </div>

        <h3>Caso de Uso Práctico: Decidir entre Librería y Framework</h3>
        <ul>
            <li><strong>Escenario para una Librería:</strong> Tienes una página web existente, mayormente estática, y solo quieres añadir un carrusel de imágenes interactivo en una sección. No quieres reescribir toda tu página. Aquí, usarías una librería como <a href="https://swiperjs.com/" target="_blank">Swiper.js</a>. La incluyes en tu página y la "llamas" solo en el div donde quieres que aparezca el carrusel. El resto de tu página no se ve afectado.</li>
            <li><strong>Escenario para un Framework:</strong> Te han encargado construir una nueva aplicación web compleja desde cero, como un panel de administración de una tienda online. Esta aplicación tendrá muchas vistas (productos, pedidos, clientes), formularios complejos, y datos que cambian constantemente. Aquí, usar un framework como <strong>React</strong> o <strong>Vue</strong> es ideal. El framework te dará una estructura sólida para manejar el "estado" de la aplicación (qué datos se están mostrando), renderizar componentes de forma eficiente y crear una experiencia de usuario fluida y rápida sin tener que recargar la página constantemente.</li>
        </ul>
    </section>
`;
