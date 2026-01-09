const content = document.getElementById('content');

content.innerHTML = `
    <section>
        <h2>Proyecto: Shopping Cart</h2>
        <p>Carrito con catálogo, estado y operaciones típicas.</p>

        <h3>1) Modelo y estado</h3>
        <p>Items con id, nombre, precio y qty.</p>
        <div class="example">
            <textarea id="code-project-cart-1" readonly>const catalog = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 30 },
];

let cart = [];

function addToCart(id, qty = 1) {
  const item = catalog.find(p => p.id === id);
  if (!item) return;
  const existing = cart.find(p => p.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ ...item, qty });
}

addToCart(1);
addToCart(2, 3);
console.log(cart);</textarea>
            <button onclick="runCode('code-project-cart-1')">Ejecutar</button>
            <div class="output" id="output-project-cart-1"></div>
        </div>

        <hr>

        <h3>2) Actualizar cantidades</h3>
        <p>Incrementar, decrementar y eliminar.</p>
        <div class="example">
            <textarea id="code-project-cart-2" readonly>function updateQty(id, qty) {
  cart = cart
    .map(item => item.id === id ? { ...item, qty: Math.max(0, qty) } : item)
    .filter(item => item.qty > 0);
}

addToCart(1);
updateQty(1, 0);
console.log(cart);</textarea>
            <button onclick="runCode('code-project-cart-2')">Ejecutar</button>
            <div class="output" id="output-project-cart-2"></div>
        </div>

        <hr>

        <h3>3) Totales y descuentos</h3>
        <p>Calcular subtotal y aplicar cupones.</p>
        <div class="example">
            <textarea id="code-project-cart-3" readonly>function totals() {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  return { subtotal, total: subtotal };
}

function applyCoupon(code) {
  const map = { SAVE10: 0.10, SAVE20: 0.20 };
  const discount = map[code] || 0;
  const { subtotal } = totals();
  return { subtotal, total: subtotal * (1 - discount) };
}

addToCart(2, 2);
console.log('Totales', totals());
console.log('Cupon 10%', applyCoupon('SAVE10'));</textarea>
            <button onclick="runCode('code-project-cart-3')">Ejecutar</button>
            <div class="output" id="output-project-cart-3"></div>
        </div>

        <hr>

        <h3>4) Render de tabla</h3>
        <p>Generar HTML de carrito.</p>
        <div class="example">
            <textarea id="code-project-cart-4" readonly>function renderCart(items) {
  return items.map(item => \`
    <tr>
      <td>\${item.name}</td>
      <td>\${item.qty}</td>
      <td>\$\${item.price}</td>
      <td>\$\${(item.price * item.qty).toFixed(2)}</td>
    </tr>\`).join('');
}

console.log(renderCart(cart));</textarea>
            <button onclick="runCode('code-project-cart-4')">Ejecutar</button>
            <div class="output" id="output-project-cart-4"></div>
        </div>

        <hr>

        <h3>5) Persistencia</h3>
        <p>Guardar y cargar del almacenamiento.</p>
        <div class="example">
            <textarea id="code-project-cart-5" readonly>function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
}

saveCart();
loadCart();
console.log('Restaurado', cart);</textarea>
            <button onclick="runCode('code-project-cart-5')">Ejecutar</button>
            <div class="output" id="output-project-cart-5"></div>
        </div>

        <hr>

        <h3>6) Validaciones UX</h3>
        <p>Limitar máximos y mínimos.</p>
        <div class="example">
            <textarea id="code-project-cart-6" readonly>function validateQty(qty) {
  if (Number.isNaN(qty) || qty < 1) return 1;
  if (qty > 99) return 99;
  return qty;
}

console.log(validateQty(-5));
console.log(validateQty(150));</textarea>
            <button onclick="runCode('code-project-cart-6')">Ejecutar</button>
            <div class="output" id="output-project-cart-6"></div>
        </div>

        <hr>

        <h3>7) Best practices</h3>
        <p>Checklist rápido.</p>
        <div class="example">
            <textarea id="code-project-cart-7" readonly>console.log('MEJORES PRÁCTICAS:\n');
console.log('✅ Desacoplar UI y estado');
console.log('✅ No mutar directamente estructuras compartidas');
console.log('✅ Idempotencia en botones (evitar doble click)');
console.log('✅ Validar stock en cada acción');
console.log('✅ Persistir en almacenamiento con expiración');</textarea>
            <button onclick="runCode('code-project-cart-7')">Ejecutar</button>
            <div class="output" id="output-project-cart-7"></div>
        </div>

    </section>
`;
