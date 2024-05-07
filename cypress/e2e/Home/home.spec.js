const functionNavbar = require("../../pages/navbar/index");
const functionDesktopHome = require("../../pages/home/index");

context("Acessar a página Home - Desktop", () => {
  it("Acessar a página Home", () => {
    functionDesktopHome.setGeolocation("/", -23.997079, -46.276487);

    functionNavbar.TestNavbar();
    functionDesktopHome.testDesktopHome();
  });
  it("mudar tema", () => {
    functionDesktopHome.setGeolocation("/", -23.997079, -46.276487);

    functionNavbar.TestNavbar();
    functionDesktopHome.testDesktopHome();
    functionNavbar.TestToogle();
  });
  it("Acessar a página Home e clicar no botão de login", () => {
    functionDesktopHome.setGeolocation("/", -23.997079, -46.276487);

    functionNavbar.TestNavbar();
    functionDesktopHome.testDesktopHome();
    functionDesktopHome.accessLogin();

    functionNavbar.TestNavbar();
  });
});
