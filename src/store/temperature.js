import { BehaviorSubject } from 'rxjs'
import { initialState } from '../utils/constants'

class TemperatureStore {

  state = initialState
  subject = new BehaviorSubject(this.state)
  initialState = initialState

  subscribe = (setState) => this.subject.subscribe(setState)

  sendTemperature = (value) => {
    this.state = {
      ...this.state,
      data: value,
      timestamp: new Date()
     };
    this.subject.next(this.state);
  }

  clearTemperature = () => {
    this.state = {...this.state, data: null};
    this.subject.next(this.state);
  }
}

export default new TemperatureStore()