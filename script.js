document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".game-grid");

  fetch("metadata.json")
    .then((response) => response.json())
    .then((games) => {
      games.forEach((game) => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.title} Thumbnail" class="game-thumbnail" width="16" height="16" />
          <div class="game-info">
            <div class="game-title">${game.title}</div>
            <a href="${game.link}" class="game-link">Start Module</a>
          </div>
        `;

        grid.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading game metadata:", error);
      grid.innerHTML =
        "<img style='display: block; margin-left: auto; margin-right: auto;' src='images/ERROR_METADATA.svg' alt='FAILURE TO LOAD GAME METADATA.' />";
    });
});
