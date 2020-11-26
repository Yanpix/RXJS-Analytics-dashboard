import { Observable } from "rxjs";

export const getRandomNumber = (min, max, step) => {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
}

const getRandomDelay = () => getRandomNumber(100, 2000, 100)

export const getRandomRespone = (callback) => {
  return new Observable(sub => {
    let timeout = null;
  
    // recursively send a random number to the subscriber
    // after a random delay
    (function go() {
      timeout = setTimeout(
        () => {
          sub.next(callback);
          go();
        },
        getRandomDelay()
      );
    })();
  
    // clear any pending timeout on teardown
    return () => clearTimeout(timeout);
  });
}

const getTimeDifference = (time) => {
  return new Date() - time
}

const NO_ANSWER = 'N/A'

export const checkForNoAnswer = (time1, time2, data) => {
  if (getTimeDifference(time1) > time2) return NO_ANSWER
  return data
}

export const getUnit = unit => {
  switch (unit) {
    case 'temperature':
      return '°C'
    case 'airPressure':
      return 'Pa'
    case 'humidity':
      return 'φ'
    default:
      return undefined
  }
}

const UpperFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export const toSentenceCase = (str) => {
  const result = str.replace( /([A-Z])/g, " $1" )
  const finalResult = UpperFirst(result)
  return finalResult
}

export const toObject = ([temperature, airPressure, humidity]) => {
  return {
    temperature,
    airPressure,
    humidity
  }
}
