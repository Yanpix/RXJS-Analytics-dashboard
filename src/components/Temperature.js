import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { getRandomNumber, getRandomRespone, getUnit } from "../utils"
import { COLORS } from '../utils/constants';
import temperatureStore from '../store/temperature';
import Monitor from './Monitor';

export default function Tempature() {

  const [temperatureState, setTemperatureState] = useState(temperatureStore.initialState)

  useLayoutEffect(()=> {
    temperatureStore.subscribe(setTemperatureState);
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