class Routes {
  as = {
    getOpenWeatherMap: "GETOpenWeatherMap",
    postSaveVisitHomepage: "POSTSaveVisitHomepage",
    getIpify: "GETIpify",
    getOpenWeatherMap: "GETOpenWeatherMap",
    getIpapi: "GETIpapi",
    getNominatim: "GETNominatim",
  };
  init() {
    cy.intercept(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?**"
    ).as(this.as.getOpenWeatherMap);
    cy.intercept(
      "POST",
      "https://venehrinformatica-backend.serveo.net/api/Page/SaveVisitHomepage"
    ).as(this.as.postSaveVisitHomepage);
    cy.intercept("GET", "https://api.ipify.org/?format=json").as(
      this.as.getIpify
    );
    cy.intercept(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?**"
    ).as(this.as.getOpenWeatherMap);
    cy.intercept("GET", "https://ipapi.co/**").as(this.as.getIpapi);
    cy.intercept(
      "GET",
      "https://nominatim.openstreetmap.org/reverse?format=geojson&**"
    ).as(this.as.getNominatim);
  }
}

export default new Routes();
