// medical.js
fetch("medical.json")
  .then(response => response.json())
  .then(data => {
    const section = document.getElementById("medical");

    section.innerHTML = `<h1>${data.title}</h1>`;

    data.content.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      section.appendChild(p);
    });
  })
  .catch(error => {
    console.error("Medical disclaimer failed to load:", error);
  });
