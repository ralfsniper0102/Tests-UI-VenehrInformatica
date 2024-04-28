// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("Get-cy", (element) => {
//   cy.get(`[data-cy=${element}]`);
// });

Cypress.Commands.add("VisitCheck", (url, checkUrl) => {
  cy.visit(url);
  cy.url().should("contain", checkUrl);
});

Cypress.Commands.add("SetGeoLocation", (latitude, longitude) => {
  cy.window().then((win) => {
    win.navigator.geolocation.getCurrentPosition = (cb) =>
      cb({ coords: { latitude, longitude } });
  });
});

Cypress.Commands.add(
  "VisitSetGeolocation",
  (url, checkUrl, latitude, longitude) => {
    cy.visit(url, {
      onBeforeLoad({ navigator }) {
        cy.stub(navigator.geolocation, 'getCurrentPosition').callsArgWith(0, {
          coords: { latitude, longitude },
        });
      },
    });
    cy.url().should("contain", checkUrl);
  }
);
