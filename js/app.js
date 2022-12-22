const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

console.log(menu.classList);

const toggleHamburgerMenu = () => {
  menuBtn.classList.toggle("open");
  //   menuBtn.classList.forEach((item) => {
  //     if (item.includes("open")) {
  //       menuBtn.classList.remove("open");
  //     } else {
  //       menuBtn.classList.add("open");
  //     }
  //   });
};

const toggleMobileMenu = () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

menuBtn.addEventListener("click", () => {
  toggleHamburgerMenu();
  toggleMobileMenu();
});
