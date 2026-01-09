const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Proyecto: Weather App</h2>
        <p>Consulta de clima con fetch, render de tarjetas y manejo de errores.</p>

        <h3>1) Mock de API</h3>
        <p>Simulamos una API para evitar credenciales.</p>
        <div class="example">
            <textarea id="code-project-weather-1" readonly>function fakeWeatherApi(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!city) return reject(new Error('Ciudad requerida'));
      resolve({
        city,
        temp: (20 + Math.random() * 10).toFixed(1),
        condition: 'Soleado',
      });
    }, 300);
  });
}

fakeWeatherApi('Madrid').then(console.log);</textarea>
            <button onclick="runCode('code-project-weather-1')">Ejecutar</button>
            <div class="output" id="output-project-weather-1"></div>
        </div>

        <hr>

        <h3>2) Llamada con async/await</h3>
        <p>Consumir la API y manejar errores.</p>
        <div class="example">
            <textarea id="code-project-weather-2" readonly>async function getWeather(city) {
  try {
    const data = await fakeWeatherApi(city);
    console.log('OK:', data);
  } catch (e) {
    console.log('Error:', e.message);
  }
}

getWeather('CDMX');
getWeather('');</textarea>
            <button onclick="runCode('code-project-weather-2')">Ejecutar</button>
            <div class="output" id="output-project-weather-2"></div>
        </div>

        <hr>

        <h3>3) Formateo y unidades</h3>
        <p>Convertir a Celsius/Fahrenheit.</p>
        <div class="example">
            <textarea id="code-project-weather-3" readonly>const kelvin = 298.15;

function toC(k) { return (k - 273.15).toFixed(1); }
function toF(k) { return ((k - 273.15) * 9/5 + 32).toFixed(1); }

console.log('Celsius:', toC(kelvin));
console.log('Fahrenheit:', toF(kelvin));</textarea>
            <button onclick="runCode('code-project-weather-3')">Ejecutar</button>
            <div class="output" id="output-project-weather-3"></div>
        </div>

        <hr>

        <h3>4) Render de tarjetas</h3>
        <p>Crear HTML a partir de datos.</p>
        <div class="example">
            <textarea id="code-project-weather-4" readonly>const samples = [
  { city: 'Madrid', temp: 24.2, condition: 'Soleado' },
  { city: 'Bogotá', temp: 18.1, condition: 'Nublado' },
];

const html = samples.map(w => \`
  <article class="card">
    <h4>\${w.city}</h4>
    <p>\${w.temp}°C • \${w.condition}</p>
  </article>\`).join('');

console.log(html);</textarea>
            <button onclick="runCode('code-project-weather-4')">Ejecutar</button>
            <div class="output" id="output-project-weather-4"></div>
        </div>

        <hr>

        <h3>5) Estado y caché</h3>
        <p>Evitar llamadas repetidas.</p>
        <div class="example">
            <textarea id="code-project-weather-5" readonly>const cache = new Map();

async function getCity(city) {
  if (cache.has(city)) {
    console.log('Cache ->', cache.get(city));
    return cache.get(city);
  }
  const data = await fakeWeatherApi(city);
  cache.set(city, data);
  console.log('API ->', data);
  return data;
}

(async () => {
  await getCity('Lima');
  await getCity('Lima');
})();</textarea>
            <button onclick="runCode('code-project-weather-5')">Ejecutar</button>
            <div class="output" id="output-project-weather-5"></div>
        </div>

        <hr>

        <h3>6) Manejo de errores UX</h3>
        <p>Mensajes claros para el usuario.</p>
        <div class="example">
            <textarea id="code-project-weather-6" readonly>function showError(message) {
  return \`[ALERTA] \${message}\`;
}

console.log(showError('Ciudad no encontrada'));
console.log(showError('API temporalmente no disponible'));</textarea>
            <button onclick="runCode('code-project-weather-6')">Ejecutar</button>
            <div class="output" id="output-project-weather-6"></div>
        </div>

        <hr>

        <h3>7) Best practices</h3>
        <p>Checklist rápido.</p>
        <div class="example">
            <textarea id="code-project-weather-7" readonly>console.log('MEJORES PRÁCTICAS:\n');
console.log('✅ Debounce en inputs de búsqueda');
console.log('✅ Caché en memoria o IndexedDB');
console.log('✅ Manejo de errores y estados vacíos');
console.log('✅ Loading states claros');
console.log('✅ Sincronizar unidades (°C/°F)');</textarea>
            <button onclick="runCode('code-project-weather-7')">Ejecutar</button>
            <div class="output" id="output-project-weather-7"></div>
        </div>

    </section>
`;
