import React from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import GeneralInfo from "../generalInfo/GeneralInfo"
import Tempature from "../Temperature"
import AirPressure from "../AirPressure"
import Humidity from "../Humidity"
import Chart from '../Chart'
import { useStyles } from './styles'


export default function DataContainer() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* General Info */}
          <Grid item xs={12} md={4}>
            <Paper className={fixedHeightPaper}>
              <GeneralInfo />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={8}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Tempature */}
          <Grid item xs={12} md={4}>
            <Paper className={fixedHeightPaper}>
              <Tempature />
            </Paper>
          </Grid>
          {/* Air Pressure */}
          <Grid item xs={12} md={4}>
            <Paper className={fixedHeightPaper}>
              <AirPressure />
            </Paper>
          </Grid>
          {/* Humidity */}
          <Grid item xs={12} md={4}>
            <Paper className={fixedHeightPaper}>
              <Humidity />
            </Paper>
          </Grid>
        </Grid>
      </Container>
  </main>
  )
}