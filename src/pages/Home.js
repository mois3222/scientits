import views from "../views/Home.html";

const Home = () => {
  const articleElement = document.createElement("article");
  articleElement.classList = "Character-item";
  articleElement.innerHTML = views;
  return articleElement;
};

export default Home;
