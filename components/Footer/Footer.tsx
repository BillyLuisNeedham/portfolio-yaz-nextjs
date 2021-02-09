import React from 'react';
import Image from 'next/image'
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button:{
        margin: '10px 0 0 0',
    },
  })
)


const Footer =() =>{

    const classes = useStyles()

    return(
        <Box >
            <IconButton 
            className={classes.button} 
            aria-label="linkedIn" 
            color="secondary" 
            href="https://www.linkedin.com/">
                <Image 
                src="/assets/SVG/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.svg"
                width={40}
                height={40}/>
            </IconButton>

            <IconButton 
            className={classes.button} 
            aria-label="instagram" 
            href="https://www.instagram.com/">
                <Image 
                src="/assets/SVG/iconfinder_1_Instagram_colored_svg_1_5296765.svg"
                width={40}
                height={40}/>
            </IconButton>
        </Box>
    )

}

export default Footer