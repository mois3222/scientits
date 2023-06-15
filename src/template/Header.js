import views from "../views/Header.html";

const Header = () => {
  const divElement = document.createElement("div");
  divElement.classList = "Characters";
  divElement.innerHTML = views;
  return divElement;
};

export default Header;
