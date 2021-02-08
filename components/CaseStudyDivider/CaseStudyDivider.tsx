import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
      height: '100px',
    },
    conatiner: { 
      // TODO write out
    },
    title: {
      color: theme.palette.background.default,
    },
  })
)
interface Props {
  title: string
}

const CaseStudyDivider: React.FC<Props> = ({ title }) => {
  const classes = useStyles()

  return (
    <div data-testid="CaseStudyDivider" className={classes.root}>
      <Box className={classes.conatiner} >
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Box>
    </div>
  )
}

export default CaseStudyDivider
