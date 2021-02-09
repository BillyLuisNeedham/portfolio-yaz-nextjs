import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Grid, TextField, Typography } from '@material-ui/core'
import { generalStrings } from '../public/assets/strings/general'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      width: '90%',
      margin: theme.spacing(1),
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} direction="column">
        <Grid item>
          <Typography variant="h5">
            {generalStrings.contactPageHeader}
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            label={generalStrings.nameString}
            name="name"
            variant="outlined"
            onChange={handleInputChange}
            value={state.name}
            fullWidth
          />
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            label={generalStrings.email}
            name="email"
            variant="outlined"
            onChange={handleInputChange}
            value={state.email}
          />
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            label={generalStrings.message}
            name="message"
            variant="outlined"
            onChange={handleInputChange}
            value={state.message}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactPage
