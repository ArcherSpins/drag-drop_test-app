import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '../components';
import messageIcon from '../assets/messageIcon.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import vkIcon from '../assets/vkIcon.svg';
import whatsUpIcon from '../assets/whatsUpIcon.svg';
import viberIcon from '../assets/viberIcon.svg';
import telegramIcon from '../assets/telegramIcon.svg';
import boxIcon from '../assets/boxIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import {
  blue,
  blueDark,
  green,
  purple,
  blueLight,
  redGradient,
  blueGradient,
} from '../variables';
import './style.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className="pt-100">
      <Container fixed>
        <h3 className="text-center mb-10 primary title">Привет!</h3>
        <p className="text-content mb-10 text-center">Чтобы воспользоватьтся платформой, Вам нужно подключить группы социальных сетей.</p>
        <p className="text-content mb-20 text-center">А мы уже позаботимся обовсем остальном.</p>
        <div className="mb-10">
          <Grid container spacing={3}>
            <Grid item xs>
              <Card icon={messageIcon} content="content" />
            </Grid>
            <Grid item xs>
              <Card bgColor={blue} icon={facebookIcon} content="content" />
            </Grid>
            <Grid item xs>
              <Card bgColor={blueDark} icon={vkIcon} content="content" />
            </Grid>
          </Grid>
        </div>
        <div className="mb-15">
          <Grid container spacing={3}>
            <Grid item xs>
              <Card bgColor={green} icon={whatsUpIcon} content="content" />
            </Grid>
            <Grid item xs>
              <Card bgColor={purple} icon={viberIcon} content="content" />
            </Grid>
            <Grid item xs>
              <Card bgColor={blueLight} icon={telegramIcon} content="content" />
            </Grid>
          </Grid>
        </div>
        <div className="container">
          <Grid container spacing={2}>
            <Grid item xs>
              <Card bgColor={blueGradient} icon={boxIcon} content="content" />
            </Grid>
            <Grid item xs>
              <Card bgColor={redGradient} icon={instagramIcon} content="content" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Main;
