import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
        display:'flex',
        flexFlow:'column wrap',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:'50%',
        border:'5px solid #305538',
        opacity:0.2,
        width:'10vw',
        height:'10vw',
        margin:'1vw'
    },
    number:{
        fontSize:'5vw'
    },
  })
)


interface BulletNumbersProps {
    number: number
  }

const BulletNumbers: React.FC<BulletNumbersProps> = ({number}) => {
    const classes = useStyles()

    return(
        <div className={classes.box}>
                <p className={classes.number}>
                    {number + 1}
                </p>
            
        </div>
    )
}

export default BulletNumbers