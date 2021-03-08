import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.primary.main,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      padding:"1em",
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
      <Box className={classes.container} >
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
      </Box>
    </div>
  )
}

export default CaseStudyDivider
