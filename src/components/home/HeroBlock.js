import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from '../../images/data.json'

const HeroBlock = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    
    }
 
  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h1">
              The Premier
              <br />
              Developer Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h3">
              hight quality, custom-designed shirts, hats, and hoodies
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Animation */}
      <Grid item>
        <Lottie options={defaultOptions} height={400} width="50rem" />
      </Grid>
    </Grid>
  )
};

export default HeroBlock;
