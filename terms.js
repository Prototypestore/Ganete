// terms.js
fetch("terms.json")
  .then(response => response.json())
  .then(data => {
    const terms = data.termsAndConditions;
    const section = document.getElementById("terms");

    // Defensive check to prevent errors
    if (!terms || !terms.sections) {
      throw new Error("Terms & Conditions data structure is invalid");
    }

    // Add title and last updated
    section.innerHTML = `
      <h1>${terms.title}</h1>
      <p class="last-updated">Last updated: ${terms.lastUpdated}</p>
    `;

    // Add each section
    terms.sections.forEach(item => {
      const block = document.createElement("div");
      block.className = "terms-block";
      block.innerHTML = `
        <h2>${item.heading}</h2>
        <p>${item.content}</p>
      `;
      section.appendChild(block);
    });
  })
  .catch(err => {
    console.error("Terms & Conditions failed to load:", err);
  });
