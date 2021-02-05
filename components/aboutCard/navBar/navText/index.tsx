import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '5px'
    },
    pinkLine: {
      height: '1px',
      width: '130px',
      backgroundColor: theme.palette.text.secondary,
    },
    pinkLineActive: {
      height: '2px',
    },
    activeText: {
      fontWeight: 'bold',
    },
  })
)

interface INavTextProps {
  text: string
  active: boolean
  onClickCallback: () => void
}



const NavText: React.FC<INavTextProps> = ({
  text,
  active,
  onClickCallback,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        className={active ? classes.activeText : null}
        onClick={onClickCallback}
      >
        {text}
      </Typography>
      <Divider
        className={`${classes.pinkLine} ${
          active ? classes.pinkLineActive : null
        }`}
      />
    </div>
  )
}

export default NavText
