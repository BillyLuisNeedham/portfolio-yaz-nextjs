import React from "react"
import Image from 'next/image';
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import {theme} from '../theme/index';
import {BODY_TEXT } from '../public/assets/strings/about-me-data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
    },
    img:{
        borderRadius:"30px",

    },
  })
)

interface Props {
    
}

const About: React.FC<Props> = () => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <div>     
                <Typography color="secondary" variant="h3">
                    Thanks for stopping by.
                </Typography>
            </div>
            <div>
                <Image
                src="/assets/images/Group 68@2x.png"
                width={300}
                height={50}
                layout="intrinsic"
                />
            </div>
            <div>     
                <Typography color="primary" variant="body1">
                    {BODY_TEXT[0]}
                </Typography>
            </div>
            <div>
                <Image
                src="/assets/images/Group 68@2x.png"
                width={300}
                height={50}
                layout="intrinsic"
                />
            </div>
            <div>     
                <Typography color="primary" variant="body1">
                    {BODY_TEXT[1]}
                </Typography>
            </div>
            <div>
                <div className={classes.img}>
                    <Image
                    src="/assets/images/Group 68@2x.png"
                    width={300}
                    height={50}
                    layout="intrinsic"
                    />
                </div>
                <div className={classes.img}>
                    <Image
                    src="/assets/images/Group 68@2x.png"
                    width={300}
                    height={50}
                    layout="intrinsic"
                    />
                </div>
                <div className={classes.img}>
                    <Image
                    src="/assets/images/Group 68@2x.png"
                    width={300}
                    height={50}
                    layout="intrinsic"
                    />
                </div>
                <div className={classes.img}>
                    <Image
                    src="/assets/images/Group 68@2x.png"
                    width={300}
                    height={50}
                    layout="intrinsic"
                    />
                </div>
            </div>
                
            
        </ThemeProvider>
    )
}

export default About