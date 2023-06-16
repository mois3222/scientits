import views from "../views/Home.html";
import getData from "../services/getData.service";

const Home = async () => {
  const characters = await getData(),
    elementHome = document.createElement("div");
  elementHome.innerHTML = views;

  let elementOfHome = elementHome.querySelector(".Character-item");

  characters.results.forEach((character) => {
    elementOfHome.innerHTML += `<a href="#/${character.id}">
    <img src="${character.image}" alt="${character.image}" />
    <h2>${character.name}</h2>
  </a>`;
  });

  return elementHome;
};

export default Home;
