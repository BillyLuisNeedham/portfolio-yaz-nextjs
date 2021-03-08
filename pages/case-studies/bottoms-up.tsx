import React from 'react'
import { Theme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme, Toolbar, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {THEME,TITLE,ROLL_INFO,TOOLS_USED,TOOL_ICONS,TOOL_INCON_WIDTH,INTO_PARA,THE_CHALLANGE, RESEARCH_FINDINGS, IDEATION, WIREFRAMES, WIREFRAME_LINK, VISUAL_DESIGN, CONCLUSION, FOOTER_CARD } from './bottoms-up-data.tsx';
import {MIN_LANDSCAPE_MOBILE_WIDTH, SCREEN_WIDTH} from '../../utils/constants/dimens'
import CaseStudyDivider from '../../components/CaseStudyDivider/CaseStudyDivider';
import BulletNumbers from '../../components/bulletnumbers/BulletNumbers'
import Image from 'next/image'
import MobileNavBar from '../../components/mobileNavBar/MobileNavBar';
import { NavRoutes } from '../../utils/constants/navRoutes';
import CaseStudyFooterBar from '../../components/caseStudyFooterBar/CaseStudyFooterBar';
import clsx from 'clsx';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display:"flex",
      flexFlow: 'column nowrap',
      justifyContent: 'space-between',
    },

    dividerouter:{
      display: "flex", 
      alignItems: "center"

    },
    dividermiddle:{
      borderBottom: "3px solid #305538", 
      width: "25%"

    },
    divideinners:{
      padding: "0 10px 0 10px"

    },

    dividertypography:{
      whiteSpace: "nowrap"
    },
    
    intro:{
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: "center",
      margin: "4rem",
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'row wrap',
        margin:"0",
      },
    },
    introbody:{
      maxWidth:"50vw",
      padding:"10vw",
      [theme.breakpoints.down('sm')]: {
        maxWidth: '90vw',
        padding:"10vw",
      },
    },
    
    intropara:{
      alignSelf:"center",
      [theme.breakpoints.down('sm')]: {
        maxWidth:"90vw",
      },

    },
    lists:{
      flexGrow:1,
    },
    listSubHeader:{
      fontSize:"2.75rem", 
      fontStyle:"italic",
      [theme.breakpoints.down('sm')]: {
        fontSize:"1.5rem",
      },
  },
    listItem:{
      paddingLeft: '10vw',
      paddingRight: '1vw',
      color:"#525252",
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '15vw',
        paddingRight: '1vw',
      },
              
    },
    tooliconlist:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'flex-start',
      margin:"2rem 0 0 0",
      padding: 0,
    },
    challange:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      margin: '2vw 0 2vw 0',
      [theme.breakpoints.down('sm')]: {
        margin: 0 ,
      },
    },
    challangeintro:{
      margin: '2vw 1.5rem 0 1.5rem ',
    },
    challangemain:{
      margin:"2rem 1.5rem 10rem 1.5rem",
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent:'center',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column nowrap',
        justifyContent:"flex-start",
        margin:"0",
      },
    },
    challangemaincontent:{
      maxWidth: '45vw',
      height:"29rem",
      padding: '4vw',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'none',
        margin: '0 1.5rem 1rem 1.5rem',
        padding: '0',
        height:"auto",
        },
    },
    challangeimage:{
      [theme.breakpoints.down('sm')]: {
        width: '15rem',
        margin: '0',
        padding: '0',
        height: "auto",
        },
    },
    challImage1:{
      [theme.breakpoints.down('sm')]: {
        
        },
    },
    challImage2:{
      [theme.breakpoints.down('sm')]: {
        margin:"0 0 0 25vw",
        },
    },
    challangeredbox:{
      margin: '4vw 0 0 0',
      lineHeight:"50px",
      border:"8px solid #EF3D4C",
      [theme.breakpoints.down('sm')]: {
        border:"3px solid #EF3D4C",
        maxWidth: 'none',
        lineHeight:"19px",
        },
    },
    findings:{
      display:"grid",
      gridTemplateColumns: "25% 75%",
      gridTemplateRows:"auto auto auto",
      margin:"5vw 20vw 5vw 20vw",
      placeItems:"center center",
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: "25% 12.5% 12.5% 50%",
        margin:"5vw 4vw 5vw 4vw ",
      },
    },
    f1a:{
      gridColumn:"1",
      gridRow:"1",
      [theme.breakpoints.down('sm')]: {
        placeSelf:"center start",
        gridColumn:"1/ span 2",
      },
    },
    f1b:{
      gridColumn:"1",
      gridRow:"2",
      [theme.breakpoints.down('sm')]: {
        placeSelf:"center start",
        gridColumn:"1/ span 2",
      },
    },
    f1c:{
      gridColumn:"1",
      gridRow:"3",
      [theme.breakpoints.down('sm')]: {
        placeSelf:"center start",
        gridColumn:"1/ span 2",
      },
    },
    f2a:{
      gridColumn:"2",
      gridRow:"1",
      placeSelf:"center start",
      [theme.breakpoints.down('sm')]: {
        placeSelf:"center end",
        gridColumn:"3/ span 2",
        
      },
    },
    f2b:{
      gridColumn:"2",
      gridRow:"2",
      placeSelf:"center start",
      [theme.breakpoints.down('sm')]: {
        placeSelf:"center end",
        gridColumn:"3/ span 2",
        
      },
    },
    f2c:{
      gridColumn:"2",
      gridRow:"3",
      placeSelf:"center start",
      [theme.breakpoints.down('sm')]: {
        placeSelf:"center end",
        gridColumn:"3/ span 2",
        
      },
    },
    idedation:{
      margin:"1rem 1rem 4rem 1rem",
    },
    ideationmain:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:"center",
      alignItems:"center",
    },
    ideationrow:{
      display:"flex",
      flexFlow:"row nowrap",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      padding:"5rem 5rem 5rem 0",
      [theme.breakpoints.down('sm')]: {
        flexFlow:"column nowrap",
        justifyContent:"center",
        alignItems:"center",
        padding:"0",
      },
    },
    ideationrowimage:{
      [theme.breakpoints.down('sm')]: {
        padding:"0 2rem 0 2rem"
      },
    },
    ideationtext:{
      maxWidth:"70rem",
      padding:"0 10rem 0 10rem",
      [theme.breakpoints.down('sm')]: {
        padding:"2rem 0 2rem 0"
      },
    },
    ideationimage:{
      maxWidth:"70rem",
      padding:"5rem 0 5rem 0",
      [theme.breakpoints.down('sm')]: {
        padding:"0 2rem 0 2rem"
      },
    },
    
    wireframesMain:{
      display:'flex',
      flexFlow: 'column nowrap',
      justifyContent:'center',
      alignItems: 'center',
      margin:"10rem",
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column nowrap',
        margin:'2.5em 0 2.5em 0',
      },
      
    },
    wireframemainitems:{
      [theme.breakpoints.down('sm')]: {
        width: '90vw',
        margin:'2.5em 0 2.5em 0',
        padding:"0 .5rem 0 .5rem",
      },
    },
    wireframetext:{
      maxWidth:"90%",
      padding:"5rem",
      [theme.breakpoints.down('sm')]: {
        width: '90vw',
        padding:'0',
      },
    },
    wireframebutton:{
      width:"19rem",
      height:"5rem",
      fontSize:"2rem",
      [theme.breakpoints.down('sm')]: {
        width:"10rem",
        height:"2.5rem",
        fontSize:"1rem",
      },
    },
    wireframes1:{
      display:'flex',
      flexFlow: 'row-reverse wrap',
      justifyContent: "center",
      [theme.breakpoints.down('sm')]: {
        margin:'1em 0 1em 0',
        justifyContent:"flex-end",
      },
    },
    wireframes1text:{
      margin:"0 2rem 0 2rem",
      padding:"0 2rem 0 2rem",
      maxWidth:"45vw",
      [theme.breakpoints.down('sm')]: {
        margin:'1rem',
        padding:'0',
        maxWidth:"none",
      },
    },
    wireframes1img:{
      margin:"2rem",
      maxWidth:"45vw",
      [theme.breakpoints.down('sm')]: {
        margin:'0 0 0 2rem',
        padding:'0',
        maxWidth:"42vw",
      },
    },
    wireframes1img2:{
      [theme.breakpoints.down('sm')]: {
        margin:'-.5rem 0 0 50vw',
      },
    },

    wireframes2:{
      margin:"4rem",
      [theme.breakpoints.down('sm')]: {
        margin:"0 1rem 0 1rem",
      },
    },
    wireframes2text:{
      
    },

    wireframes3:{
      display:"grid",
      gridTemplateColumns: "auto auto",
      gridTemplateRows:"auto auto auto auto auto",
      [theme.breakpoints.down('sm')]: {
        margin:'2.5em 1rem 2.5em 1rem',
      },
    },
    wireframearrowitem1:{
      gridColumn:"1/ span 2",
      gridRow:"1/ span 3",
      alignSelf:"end",
      [theme.breakpoints.down('sm')]: {
        margin:'0 1rem 0 1rem',
      },

    },
    wireframearrowitem2:{
      gridColumn:"1/ 1",
      gridRow:"3/span 2",
      alignSelf:"end",
      
    },
    wireframearrowitem3:{
      gridColumn:"2/ 2",
      gridRow:"4/ span 2",
      alignSelf:"end",
      justifySelf:"center",
      
    },
    visualDesignMain:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      margin:'5em 0 5em 0',
    },
    visualDesignimg1:{
      padding:"0 1rem 15rem 1rem",
      [theme.breakpoints.down('sm')]: {
        padding:"0 1rem 1rem 1rem"
      },
    },
    visualDesignImgbutton:{
      display:"flex",
      flexFlow:"column-reverse nowrap",
      justifyContent:'center',
      alignItems:'center',
      [theme.breakpoints.down('sm')]: {
        flexFlow:"column nowrap",
      },
    },
    visualDesignImg2:{

    },
    visualDesignbutton:{
      margin: "0 0 1em 0",
      whiteSpace: "nowrap",
      borderRadius:"3.5rem",
      boxShadow:"0 3px 6px #00000029",
      textTransform: "capitalize",
      width:"19rem",
      height:"5rem",
      fontSize:"2rem",
      [theme.breakpoints.down('sm')]: {
        width:"10rem",
        height:"2.5rem",
        fontSize:"1rem",
        margin:"0 0 2rem 0",
      },
    },
    visualDesign2:{
      display:"flex",
      flexFlow:"row nowrap",
      [theme.breakpoints.down('sm')]: {
        flexFlow:"row nowrap",
      },
      
    },
    visualDesign3:{
      margin:"10vw",
      display:"grid",
      gridTemplateColumns:"auto auto",
      gridTemplateRows:"auto auto auto auto",
      columnGap:"5vw",
      rowGap:"2vh",
      [theme.breakpoints.down('sm')]: {
        display:"flex",
        flexFlow:"column nowrap",
      },
 
    },
    visualDesign3img1:{
      gridColumn: "1 / span 1",
      gridRow:"1/span 2",
      [theme.breakpoints.down('sm')]: {
        padding:"0 1rem 0 1rem",
      },
      
    },
    visualDesign3text2:{
      padding:"4rem 0 4rem 0",
      gridColumn: "1 / span 1",
      gridRow:"3/span 1",
      [theme.breakpoints.down('sm')]: {
        padding:"1rem 0 1rem 0",
      },
    },
    visualDesign3img3:{
      gridColumn: "1 / span 1",
      gridRow:"4/span 1",
      [theme.breakpoints.down('sm')]: {
        padding:"0 1rem 0 1rem",
      },
    },
    
    visualDesign3text1:{
      padding:"5rem 0 5rem 0",
      gridColumn: "2 / span 1",
      gridRow:"1/span 1",
      [theme.breakpoints.down('sm')]: {
        padding:"1rem 0 1rem 0",
      },
    },

    visualDesign3img2:{
      gridColumn: "2 / span 1",
      gridRow:"2/span 3",
      [theme.breakpoints.down('sm')]: {
        padding:"0 1rem 0 1rem",
      },
    },
    
    visualDesign4:{
      
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexFlow:"column wrap",
        margin: "1em 0 3em 0",
      },
    },
    visualDesign4textbox:{
      maxWidth:"45vw",
      padding:"2rem",
      margin:"0 0 4rem 0",
    },
    visualDesign4textboxtext:{
      padding:"2rem",
      margin:"0 0 2rem 0",
    },
    visualDesign4text:{
      maxWidth:"50vw",
      margin:"2rem",
    },
    visualDesign4img:{
      margin:"4rem 0 4rem 0",

    },
    conclusion:{
      
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      margin: "5em",
      [theme.breakpoints.down('sm')]: {
        margin: "2.5",
      },
    },
    conclusionbox:{
      maxWidth: "50vw",
      alignSelf:'center',
    },
    conclusiontext:{
      padding:"2rem 0 2rem 0",
      maxWidth:"50vw",
      [theme.breakpoints.down('sm')]: {
        padding:"1.5em 0 1.5em 0",
      },
    },
  }),
)



