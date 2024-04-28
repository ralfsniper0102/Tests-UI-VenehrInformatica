class Routes {
    as ={
        getOpenWeatherMap: 'GetOpenWeatherMap',
        saveVisitHomepage: 'SaveVisitHomepage'
    };
    init() {
        cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?**').as('GETOpenWeatherMap');
        cy.intercept('POST','https://venehrinformatica-backend.serveo.net/api/Page/SaveVisitHomepage').as('SaveVisitHomepage');
    }
}

export default new Routes();