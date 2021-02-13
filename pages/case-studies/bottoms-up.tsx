import React from 'react'
import { Theme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import {THEME,TITLE,ROLL_INFO,TOOLS_USED,TOOL_ICONS,TOOL_INCON_WIDTH,INTO_PARA,THE_CHALLANGE, RESEARCH_FINDINGS, IDEATION, WIREFRAMES, WIREFRAME_LINK, VISUAL_DESIGN, CONCLUSION } from './bottoms-up-data';
import {MIN_LANDSCAPE_MOBILE_WIDTH} from '../../utils/constants/dimens'
import CaseStudyDivider from '../../components/CaseStudyDivider/CaseStudyDivider';
import BulletNumbers from '../../components/bulletnumbers/BulletNumbers'
import Image from 'next/image'



const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      flexGrow: 0,
    },
    sections:{
      paddingLeft: "3em",
      paddingRight: "3em"
    },
    title:{
      flexGrow: 0,
    },
    intro:{
      margin: '2vw',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'row wrap',
      },
    },
    introbody:{
      margin: '5vw',
      flexGrow:1,
      maxWidth:'50vw',
      padding:'5vw',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100vw',
      },

    },
    intropara:{
      maxWidth:"537px",

    },
    lists:{
      flexGrow:1,
    },
    tooliconlist:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'flex-start',
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
      paddingBottom: '5em'
      
    },
    wireframes1:{
      display:'flex',
      flexFlow: 'column nowrap',
    },
    wireframes2:{
      display:'flex',
      flexFlow: 'row nowrap',
      justifyContent:'center',
      alignItems: 'center',
      
    },
    wireframes3:{
      display:'flex',
      flexFlow: 'column wrap'
    },
    wireframes4:{
      display:'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
    },
    visualDesignMain:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
    },
    visualDesign2:{
      marginTop:"5em",
      display:"flex",
      flexFlow:"row nowrap",
      justifyContent:'center',
      alignItems: 'center',
      
    },
    visualDesign3:{
      display:"flex",
      flexFlow:"row nowrap",
      justifyContent:'center',
      alignItems: 'center',
      
    },
    visualDesignsub3:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
    },
    visualDesigncomponents:{
      margin:"5em"
    },
    visualDesign4:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
    },
    conclusion:{
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:'center',
      alignItems: 'center',
      padding: "5em",
    },


  })
)

interface Props {}

