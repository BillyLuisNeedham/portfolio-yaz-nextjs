import React from 'react'
import NavText from '../aboutCard/navBar/navText/NavText'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from'@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import { NavRoutes } from '../../utils/constants/navRoutes'
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    mobnavbar: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    }
  })
)


interface INavBarProps {
  activeRoute: NavRoutes
  onNavigateCallback: (navRoutes: NavRoutes) => void
}


const MobileNavBar =({ activeRoute, onNavigateCallback })=>{
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <AppBar className={classes.mobnavbar} position='sticky'>
            <IconButton color="inherit" >
                <Image
                    src="/Logo_White.png"
                    alt="Logo Yazmin Leigh"
                    layout="intrinsic"
                    width={26}
                    height={35}
                    quality={100}
                    />
            </IconButton>
            <IconButton color='inherit' aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
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
        </AppBar>
    )
}



export default MobileNavBar