import "../../support/commands";
const elHome = require("../../pages/desktopHome/elements").ELEMENTS;
const elLogin = require("../../pages/desktopLogin/elements").ELEMENTS;

context("Acessar a página de login", () => {
  it("Acessar a página de login", () => {
    cy.VisitSetGeolocation("/", "/", -23.997079, -46.276487);

    cy.get(elHome.Navbar.icone).should("be.visible");
    cy.get(elHome.Navbar.home).should("be.visible");
    cy.get(elHome.Navbar.home).should("have.text", "Home");

    cy.get(elHome.Navbar.login).should("be.visible");
    cy.get(elHome.Navbar.login).should("have.text", "Login");

    cy.get(elHome.Navbar.login).should("be.visible");
    cy.get(elHome.Navbar.toogle).should("be.visible");
    cy.get(elHome.Navbar.sunIcon).should("be.visible");
    cy.get(elHome.Navbar.moonIcon).should("be.visible");

    cy.get(elHome.Home.image).should("be.visible");
    cy.get(elHome.Home.SmartWatch.body).should("be.visible");
    cy.get(elHome.Home.SmartWatch.hours).should("be.visible");
    cy.get(elHome.Home.SmartWatch.dayWeek).should("be.visible");
    cy.get(elHome.Home.SmartWatch.city).should("be.visible");
    cy.get(elHome.Home.SmartWatch.temperature).should("be.visible");
    cy.get(elHome.Home.SmartWatch.umidad).should("be.visible");

    cy.wait("@GETOpenWeatherMap").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.wait("@SaveVisitHomepage").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.get('[data-cy="Login"]').click();

    cy.url().should("contain", "/login");

    cy.get(elHome.Navbar.icone).should("be.visible");
    cy.get(elHome.Navbar.home).should("be.visible");
    cy.get(elHome.Navbar.home).should("have.text", "Home");

    cy.get(elHome.Navbar.login).should("be.visible");
    cy.get(elHome.Navbar.login).should("have.text", "Login");

    cy.get(elHome.Navbar.login).should("be.visible");
    cy.get(elHome.Navbar.toogle).should("be.visible");
    cy.get(elHome.Navbar.sunIcon).should("be.visible");
    cy.get(elHome.Navbar.moonIcon).should("be.visible");

    cy.get(elLogin.Login.loginTitle).should("be.visible");
    cy.get(elLogin.Login.loginTitle).should("be.visible");
  });

  // it.only("definir geolocalização", () => {

  // });
});
