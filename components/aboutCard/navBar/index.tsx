import React from 'react'
import NavText from './navText/index'
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
}



const NavBar: React.FC<INavBarProps> = ({ activeRoute }) => {
  const classes = useStyles()

  function navigateToRoute(route: NavRoutes) {
    console.log(`route clicked: ${route}`)
  }

  return (
    <Box>
      <NavText
        text={NavRoutes[NavRoutes.Work]}
        active={activeRoute === NavRoutes.Work}
        onClickCallback={() => navigateToRoute(NavRoutes.Work)}
      />
    </Box>
  )
}

export default NavBar
