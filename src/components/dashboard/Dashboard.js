import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import GeneralInfo from "../generalInfo/GeneralInfo"
import Tempature from "../Temperature"
import AirPressure from "../AirPressure"
import Humidity from "../Humidity"
import Chart from '../Chart';
import { mainListItems } from '../ListItems';
import { useStyles } from './styles'


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
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
    </div>
  );
}