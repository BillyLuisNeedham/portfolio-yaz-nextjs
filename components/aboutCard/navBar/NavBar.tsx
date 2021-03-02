import React from 'react'
import NavText from './navText/NavText'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { NavRoutes } from '../../../utils/constants/navRoutes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

interface INavBarProps {
  activeRoute: NavRoutes
  onNavigateCallback: (navRoutes: NavRoutes) => void
}

const NavBar: React.FC<INavBarProps> = ({ activeRoute, onNavigateCallback }) => {
  const classes = useStyles()

  return (
    <Box>
      <NavText
        text="Work"
        active={activeRoute === NavRoutes.Work}
        onClickCallback={() => onNavigateCallback(NavRoutes.Work)}
        textcolor="textPrimary"
      />
      <NavText
        text="Contact"
        active={activeRoute === NavRoutes.Contact}
        onClickCallback={() => onNavigateCallback(NavRoutes.Contact)}
        textcolor="primary"
      />
      <NavText
        text="About Me"
        active={activeRoute === NavRoutes.AboutMe}
        onClickCallback={() => onNavigateCallback(NavRoutes.AboutMe)}
        textcolor="primary"
      />
      <NavText
        text="Résumé"
        active={activeRoute === NavRoutes.Resume}
        onClickCallback={() => onNavigateCallback(NavRoutes.Resume)}
        textcolor="primary"
      />
    </Box>
  )
}

export default NavBar
