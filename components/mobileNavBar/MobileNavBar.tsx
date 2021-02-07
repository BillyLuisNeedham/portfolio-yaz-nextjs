import React from 'react'
import NavText from '../aboutCard/navBar/navText/NavText'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavRoutes } from '../../utils/constants/navRoutes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

interface INavBarProps {
  activeRoute: NavRoutes
  onNavigateCallback: (navRoutes: NavRoutes) => void
}


const MobileNavBar =({ activeRoute, onNavigateCallback })=>{

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <Box>

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <NavText
                        text="Work"
                        active={activeRoute === NavRoutes.Work}
                        onClickCallback={() => onNavigateCallback(NavRoutes.Work)}
                    />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavText
                        text="Contact"
                        active={activeRoute === NavRoutes.Contact}
                        onClickCallback={() => onNavigateCallback(NavRoutes.Contact)}
                    />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavText
                        text="About Me"
                        active={activeRoute === NavRoutes.AboutMe}
                        onClickCallback={() => onNavigateCallback(NavRoutes.AboutMe)}
                    />
                </MenuItem>
                <MenuItem>
                    <NavText
                        text="Résumé"
                        active={activeRoute === NavRoutes.Resume}
                        onClickCallback={() => onNavigateCallback(NavRoutes.Resume)}
                    />
                </MenuItem>
            </Menu>

        </Box>
    )
}



export default MobileNavBar