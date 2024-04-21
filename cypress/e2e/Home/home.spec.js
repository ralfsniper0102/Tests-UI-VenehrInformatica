import DesktopHome from '../../pages/desktopHome/index.js';
const el = require('../../pages/desktopHome/elements').ELEMENTS; 

context('Acessar a página Home - Desktop', (
) => {
    it('Acessar a página Home', () => {
        DesktopHome.visit('/', '/');

        cy.get(el.Navbar.icone).should('be.visible');
        cy.get(el.Navbar.home).should('be.visible');
        cy.get(el.Navbar.login).should('be.visible');
        cy.get(el.Navbar.toogle).should('be.visible');
        cy.get(el.Home.image).should('be.visible');
        cy.get(el.Home.SmartWatch.body).should('be.visible');
        cy.get(el.Home.SmartWatch.hours).should('be.visible');
        cy.get(el.Home.SmartWatch.dayWeek).should('be.visible');
        cy.get(el.Home.SmartWatch.city).should('be.visible');
        cy.get(el.Home.SmartWatch.temperature).should('be.visible');
        cy.get(el.Home.SmartWatch.umidad).should('be.visible');

        cy.wait('@GETOpenWeatherMap').then((xhr) => {
            console.log(xhr);
            expect(xhr.response.statusCode).to.eq(200);
        });
    });
    it('mudar tema', () => {
        DesktopHome.visit('/', '/');

        cy.get(el.Navbar.icone).should('be.visible');
        cy.get(el.Navbar.home).should('be.visible');
        cy.get(el.Navbar.login).should('be.visible');
        cy.get(el.Navbar.toogle).should('be.visible');
        cy.get(el.Home.image).should('be.visible');
        cy.get(el.Home.SmartWatch.body).should('be.visible');
        cy.get(el.Home.SmartWatch.hours).should('be.visible');
        cy.get(el.Home.SmartWatch.dayWeek).should('be.visible');
        cy.get(el.Home.SmartWatch.city).should('be.visible');
        cy.get(el.Home.SmartWatch.temperature).should('be.visible');
        cy.get(el.Home.SmartWatch.umidad).should('be.visible');

        cy.wait('@GETOpenWeatherMap').then((xhr) => {
            console.log(xhr);
            expect(xhr.response.statusCode).to.eq(200);
        });

        let theme;
        cy.get('body').then(($el) => {
            theme = $el.attr('data-bs-theme');
        });

        cy.get(el.Navbar.toogle).click();

        cy.get('body').should(($el) => {
            expect($el.attr('data-bs-theme')).to.not.eq(theme);
        });

        cy.get(el.Navbar.toogle).click();

        cy.get('body').should(($el) => {
            expect($el.attr('data-bs-theme')).to.eq(theme);
        });
    });
    it.only('Acessar a página Home e clicar no botão de login', () => {
        DesktopHome.visit('/', '/');

        cy.get(el.Navbar.icone).should('be.visible');
        cy.get(el.Navbar.home).should('be.visible');
        cy.get(el.Navbar.login).should('be.visible');
        cy.get(el.Navbar.toogle).should('be.visible');
        cy.get(el.Home.image).should('be.visible');
        cy.get(el.Home.SmartWatch.body).should('be.visible');
        cy.get(el.Home.SmartWatch.hours).should('be.visible');
        cy.get(el.Home.SmartWatch.dayWeek).should('be.visible');
        cy.get(el.Home.SmartWatch.city).should('be.visible');
        cy.get(el.Home.SmartWatch.temperature).should('be.visible');
        cy.get(el.Home.SmartWatch.umidad).should('be.visible');

        cy.wait('@GETOpenWeatherMap').then((xhr) => {
            console.log(xhr);
            expect(xhr.response.statusCode).to.eq(200);
        });

        cy.get('[data-cy="Login"]').click();

        cy.url().should('contain', '/login');

        cy.get(el.Navbar.icone).should('be.visible');
        cy.get(el.Navbar.home).should('be.visible');
        cy.get(el.Navbar.login).should('be.visible');
    });
});