import views from "../views/Character.html";
const Character = () => {
  // Character-inner
  const divElement = document.createElement("div");
  divElement.classList = "Character-inner";
  divElement.innerHTML = views;
  return divElement;
};

export default Character;
