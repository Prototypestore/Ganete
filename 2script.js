// 2script.js

// Fetch JSON and render blog
async function renderServices() {
  const container = document.getElementById("content2");

  // Fetch JSON
  const response = await fetch('blog.json');
  const data = await response.json();

  // Header
  const header = document.createElement("div");
  header.className = "services-header";
  header.innerHTML = `
    <h1>Our Blog & Services</h1>
    <p>Explore our expert tips, guides, and resources on health, wellness, fitness, and lifestyle.</p>
  `;
  container.appendChild(header);

  // Services grid
  const grid = document.createElement("div");
  grid.className = "services-grid";

  data.services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";

    // FontAwesome icons
    let iconClass = "fas fa-heartbeat";
    switch(service.id){
      case 2: iconClass = "fas fa-apple-alt"; break;
      case 3: iconClass = "fas fa-brain"; break;
      case 4: iconClass = "fas fa-dumbbell"; break;
      case 5: iconClass = "fas fa-heart"; break;
      case 6: iconClass = "fas fa-question-circle"; break;
    }

    card.innerHTML = `
      <div class="service-icon"><i class="${iconClass}"></i></div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <div class="service-content">${service.content}</div>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  renderServices();

  const hamburger = document.querySelector(".hamburger-btn");
  const sideMenu = document.getElementById("sideMenu");
  hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });
});

