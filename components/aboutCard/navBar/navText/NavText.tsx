import React from 'react'
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import {navtext} from '../../../../theme/index'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '5px',
      "&:hover":{
        cursor:"pointer" ,
      }
    },
    pinkLine: {
      height: '1px',
      width: '130px',
      backgroundColor: theme.palette.text.secondary,
    },
    pinkLineActive: {
      height: '2px',
    },
    activeText: {
      fontWeight: 'bold',
      color:"#707070", 
    },
  })
)

interface INavTextProps {
  text: string
  active: boolean
  onClickCallback: () => void
}



const NavText: React.FC<INavTextProps> = ({
  text,
  active,
  onClickCallback,
}) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={navtext}>
      <div className={classes.root}>
        <Typography
          variant="h6"
          className={active ? classes.activeText : null}
          onClick={onClickCallback}
          color="primary"
        >
          {text}
        </Typography>
        <Divider
          className={`${classes.pinkLine} ${
            active ? classes.pinkLineActive : null
          }`}
        />
      </div>
    </ThemeProvider>
    
  )
}

export default NavText
