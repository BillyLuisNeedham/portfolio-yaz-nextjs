import React from 'react'
import NavText from './navText'
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
      />
      <NavText
        text="Contact"
        active={activeRoute === NavRoutes.Contact}
        onClickCallback={() => onNavigateCallback(NavRoutes.Contact)}
      />
      <NavText
        text="About Me"
        active={activeRoute === NavRoutes.AboutMe}
        onClickCallback={() => onNavigateCallback(NavRoutes.AboutMe)}
      />
      <NavText
        text="Résumé"
        active={activeRoute === NavRoutes.Resume}
        onClickCallback={() => onNavigateCallback(NavRoutes.Resume)}
      />
    </Box>
  )
}

export default NavBar
