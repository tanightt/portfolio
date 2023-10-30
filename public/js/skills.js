function fetchSkills(url, containerId) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const skillsList = data;
      const skillsContainer = document.querySelector(`${containerId}`);

      skillsList.map((i) => {
        const skillsItem = document.createElement("li");
        skillsItem.classList.add("skills-item");

        skillsItem.innerHTML = `<svg class="skills-svg">
        <use href="${i.svg}"></use></svg>
        <p>${i.text}</p>`;

        skillsContainer.append(skillsItem);
      });
    });
}

fetchSkills("../data/front-skills.json", "#front");
fetchSkills("../data/back-skills.json", "#back");
fetchSkills("../data/utils-skills.json", "#utils");
