// --- json ---
const degreesData = [ 
  { id: 1, name: "Arquitectura", university: "Universidad de Buenos Aires" },
  { id: 2, name: "Ingeniería en Sistemas", university: "UTN" },
  { id: 3, name: "Medicina", university: "Universidad Nacional de La Plata" },
  { id: 4, name: "Diseño Gráfico", university: "UADE" },
];

/// dom
const degreesContainer = document.getElementById("degreesContainer");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

// Renderizar carreras de la data mock
function renderDegrees(degrees) {
  degreesContainer.innerHTML = ""; 
  
  if ( degrees.length === 0) {
    degreesContainer.innerHTML = "<p style='color: red; text-align: center;'>Error! Al parecer no hay carreras disponibles.</p>"
    return
  }

  degrees.forEach((degree) => {
    // Crear tarjeta
    const card = document.createElement("div");
    card.className = "degree-card";
    card.onclick = () => handleDegreeClick(degree.id);

    card.innerHTML = `
                    <div class="card-left">
                        <div class="icon-circle">
                            <!-- BookOpen Icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        </div>
                        <div class="card-info">
                            <h5>${degree.name}</h5>
                            <p>${degree.university}</p>
                        </div>
                    </div>
                    <div class="card-arrow">
                        <!-- ChevronRight Icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                `;

    degreesContainer.appendChild(card);
  });
}

function handleDegreeClick(id) {
    window.location.href = `carrera.html?id=${id}`;
}


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const term = searchInput.value;
  console.log(`Buscando: ${term}`);
  alert(`Ejecutando búsqueda para: "${term}"`);

});

renderDegrees(degreesData);
