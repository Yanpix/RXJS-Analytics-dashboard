import React, { useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import { COLORS, MAX_DATA_TO_SHOW } from '../utils/constants'
import { loopTimeline } from '../utils'
import generalStore from '../store/generalInfo'
import Title from './Title'

export default function Chart() {
  const theme = useTheme();

  const [data, setData] = useState([])

  useEffect(() => {
    generalStore.getLatestInfo()
      .subscribe(loopTimeline(setData, MAX_DATA_TO_SHOW))
    return () => generalStore.unsubscribe()
  }, [])

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis 
            dataKey="time" 
            stroke={theme.palette.text.primary}
            tick={{stroke: 'white', strokeWidth: 1, fill: 'white'}}
          />
          <YAxis stroke={theme.palette.text.secondary} tick={{stroke: 'white', strokeWidth: 1}}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', color: theme.palette.text.primary }}
            >
              Monitoring systems
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="temperature" stroke={COLORS.TEMPERATURE_COLOR} dot={false} animationDuration={false}/>
          <Line type="monotone" dataKey="airPressure" stroke={COLORS.AIR_PRESSURE_COLOR} dot={false} animationDuration={false}/>
          <Line type="monotone" dataKey="humidity" stroke={COLORS.HUMIDITY_COLOR} dot={false} animationDuration={false}/>
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}