import React from 'react'
import { Theme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from'@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {THEME,TITLE,ROLL_INFO,TOOLS_USED,TOOL_ICONS,TOOL_INCON_WIDTH,INTO_PARA,THE_CHALLANGE, RESEARCH_FINDINGS, IDEATION, WIREFRAMES } from './bottoms-up-data';
import {MIN_LANDSCAPE_MOBILE_WIDTH} from '../../utils/constants/dimens'
import CaseStudyDivider from '../../components/CaseStudyDivider/CaseStudyDivider';
import BulletNumbers from '../../components/bulletnumbers/BulletNumbers'
import Image from 'next/image'



const useStyles = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      flexGrow: 1,
    },
    title:{
      flexGrow: 1,
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
      
      
    }
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
        <Box className={classes.intro}>
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
          <Box className={classes.challange} >
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
                width={`${THE_CHALLANGE.image1.width}`} 
                height={`${THE_CHALLANGE.image1.height}`} 
                />
              <Image
                className={classes.challangemaincontent}
                src={`${THE_CHALLANGE.image2.imagesrc}`}   
                width={`${THE_CHALLANGE.image2.width}`} 
                height={`${THE_CHALLANGE.image2.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {THE_CHALLANGE.text2}
              </Typography>
              <Image
              className={classes.challangemaincontent}
              src={`${THE_CHALLANGE.image3.imagesrc}`}   
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

          <Box className={classes.challange} >
            
            <Box className={classes.challangemain} >
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {IDEATION.text1}
              </Typography>
              <Image
                className={classes.challangemaincontent}
                src={`${IDEATION.image1.imagesrc}`}   
                width={`${IDEATION.image1.width}`} 
                height={`${IDEATION.image1.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {IDEATION.text2}
              </Typography>
              <Image
                className={classes.challangemaincontent}
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
              width={`${IDEATION.image3.width}`} 
              height={`${IDEATION.image3.height}`} 
              />
            </Box>
          </Box>
        </div>

        <div>
          <CaseStudyDivider title={"Wireframes"}/>

          <Box className={classes.challange} >
            
            <Box className={classes.challangemain} >
            <Image
                className={classes.challangemaincontent}
                src={`${WIREFRAMES.image1.imagesrc}`}   
                width={`${WIREFRAMES.image1.width}`} 
                height={`${WIREFRAMES.image1.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {WIREFRAMES.text1}
              </Typography>
            <Image
                className={classes.challangemaincontent}
                src={`${WIREFRAMES.image2.imagesrc}`}   
                width={`${WIREFRAMES.image2.width}`} 
                height={`${WIREFRAMES.image2.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {WIREFRAMES.text2}
              </Typography>
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {WIREFRAMES.text3}
              </Typography>
              <Image
                className={classes.challangemaincontent}
                src={`${WIREFRAMES.image3.imagesrc}`}   
                width={`${WIREFRAMES.image3.width}`} 
                height={`${WIREFRAMES.image3.height}`} 
                />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {WIREFRAMES.text4}
              </Typography>
              <Image
              className={classes.challangemaincontent}
              src={`${WIREFRAMES.image4.imagesrc}`}   
              width={`${WIREFRAMES.image4.width}`} 
              height={`${WIREFRAMES.image4.height}`} 
              />
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {WIREFRAMES.text5}
              </Typography>
              <Typography align="center" variant="body1" className={classes.challangemaincontent}>
                {WIREFRAMES.text6}
              </Typography>
            </Box>
          </Box>
        </div>
      

      </Box>
      
    </ThemeProvider>
  )
}

export default BottomsUpPage