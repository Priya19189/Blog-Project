const menuIcon2 = document.getElementById("menu-icon2");
const menuIcon = document.getElementById("menu-icon");

menuIcon2.addEventListener("click", () => {
  if (menuIcon.className === "hidden") {
    menuIcon.classList.remove("hidden");
  } else {
    menuIcon.classList.add("hidden");
  }
});