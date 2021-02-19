import React from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';




interface BulletNumbersProps {
    number: number
    color: string
  }

const BulletNumbers: React.FC<BulletNumbersProps> = ({number, color}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      box: {
          display:'flex',
          flexFlow:'column wrap',
          justifyContent: 'center',
          alignItems:'center',
          borderRadius:'50%',
          border:`5px solid ${color}`,
          opacity:0.2,
          width:'10vw',
          height:'10vw',
          margin:'1vw',
        [theme.breakpoints.down('sm')]: {
          width:'40vw',
          height:'40vw',
          fontWeight:"bolder",
        },
      },
      number:{
          color:`${color}`,
          fontSize:'5vw',
          fontFamily:"Raleway",
        [theme.breakpoints.down('sm')]: {
          fontSize:'20vw',
        },
      },
      
    })
  )
  const classes = useStyles()

    return(
        <div >
          <div className={classes.box}>
            <p className={classes.number}>
                {number}
            </p> 
          </div>
        </div>
        
    )
}

export default BulletNumbers