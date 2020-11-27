import React, { useCallback, useEffect, useState } from 'react'
import { getRandomNumber, getRandomRespone, getUnit } from "../utils"
import humidityStore from '../store/humidity'
import { COLORS } from '../utils/constants'
import Monitor from './Monitor'

export default function Humidity() {

  const [humidity, setHumidity] = useState(humidityStore.initialState)

  useState(()=> {
    humidityStore.subscribe(setHumidity);
    return () => {
      humidityStore.clearHumidity()
    }
  },[]);

  const updateHumidity = useCallback(() => {
    humidityStore.sendHumidity(getRandomNumber(100, 1000, 10))
  }, [])

  useEffect(() => {
    getRandomRespone(updateHumidity)
      .subscribe(update => update())
  }, [updateHumidity])

  return (
    <Monitor 
      title="Humidity" 
      value={`${humidity.data}${getUnit('humidity')}`} 
      color={COLORS.HUMIDITY_COLOR}
    />
  )
}