import { observable, action, decorate } from "mobx";

class StaysFlights {
  stays = null;
  staySelect = null;
  flights = null;

  setStays = stays => (this.stays = stays);

  setStaySelect(stay) {
    if (stay === "cjo8vobvvapyl0a01bfzglqb3") {
      this.staySelect = null;
    } else {
      this.staySelect = stay;
    }
  }

  setFlights = flights => {
    this.flights = flights;
  };
}
decorate(StaysFlights, {
  stays: observable,
  staySelect: observable,
  flights: observable,
  setStays: action,
  setFlights: action,
  setStaySelect: action
});

export default StaysFlights;
