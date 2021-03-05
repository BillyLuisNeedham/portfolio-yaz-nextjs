import React from "react"
import Image from 'next/image';
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import {theme} from '../theme/index';
import {BODY_TEXT } from '../public/assets/strings/about-me-data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        [theme.breakpoints.down('sm')]: {
            maxWidth:"100vw",
        },
    },
    img:{
        borderRadius:"30px",
    },
    imgrow1:{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent:"flex-start",
        margin:"1rem",
        [theme.breakpoints.down('sm')]: {
            flexFlow:"column nowrap",
            justifyContent:"center",
            margin:0,
            
        },

    },
    imgrow2:{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent:"flex-end",
        [theme.breakpoints.down('sm')]: {
            flexFlow:"column nowrap",
            justifyContent:"center",
            maxHeight:"12rem",
            margin:"0 0 4rem 0",
        },
    },
    imgbox:{
        padding:"1rem",
        [theme.breakpoints.down('sm')]: {
            padding:0,
            alignSelf:"flex-end",
            width:"13rem",
            height:"auto",
            maxHeight:"8rem",
        },
    },
    right:{
        margin:"0 0 0 6rem",
        [theme.breakpoints.down('sm')]: {
            margin: 0 ,
            alignSelf:"flex-start",
            width:"13rem",
            height:"auto",
        },
    },
    aboutbgimg:{
        overflow: "hidden",
        position: "fixed",
        opacity: 0.1,
        right: "164px" ,
        top: "-220px" ,
        [theme.breakpoints.down('sm')]: {
          position: "absolute",
          left: "-250px" ,
          top: "-175px" ,
          opacity:0,
        },
  
      },
    aboutbgimg2:{
        overflow: "hidden",
        position: "fixed",
        opacity: 0.1,
        right: "-250px" ,
        bottom: "-200px" ,
        [theme.breakpoints.down('sm')]: {
          position: "absolute",
          left: "0px" ,
          bottom: "-700px" ,
          maxWidth:"100vw",
          opacity:0,
        },
      },
    
  })
)

interface Props {
    
}

const About: React.FC<Props> = () => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme} >
            <div className={classes.root}>
                <div className={classes.aboutbgimg}>
                    <Image
                        alt="background"
                        src="/assets/images/Flower1.png"
                        height={636}
                        width={625}
                        objectFit="cover"
                        layout="fixed"
                    />
                </div>
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
                        <div className={classes.right}>
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
                        <div className={classes.imgbox}>
                            <Image
                            className={classes.img}
                            src="/assets/images/aboutme/ironman.jpg"
                            width={303}
                            height={230}
                            layout="intrinsic"
                            />
                        </div>
                        <div className={classes.right}>
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

                <div className={classes.aboutbgimg2}>
                    <Image
                        alt="background"
                        src="/assets/images/Flower2.png"
                        layout="fixed"
                        height={636}
                        width={625}
                        objectFit="cover"
                    />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default About