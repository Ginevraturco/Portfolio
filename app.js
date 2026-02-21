import { projects } from "./data.js";

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-media">
      <img src="${project.coverMedia}" loading="lazy" />
      <div class="overlay">
        <span>View gallery →</span>
      </div>
    </div>
    <div class="card-info">
      <span class="number">0${index + 1}</span>
      <h3>${project.title}</h3>
      <p>${project.date} — ${project.type}</p>
    </div>
  `;
  card.onclick = () => openModal(project);
  grid.appendChild(card);
});

function openModal(project) {
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("open");

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close">×</button>
      <div class="gallery">
        ${project.galleryMedia.map(m =>
          m.kind === "image"
            ? `<img src="${m.src}" />`
            : `<video controls poster="${m.poster}">
                 <source src="${m.src}" type="video/mp4">
               </video>`
        ).join("")}
      </div>
      <div class="project-details">
        <h2>${project.title}</h2>
        <p><strong>${project.date}</strong> — ${project.type} — ${project.client}</p>
        <p>${project.description}</p>
        <ul>
          ${project.details.map(d => `<li>${d}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  modal.querySelector(".close").onclick = closeModal;
  modal.onclick = e => { if (e.target === modal) closeModal(); };
  document.onkeydown = e => { if (e.key === "Escape") closeModal(); };
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
