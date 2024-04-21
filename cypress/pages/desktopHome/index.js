const el = require('./elements').ELEMENTS;

class DesktopHome {
    visit(url, checkUrl) {
        cy.visit(url);
        cy.url().should('contain', checkUrl);
    }
};

export default new DesktopHome();