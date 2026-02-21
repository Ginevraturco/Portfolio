import { projects } from "./data.js";

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");

projects.forEach((project, index) => {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-media">
      <img src="${project.coverMedia}" loading="lazy" />
    </div>
    <div class="card-info">
      <span class="number">0${index + 1}</span>
      <h3>${project.title}</h3>
      <p>${project.date} — ${project.type}</p>
    </div>
  `;

  card.addEventListener("click", () => openModal(project));
  grid.appendChild(card);
});


function openModal(project) {

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close">×</button>

      <div class="gallery">
        ${project.galleryMedia.map(media =>
          media.kind === "image"
            ? `<img src="${media.src}" />`
            : `<video controls poster="${media.poster}">
                <source src="${media.src}" type="video/mp4">
               </video>`
        ).join("")}
      </div>

      <div class="project-details">
        <h2>${project.title}</h2>
        <p><strong>${project.date}</strong> — ${project.type} — ${project.client}</p>
        <p>${project.description}</p>
      </div>
    </div>
  `;

  modal.querySelector(".close").onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}

function closeModal() {
  modal.classList.remove("open");
  modal.innerHTML = "";
  document.body.style.overflow = "auto";
}