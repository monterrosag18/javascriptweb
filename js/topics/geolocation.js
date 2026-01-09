const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>API de Geolocalización</h2>
        <p>Esta API del navegador te permite obtener la ubicación geográfica del usuario (latitud y longitud), siempre y cuando el usuario dé su permiso explícito.</p>
        <p><strong>Importante:</strong> Por seguridad, esta API solo funciona en contextos seguros (HTTPS o localhost). El navegador te pedirá permiso para compartir tu ubicación.</p>

        <h3>Obtener la Ubicación Actual</h3>
        <p>El método <code>navigator.geolocation.getCurrentPosition()</code> es el que hace la magia. Toma hasta tres argumentos: un callback de éxito, un callback de error (opcional) y un objeto de opciones (opcional).</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Pide tu ubicación y muéstrala.</p>
            <button onclick="obtenerUbicacion()">Obtener mi Ubicación</button>
            <div class="output" id="output-geolocation"></div>
                        <textarea id="code-geolocation" readonly>// Función que se ejecuta si el usuario acepta
function exito(posicion) {
    const crd = posicion.coords;
    const output = document.getElementById('output-geolocation');

    output.innerHTML = '<strong>¡Ubicación encontrada!</strong><br>';
    output.innerHTML += 'Latitud: ' + crd.latitude + '<br>';
    output.innerHTML += 'Longitud: ' + crd.longitude + '<br>';
    output.innerHTML += 'Precisión: ' + crd.accuracy + ' metros.<br>';
    output.innerHTML += 'Ver en un mapa: https://www.openstreetmap.org/#map=18/' + crd.latitude + '/' + crd.longitude;
}

// Función que se ejecuta si el usuario deniega o hay un error
function error(err) {
    const output = document.getElementById('output-geolocation');
    output.innerHTML = 'ERROR(' + err.code + '): ' + err.message;
}

// Llamada principal a la API
function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(exito, error);
    } else {
        document.getElementById('output-geolocation').innerHTML = 'La geolocalización no es soportada por este navegador.';
    }
}
</textarea>
        </div>

        <h3>Avanzado: ¿Dónde se usa esto? (Seguimiento en tiempo real con <code>watchPosition</code>)</h3>
        <p>Mientras que <code>getCurrentPosition</code> obtiene la ubicación una vez, <code>watchPosition</code> es como un "observador". Se activa cada vez que el dispositivo detecta un cambio en la posición del usuario. Es la base para apps de mapas tipo "cómo llegar", apps de running, etc. Devuelve un ID que se usa para detener el seguimiento con <code>clearWatch</code>.</p>
        
        <div class="example">
            <p><strong>Ejemplo:</strong> Inicia un seguimiento de tu ubicación. Muévete un poco (si puedes) para ver cómo cambian las coordenadas. (Puede que no funcione bien en un ordenador de escritorio).</p>
            <button onclick="iniciarSeguimiento()">Iniciar Seguimiento</button>
            <button onclick="detenerSeguimiento()">Detener Seguimiento</button>
            <div class="output" id="output-watch-position"></div>
                        <textarea id="code-watch-position" readonly>// Variable para guardar el ID del observador
let watchId = null;
const output = document.getElementById('output-watch-position');

function iniciarSeguimiento() {
    output.innerHTML = 'Iniciando seguimiento... Esperando cambios de ubicación.';
    const opciones = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(posicion => {
            const { latitude, longitude } = posicion.coords;
            output.innerHTML = 'Última actualización:<br>Latitud: ' + latitude + '<br>Longitud: ' + longitude;
        }, err => {
            output.innerHTML = 'Error de seguimiento: ' + err.message;
        }, opciones);
        console.log('Seguimiento iniciado con ID:', watchId);
    }
}

function detenerSeguimiento() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        output.innerHTML = 'Seguimiento detenido.';
        console.log('Seguimiento con ID', watchId, 'detenido.');
        watchId = null;
    } else {
        output.innerHTML = 'El seguimiento no estaba iniciado.';
    }
}
</textarea>
        </div>
    </section>
`;

window.obtenerUbicacion = function() {
    const output = document.getElementById('output-geolocation');
    output.innerHTML = "Pidiendo permiso para acceder a tu ubicación...";

    function exito(posicion) {
        const crd = posicion.coords;
        output.innerHTML = '<strong>¡Ubicación encontrada!</strong><br>';
        output.innerHTML += 'Latitud: ' + crd.latitude + '<br>';
        output.innerHTML += 'Longitud: ' + crd.longitude + '<br>';
        output.innerHTML += 'Precisión: ' + crd.accuracy + ' metros.<br>';
        output.innerHTML += 'Ver en un mapa: https://www.openstreetmap.org/#map=18/' + crd.latitude + '/' + crd.longitude;
    }

    function error(err) {
        output.innerHTML = 'ERROR(' + err.code + '): ' + err.message;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(exito, error);
    } else {
        output.innerHTML = "La geolocalización no es soportada por este navegador.";
    }
}
