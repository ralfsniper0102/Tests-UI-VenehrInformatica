const el = require("./elements").ELEMENTS;
const elHome = require("../../pages/home/elements").ELEMENTS;

import "../../support/commands";

export const testDesktopHome = () => {
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

  cy.wait("@GETIpify").then((xhr) => {
    expect(xhr.response.statusCode).to.eq(200);
  });

  cy.wait("@GETNominatim").then((xhr) => {
    expect(xhr.response.statusCode).to.eq(200);
  });

  cy.wait("@POSTSaveVisitHomepage").then((xhr) => {
    expect(xhr.response.statusCode).to.eq(200);
  });

  cy.wait("@GETIpapi").then((xhr) => {
    expect(xhr.response.statusCode).to.eq(200);
  });
};

export const setGeolocation = (url, latitude, longitude) => {
  cy.VisitSetGeolocation("/", -23.997079, -46.276487);
};

export const accessLogin = () => {
  cy.get('[data-cy="Login"]').click();

  cy.url().should("contain", "/login");
};