const BottomsUpPage: React.FC<Props> = (props: Props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={THEME}>
      <Box className={classes.root}>
        <Box className={classes.title}>
          <Typography variant="h3" >
            {TITLE}
          </Typography>
        </Box>
        <Box className={clsx(classes.intro, classes.sections)}>
          <Box className={classes.introbody}>
          <Typography className={classes.intropara} variant="body1" align="center" >
                {INTO_PARA}
            </Typography>
          </Box>
          <Box className={classes.lists}>
          <List className={classes.root}>
            
          <ListSubheader disableSticky={true} >Roll</ListSubheader>
          {ROLL_INFO.map((info, index)=>(
            <ListItem key={`roll-key-${index}`}>
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
          <List className={classes.root}>

          <ListSubheader disableSticky={true}>Tools</ListSubheader>
          {TOOLS_USED.map((info, index)=>(
            <ListItem key={`tools-key-${index}`}>
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

        <div>
          <CaseStudyDivider title={"The Challenge"}/>
          <Box className={clsx(classes.challange, classes.sections)} >
            <Box alignSelf="center" className={classes.challangeintro}>
              <Typography align="center" variant="body1" > 
              {THE_CHALLANGE.intro}
              </Typography>
            </Box>
            <Box p={3} m={3}>
              <Typography align="center" variant="h1" >
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
            <Box p={3}>
              <Typography align="center" variant="h1">
                Research Findings
              </Typography>
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
        </div>

        <div>
          <CaseStudyDivider title={"Ideation"}/>

          <Box className={clsx(classes.challange, classes.sections)} >
            
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
        </div>

        <div >
          <CaseStudyDivider title={"Wireframes"}/>

          <Box className={clsx(classes.wireframesMain, classes.sections)} >

            <Box m={5} alignSelf="center">
              <Image
                  src={`${WIREFRAMES.image1.imagesrc}`}
                  layout="intrinsic"     
                  width={`${WIREFRAMES.image1.width}`} 
                  height={`${WIREFRAMES.image1.height}`} 
                  />

                <Typography align="center" variant="body1">
                  {WIREFRAMES.text1}
                </Typography>
            </Box>


            <Button 
              variant="contained" 
              color="secondary" 
              href={WIREFRAME_LINK}
              size="large"
              style={{
                borderRadius:"50px",
                boxShadow:"0 3px 6px #00000029",
                textTransform: "capitalize"
                }} 
              >
              View Prototype
               </Button>
            

              <Box m={5} className={classes.wireframes1} >

                <Box m={5}  className={classes.wireframes2} >
                  <Image
                    src={`${WIREFRAMES.image2.imagesrc}`} 
                    layout="intrinsic"  
                    width={`${WIREFRAMES.image2.width}`} 
                    height={`${WIREFRAMES.image2.height}`} 
                    />
                  <Box m={5} width="30vw">
                    <Typography align="center" variant="body1">
                      {WIREFRAMES.text2}
                    </Typography>
                  </Box>
                  

                </Box>


                <Box m={5}  className={classes.wireframes2}>
                  <Box m={5}  width={584}>
                    <Typography align="center" variant="body1" >
                      {WIREFRAMES.text3}
                    </Typography>
                  </Box>
                  
                  <Image
                    src={`${WIREFRAMES.image3.imagesrc}`}
                    layout="intrinsic"     
                    width={`${WIREFRAMES.image3.width}`} 
                    height={`${WIREFRAMES.image3.height}`} 
                    />
                </Box>
                
              </Box>

              <Box alignSelf="center" className={classes.wireframes3} >
                <Box m={5}>
                  <Typography align="center" variant="body1">
                    {WIREFRAMES.text4}
                  </Typography>
                </Box>
                <Image
                src={`${WIREFRAMES.image4.imagesrc}`}   
                width={`${WIREFRAMES.image4.width}`} 
                height={`${WIREFRAMES.image4.height}`}
                layout="intrinsic" 
                />
              </Box>

              <Box alignSelf="center" className={classes.wireframes4}>
                <Box pr={4}>
                  <Typography align="left" variant="body1" >
                    {WIREFRAMES.text5}
                  </Typography>
                </Box>
                <Box pl={10}>
                  <Typography align="center" variant="body1" >
                    {WIREFRAMES.text6}
                  </Typography>
                </Box>
              </Box>
          </Box>
        </div>

        <div>
        <CaseStudyDivider title={"Visual Design"}/>

        <Box className={clsx(classes.visualDesignMain, classes.sections)} >
          <Box className={classes.visualDesign2}> 
            <Box p={2} >
              <Image
                src={`${VISUAL_DESIGN.image1.imagesrc}`}   
                width={`${VISUAL_DESIGN.image1.width}`} 
                height={`${VISUAL_DESIGN.image1.height}`}
                layout="intrinsic" 
                />
            </Box>
            <Box p={10} mt={10}>
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
              {VISUAL_DESIGN.text1}
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
              <Image
                className={classes.visualDesigncomponents}
                src={`${VISUAL_DESIGN.image4.imagesrc}`}   
                width={`${VISUAL_DESIGN.image4.width}`} 
                height={`${VISUAL_DESIGN.image4.height}`}
                layout="intrinsic" 
                />
              <Typography 
                align="right" 
                variant="body1" 
                className={classes.visualDesigncomponents}>
                {VISUAL_DESIGN.text2}
              </Typography>
            </Box>
            
          </Box>

          <Box className={classes.visualDesigncomponents}>
            <Typography
              color="secondary" 
              align="right" 
              variant="h4" >
                Test and Iterate Again
            </Typography>
          </Box>
          
          <Box className={classes.visualDesign4}>
            <Box width="42vw" p={4}>
              <Typography align="left" variant="body1" >
                {VISUAL_DESIGN.text3}
              </Typography>
            </Box>

            <Box width="41vw" p={4}>
              <Typography align="left" variant="body1" >
                {VISUAL_DESIGN.text4}
              </Typography>
            </Box>

            <Box width="50vw" p={4}>
              <Typography align="center" variant="h4" color="secondary">
                {VISUAL_DESIGN.text5}
              </Typography>
            </Box>

            <Box>
              <Image
                src={`${VISUAL_DESIGN.image6.imagesrc}`}   
                width={`${VISUAL_DESIGN.image6.width}`} 
                height={`${VISUAL_DESIGN.image6.height}`}
                layout="intrinsic" 
                />
            </Box>

            <Box
              m="14vh"
              border={8} 
              borderColor="secondary.main"
              width="60vw">
              <Typography align="center" variant="body1" >
                {VISUAL_DESIGN.text6}
              </Typography>
            </Box>

            <Box p={4}>
              <Image
                src={`${VISUAL_DESIGN.image7.imagesrc}`}   
                width={`${VISUAL_DESIGN.image7.width}`} 
                height={`${VISUAL_DESIGN.image7.height}`}
                layout="intrinsic" 
                />
            </Box>

            <Box p={4}>
              <Image
                src={`${VISUAL_DESIGN.image8.imagesrc}`}   
                width={`${VISUAL_DESIGN.image8.width}`} 
                height={`${VISUAL_DESIGN.image8.height}`}
                layout="intrinsic" 
                />
            </Box>
            
            <Box
            m="14vh"
            border={8} 
            borderColor="secondary.main"
            width="60vw">
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
        </div>

        <div>
          <CaseStudyDivider title={"Conclusion"}/>
          <Box className={classes.conclusion}>
            <Box p={2} width="63vw">
              <Typography align="center" variant="body1" >
                {CONCLUSION.text1}
              </Typography>
            </Box>
            <Box p={2} width="63vw">
              <Typography align="left" variant="body1" >
                {CONCLUSION.text2}
              </Typography>
            </Box>
            <Box p={2} width="63vw">
              <Typography align="left" variant="body1" >
                {CONCLUSION.text3}
              </Typography>
            </Box>
          </Box>
          

          <Box p={2} width="63vw">
            <Typography align="left" variant="h5" color="secondary">
              What I Learned
            </Typography>
          </Box>

          <Box className={classes.conclusion}>
            <Box p={2} width="63vw"> 
              <Typography align="left" variant="body1" >
                {CONCLUSION.text4}
              </Typography>
            </Box>
            <Box p={2} width="63vw">
              <Typography align="left" variant="body1" >
                {CONCLUSION.text5}
              </Typography>
            </Box>
            <Box p={2} width="63vw">
              <Typography align="left" variant="body1" >
                {CONCLUSION.text6}
              </Typography>
            </Box>
          </Box>
      
          <Box p={2} width="63vw" className={classes.conclusion}>
            <Typography align="left" variant="h5" color="secondary">
              Thanks for stopping by.
            </Typography>
          </Box>

          </div>

      </Box>
      
    </ThemeProvider>
  )
}

export default BottomsUpPage