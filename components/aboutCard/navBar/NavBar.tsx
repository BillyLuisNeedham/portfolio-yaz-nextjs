import React from 'react'
import NavText from './navText/NavText'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { NavRoutes } from '../../../utils/constants/navRoutes'
import { Link } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

interface INavBarProps {
  activeRoute: NavRoutes
  onNavigateCallback: (navRoutes: NavRoutes) => void
}

const NavBar: React.FC<INavBarProps> = ({
  activeRoute,
  onNavigateCallback,
}) => {
  const classes = useStyles()

  return (
    <Box>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <NavText
          text="Work"
          active={activeRoute === NavRoutes.Work}
          onClickCallback={() => onNavigateCallback(NavRoutes.Work)}
        />
      </Link>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <NavText
          text="Contact"
          active={activeRoute === NavRoutes.Contact}
          onClickCallback={() => onNavigateCallback(NavRoutes.Contact)}
        />
      </Link>
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
