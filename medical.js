// medical.js
fetch("medical.json")
  .then(response => response.json())
  .then(data => {
    const disclaimer = data.medicalDisclaimer;
    const section = document.getElementById("medical");

    // Defensive check
    if (!disclaimer || !disclaimer.content) {
      throw new Error("Medical disclaimer data structure is invalid");
    }

    // Add title
    section.innerHTML = `<h1>${disclaimer.title}</h1>`;

    // Add each paragraph
    disclaimer.content.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      section.appendChild(p);
    });
  })
  .catch(err => {
    console.error("Medical disclaimer failed to load:", err);
  });
