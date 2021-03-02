import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
    },
    footer: {
        display:"flex",
        flexFlow: "row nowrap",
        justifyContent:"center",
        backgroundColor:"#ffffff",
        [theme.breakpoints.down('sm')]: {
            display:"grid",
            gridTemplateColumns: "50% 50%",
            padding:"1vw",
          },
    },
    left: {
        display:"flex",
        flexFlow: "column nowrap",
        padding: "3rem 2rem 3rem 0",
        [theme.breakpoints.down('sm')]: {
            padding:"0",
          },
      
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
        fontSize:"1rem",
        [theme.breakpoints.down('sm')]: {
            flexFlow:"column nowrap",
            fontSize:".8rem",
            padding:"0 2vw 0 4vw",
          },
    },
    socialmedia: {
        display:"flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
      
    },
    button:{
        margin: '10px 0 0 0',
        [theme.breakpoints.down('sm')]: {
            margin:"0",
          },
    },
    right: {
        display:"flex",
        flexFlow: "column nowrap",
        justifyContent:"center",
        padding: "0 0 0 4rem",
        color:"#707070",
        [theme.breakpoints.down('sm')]: {
            padding:"0",
          },
    },
    title: {
        padding: "1.5rem 1.5rem 1.5rem 0",
        fontSize:"1.5rem",
        [theme.breakpoints.down('sm')]: {
            padding:"0",
            fontSize:"1rem",
          },
      
    },
    casestudycard: {
        display:"grid",
        gridTemplateColumns:"auto auto",
        gridTemplateRows:"auto",
        
    },
    casestudypic: {
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        background: "#87ABA9 0% 0% no-repeat padding-box",
        borderRadius:"10px 0px 0px 10px",
        padding:"0 2rem 0 2rem",
        [theme.breakpoints.down('sm')]: {
            padding:"0",
          },
      
    },
    casestudytitle: {
        display:"flex",
        border:"1px solid #707070",
        borderRadius:"0px 10px 10px 0px",
        padding: "2rem 4rem 2rem 4rem",
        whiteSpace:"nowrap",
        [theme.breakpoints.down('sm')]: {
            whiteSpace:"normal",
            padding:"0",
          },
      
    },
  })
)
interface Props {
    cardImage:string
    cardImageHeight:number
    cardImageWidth:number
    cardTitle:string
    pageLink:string

}

const CaseStudyFooterBar: React.FC<Props>  = ({cardImage, cardImageHeight, cardImageWidth, cardTitle, pageLink }) => {
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
                    <p style={{ fontWeight:"bold", color:"#402837",}}>
                       Or E-mail me on &nbsp;
                       <Link href="mailto:yazminleigh33@gmail.com" >
                            yazminleigh33@gmail.com 
                        </Link>
                    </p>
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
                    <p>
                        More of my work
                    </p>
                </div>
                <div className={classes.casestudycard}>
                    <div className={classes.casestudypic}>
                        <Link href={pageLink}>
                            <Image 
                                src={cardImage}
                                width={`${cardImageWidth}`}
                                height={`${cardImageHeight}`}
                                layout="intrinsic"
                            />
                        </Link>
                    </div>
                    <div className={classes.casestudytitle}>
                        <div style={{alignSelf:"center"}}>
                            <Link href={pageLink}>
                                <Typography variant="body1" align="center" style={{fontFamily:"PlayFair Display", fontWeight:"bold"}}>
                                    {cardTitle}
                                </Typography>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CaseStudyFooterBar;