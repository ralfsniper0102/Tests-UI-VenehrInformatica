class Routes {
    as ={
        getOpenWeatherMap: 'GetOpenWeatherMap',
    };
    init() {
        cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?**').as('GETOpenWeatherMap');
    }
}

export default new Routes();