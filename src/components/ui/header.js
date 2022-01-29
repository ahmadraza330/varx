import React, {useState} from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Tabs, 
  Tab,  
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,

} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import account from '../../images/account-header.svg'
import menu from '../../images/menu.svg'
import {Link, navigate} from 'gatsby'

const useStyles = makeStyles(theme => ({
  coloerdIndicator: {
    backgroundColor: "#fff",
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600  
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    height: "3rem",
    width: "3rem",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: '#FFF'
  },

}))

const Header = ({ categories }) => {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
  
  const [drawerOpen, setDrawerOpen] = useState(false)

  const activeIndex = () => {
    const found = routes.indexOf(routes.filter(({node: {name, link}}) => link || `/${name.toLowerCase()}` === window.location.pathname)[0])
    return found === -1 ? false : found 
  }
  const routes = [...categories, {node: {name: 'Contact Us', strapiId: 'contact', link: '/contact'}}]

  const tabs = (
    <Tabs
      value={activeIndex()}
      classes={{ indicator: classes.coloerdIndicator, root: classes.tabs }}
    >
      {routes.map(category => {
        return (
          <Tab
            component={Link}
            to={category.node.link || `/${category.node.name.toLowerCase()}`}
            classes={{ root: classes.tab }}
            key={category.node.strapiId}
            label={category.node.name}
          />
        )
      })}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      classes={{paper: classes.drawer}}
    >
      <List disablePadding>
        {routes.map((category, i) => {
          return (
            <ListItem selected={activeIndex() === i} component={Link} to={category.node.link || `/${category.node.name.toLowerCase()}`} divider button key={category.node.strapiId}>
              <ListItemText classes={{primary: classes.listItemText}} primary={category.node.name} />
            </ListItem>
          )
        })}
      </List>
    </SwipeableDrawer>
  )

  const actions = [
    { icon: search, alt: "search", visible: true },
    { icon: cart, alt: "cart", visible: true, link: "/cart" },
    { icon: account, alt: "account", visible: !matchesMD, link: "/account" },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar>
        <Button component={Link} to="/" classes={{root: classes.logoContainer}}>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {actions.map(action => {
          if(action.visible) {
         return (
           <IconButton
             onClick={action.onClick}
             key={action.alt}
             component={action.onClick ? undefined : Link}
             to={action.onClick ? undefined : action.link}
           >
             <img className={classes.icon} src={action.icon} alt={action.alt} />
           </IconButton>
         )
          }
})}
      </Toolbar>
    </AppBar>
  )
}

export default Header
