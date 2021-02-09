import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { generalStrings } from '../public/assets/strings/general'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
)

interface Props {}

interface IState {
  name: string
  email: string
  message: string
}

const ContactPage: React.FC<Props> = ({}) => {
  const [state, setState] = useState<IState>({
    name: '',
    email: '',
    message: '',
  })
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography variant="h5">
            {generalStrings.contactPageHeader}
          </Typography>
          <Typography variant="body2">{generalStrings.nameString}</Typography>
          <Typography variant="body2">{generalStrings.email}</Typography>
          <Typography variant="body2">{generalStrings.message}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactPage
