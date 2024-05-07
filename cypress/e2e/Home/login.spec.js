import "../../support/commands";

const functionDesktopHome = require("../../pages/home/index");
const functionNavbar = require("../../pages/navbar/index");
const functionDesktopLogin = require("../../pages/login/index");

context("Acessar a página de login", () => {
  it("Acessar a página de login", () => {
    functionDesktopHome.setGeolocation("/", -23.997079, -46.276487);

    functionNavbar.TestNavbar();
    functionDesktopHome.testDesktopHome();
    functionDesktopHome.accessLogin();

    functionNavbar.TestNavbar();
    functionDesktopLogin.TestFormLogin();
  });

  // it.only("definir geolocalização", () => {

  // });
});
