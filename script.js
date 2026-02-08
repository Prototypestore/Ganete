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
    aboutText.textContent = "Hi, I’m Dr Gazern My journey started when I realized that so many people struggle to find reliable guidance in health, wellness, and personal growth. I am passionate about helping others achieve meaningful change through practical strategies and empathetic support. I value honesty, consistency, and empowerment, and I’ve spent years developing my skills through training, coaching, and real-life experience. My goal is to guide you in making sustainable improvements that improve your wellbeing and happiness.";

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);
    main.appendChild(aboutSection);

    /* ---------- SERVICES HEADER ---------- */
    const header = document.createElement("div");
    header.className = "services-header";
    header.id = "services";

    const h1 = document.createElement("h1");
    h1.textContent = "Services";

    const servicesText = document.createElement("p");
servicesText.textContent =
  "I offer personalized coaching, structured plans, and consultations tailored to your unique needs. My services include: One-on-One Coaching: Targeted guidance to help you reach your goals efficiently. Custom Plans: Step-by-step strategies designed to improve your health, habits, and lifestyle.";

header.appendChild(h1);
header.appendChild(servicesText);
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
