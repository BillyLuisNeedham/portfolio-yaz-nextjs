import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Grid, TextField, Typography, withStyles } from '@material-ui/core'
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
      width: '70%',
      margin: theme.spacing(1),
      textAlign: 'center',
    },
  })
)

//TODO customize style to fit designs then replace current TextFields with custom one
const CustomTextField = withStyles({
  root: {
    '& label': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField)

interface Props {}

interface IState {
  name: string
  email: string
  message: string
}

//TODO if user presses send before all fields are filled in, display error fields
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
        <Grid item className={classes.item}>
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
            fullWidth
          />
        </Grid>
        <Grid item className={classes.item}>
          <CustomTextField
            label={generalStrings.message}
            name="message"
            variant="outlined"
            onChange={handleInputChange}
            value={state.message}
            fullWidth
            multiline
            rows={8}
          />
          <TextField
            label={generalStrings.message}
            name="message"
            variant="outlined"
            onChange={handleInputChange}
            value={state.message}
            fullWidth
            multiline
            rows={8}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactPage
