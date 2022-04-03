let drop_left = document.getElementById("drop_left");
let nav_drop = () => {
  let drop_left = document.getElementById("drop_left");
  drop_left.style = "display: none";
};
nav_drop();
let nav_menu = document.getElementById("nav_menu");
nav_menu.addEventListener("click", function () {
  drop_left.style = "visibility: visible;";
  // document.body.style="background: rgba(0,0,0,0.6)"
});

let hide = document.getElementById("hide");
hide.addEventListener("click", function () {
  drop_left.style = "display: none;";
});
