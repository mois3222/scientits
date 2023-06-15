import views from "../views/404.html";

const Error404 = () => {
  const divElement = document.createElement("div");
  divElement.classList = "Error404";
  divElement.innerHTML = views;
  return divElement;
};

export default Error404;
