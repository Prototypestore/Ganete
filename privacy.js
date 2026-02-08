// privacy.js
fetch("privacy.json")
  .then(res => res.json())
  .then(data => {
    const policy = data.privacyPolicy;
    const section = document.getElementById("privacy");

    if (!policy || !policy.sections) {
      throw new Error("Privacy Policy data structure is invalid");
    }

    // Add title and last updated
    section.innerHTML = `
      <h1>${policy.title}</h1>
      <p class="last-updated">Last updated: ${policy.lastUpdated}</p>
    `;

    // Loop through each section
    policy.sections.forEach(item => {
      const block = document.createElement("div");
      block.className = "policy-block";
      block.innerHTML = `
        <h2>${item.heading}</h2>
        <p>${item.content}</p>
      `;
      section.appendChild(block);
    });
  })
  .catch(err => {
    console.error("Privacy Policy failed to load:", err);
  });
