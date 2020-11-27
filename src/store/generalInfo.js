import { combineLatest  } from 'rxjs'
import { map, throttleTime  } from 'rxjs/internal/operators'

import temperatureStore from './temperature'
import airPressureStore from './airPressure'
import humidityStore from './humidity'

import { checkForNoAnswer, toObject } from '../utils'


class GeneralStore {

  constructor(...args) {
    this.streams$ = args
  }

  getLatestInfo = () => {
    return combineLatest(...this.streams$)
      .pipe(
        throttleTime(100),
        map(this.checkForExpiration),
        map(this.toObject)
      )
  }

  checkForExpiration = (data) => {
    return data.map(this.validateData)
  }

  validateData = ({ data, timestamp }) => {
    return { data: checkForNoAnswer(timestamp, 1000, data), timestamp }
  }

  toObject = (dataArr) => {
    return toObject(dataArr)
  }

  unsubscribe = () => {
    this.streams$.forEach(stream$ => stream$.unsubscribe())
  }
}

export default new GeneralStore(
  temperatureStore.subject,
  airPressureStore.subject,
  humidityStore.subject
)