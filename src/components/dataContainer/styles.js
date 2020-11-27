import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    border: `${theme.spacing(2)}px solid #fff`,
    background: "#000",
    position: 'relative',
    '&:before': {
      content: '""',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'block',
      position: 'absolute',
      background: "url('https://www.pixelscrapper.com/sites/default/files/styles/456_scale/public/s3fs-user-content/graphic-image/user-107713/node-244694/green-grid-graphic-paper-wizard-gray.jpg')",
      opacity: 0.3
    }
  },
  fixedHeight: {
    height: 240,
  },
}));