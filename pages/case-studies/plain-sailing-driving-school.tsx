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
import {THEME,TITLE,ROLL_INFO,TOOLS_USED,TOOL_ICONS,TOOL_INCON_WIDTH,
  INTO_PARA,RESEARCH, RESEARCH_FINDINGS, IDEATION, WIREFRAMES, 
  WIREFRAME_LINK, VISUAL_DESIGN, CONCLUSION, FOOTER_CARD } from './psds-data';
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
      alignItems: "center",

    },
    dividermiddle:{
      borderBottom: "3px solid #87ABA9", 
      width: "50%",

    },
    divideinners:{
      padding: "0 10px 0 10px",

    },
    dividerbottom:{
      borderBottom: "3px solid #87ABA9", 
      width: "100%",

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
      padding:"5vw",
      [theme.breakpoints.down('sm')]: {
        maxWidth: '90vw',
        padding:"10vw",
      },
    },
    
    intropara:{
      alignSelf:"center",
      padding:" 2rem 0 1rem 0",
      [theme.breakpoints.down('sm')]: {
        maxWidth:"90vw",
      },
    },
    introtitle:{
      [theme.breakpoints.down('sm')]: {
        fontSize:"2rem",
      },
      
    },
    lists:{
      flexGrow:1,
    },
    listSubHeader:{
      fontSize:"2.75rem", 
      fontStyle:"italic",
      color:"#E17200",
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
    researchtext:{
      maxWidth:'75vw',
      margin: '2vw 0 0 0 ',
      padding: '2vw',
      [theme.breakpoints.down('sm')]: {
        maxWidth:'90vw',
        margin: '0 ',
        padding: '0',
        zIndex:2,
      },
    },
    researchmain:{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent:'center',
      padding:'3rem',
      [theme.breakpoints.down('sm')]: {
        margin: '0 ',
        padding: '1rem',
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
    ideationmain:{
      display: 'flex',
      flexFlow: 'column nowrap',
    },
    ideationtext:{
      maxWidth:'75vw',
      margin: '5vw 0 5vw 0 ',
      padding: '2vw',
      alignSelf:"center",

    },
    ideation3pics:{
      display:"flex",
      flexFlow:"row wrap",
      justifyContent:"center",
      [theme.breakpoints.down('sm')]: {
        flexFlow:"column nowrap",
        margin:"2vw 10vw 2vw 10vw",
      },
    },
    ideationpics:{
      padding: "2vw 0 2vw 0",
      

      
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
    wireframeitems:{
      display:"flex",
      alignSelf: "center",
      justifyContent:"center",
      margin:' 5vw 20vw 5vw 20vw',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column nowrap',
        alignItems:"center",
        width: '90vw',
        margin:'1em 0 1em 0',
      },
    },
    wireframetext:{
      margin:"0 3vw 0 3vw",
    },
    visualDesignMain:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      margin:'5vw',
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
      maxWidth: "75vw",
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
        margin: "2.5em",
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

const PSDSPage: React.FC<Props>= (props: Props) => {

  
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
        <div className={classes.dividerbottom}  />
      </div> 
    )
  }

  function navigateToRoute(navRoutes: NavRoutes) {
    console.log(`navigate to navRoute ${navRoutes}`)
  }

  
  return (
    <ThemeProvider theme={THEME}>

      {/* title img */}
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
          src={`${TITLE.titleimg}`}
          width={1920}
          height={614}
          layout="responsive"
          
        /> 
        

          {/* Intro */}
        <Box className={classes.intro}>
          <Box className={classes.introbody}>
            <Typography 
              className={classes.introtitle} 
              color ="secondary" 
              variant="h4" 
              align="left" 
              style={{fontWeight:"bold"}} >
                {TITLE.title}
            </Typography>

            <Typography 
              className={classes.intropara} 
              color="textPrimary" 
              variant="body1" 
              align="left" >
                {INTO_PARA}
            </Typography>
          </Box>

          <Box className={classes.lists}>

            <List >
              <div className={classes.dividerouter}>
                <div className={classes.dividermiddle} />
                  <span className={classes.divideinners}>
                  <ListSubheader 
                    disableSticky={true}  
                    className={classes.listSubHeader}
                  >
                    Role
                  </ListSubheader>
                  </span>
                <div className={classes.dividerbottom} />
              </div> 
              {ROLL_INFO.map((info, index)=>(
                <ListItem 
                  className={classes.listItem} 
                  alignItems="center" 
                  key={`roll-key-${index}`}
                >
                  <ListItemIcon>
                    <Image
                      src="/assets/images/psds/web_bullet_points_blue@2x.png"
                      width="32"
                      height="44"
                    />
                  </ListItemIcon>
                  <ListItemText 
                    primary={info} 
                    primaryTypographyProps={{color:"textPrimary" }} 
                  />
                </ListItem>))}
            </List>
            
            <List>
              <div className={classes.dividerouter}>
                <div className={classes.dividermiddle} />
                  <span className={classes.divideinners} >
                    <ListSubheader 
                      disableSticky={true} 
                      className={classes.listSubHeader} 
                    >
                      Tools
                    </ListSubheader>
                  </span>
                <div className={classes.dividerbottom}  />
              </div>
              {TOOLS_USED.map((info, index)=>(
                <ListItem className={classes.listItem} alignItems="center"  key={`tools-key-${index}`}>
                  <ListItemIcon>
                    <Image
                        src="/assets/images/psds/web_bullet_points_blue@2x.png"
                        width="32"
                        height="44"
                      />
                  </ListItemIcon>
                    <ListItemText primary={info} primaryTypographyProps={{color:"textPrimary" }} />
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

        
        {/* Research section */}

        <Box>
          <CaseStudyDivider title={"Research"}/>

          <Box className={classes.researchmain} >
            <Box className={classes.researchtext}>
              <Typography align="left" color="textPrimary" variant="body1" > 
                {RESEARCH.intro}
              </Typography>
            </Box>
            <Box className={classes.researchmain}>
              <Image
                src={`${RESEARCH.image1.imagesrc}`}
                width={`${RESEARCH.image1.width}`} 
                height={`${RESEARCH.image1.height}`} 
                layout="intrinsic"  
                />
            </Box>
            <Box className={classes.researchmain} >
              <Box className={classes.researchtext}>
                <Typography color="textPrimary" align="left" variant="body1" >
                  {RESEARCH.text1}
                </Typography>
              </Box>
              <Box className={classes.researchmain}>
                <Image
                  src={`${RESEARCH.image2.imagesrc}`} 
                  layout="intrinsic"    
                  width={`${RESEARCH.image2.width}`} 
                  height={`${RESEARCH.image2.height}`} 
                />
              </Box>
              <Box className={classes.researchmain}>
                <Image
                  src={`${RESEARCH.image3.imagesrc}`} 
                  layout="intrinsic"    
                  width={`${RESEARCH.image3.width}`} 
                  height={`${RESEARCH.image3.height}`} 
                />
              </Box>  
            </Box>
          </Box>

          <Box>
            {Divider("Research Findings")}
          </Box>

          <Box className={classes.findings} >
            <div className={classes.f1a}>
              <BulletNumbers number={1} color={'#E17200'} />
            </div>
            <div className={classes.f1b}>
              <BulletNumbers number={2} color={'#E17200'} />
            </div> 
            <div className={classes.f1c}>
              <BulletNumbers number={3} color={'#E17200'} /> 
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

                {/* ideation */}
        
        
        <Box>
          <CaseStudyDivider title={"Ideation"}/>
          <Box className={classes.ideationmain}>
            <Box className={classes.ideationtext} >
              <Typography color="textPrimary" align="left" variant="body1">
                {IDEATION.text1}
              </Typography>
            </Box>
            <Image
              layout="intrinsic"  
              src={`${IDEATION.image1.imagesrc}`}   
              width={`${IDEATION.image1.width}`} 
              height={`${IDEATION.image1.height}`} 
              />
            <Box className={classes.ideationtext}>
              <Typography color="textPrimary" align="left" variant="body1" >
                {IDEATION.text2}
              </Typography>
            </Box>
            <Box className={classes.ideation3pics}>
              <Box className={classes.ideationpics} >
                <Image  
                  layout="intrinsic"  
                  src={`${IDEATION.image2.imagesrc}`}   
                  width={`${IDEATION.image2.width}`} 
                  height={`${IDEATION.image2.height}`} 
                />
              </Box>
              <Box className={classes.ideationpics}>
                <Image  
                  layout="intrinsic"  
                  src={`${IDEATION.image3.imagesrc}`}   
                  width={`${IDEATION.image3.width}`} 
                  height={`${IDEATION.image3.height}`} 
                />
              </Box>
            </Box>
            <Box className={classes.ideation3pics} >
              <Image  
                layout="intrinsic"  
                src={`${IDEATION.image4.imagesrc}`}   
                width={`${IDEATION.image4.width}`} 
                height={`${IDEATION.image4.height}`} 
              />
            </Box>        
          </Box>
        </Box>
          
                {/* wireframe */}
        <Box>
          <CaseStudyDivider title={"Wireframes"}/>

          <Box className={classes.wireframesMain} >

            <Box className={classes.wireframeitems}>
                <Typography color="textPrimary" align="left" variant="body1">
                  {WIREFRAMES.text1}
                </Typography>
            </Box>

            <Box alignSelf="center" >
              {SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH ? (
                <Image
                src={`${WIREFRAMES.image2.imagesrc}`}
                layout="intrinsic"     
                width={`${WIREFRAMES.image2.width}`} 
                height={`${WIREFRAMES.image2.height}`} 
                />

              ):(
                <Image
                  src={`${WIREFRAMES.image1.imagesrc}`}
                  layout="intrinsic"     
                  width={`${WIREFRAMES.image1.width}`} 
                  height={`${WIREFRAMES.image1.height}`} 
                  />

              )}
              
            </Box>
            
          </Box>

          {Divider("Test and Iterate")}

          <Box className={classes.wireframesMain} >

            <Box  className={classes.wireframes1} >
              <Box className={classes.wireframeitems} >
                <Typography color="textPrimary" align="left" variant="body1">
                  {WIREFRAMES.text2}
                </Typography>
              </Box>
            </Box>

            <Box  className={classes.wireframeitems}>
              <Box>
                <Typography color="secondary" align="left" variant="h3" >
                  {WIREFRAMES.heading1}
                </Typography>
              </Box>
              <Box className={classes.wireframetext}>
                <Typography color="textPrimary" align="left" variant="body1" >
                  {WIREFRAMES.text3}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.wireframeitems} >
              <Box >
                <Typography color="secondary" align="left" variant="h3" >
                  {WIREFRAMES.heading2}
                </Typography>
              </Box>
              <Box className={classes.wireframetext} >
                <Typography color="textPrimary" align="left" variant="body1" >
                  {WIREFRAMES.text4}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

      <Box >
        <CaseStudyDivider title={"Visual Design"}/>

        <Box className={classes.visualDesignMain} >

          <Box className={classes.visualDesign3}>
            
            <Box className={classes.visualDesignsub3}>
              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image1.imagesrc}`}   
                width={`${VISUAL_DESIGN.image1.width}`} 
                height={`${VISUAL_DESIGN.image1.height}`} 
                layout="intrinsic"
              />

              <Typography 
                color="textPrimary"
                align="left" 
                variant="body1" 
                className={classes.visualDesigncomponents}>
                {VISUAL_DESIGN.text2}
              </Typography>

              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image3.imagesrc}`}   
                width={`${VISUAL_DESIGN.image3.width}`} 
                height={`${VISUAL_DESIGN.image3.height}`} 
                layout="intrinsic"
              />

              <Typography 
                color="textPrimary"
                align="left" 
                variant="body1" 
                className={classes.visualDesigncomponents}>
                {VISUAL_DESIGN.text4}
              </Typography>

            </Box>

            <Box className={classes.visualDesignsub3}>
              

              <Typography 
                color="textPrimary"
                align="left" 
                variant="body1" 
                className={classes.visualDesigncomponents}>
                {VISUAL_DESIGN.text1}
              </Typography>

              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image2.imagesrc}`}   
                width={`${VISUAL_DESIGN.image2.width}`} 
                height={`${VISUAL_DESIGN.image2.height}`} 
                layout="intrinsic"
              />

              <Typography 
                color="textPrimary"
                align="left" 
                variant="body1" 
                className={classes.visualDesigncomponents}>
                {VISUAL_DESIGN.text3}
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

        {Divider("Desktop")}
          
        <Box className={classes.visualDesignMain} >  
          <Box className={classes.visualDesign4}>
            <Box className={classes.visualDesigncomponents}>
              <Typography color="textPrimary" align="left" variant="body1" >
                {VISUAL_DESIGN.text5}
              </Typography>
            </Box>

            

            <Box className={classes.visualDesign3} >
              <Box className={classes.visualDesignMain}>
                <Image
                  className={classes.visualDesigncomponents}
                  src={`${VISUAL_DESIGN.image5.imagesrc}`}   
                  width={`${VISUAL_DESIGN.image5.width}`} 
                  height={`${VISUAL_DESIGN.image5.height}`}
                  layout="intrinsic" 
                />
                <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image7.imagesrc}`}   
                width={`${VISUAL_DESIGN.image7.width}`} 
                height={`${VISUAL_DESIGN.image7.height}`}
                layout="intrinsic" 
                />
              </Box>
              
              <Box className={classes.visualDesignMain}>
                <Image
                  className={classes.visualDesigncomponents}
                  src={`${VISUAL_DESIGN.image6.imagesrc}`}   
                  width={`${VISUAL_DESIGN.image6.width}`} 
                  height={`${VISUAL_DESIGN.image6.height}`}
                  layout="intrinsic" 
                />
                
                <Image
                  className={classes.visualDesigncomponents}
                  src={`${VISUAL_DESIGN.image8.imagesrc}`}   
                  width={`${VISUAL_DESIGN.image8.width}`} 
                  height={`${VISUAL_DESIGN.image8.height}`}
                  layout="intrinsic" 
                />
              </Box>
            </Box>    
          </Box>
        </Box>
      </Box>

      <Box>
        <CaseStudyDivider title={"Conclusion"}/>
        <Box className={classes.conclusion}>
        <Box className={classes.conclusionbox} >
            <Box className={classes.conclusiontext}>
              <Typography color="textPrimary" align="left" variant="body1" >
                {CONCLUSION.text1}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {Divider("What I Learned")}

        <Box className={classes.conclusion}>
          <Box className={classes.conclusionbox} >
            <Box className={classes.conclusiontext} > 
              <Typography color="textPrimary" align="left" variant="body1" >
                {CONCLUSION.text2}
              </Typography>
            </Box>
          </Box>
          </Box>

          {Divider("Next Steps")}

          <Box className={classes.conclusion}>
            <Box className={classes.conclusionbox} >
              <Box className={classes.conclusiontext} > 
                <Typography color="textPrimary" align="left" variant="body1" >
                  {CONCLUSION.text3}
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

export default PSDSPage