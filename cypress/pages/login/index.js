const el = require("./elements").ELEMENTS;

export const TestFormLogin = () => {
  cy.get(el.Login.loginForm).should("be.visible");
  cy.get(el.Login.loginTitle).should("be.visible").should("contain", "Login");

  cy.get(el.Login.labelEmail).should("be.visible").should("contain", "Email");
  cy.get(el.Login.emailInput).should("be.visible");

  cy.get(el.Login.labelPassword)
    .should("be.visible")
    .should("contain", "Senha");

  cy.get(el.Login.passwordInput).should("be.visible");
  cy.get(el.Login.passwordShow).should("be.visible");

  cy.get(el.Login.loginButton).should("be.visible").should("contain", "Login");
};
