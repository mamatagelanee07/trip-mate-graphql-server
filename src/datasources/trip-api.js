const { RESTDataSource } = require("apollo-datasource-rest");

class TripAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://trip-mate-server.herokuapp.com/";
  }

  getTrips() {
    return this.get(`trip`);
  }

  addTrip(trip) {
    return this.post(`trip`, trip).then((response) => response);
  }
}

module.exports = TripAPI;
