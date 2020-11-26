import { BehaviorSubject } from 'rxjs';

const initialState = {
  data: 0,
  timestamp: new Date(),
  error: ''
};

class AirPressureStore {

  constructor() {
    this.state = initialState
    this.subject = new BehaviorSubject(this.state)
    this.initialState = initialState
  }

  subscribe = (setState) => this.subject.subscribe(setState)

  sendAirPressure = (value) => {
    this.state = {
      ...this.state,
      data: value,
      timestamp: new Date()
     };
    this.subject.next(this.state);
  }

  clearAirPressure = () => {
    this.state = {...this.state, data: null};
    this.subject.next(this.state);
  }
}

export default new AirPressureStore()