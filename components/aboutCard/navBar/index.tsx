import React from 'react'
import NavText from './navText/index'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { NavRoutes } from '../../../utils/constants/navRoutes'
import { $enum } from 'ts-enum-util'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

interface INavBarProps {
  activeRoute: NavRoutes
}



const NavBar: React.FC<INavBarProps> = ({ activeRoute }) => {
  const classes = useStyles()

  function navigateToRoute(route: NavRoutes) {
    console.log(`route clicked: ${route}`)
  }

  return (
    <Box>
      <NavText
        text="Work"
        active={activeRoute === NavRoutes.Work}
        onClickCallback={() => navigateToRoute(NavRoutes.Work)}
      />
      <NavText
        text="Contact"
        active={activeRoute === NavRoutes.Contact}
        onClickCallback={() => navigateToRoute(NavRoutes.Contact)}
      />
      <NavText
        text="About Me"
        active={activeRoute === NavRoutes.AboutMe}
        onClickCallback={() => navigateToRoute(NavRoutes.AboutMe)}
      />
      <NavText
        text="Résumé"
        active={activeRoute === NavRoutes.Resume}
        onClickCallback={() => navigateToRoute(NavRoutes.Resume)}
      />
    </Box>
  )
}

export default NavBar
