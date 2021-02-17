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
import {THEME,TITLE,ROLL_INFO,TOOLS_USED,TOOL_ICONS,TOOL_INCON_WIDTH,INTO_PARA,THE_CHALLANGE, RESEARCH_FINDINGS, IDEATION, WIREFRAMES, WIREFRAME_LINK, VISUAL_DESIGN, CONCLUSION, FOOTER_CARD } from './bottoms-up-data';
import {MIN_LANDSCAPE_MOBILE_WIDTH, SCREEN_WIDTH} from '../../utils/constants/dimens'
import CaseStudyDivider from '../../components/CaseStudyDivider/CaseStudyDivider';
import BulletNumbers from '../../components/bulletnumbers/BulletNumbers'
import Image from 'next/image'
import MobileNavBar from '../../components/mobileNavBar/MobileNavBar';
import { NavRoutes } from '../../utils/constants/navRoutes';
import CaseStudyFooterBar from '../../components/caseStudyFooterBar/CaseStudyFooterBar';



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
      width: "50%"

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
      padding:"15vw",
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
      paddingLeft: '5vw',
      paddingRight: '1vw',
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
      margin: '2vw 0 2vw 0'
    },
    challangeintro:{
      maxWidth:'50vw',
      margin: '2vw 0 0 0 ',
      padding: '2vw',

    },
    challangemain:{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent:'center',
    },
    challangemaincontent:{
      maxWidth: '50vw',
      margin: '2vw',
    },
    wireframesMain:{
      display:'flex',
      flexFlow: 'column nowrap',
      justifyContent:'center',
      alignItems: 'center',
      margin:'5em 0 5em 0',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column nowrap',
        margin:'2.5em 0 2.5em 0',
      },
      
    },
    wireframes1:{
      display:'flex',
      flexFlow: 'column nowrap',
      margin:'5em 0 5em 0',
      [theme.breakpoints.down('sm')]: {
        margin:'2.5em 0 2.5em 0',
      },
    },
    wireframes2:{
      display:'flex',
      flexFlow: 'row nowrap',
      justifyContent:'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column nowrap',
      },
      
    },
    wireframes3:{
      display:'flex',
      flexFlow: 'column nowrap'
    },
    wireframes4:{
      display:"grid",
      gridTemplateColumns: "auto auto",
      gridTemplateRows:"auto auto auto auto auto",
      [theme.breakpoints.down('sm')]: {
        margin:'2.5em 0 2.5em 0',
      },
    },
    wireframearrowitem1:{
      gridColumn:"1/ span 2",
      gridRow:"1/ span 3",
      alignSelf:"end",

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
    wireframeitems:{
      display:"flex",
      alignSelf: "center",
      justifyContent:"center",
      width: '30vw',
      margin:'5em 0 5em 0',
      [theme.breakpoints.down('sm')]: {
        width: '90vw',
        margin:'2.5em 0 2.5em 0',
      },
    },
    visualDesignMain:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      margin:'5em 0 5em 0',
    },
    visualDesign2:{
      display:"grid",
      gridTemplateColumns: "50% 50%",
      gridTemplateRows:"auto",
      [theme.breakpoints.down('sm')]: {
        flexFlow:"row nowrap",
      },
      
    },
    visualDesign3:{
      display:"flex",
      flexFlow:"row nowrap",
      justifyContent:'space-evenly',
      alignItems: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        flexFlow:"row wrap",
        margin: "1em 0 3em 0",
      },
      
    },
    visualDesignsub3:{
      margin: "2em",
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'space-evenly',
      alignItems: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        margin: "1em 0 0 0",
      },
    },
    visualDesigncomponents:{
      margin:"3em 0 3em 0",
      maxWidth: "616px",
      [theme.breakpoints.down('sm')]: {
        margin:"1em 0 1em 0",
      },
    },
    visualDesign4:{
      margin:"3em 0 3em 0",
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexFlow:"column wrap",
        margin: "1em 0 3em 0",
      },
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
      maxWidth: "1217px",
      alignSelf:'center',
    },
    conclusiontext:{
      padding:"3em 0 3em 0",
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
        <Box>
          {SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH ? (
            <MobileNavBar
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}/>
          ):(
            <AppBar elevation={0} position="absolute" color="transparent">
              <Toolbar>
                <IconButton edge="start" color="inherit">
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

        </Box>
          
        <Box className={classes.intro}>
          <Box className={classes.introbody}>
            <Typography className={classes.intropara} variant="body1" align="left" >
                {INTO_PARA}
            </Typography>
          </Box>
          <Box className={classes.lists}>
            <List >
              <div className={classes.dividerouter}>
                <div className={classes.dividermiddle} />
                  <span className={classes.divideinners}>
                  <ListSubheader disableSticky={true}  className={classes.listSubHeader}>Roll</ListSubheader>
                  </span>
                <div style={{ borderBottom: "3px solid #305538", width: "100%"}} />
              </div> 
              
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
            </List>
            
            <List>
              <div className={classes.dividerouter}>
                <div className={classes.dividermiddle} />
                <span className={classes.divideinners} >
                  <ListSubheader disableSticky={true} className={classes.listSubHeader} >Tools</ListSubheader>
                </span>
                <div style={{ borderBottom: "3px solid #305538", width: "100%"}} />
              </div>

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
              <Typography align="center" variant="body1" > 
              {THE_CHALLANGE.intro}
              </Typography>
            </Box>
            <Box p={3} m={3}>
              <Typography color="primary" align="center" variant="h1" style={{fontFamily:"Abril Fatface"}} >
                {THE_CHALLANGE.subheading}
              </Typography>
            </Box>
            
            <Box className={classes.challangemain} >
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {THE_CHALLANGE.text1}
              </Typography>
              <Image
                className={classes.challangemaincontent}
                src={`${THE_CHALLANGE.image1.imagesrc}`}
                layout="intrinsic"     
                width={`${THE_CHALLANGE.image1.width}`} 
                height={`${THE_CHALLANGE.image1.height}`} 
                />
              <Image
                className={classes.challangemaincontent}
                src={`${THE_CHALLANGE.image2.imagesrc}`} 
                layout="intrinsic"    
                width={`${THE_CHALLANGE.image2.width}`} 
                height={`${THE_CHALLANGE.image2.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {THE_CHALLANGE.text2}
              </Typography>
              <Image
              className={classes.challangemaincontent}
              src={`${THE_CHALLANGE.image3.imagesrc}`} 
              layout="intrinsic"    
              width={`${THE_CHALLANGE.image3.width}`} 
              height={`${THE_CHALLANGE.image3.height}`} 
              />
            </Box>
          </Box>

          <Box className={classes.challange}>
            <Box>
              {Divider("Research Findings")}
            </Box>
            

              <Box alignSelf="center">

              {RESEARCH_FINDINGS.map((info, index)=>(
                <List key={`${index}RF`}>
                  <ListItem >
                    <ListItemIcon>
                      <BulletNumbers number={index} />
                    </ListItemIcon>
                    <ListItemText primary={info} />
                  </ListItem>
                </List>
                ))}
              </Box>
          </Box>
        </Box>

        <Box>
          <CaseStudyDivider title={"Ideation"}/>

          <Box className={classes.challange} >
            
            <Box className={classes.challangemain} >
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {IDEATION.text1}
              </Typography>
              <Image
                className={classes.challangemaincontent}
                layout="intrinsic"  
                src={`${IDEATION.image1.imagesrc}`}   
                width={`${IDEATION.image1.width}`} 
                height={`${IDEATION.image1.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {IDEATION.text2}
              </Typography>
              <Image
                className={classes.challangemaincontent}
                layout="intrinsic"  
                src={`${IDEATION.image2.imagesrc}`}   
                width={`${IDEATION.image2.width}`} 
                height={`${IDEATION.image2.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {IDEATION.text3}
              </Typography>
              <Image
              className={classes.challangemaincontent}
              src={`${IDEATION.image3.imagesrc}`} 
              layout="intrinsic"    
              width={`${IDEATION.image3.width}`} 
              height={`${IDEATION.image3.height}`} 
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <CaseStudyDivider title={"Wireframes"}/>

          <Box className={classes.wireframesMain} >

            <Box alignSelf="center" className={classes.wireframeitems}>
              <Image
                  src={`${WIREFRAMES.image1.imagesrc}`}
                  layout="intrinsic"     
                  width={`${WIREFRAMES.image1.width}`} 
                  height={`${WIREFRAMES.image1.height}`} 
                  />
            </Box>
            <Box className={classes.wireframeitems}>
                <Typography  align="center" variant="body1">
                  {WIREFRAMES.text1}
                </Typography>
            </Box>

            <Box className={classes.wireframeitems}>
              <Button 
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
          </Box>

          {Divider("Test and Iterate Again")}

          <Box className={classes.wireframesMain} >
            <Box  className={classes.wireframes1} >

              <Box  className={classes.wireframes2} >
                <Image
                  
                  src={`${WIREFRAMES.image2.imagesrc}`} 
                  layout="intrinsic"  
                  width={`${WIREFRAMES.image2.width}`} 
                  height={`${WIREFRAMES.image2.height}`} 
                  />
                <Box className={classes.wireframeitems} >
                  <Typography align="center" variant="body1">
                    {WIREFRAMES.text2}
                  </Typography>
                </Box>
                

              </Box>


              <Box  className={classes.wireframes2}>
                <Box className={classes.wireframeitems}>
                  <Typography align="center" variant="body1" >
                    {WIREFRAMES.text3}
                  </Typography>
                </Box>
                
                <Image
                className={classes.wireframeitems}
                  src={`${WIREFRAMES.image3.imagesrc}`}
                  layout="intrinsic"     
                  width={`${WIREFRAMES.image3.width}`} 
                  height={`${WIREFRAMES.image3.height}`} 
                  />
              </Box>
              
            </Box>

            <Box alignSelf="center" className={classes.wireframes3} >
              <Box className={classes.wireframeitems}>
                <Typography align="center" variant="body1" >
                  {WIREFRAMES.text4}
                </Typography>
              </Box>
              
            </Box>

            <Box className={classes.wireframes4}>
              <Box className={classes.wireframearrowitem1}>
                <Image
                src={`${WIREFRAMES.image4.imagesrc}`}   
                width={`${WIREFRAMES.image4.width}`} 
                height={`${WIREFRAMES.image4.height}`}
                layout="intrinsic" 
                />
              </Box>
              
              <Box className={classes.wireframearrowitem2} >
                <Typography align="left" variant="body1"  >
                  {WIREFRAMES.text5}
                </Typography>
              </Box>
              <Box className={classes.wireframearrowitem3}>
                <Typography align="left" variant="body1" >
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
            <Box p={1} justifySelf="start" alignSelf="start">
              <Image
                src={`${VISUAL_DESIGN.image1.imagesrc}`}   
                width={`${VISUAL_DESIGN.image1.width}`} 
                height={`${VISUAL_DESIGN.image1.height}`}
                layout="intrinsic" 
                />
            </Box>
            <Box p={1} justifySelf="end" alignSelf="end" >
              <Box >
                <Button 
                  variant="contained" 
                  color="secondary" 
                  href={WIREFRAME_LINK}
                  fullWidth={true}
                  size="large"
                  style={{
                    margin: "0 0 1em 0",
                    whiteSpace: "nowrap",
                    borderRadius:"3.5rem",
                    boxShadow:"0 3px 6px #00000029",
                    textTransform: "capitalize"
                    }} 
                  >
                  View Prototype
                </Button>
              </Box>
              <Image
              src={`${VISUAL_DESIGN.image2.imagesrc}`}   
              width={`${VISUAL_DESIGN.image2.width}`} 
              height={`${VISUAL_DESIGN.image2.height}`} 
              layout="intrinsic"
              />

            </Box>
          </Box>

          <Box className={classes.visualDesign3}>
            
            <Box className={classes.visualDesignsub3}>
              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image3.imagesrc}`}   
                width={`${VISUAL_DESIGN.image3.width}`} 
                height={`${VISUAL_DESIGN.image3.height}`} 
                layout="intrinsic"
                />

              <Typography 
                align="left" 
                variant="body1"
                className={classes.visualDesigncomponents} >
              {VISUAL_DESIGN.text2}
              </Typography>

              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image5.imagesrc}`}   
                width={`${VISUAL_DESIGN.image5.width}`} 
                height={`${VISUAL_DESIGN.image5.height}`}
                layout="intrinsic" 
                />

            </Box>

            <Box className={classes.visualDesignsub3}>
              
              <Typography 
                align="left" 
                variant="body1" 
                className={classes.visualDesigncomponents}>
                {VISUAL_DESIGN.text1}
              </Typography>
              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image4.imagesrc}`}   
                width={`${VISUAL_DESIGN.image4.width}`} 
                height={`${VISUAL_DESIGN.image4.height}`}
                layout="intrinsic" 
              />
            </Box> 
          </Box>
        </Box>

        {Divider("Test and Iterate Again")}
          
        <Box className={classes.visualDesignMain} >  
          <Box className={classes.visualDesign4}>
            <Box className={classes.visualDesigncomponents}>
              <Typography align="left" variant="body1" >
                {VISUAL_DESIGN.text3}
              </Typography>
            </Box>

            <Box className={classes.visualDesigncomponents}>
              <Typography align="left" variant="body1" >
                {VISUAL_DESIGN.text4}
              </Typography>
            </Box>

            <Box className={classes.visualDesigncomponents} >
              <Typography align="center" variant="h4" color="secondary">
                {VISUAL_DESIGN.text5}
              </Typography>
            </Box>

            <Box >
              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image6.imagesrc}`}   
                width={`${VISUAL_DESIGN.image6.width}`} 
                height={`${VISUAL_DESIGN.image6.height}`}
                layout="intrinsic" 
                />
            </Box>

            <Box
              className={classes.visualDesigncomponents}
              border={8} 
              borderColor="secondary.main"
              >
              <Typography align="center" variant="body1" >
                {VISUAL_DESIGN.text6}
              </Typography>
            </Box>

            <Box className={classes.visualDesigncomponents}>
              <Image
                src={`${VISUAL_DESIGN.image7.imagesrc}`}   
                width={`${VISUAL_DESIGN.image7.width}`} 
                height={`${VISUAL_DESIGN.image7.height}`}
                layout="intrinsic" 
                />
            </Box>

            <Box className={classes.visualDesigncomponents}>
              <Image
                src={`${VISUAL_DESIGN.image8.imagesrc}`}   
                width={`${VISUAL_DESIGN.image8.width}`} 
                height={`${VISUAL_DESIGN.image8.height}`}
                layout="intrinsic" 
                />
            </Box>
            
            <Box
              className={classes.visualDesigncomponents}
              border={8} 
              borderColor="secondary.main"
              >
              <Typography align="center" variant="body1" >
                {VISUAL_DESIGN.text7}
              </Typography>
            </Box>

            <Box>
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
          <Box className={classes.conclusiontext}>
            <Typography align="left" variant="body1" >
              {CONCLUSION.text1}
            </Typography>
          </Box>
          <Box className={classes.conclusiontext}>
            <Typography align="left" variant="body1" >
              {CONCLUSION.text2}
            </Typography>
          </Box>
          <Box className={classes.conclusiontext}>
            <Typography align="left" variant="body1" >
              {CONCLUSION.text3}
            </Typography>
          </Box>
        </Box>
        
        {Divider("What I Learned")}

        <Box className={classes.conclusion}>
          <Box className={classes.conclusionbox} >
            <Box className={classes.conclusiontext} > 
              <Typography align="left" variant="body1" >
                {CONCLUSION.text4}
              </Typography>
            </Box>
            <Box className={classes.conclusiontext}>
              <Typography align="left" variant="body1" >
                {CONCLUSION.text5}
              </Typography>
            </Box>
            <Box className={classes.conclusiontext}>
              <Typography align="left" variant="body1" >
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
        />

      </Box>
      
    </ThemeProvider>
  )
}

export default BottomsUpPage