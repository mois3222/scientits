import Header from "../template/Header";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Character from "../pages/Character";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

export const router = async () => {
  const $header = null || document.getElementById("header");
  const $content = null || document.getElementById("content");
  $header.innerHTML = "";
  let hash = getHash();
  let route = await resolveRoutes(hash);
  console.log(hash);

  $header.appendChild(await Header());

  let render = routes[route];
  if (!render) {
    $content.innerHTML = "";
    return $content.appendChild(Error404());
  }
  $content.appendChild(await render());
};
