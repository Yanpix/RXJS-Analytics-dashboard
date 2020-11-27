import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Title from './Title'

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
}));

export default function Monitor({ title, value, color }) {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title>{ title }</Title>
      <Typography component="p" variant="h3" style={{ color }}>
        { value }
      </Typography>
    </div>
  );
}

Monitor.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string
};