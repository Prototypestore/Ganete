fetch("content.json")
  .then(res => res.json())
  .then(data => {
    const main = document.getElementById("content");

    /* ---------- ABOUT SECTION ---------- */
    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";
    aboutSection.id = "about";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Dr Gazern";

    const aboutText = document.createElement("p");
    aboutText.textContent = "I am Dr Gazern, dedicated to helping people achieve better health, wellness, and lifestyle balance through expert guidance, practical advice, and personalized care.";

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);
    main.appendChild(aboutSection);

    /* ---------- SERVICES HEADER ---------- */
    const header = document.createElement("div");
    header.className = "services-header";
    header.id = "services";

    const h1 = document.createElement("h1");
    h1.textContent = "Services";

    header.appendChild(h1);
    main.appendChild(header);

    /* ---------- SERVICES GRID ---------- */
    const grid = document.createElement("div");
    grid.className = "services-grid";

    data.services.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";

      // Use only the default icon for all services
      const icon = document.createElement("div");
      icon.className = "service-icon";
      icon.textContent = "⚕️";

      const h3 = document.createElement("h3");
      h3.textContent = service.title;

      const p = document.createElement("p");
      p.textContent = service.description;

      card.appendChild(icon);
      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    });

    main.appendChild(grid);
  })
  .catch(err => console.error("JSON load error:", err));
