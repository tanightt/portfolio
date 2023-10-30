fetch("../data/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data;
    const projectsContainer = document.querySelector(".projects-list");

    projects.forEach((project) => {
      const projectItem = document.createElement("li");
      projectItem.innerHTML = `<button class="projects-item">
    <img
      class="projects-img"
      src="${project.imageSrc}"
      alt="${project.alt}"
    />
    <h3 class="projects-title">${project.title}</h3>
    <p class="projects-text">${project.skills}</p>
  </button>`;
      projectsContainer.append(projectItem);

      projectItem
        .querySelector(".projects-item")
        .addEventListener("click", () => {
          openModal(project);
        });
    });
  })
  .catch((error) => console.error("Помилка завантаження даних:", error));

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-button");

function openModal(project) {
  modal.insertAdjacentHTML(
    "beforeend",
    `
  <div class="modal-container">
  <img class="modal-image" src="${project.imageSrc}" alt="${project.alt}" />
  <div>
    <h3 class="modal-title">${project.title}</h3>
    <ul class="modal-text">
      <li><p>${project.skills}</p></li>
      <li><p>Role: ${project.role}</p></li>
      <li><p>Responsible for: ${project.responsibleFor}</p></li>
      <li><p>${project.description}</p></li>
    </ul>
    <ul class="modal-links">
      <li> 
        <a href="${project.livePage}" target="_blank"
            rel="noopener noreferrer"  aria-label="link to live page">
          <svg class="link-modal-icon" width="30" height="30">
            <use href="./images/sprite.svg#link"></use>
          </svg> 
        </a></li>
      <li> 
        <a href="${project.gitHub}" target="_blank"
            rel="noopener noreferrer"  aria-label="link to github">
          <svg class="git-modal-icon" width="30" height="30">
            <use href="./images/sprite.svg#githubc"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div></div>
  `
  );

  const newCloseBtn = modal.querySelector(".modal-button");
  newCloseBtn.addEventListener("click", () => {
    closeModal();
  });

  document.body.classList.add("no-scroll");
  backdrop.classList.remove("is-hidden");
}

closeBtn.addEventListener("click", () => {
  closeModal();
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.innerHTML = `
    <button type="button" class="modal-button">
      <svg class="modal-icon" width="10" height="10">
        <use href="./images/sprite.svg#cross"></use>
      </svg>
    </button>
  `;

  document.body.classList.remove("no-scroll");
  backdrop.classList.add("is-hidden");
}
