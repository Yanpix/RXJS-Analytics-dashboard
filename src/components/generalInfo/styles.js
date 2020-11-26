import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../utils/constants';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: '#fff',
    paddingLeft: 10
  },
  temperature: {
    color: COLORS.TEMPERATURE_COLOR
  },
  airPressure: {
    color: COLORS.AIR_PRESSURE_COLOR
  },
  humidity: {
    color: COLORS.HUMIDITY_COLOR
  }
}));