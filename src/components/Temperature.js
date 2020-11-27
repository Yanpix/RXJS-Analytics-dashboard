import React, { useCallback, useEffect, useState } from 'react'
import { getRandomNumber, getRandomRespone, getUnit } from "../utils"
import temperatureStore from '../store/temperature'
import { COLORS } from '../utils/constants'
import Monitor from './Monitor'

export default function Tempature() {

  const [temperatureState, setTemperatureState] = useState(temperatureStore.initialState)

  useEffect(()=> {
    temperatureStore.subscribe(setTemperatureState);
    return () => {
      temperatureStore.clearTemperature()
    }
  },[]);

  const updateTempature = useCallback(() => {
    temperatureStore.sendTemperature(getRandomNumber(30, 100, 5))
  }, [])

  useEffect(() => {
    getRandomRespone(updateTempature)
      .subscribe(update => update())
  }, [updateTempature])

  return (
    <Monitor 
      title="Tempature" 
      value={`${temperatureState.data}${getUnit('temperature')}`} 
      color={COLORS.TEMPERATURE_COLOR}  
    />
  )
}