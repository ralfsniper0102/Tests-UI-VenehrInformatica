const elNavbar = require("./elements").ELEMENTS;

export const TestNavbar = () => {
  cy.get(elNavbar.Navbar.icone).should("be.visible");
  cy.get(elNavbar.Navbar.home)
    .should("be.visible")
    .should("have.text", "Home");

  cy.get(elNavbar.Navbar.login)
    .should("be.visible")
    .should("have.text", "Login");

  cy.get(elNavbar.Navbar.login).should("be.visible");
  cy.get(elNavbar.Navbar.toogle).should("be.visible");
  cy.get(elNavbar.Navbar.sunIcon).should("be.visible");
  cy.get(elNavbar.Navbar.moonIcon).should("be.visible");
};

export const TestToogle = () => {
  let theme;
  cy.get("body").then(($el) => {
    theme = $el.attr("data-bs-theme");
  });

  cy.get(elNavbar.Navbar.toogle).click();

  cy.get("body").should(($el) => {
    expect($el.attr("data-bs-theme")).to.not.eq(theme);
  });

  cy.get(elNavbar.Navbar.toogle).click();

  cy.get("body").should(($el) => {
    expect($el.attr("data-bs-theme")).to.eq(theme);
  });
};
