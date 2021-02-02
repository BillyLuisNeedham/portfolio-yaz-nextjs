import React from 'react'
import NavText from './navText/index'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

interface INavBarProps {
  activeRoute: NavRoutes
}

enum NavRoutes {
  Work,
  Contact,
  AboutMe,
  Resume,
}

const NavBar: React.FC<INavBarProps> = ({ activeRoute }) => {
  const classes = useStyles()

  return (
    <Box>
      <NavText
        text={NavRoutes[NavRoutes.Work]}
        active={activeRoute === NavRoutes.Work}
        onClickCallback={() => console.log('route clicked')}
      />
    </Box>
  )
}

export default NavBar
