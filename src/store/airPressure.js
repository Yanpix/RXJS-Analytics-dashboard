import { BehaviorSubject } from 'rxjs'
import { initialState } from '../utils/constants'


class AirPressureStore {

  state = initialState
  subject = new BehaviorSubject(this.state)
  initialState = initialState

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