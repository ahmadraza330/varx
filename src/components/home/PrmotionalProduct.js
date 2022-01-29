import React from 'react';
import {Grid, Typography, Button, IconButton} from '@material-ui/core'
import Carousel from 'react-spring-3d-carousel'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby';
import {makeStyles} from '@material-ui/core/styles'

import promoAdornment from '../../images/promo-adornment.svg'
import explore from '../../images/explore.svg'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
    width: '100%',
    height: '70rem',
    padding: '30rem 10rem 10rem 10rem'
  },
  productName: {
      color: '#FFF'
  }
}))

const PrmotionalProduct = () => {
    const classes = useStyles()
    const [selectedSlide, setSelectedSlide] = React.useState(0)

      const data = useStaticQuery(graphql`
        query GetPromo {
          allStrapiProduct(filter: { promo: { eq: true } }) {
            edges {
              node {
                strapiId
                name
                description
                variants {
                  images {
                    url
                  }
                }
              }
            }
          }
        }
      `)

      console.log(data)
      var slides = []

      data.allStrapiProduct.edges.map(({ node }, i) =>
        slides.push({
          key: i,
          content: (
            <Grid container direction="column">
              <Grid item>
                <IconButton disableRipple>
                  <img src={node.variants[0].images[0].url} alt="" />
                </IconButton>
              </Grid>
            </Grid>
          ),
        })
      )
     
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item>Description</Grid>
    </Grid>
  )
};

export default PrmotionalProduct;
