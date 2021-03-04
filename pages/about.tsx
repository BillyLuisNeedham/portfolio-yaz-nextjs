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
    imgrow1:{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent:"flex-start",
        margin:"1rem",

    },
    imgrow2:{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent:"flex-end",
    },
    imgbox:{
        padding:"1rem",

    },
  })
)

interface Props {
    
}

const About: React.FC<Props> = () => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <div style={{margin:"3rem",}}>     
                <Typography color="secondary" variant="h3">
                    Thanks for stopping by.
                </Typography>
            </div>
            <div>
                <Image
                src="/assets/images/aboutme/Group 59@2x.png"
                width={403}
                height={50}
                layout="intrinsic"
                />
            </div>
            <div style={{margin:"3rem", fontFamily:"Gadugi"}}>     
                <Typography color="primary" variant="body1">
                    {BODY_TEXT[0]}
                </Typography>
            </div>
            <div>
                <Image
                src="/assets/images/aboutme/Group 58@2x.png"
                width={403}
                height={50}
                layout="intrinsic"
                />
            </div>
            <div style={{margin:"3rem", fontFamily:"Gadugi"}}>     
                <Typography color="primary" variant="body1">
                    {BODY_TEXT[1]}
                </Typography>
            </div>
            <div>
                <div className={classes.imgrow1}>
                    <div className={classes.imgbox}>
                        <Image
                        className={classes.img}
                        src="/assets/images/aboutme/surfing.jpg"
                        width={303}
                        height={230}
                        layout="intrinsic"
                        />
                    </div>
                    <div className={classes.imgbox} style={{margin:"0 0 0 6rem",}}>
                        <Image
                        className={classes.img}
                        src="/assets/images/aboutme/Snowboarding.jpg"
                        width={303}
                        height={230}
                        layout="intrinsic"
                        />
                    </div>
                </div>
                
                <div className={classes.imgrow2}>
                    <div className={classes.imgbox} style={{margin:"0 6rem 0 0",}}>
                        <Image
                        className={classes.img}
                        src="/assets/images/aboutme/ironman.jpg"
                        width={303}
                        height={230}
                        layout="intrinsic"
                        />
                    </div>
                    <div className={classes.imgbox}>
                        <Image
                        className={classes.img}
                        src="/assets/images/aboutme/climbing.jpg"
                        width={303}
                        height={230}
                        layout="intrinsic"
                        />
                    </div>
                    
                    

                </div>
            </div>
                
            
        </ThemeProvider>
    )
}

export default About