interface Props {
  
}


const BottomsUpPage: React.FC<Props> = ({}) => {
  
  const classes = useStyles()

  const Divider = (title: string) =>{
    return(
      <div className={classes.dividerouter}>
        <div className={classes.dividermiddle} />
          <span className={classes.divideinners}>
          <Typography 
            color="secondary" 
            align="center" 
            variant="h3" 
            className={classes.dividertypography}
            > 
            {title}
            </Typography>
          </span>
        <div style={{ borderBottom: "3px solid #305538", width: "100%"}} />
      </div> 
    )
  }

  function navigateToRoute(navRoutes: NavRoutes) {
    console.log(`navigate to navRoute ${navRoutes}`)
  }

  
  return (
    <ThemeProvider theme={THEME}>
      
      <Box className={classes.root}>
          {SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH ? (
            <MobileNavBar
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}/>
          ):(
            <AppBar elevation={0} position="absolute" color="transparent">
              <Toolbar>
                <IconButton edge="start" color="inherit" href="/">
                  <Image
                  src="/Logo_White.png"
                  width={37}
                  height={48}
                  />
                </IconButton>
                <Box flexDirection="column" style={{color:"#ffffff", textAlign:"left", fontStyle:"italic"}}>
                  <Typography variant="body1">
                    Yazmin Leigh Portfolio
                  </Typography>
                  <Typography variant="caption">
                    UI / UX Designer
                  </Typography>
                </Box>
              </Toolbar>
            </AppBar>
          )}
       
          <Image
            src={TITLE.title}
            width={1920}
            height={614}
            layout="responsive"
            objectFit="contain"
          />

        
          
        <Box className={classes.intro}>
          <Box className={classes.introbody}>
            <Typography color="textPrimary" className={classes.intropara} variant="body1" align="left" >
                {INTO_PARA}
            </Typography>
          </Box>
          <Box className={classes.lists}>
            <List >
              <div className={classes.dividerouter}>
                <div className={classes.dividermiddle} />
                  <span className={classes.divideinners}>
                  <ListSubheader disableSticky={true}  className={classes.listSubHeader}>Role</ListSubheader>
                  </span>
                <div style={{ borderBottom: "3px solid #305538", width: "100%"}} />
              </div> 
              <div style={{margin:"1rem 0 0 0"}}>
                {ROLL_INFO.map((info, index)=>(
                  <ListItem className={classes.listItem} alignItems="center" key={`roll-key-${index}`}>
                    <ListItemIcon>
                      <Image
                        src="/assets/images/bottomsUp/web_bullet_points_green@2x.png"
                        width="32"
                        height="44"
                      />
                    </ListItemIcon>
                    <ListItemText primary={info} />
                  </ListItem>))}
                </div>
            </List>
            
            <List>
              <div className={classes.dividerouter}>
                <div className={classes.dividermiddle} />
                <span className={classes.divideinners} >
                  <ListSubheader disableSticky={true} className={classes.listSubHeader} >Tools</ListSubheader>
                </span>
                <div style={{ borderBottom: "3px solid #305538", width: "100%"}} />
              </div>

              <div style={{margin:"1rem 0 0 0"}}>
                {TOOLS_USED.map((info, index)=>(
                  <ListItem className={classes.listItem} alignItems="center"  key={`tools-key-${index}`}>
                    <ListItemIcon>
                      <Image
                          src="/assets/images/bottomsUp/web_bullet_points_green@2x.png"
                          width="32"
                          height="44"
                        />
                    </ListItemIcon>
                      <ListItemText primary={info} />
                  </ListItem>))}
              </div>
              
            </List>
            <List className={classes.tooliconlist}>
              {TOOL_ICONS.map((info, index)=>(
                <ListItem key={`tool-icons-key-${index}`}>
                  <Image
                      src={info}
                      layout="intrinsic"
                      height={TOOL_INCON_WIDTH[index].h}
                      width={TOOL_INCON_WIDTH[index].w}
                    />
                </ListItem>))}
            </List>
          </Box>
        </Box>

        
        

        <Box>
          <CaseStudyDivider title={"The Challenge"}/>
          <Box className={classes.challange} >
            <Box alignSelf="center" className={classes.challangeintro}>
              <Typography color="textPrimary" align="left" variant="body1" > 
              {THE_CHALLANGE.intro}
              </Typography>
            </Box>
            <Box p={2} m={2}>
              <Typography color="primary" align="center" variant="h1" style={{fontFamily:"Abril Fatface"}} >
                {THE_CHALLANGE.subheading}
              </Typography>
            </Box>
            
            <Box className={classes.challangemain}  >
                <Typography color="textPrimary" align="left" variant="body1" className={classes.challangemaincontent} >
                  {THE_CHALLANGE.text1}
                </Typography>
                <div className={clsx(classes.challangemaincontent, classes.challImage1)}>
                  <div className={classes.challangeimage}>
                  <Image
                        src={`${THE_CHALLANGE.image1.imagesrc}`}
                        layout="intrinsic"     
                        width={`${THE_CHALLANGE.image1.width}`} 
                        height={`${THE_CHALLANGE.image1.height}`} 
                        />
                  </div>  
                </div>  
                <div className={clsx(classes.challangemaincontent, classes.challImage2)} >
                  <div className={classes.challangeimage}>
                  <Image
                      src={`${THE_CHALLANGE.image2.imagesrc}`} 
                      layout="intrinsic"    
                      width={`${THE_CHALLANGE.image2.width}`} 
                      height={`${THE_CHALLANGE.image2.height}`} 
                      />
                  </div>
                </div>
                
                <div className={classes.challangemaincontent} >
                  <Typography color="textPrimary" align="center" variant="h4" className={classes.challangeredbox} >
                    {THE_CHALLANGE.text2}
                  </Typography>
                </div>
                
              
            </Box>
            <Image
              src={`${THE_CHALLANGE.image3.imagesrc}`} 
              layout="intrinsic"    
              width={`${THE_CHALLANGE.image3.width}`} 
              height={`${THE_CHALLANGE.image3.height}`} 
              />
          </Box>

          <Box className={classes.challange}>
            <Box>
              {Divider("Research Findings")}
            </Box>

            <Box className={classes.findings} >
              <div className={classes.f1a}>
                <BulletNumbers number={1} color={"#305538"} />
              </div>
              <div className={classes.f1b}>
                <BulletNumbers number={2} color={"#305538"} />
              </div> 
              <div className={classes.f1c}>
                <BulletNumbers number={3} color={"#305538"} /> 
              </div>  

              <Typography color="textPrimary" align="left" variant="body1" className={classes.f2a}>
                {RESEARCH_FINDINGS[1]}
              </Typography>
              <Typography color="textPrimary" align="left" variant="body1" className={classes.f2b}>
                {RESEARCH_FINDINGS[2]}
              </Typography>
              <Typography color="textPrimary" align="left" variant="body1" className={classes.f2c}>
                {RESEARCH_FINDINGS[3]}
              </Typography>

            </Box>



          </Box>
        </Box>

        <Box>
          <CaseStudyDivider title={"Ideation"}/>

          <Box className={classes.idedation} >
            <div className={classes.ideationmain} >
              <div className={classes.ideationrow}>
                <Typography  color="textPrimary" align="left" variant="body1" className={classes.ideationtext}>
                  {IDEATION.text1}
                </Typography>
                <div className={classes.ideationrowimage}>
                  <Image                  
                    layout="intrinsic"  
                    src={`${IDEATION.image1.imagesrc}`}   
                    width={`${IDEATION.image1.width}`} 
                    height={`${IDEATION.image1.height}`} 
                    />
                </div>
              </div>
              
              <Typography color="textPrimary" align="left" variant="body1" className={classes.ideationtext}>
                {IDEATION.text2}
              </Typography>
              <div className={classes.ideationimage}>
                <Image
                  layout="intrinsic"  
                  src={`${IDEATION.image2.imagesrc}`}   
                  width={`${IDEATION.image2.width}`} 
                  height={`${IDEATION.image2.height}`} 
                  />
              </div>
              <Typography color="textPrimary" align="left" variant="body1" className={classes.ideationtext}>
                {IDEATION.text3}
              </Typography>
              <div className={classes.ideationimage}>
                <Image
                src={`${IDEATION.image3.imagesrc}`} 
                layout="intrinsic"    
                width={`${IDEATION.image3.width}`} 
                height={`${IDEATION.image3.height}`} 
                />
              </div>
            </div>
          </Box>
        </Box>

        <Box>
          <CaseStudyDivider title={"Wireframes"}/>

          <Box className={classes.wireframesMain} >

            <Box alignSelf="center" className={classes.wireframemainitems}>
              <Image
                  src={`${WIREFRAMES.image1.imagesrc}`}
                  layout="intrinsic"     
                  width={`${WIREFRAMES.image1.width}`} 
                  height={`${WIREFRAMES.image1.height}`} 
                  />
            </Box>
            <Box className={classes.wireframetext}>
                <Typography color="textPrimary" align="left" variant="body1">
                  {WIREFRAMES.text1}
                </Typography>
            </Box>

              <Button 
                className={classes.wireframebutton}
                variant="contained" 
                color="secondary" 
                href={WIREFRAME_LINK}
                size="large"
                style={{
                  borderRadius:"3.5rem",
                  boxShadow:"0 3px 6px #00000029",
                  textTransform: "capitalize"
                  }} 
                >
                View Prototype
              </Button>
          </Box>

          {Divider("Test and Iterate Again")}

          <Box className={classes.wireframesMain} >
            <Box  className={classes.wireframes1} >
              <Typography color="textPrimary" align="left" variant="body1" className={classes.wireframes1text}>
                  {WIREFRAMES.text2}
              </Typography>
              <div className={classes.wireframes1img}>
                <Image
                  src={`${WIREFRAMES.image2.imagesrc}`} 
                  layout="intrinsic"  
                  width={`${WIREFRAMES.image2.width}`} 
                  height={`${WIREFRAMES.image2.height}`} 
                  />
              </div>
              <div className={clsx(classes.wireframes1img, classes.wireframes1img2)}>
                <Image
                  src={`${WIREFRAMES.image3.imagesrc}`}
                  layout="intrinsic"     
                  width={`${WIREFRAMES.image3.width}`} 
                  height={`${WIREFRAMES.image3.height}`} 
                  />
              </div>
              <Typography color="textPrimary" align="left" variant="body1" className={classes.wireframes1text} >
                  {WIREFRAMES.text3}
                </Typography>
            </Box>

            <Box className={classes.wireframes2} >
              <Box className={classes.wireframes2text}>
                <Typography color="textPrimary" align="left" variant="body1" >
                  {WIREFRAMES.text4}
                </Typography>
              </Box>  
            </Box>

            <Box className={classes.wireframes3}>
              <Box className={classes.wireframearrowitem1}>
                <Image
                src={`${WIREFRAMES.image4.imagesrc}`}   
                width={`${WIREFRAMES.image4.width}`} 
                height={`${WIREFRAMES.image4.height}`}
                layout="intrinsic" 
                />
              </Box>
              
              <Box className={classes.wireframearrowitem2} >
                <Typography color="textPrimary" align="left" variant="body1"  >
                  {WIREFRAMES.text5}
                </Typography>
              </Box>
              <Box className={classes.wireframearrowitem3}>
                <Typography color="textPrimary" align="left" variant="body1" >
                  {WIREFRAMES.text6}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

      <Box >
        <CaseStudyDivider title={"Visual Design"}/>

        <Box className={classes.visualDesignMain} >
          <Box className={classes.visualDesign2}> 
            <Box className={classes.visualDesignimg1}>
              <Image
                src={`${VISUAL_DESIGN.image1.imagesrc}`}   
                width={`${VISUAL_DESIGN.image1.width}`} 
                height={`${VISUAL_DESIGN.image1.height}`}
                layout="intrinsic" 
                />
            </Box>
            
            <Box className={classes.visualDesignImgbutton} >
              <Button 
                className={classes.visualDesignbutton}
                variant="contained" 
                color="secondary" 
                href={WIREFRAME_LINK}
                fullWidth={true}
                size="large"
                >
                View Prototype
              </Button>
              
              
              <div className={classes.visualDesignImg2}>
                <Image
                src={`${VISUAL_DESIGN.image2.imagesrc}`}   
                width={`${VISUAL_DESIGN.image2.width}`} 
                height={`${VISUAL_DESIGN.image2.height}`} 
                layout="intrinsic"
                />
              </div>

            </Box>
          </Box>

          <Box className={classes.visualDesign3}>

            <Typography
              color="textPrimary"  
              align="left" 
              variant="body1" 
              className={classes.visualDesign3text1}>
              {VISUAL_DESIGN.text1}
            </Typography>
            <div className={classes.visualDesign3img1}>
              <Image
                src={`${VISUAL_DESIGN.image3.imagesrc}`}   
                width={`${VISUAL_DESIGN.image3.width}`} 
                height={`${VISUAL_DESIGN.image3.height}`} 
                layout="intrinsic"
                />
            </div>
            

            <Typography
                color="textPrimary" 
                align="left" 
                variant="body1"
                className={classes.visualDesign3text2} >
              {VISUAL_DESIGN.text2}
            </Typography>
            
            <div className={classes.visualDesign3img2}>
              <Image
                src={`${VISUAL_DESIGN.image4.imagesrc}`}   
                width={`${VISUAL_DESIGN.image4.width}`} 
                height={`${VISUAL_DESIGN.image4.height}`}
                layout="intrinsic" 
              />
            </div>
            <div className={classes.visualDesign3img3}>
              <Image
                
                src={`${VISUAL_DESIGN.image5.imagesrc}`}   
                width={`${VISUAL_DESIGN.image5.width}`} 
                height={`${VISUAL_DESIGN.image5.height}`}
                layout="intrinsic" 
              />
            </div>
            
            
            
            
          </Box>
        </Box>

        {Divider("Test and Iterate Again")}
          
        <Box className={classes.visualDesignMain} >  
          <Box className={classes.visualDesign4}>
            <div className={classes.visualDesign4textbox}>
              <Typography color="textPrimary" align="left" variant="body1" className={classes.visualDesign4textboxtext} >
                {VISUAL_DESIGN.text3}
              </Typography>

              <Typography color="textPrimary" align="left" variant="body1" className={classes.visualDesign4textboxtext} >
                {VISUAL_DESIGN.text4}
              </Typography>

              <Typography  align="center" variant="h3" color="secondary" className={classes.visualDesign4text}>
                {VISUAL_DESIGN.text5}
              </Typography>
             

            </div>

            <Box className={classes.visualDesign4img}>
              <Image
                src={`${VISUAL_DESIGN.image6.imagesrc}`}   
                width={`${VISUAL_DESIGN.image6.width}`} 
                height={`${VISUAL_DESIGN.image6.height}`}
                layout="intrinsic" 
                />
            </Box>
            
            

            <Box border={8} borderColor="secondary.main">
              <Typography color="textPrimary" align="center" variant="body1" className={classes.visualDesign4text} >
                {VISUAL_DESIGN.text6}
              </Typography>
            </Box>

            <Box className={classes.visualDesign4img}>
              <Image
                src={`${VISUAL_DESIGN.image7.imagesrc}`}   
                width={`${VISUAL_DESIGN.image7.width}`} 
                height={`${VISUAL_DESIGN.image7.height}`}
                layout="intrinsic" 
                />
            </Box>

            <Box className={classes.visualDesign4img}>
              <Image
                src={`${VISUAL_DESIGN.image8.imagesrc}`}   
                width={`${VISUAL_DESIGN.image8.width}`} 
                height={`${VISUAL_DESIGN.image8.height}`}
                layout="intrinsic" 
                />
            </Box>
            
            <Box border={8} borderColor="secondary.main">
              <Typography color="textPrimary" align="center" variant="body1" className={classes.visualDesign4text} >
                {VISUAL_DESIGN.text7}
              </Typography>
            </Box>

            <Box className={classes.visualDesign4img}>
              <Image
                src={`${VISUAL_DESIGN.image9.imagesrc}`}   
                width={`${VISUAL_DESIGN.image9.width}`} 
                height={`${VISUAL_DESIGN.image9.height}`}
                layout="intrinsic" 
              />
            </Box>          
          </Box>
        </Box>
      </Box>

      <Box>
        <CaseStudyDivider title={"Conclusion"}/>
        <Box className={classes.conclusion}>
          <Box className={classes.conclusionbox}>
            <Typography color="textPrimary" align="left" variant="body1" className={classes.conclusiontext} >
              {CONCLUSION.text1}
            </Typography>
            <Typography color="textPrimary" align="left" variant="body1" className={classes.conclusiontext} >
              {CONCLUSION.text2}
            </Typography>
            <Typography color="textPrimary" align="left" variant="body1" className={classes.conclusiontext} >
              {CONCLUSION.text3}
            </Typography>
          </Box>
        </Box>
        
        {Divider("What I Learned")}

        <Box className={classes.conclusion}>
          <Box className={classes.conclusionbox} >
            <Box className={classes.conclusiontext} > 
              <Typography color="textPrimary" align="left" variant="body1" >
                {CONCLUSION.text4}
              </Typography>
            </Box>
            <Box className={classes.conclusiontext}>
              <Typography color="textPrimary" align="left" variant="body1" >
                {CONCLUSION.text5}
              </Typography>
            </Box>
            <Box className={classes.conclusiontext}>
              <Typography color="textPrimary" align="left" variant="body1" >
                {CONCLUSION.text6}
              </Typography>
            </Box>
          </Box>
          </Box>
          
    
        <Box className={classes.conclusion}>
          <Typography align="left" variant="h2" color="secondary">
            Thanks for stopping by.
          </Typography>
        </Box>

      </Box>

      <CaseStudyFooterBar 
        cardImage={FOOTER_CARD.image.imagesrc} 
        cardImageHeight={FOOTER_CARD.image.height}
        cardImageWidth={FOOTER_CARD.image.width}
        cardTitle={FOOTER_CARD.title}
        pageLink={FOOTER_CARD.casestudypage}
        />

      </Box>
      
    </ThemeProvider>
  )
}

export default BottomsUpPage