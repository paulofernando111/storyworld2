document.addEventListener("DOMContentLoaded", () => {
  renderAccountArea(); // carregar conta no header

  const stories = [
    { title: "A Lenda do Tempo", author: "Maria", cover: "https://i.imgur.com/j1.jpg" },
    { title: "Sombras da Noite", author: "Lucas", cover: "https://i.imgur.com/j2.jpg" },
    { title: "Reino Perdido", author: "Ana", cover: "https://i.imgur.com/j3.jpg" }
  ];

  displayStories("recommended-stories", stories);
  displayStories("recent-stories", stories);
});

function displayStories(containerId, stories) {
  const container = document.getElementById(containerId);
  stories.forEach(s => {
    container.innerHTML += `
      <div class="story-card">
        <img src="${s.cover}">
        <h3>${s.title}</h3>
        <p>por ${s.author}</p>
      </div>
    `;
  });
}
const defaultCover = "https://via.placeholder.com/300x400?text=Sem+Capa";

const stories = [
  {
    title: "A Jornada Misteriosa",
    author: "Autor Desconhecido",
    cover: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
  },
  {
    title: "Floresta Sombria",
    author: "Maria Silva",
    cover: "" // sem imagem → vai usar default
  }
];

const container = document.querySelector(".stories-grid");
stories.forEach(story => {
  const cover = story.cover && story.cover.trim() !== "" ? story.cover : defaultCover;
  container.innerHTML += `
    <div class="story-card">
        <img src="${cover}">
        <h3>${story.title}</h3>
        <p>por ${story.author}</p>
    </div>
  `;
});
