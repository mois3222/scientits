import views from "../views/Home.html";

const Home = () => {
  const divElement = document.createElement("div");
  divElement.classList = "Characters";
  divElement.innerHTML = views;
  return divElement;
};

export default Home;
