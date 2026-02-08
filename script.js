fetch("content.json")
  .then(res => res.json())
  .then(data => {
    const main = document.getElementById("content");

    /* ---------- ABOUT SECTION ---------- */
    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Dr Gazern";

    const story = document.createElement("p");
    story.textContent = data.about.story;

    const values = document.createElement("p");
    values.textContent = data.about.values;

    const credibility = document.createElement("p");
    credibility.textContent = data.about.credibility;

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(story);
    aboutSection.appendChild(values);
    aboutSection.appendChild(credibility);

    /* ---------- SERVICES HEADER ---------- */
    const header = document.createElement("div");
    header.className = "services-header";

    const h1 = document.createElement("h1");
    h1.textContent = "Services";

    header.appendChild(h1);

    /* ---------- SERVICES GRID ---------- */
    const grid = document.createElement("div");
    grid.className = "services-grid";

    data.services.forEach(service => {
      const card = document.createElement("div");
      card.className = "service-card";

      const icon = document.createElement("div");
      icon.className = "service-icon";
      icon.textContent = service.icon;

      const h3 = document.createElement("h3");
      h3.textContent = service.title;

      const p = document.createElement("p");
      p.textContent = service.description;

      card.appendChild(icon);
      card.appendChild(h3);
      card.appendChild(p);

      grid.appendChild(card);
    });

    /* ---------- APPEND ---------- */
    main.appendChild(aboutSection);
    main.appendChild(header);
    main.appendChild(grid);
  })
  .catch(err => console.error("JSON load error:", err));
