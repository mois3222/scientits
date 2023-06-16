import views from "../views/Character.html";
import getHash from "../utils/getHash";
import getData from "../services/getData.service";
const Character = async () => {
  const id = getHash(),
    character = await getData(id);

  const divElement = document.createElement("div");
  divElement.classList = "Character-inner";
  divElement.innerHTML = views;

  divElement.querySelector("img").src = `${character.image}`;
  divElement.querySelector("img").alt = `${character.name}`;
  divElement.querySelector("h2").textContent = `${character.name}`;
  const cardFather = divElement.querySelector(".Character-card-1");

  // console.log(cardFather.childNodes);
  cardFather.childNodes[1].innerHTML += ` <span>${character.episode.length}</span>`;
  cardFather.childNodes[3].innerHTML += ` <span>${character.status}</span>`;
  cardFather.childNodes[5].innerHTML += ` <span>${character.species}</span>`;
  cardFather.childNodes[7].innerHTML += ` <span>${character.gender}</span>`;
  cardFather.childNodes[9].innerHTML += ` <span>${character.origin.name}</span>`;
  cardFather.childNodes[11].innerHTML += ` <span>${character.location.name}</span>`;

  return divElement;
};

export default Character;
