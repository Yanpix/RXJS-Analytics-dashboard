import { Observable } from "rxjs";

export const getRandomNumber = (min, max, step) => {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
}

const getRandomDelay = () => getRandomNumber(100, 2000, 100)

export const getRandomRespone = (callback) => {
  return new Observable(sub => {
    let timeout = null;
  
    (function go() {
      timeout = setTimeout(
        () => {
          sub.next(callback);
          go();
        },
        getRandomDelay()
      );
    })();
  
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

const addZero = (num) => {
  if (num <= 9) return '0' + num 
  return num
}

const generateTime = () => {
  const date = new Date()
  const hours = addZero(date.getHours())
  const minutes = addZero(date.getMinutes())
  return `${hours}:${minutes}`
}

const checkIfDataString = (field) => {
  return typeof field.data === 'string' ? 0 : field.data
}

export const transformToCharData = ({ temperature, airPressure, humidity }) => {
  return {
    temperature: checkIfDataString(temperature),
    airPressure: checkIfDataString(airPressure),
    humidity: checkIfDataString(humidity),
    time: generateTime()
  }
}

export const loopTimeline = (setState, maxData) => (value) => {
  setState(prevData => {
    if (prevData.length > maxData) {
      return prevData.slice(1).concat(transformToCharData(value))
    }
    return prevData.concat(transformToCharData(value))
  })
}