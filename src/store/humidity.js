import { BehaviorSubject } from 'rxjs'
import { initialState } from '../utils/constants'

class HumidityStore {

  state = initialState
  subject = new BehaviorSubject(this.state)
  initialState = initialState

  subscribe = (setState) => this.subject.subscribe(setState)

  sendHumidity = (value) => {
    this.state = {
      ...this.state,
      data: value,
      timestamp: new Date()
     };
    this.subject.next(this.state);
  }

  clearHumidity = () => {
    this.state = {...this.state, data: null};
    this.subject.next(this.state);
  }
}

export default new HumidityStore()
