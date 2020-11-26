import React, { useEffect, useState } from 'react';
import generalStore from '../../store/generalInfo';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles'
import { toSentenceCase, getUnit } from '../../utils';
import Title from '../Title';


export default function GeneralInfo() {
  const classes = useStyles();

  const [state, setState] = useState({})

  useEffect(() => {
    generalStore.getLatestInfo()
      .subscribe(setState)
  }, [])

  return (
    <div className={classes.root}>
      <Title>General Information</Title>
      <div className={classes.flex}>
        {Object.keys(state).map(key => {
          return (
            <Typography component="p" variant="h5" key={key}>
              {toSentenceCase(key)}:
              <span className={classes[key]}>
                {` ${state[key]?.data}${getUnit(key)}`}
              </span>
            </Typography>
          )
        })}
      </div>
    </div>
  );
}