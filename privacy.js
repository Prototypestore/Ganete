// privacy.js
fetch("privacy.json")
  .then(response => response.json())
  .then(data => {
    const section = document.getElementById("privacy");

    section.innerHTML = `
      <h1>${data.title}</h1>
      <p class="last-updated">Last updated: ${data.lastUpdated}</p>
    `;

    data.sections.forEach(item => {
      const block = document.createElement("div");
      block.className = "policy-block";
      block.innerHTML = `
        <h2>${item.heading}</h2>
        <p>${item.content}</p>
      `;
      section.appendChild(block);
    });
  })
  .catch(error => {
    console.error("Privacy Policy failed to load:", error);
  });
