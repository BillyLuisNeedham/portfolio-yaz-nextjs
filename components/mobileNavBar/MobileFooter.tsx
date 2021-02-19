import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar } from '@material-ui/core';
import { makeStyles, createStyles, Theme ,ThemeProvider} from '@material-ui/core/styles';
import { mobFooter } from '../../theme/index'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        display:"flex",
        flexFlow:"row nowrap",
        justifyContent:"space-evenly",
    },
  })
)

interface Props {
  
}


const MobileFooter: React.FC<Props> = ({}) => {

    const classes = useStyles()

    return(
        <ThemeProvider theme={mobFooter}>
            
            <AppBar position="relative" color="primary" className={classes.appBar} >
                <Toolbar>
                    <Button color="secondary">
                        Contact
                    </Button>
                    <Button color="secondary">
                        Résumé
                    </Button>
                </Toolbar>
            </AppBar>     
      </ThemeProvider>
    )
    
}

export default MobileFooter