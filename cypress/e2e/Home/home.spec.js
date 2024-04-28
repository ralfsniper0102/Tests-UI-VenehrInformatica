const elHome = require('../../pages/desktopHome/elements').ELEMENTS; 
import '../../support/commands';

context('Acessar a página Home - Desktop', (
) => {
    it('Acessar a página Home', () => {
        cy.VisitSetGeolocation('/', '/', -23.997079, -46.276487);

        cy.get(elHome.Navbar.icone).should("be.visible");
        cy.get(elHome.Navbar.home).should("be.visible");
        cy.get(elHome.Navbar.home).should("have.text", "Home");
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.login).should('have.text', 'Login');
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.toogle).should("be.visible");
        cy.get(elHome.Navbar.sunIcon).should("be.visible");
        cy.get(elHome.Navbar.moonIcon).should("be.visible");

        cy.get(elHome.Home.image).should('be.visible');
        cy.get(elHome.Home.SmartWatch.body).should('be.visible');
        cy.get(elHome.Home.SmartWatch.hours).should('be.visible');
        cy.get(elHome.Home.SmartWatch.dayWeek).should('be.visible');
        cy.get(elHome.Home.SmartWatch.city).should('be.visible');
        cy.get(elHome.Home.SmartWatch.temperature).should('be.visible');
        cy.get(elHome.Home.SmartWatch.umidad).should('be.visible');

        cy.wait('@GETOpenWeatherMap').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
        });

        cy.wait('@SaveVisitHomepage').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
        });
    });
    it('mudar tema', () => {
        cy.VisitSetGeolocation('/', '/', -23.997079, -46.276487);

        cy.get(elHome.Navbar.icone).should("be.visible");
        cy.get(elHome.Navbar.home).should("be.visible");
        cy.get(elHome.Navbar.home).should("have.text", "Home");
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.login).should('have.text', 'Login');
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.toogle).should("be.visible");
        cy.get(elHome.Navbar.sunIcon).should("be.visible");
        cy.get(elHome.Navbar.moonIcon).should("be.visible");

        cy.get(elHome.Home.image).should('be.visible');
        cy.get(elHome.Home.SmartWatch.body).should('be.visible');
        cy.get(elHome.Home.SmartWatch.hours).should('be.visible');
        cy.get(elHome.Home.SmartWatch.dayWeek).should('be.visible');
        cy.get(elHome.Home.SmartWatch.city).should('be.visible');
        cy.get(elHome.Home.SmartWatch.temperature).should('be.visible');
        cy.get(elHome.Home.SmartWatch.umidad).should('be.visible');

        cy.wait('@GETOpenWeatherMap').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
        });

        cy.wait('@SaveVisitHomepage').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
        });

        let theme;
        cy.get('body').then(($el) => {
            theme = $el.attr('data-bs-theme');
        });

        cy.get(elHome.Navbar.toogle).click();

        cy.get('body').should(($el) => {
            expect($el.attr('data-bs-theme')).to.not.eq(theme);
        });

        cy.get(elHome.Navbar.toogle).click();

        cy.get('body').should(($el) => {
            expect($el.attr('data-bs-theme')).to.eq(theme);
        });
    });
    it('Acessar a página Home e clicar no botão de login', () => {
        cy.VisitSetGeolocation('/', '/', -23.997079, -46.276487);

        cy.get(elHome.Navbar.icone).should("be.visible");
        cy.get(elHome.Navbar.home).should("be.visible");
        cy.get(elHome.Navbar.home).should("have.text", "Home");
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.login).should('have.text', 'Login');
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.toogle).should("be.visible");
        cy.get(elHome.Navbar.sunIcon).should("be.visible");
        cy.get(elHome.Navbar.moonIcon).should("be.visible");

        cy.get(elHome.Home.image).should('be.visible');
        cy.get(elHome.Home.SmartWatch.body).should('be.visible');
        cy.get(elHome.Home.SmartWatch.hours).should('be.visible');
        cy.get(elHome.Home.SmartWatch.dayWeek).should('be.visible');
        cy.get(elHome.Home.SmartWatch.city).should('be.visible');
        cy.get(elHome.Home.SmartWatch.temperature).should('be.visible');
        cy.get(elHome.Home.SmartWatch.umidad).should('be.visible');

        cy.wait('@GETOpenWeatherMap').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
        });

        cy.wait('@SaveVisitHomepage').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
        });

        cy.get('[data-cy="Login"]').click();

        cy.url().should('contain', '/login');

        cy.get(elHome.Navbar.icone).should("be.visible");
        cy.get(elHome.Navbar.home).should("be.visible");
        cy.get(elHome.Navbar.home).should("have.text", "Home");
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.login).should('have.text', 'Login');
        
        cy.get(elHome.Navbar.login).should("be.visible");
        cy.get(elHome.Navbar.toogle).should("be.visible");
        cy.get(elHome.Navbar.sunIcon).should("be.visible");
        cy.get(elHome.Navbar.moonIcon).should("be.visible");
    });
});