import Header from "../template/Header";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Character from "../pages/Character";

const routes = {
  "#/": Home,
  "#/:id": Character,
  "#/contact": "Contact",
};

export const router = async () => {
  const $header = null || document.getElementById("header");
  const $content = null || document.getElementById("content");

  return $header.appendChild(await Header());
};
