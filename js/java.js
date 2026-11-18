
// Lógica interactiva para la calculadora de ecuaciones (ax + b = c)
let btnResolver = document.getElementById('btnResolverEcuacion');
if (btnResolver) {
    btnResolver.addEventListener('click', function() {
        let a = parseFloat(document.getElementById('coefA').value);
        let b = parseFloat(document.getElementById('coefB').value);
        let c = parseFloat(document.getElementById('coefC').value);
        let divResultado = document.getElementById('resultadoAlgebra');

        divResultado.style.display = "block";

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            divResultado.style.color = "#d90429";
            divResultado.textContent = "Por favor, completa todos los campos con números válidos.";
            return;
        }

        if (a === 0) {
            divResultado.style.color = "#d90429";
            divResultado.textContent = "El coeficiente 'a' no puede ser 0 en una ecuación de primer grado.";
            return;
        }

        // Despeje algebraico: x = (c - b) / a
        let x = (c - b) / a;

        divResultado.style.color = "#1b263b";
        divResultado.innerHTML = `
            <strong>Ecuación ingresada:</strong> ${a}x + (${b}) = ${c}<br>
            <strong>Paso 1 (Despeje):</strong> ${a}x = ${c} - (${b})<br>
            <strong>Paso 2 (División):</strong> x = (${c - b}) / ${a}<br>
            <strong>Resultado final:</strong> <span style="color:#2b9348;">x = ${x.toFixed(2)}</span>
        `;
    });
}

// Lógica interactiva para la calculadora de segundo grado (ax² + bx + c = 0)
let btnCuadratica = document.getElementById('btnResolverCuadratica');
if (btnCuadratica) {
    btnCuadratica.addEventListener('click', function() {
        let a = parseFloat(document.getElementById('cuadA').value);
        let b = parseFloat(document.getElementById('cuadB').value);
        let c = parseFloat(document.getElementById('cuadC').value);
        let divResultado = document.getElementById('resultadoCuadratica');
 
        divResultado.style.display = "block";
 
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            divResultado.style.color = "#d90429";
            divResultado.textContent = "Por favor, completa todos los campos con números válidos.";
            return;
        }
 
        if (a === 0) {
            divResultado.style.color = "#d90429";
            divResultado.textContent = "El coeficiente 'a' no puede ser 0 en una ecuación de segundo grado.";
            return;
        }
 
        // Discriminante: Δ = b² - 4ac
        let disc = b * b - 4 * a * c;
 
        divResultado.style.color = "#1b263b";
        let html = `
            <strong>Ecuación ingresada:</strong> ${a}x² + (${b})x + (${c}) = 0<br>
            <strong>Paso 1 (Discriminante):</strong> Δ = (${b})² - 4(${a})(${c}) = ${disc.toFixed(2)}<br>
        `;
 
        if (disc > 0) {
            let raiz = Math.sqrt(disc);
            let x1 = (-b + raiz) / (2 * a);
            let x2 = (-b - raiz) / (2 * a);
            html += `
                <strong>Paso 2:</strong> Como Δ > 0, hay dos soluciones reales distintas.<br>
                <strong>Paso 3 (Fórmula general):</strong> x = (-b ± √Δ) / 2a<br>
                <strong>Resultado final:</strong>
                <span style="color:#2b9348;">x₁ = ${x1.toFixed(2)}</span>,
                <span style="color:#2b9348;">x₂ = ${x2.toFixed(2)}</span>
            `;
        } else if (disc === 0) {
            let x = -b / (2 * a);
            html += `
                <strong>Paso 2:</strong> Como Δ = 0, hay una única solución real (doble).<br>
                <strong>Paso 3 (Fórmula general):</strong> x = -b / 2a<br>
                <strong>Resultado final:</strong> <span style="color:#2b9348;">x = ${x.toFixed(2)}</span>
            `;
        } else {
            let re = -b / (2 * a);
            let im = Math.sqrt(-disc) / (2 * Math.abs(a));
            html += `
                <strong>Paso 2:</strong> Como Δ < 0, no hay soluciones reales (son complejas).<br>
                <strong>Resultado final:</strong>
                <span style="color:#2b9348;">x₁ = ${re.toFixed(2)} + ${im.toFixed(2)}i</span>,
                <span style="color:#2b9348;">x₂ = ${re.toFixed(2)} - ${im.toFixed(2)}i</span>
            `;
        }
 
        divResultado.innerHTML = html;
    });
}

// Alerta al enviar el formulario de contacto
let formConsulta = document.getElementById('formConsulta');
if (formConsulta) {
    formConsulta.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Consulta enviada con éxito! El profesor la revisará y te responderá pronto a tu correo.');
        this.reset();
    });
}

// Menú hamburguesa (tres rayitas) para celulares
const botonMenu = document.getElementById('menuToggle');
const menuNav = document.getElementById('menuNav');

botonMenu.addEventListener('click', () => {
    const abierto = menuNav.classList.toggle('abierto');
    botonMenu.classList.toggle('abierto', abierto);
    botonMenu.setAttribute('aria-expanded', abierto);
    botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});