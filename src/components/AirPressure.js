import React, { useCallback, useEffect, useState } from 'react'
import { getRandomNumber, getRandomRespone, getUnit } from "../utils"
import airPressureStore from '../store/airPressure'
import { COLORS } from '../utils/constants'
import Monitor from './Monitor'

export default function AirPressure() {

  const [airPressure, setAirPressure] = useState(airPressureStore.initialState)

  useState(()=> {
    airPressureStore.subscribe(setAirPressure);
    return () => {
      airPressureStore.clearAirPressure()
    }
  },[]);

  const updateAirPressure = useCallback(() => {
    airPressureStore.sendAirPressure(getRandomNumber(0, 4000, 100))
  }, [])

  useEffect(() => {
    getRandomRespone(updateAirPressure)
      .subscribe(update => update())
  }, [updateAirPressure])

  return (
    <Monitor 
      title="Air pressure" 
      value={`${airPressure.data}${getUnit('airPressure')}`} 
      color={COLORS.AIR_PRESSURE_COLOR}
    />
  ) 
}