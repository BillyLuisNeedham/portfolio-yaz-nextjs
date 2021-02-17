import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
    },
    footer: {
        display:"flex",
        flexFlow: "row nowrap",
        justifyContent:"center",
        backgroundColor:"#ffffff"
    },
    left: {
        display:"flex",
        flexFlow: "column nowrap",
        padding: "3rem 2rem 3rem 0",
      
    },
    picbox:{
        margin: "1rem",
        alignSelf: "center",
    },
    profilepic:{
        borderRadius:"193px",
    },
    email: {
        display:"flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        fontFamily:"Gadugi",
    },
    socialmedia: {
        display:"flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
      
    },
    button:{
        margin: '10px 0 0 0',
    },
    right: {
        display:"flex",
        flexFlow: "column nowrap",
        justifyContent:"center",
        padding: "0 0 0 2rem",
        color:"#707070",
    },
    title: {
        padding: "1.5rem 1.5rem 1.5rem 0",
      
    },
    casestudycard: {
        display:"grid",
        gridTemplateColumns:"33% auto",
        gridTemplateRows:"auto",
        
    },
    casestudypic: {
        background: "#87ABA9 0% 0% no-repeat padding-box",
        borderRadius:"10px 0px 0px 10px",
      
    },
    casestudytitle: {
        display:"flex",
        border:"1px solid #707070",
        borderRadius:"0px 10px 10px 0px",
        padding: "2rem 3rem 2rem 3rem",
        whiteSpace:"nowrap",
      
    },
  })
)
interface Props {
    cardImage:string
    cardImageHeight:number
    cardImageWidth:number
    cardTitle:string
}

const CaseStudyFooterBar: React.FC<Props>  = ({cardImage, cardImageHeight, cardImageWidth, cardTitle }) => {
    const classes = useStyles()

    return(
        <div className={classes.footer}>
            {/* css- flex box row */}
            <div className={classes.left}>
                {/* box one containing pic email and social media links. css- flex box column */}
                <div className={classes.picbox}>
                <Image
                    className={classes.profilepic}
                    src="/assets/images/Profile_Image2.png"
                    width={194}
                    height={194}
                    layout="intrinsic"
                  />
                </div>
                <div className={classes.email}>
                    <Typography variant="body2" style={{ fontWeight:"bold", color:"#402837",}}>
                       Or E-mail me on &nbsp;
                       <Link key="Email" component="a" href="mailto:yazminleigh33@gmail.com" style={{color:"#38718F",}} >
                           yazminleigh33@gmail.com 
                        </Link> 
                    </Typography>
                    

                </div>
                <div className={classes.socialmedia}>
                    {/* media links css- flex box row*/}
                    <div>
                        <IconButton 
                            className={classes.button} 
                            aria-label="linkedIn" 
                            color="secondary" 
                            href="https://www.linkedin.com/"
                            target="_blank">
                                <Image 
                                src="/assets/SVG/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.svg"
                                width={40}
                                height={40}
                                layout="intrinsic"
                                />
                            </IconButton>
                    </div>
                    <div >
                        <IconButton 
                            className={classes.button} 
                            aria-label="instagram" 
                            href="https://www.instagram.com/"
                            target="_blank">
                                <Image 
                                src="/assets/SVG/iconfinder_1_Instagram_colored_svg_1_5296765.svg"
                                width={40}
                                height={40}
                                layout="intrinsic"
                                />
                            </IconButton>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                
                <div className={classes.title}>
                    <Typography variant="body1">
                        More of my work
                    </Typography>
                </div>
                <div className={classes.casestudycard}>
                    <div className={classes.casestudypic}>
                        <Image 
                            src={cardImage}
                            width={`${cardImageWidth}`}
                            height={`${cardImageHeight}`}
                            layout="intrinsic"
                        />
                    </div>
                    <div className={classes.casestudytitle}>
                        <div style={{alignSelf:"center"}}>
                            <Typography variant="body1" align="center" style={{fontFamily:"PlayFair Display", fontWeight:"bold"}}>
                                {cardTitle}
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CaseStudyFooterBar;