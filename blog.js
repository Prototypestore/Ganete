// 2script.js

// Fetch JSON and render blog/services
async function renderServices() {
  const container = document.getElementById("blog");
  if (!container) return;

  try {
    // Fetch JSON
    const response = await fetch('blog.json');
    const data = await response.json();

    if (!data.services || data.services.length === 0) return;

    // Header
    const header = document.createElement("div");
    header.className = "services-header";
    header.innerHTML = `
      <h1>Our Blog & Services</h1>
      <p>Explore our blog for practical tips, guides, and articles on health, wellness, and personal growth. From nutrition advice to stress management, lifestyle hacks, and self-improvement strategies, these resources are designed to give you clear, actionable insights. Whether you’re just starting your journey or looking for advanced guidance, our blog provides content to help you feel informed, motivated, and inspired.</p>
    `;
    container.appendChild(header);

    // Services/Blog Grid
    const grid = document.createElement("div");
    grid.className = "services-grid";

    data.services.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";

      // FontAwesome icon mapping
      let iconClass = "fas fa-book-open"; // default icon
      switch (service.id) {
        case 1: iconClass = "fas fa-heartbeat"; break;
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

  } catch (err) {
    console.error("Error loading blog/services:", err);
    container.innerHTML = "<p>Failed to load content. Please try again later.</p>";
  }
}

// Run the function after DOM is ready
document.addEventListener("DOMContentLoaded", renderServices);
