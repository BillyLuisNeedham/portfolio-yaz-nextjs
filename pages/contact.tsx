import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Link,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core'
import { generalStrings } from '../public/assets/strings/general'
import { theme } from '../theme/index'
import { Button } from '../components/button'

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
    textBoxCont: {
      width: '70%',
      margin: theme.spacing(1),
      textAlign: 'center',
    },
    rightAlignedCont: {
      display: 'flex',
      width: '70%',
      justifyContent: 'center',
    },
    rightAlignedItem: {
      alignSelf: 'flex-end',
      marginRight: '15%',
    },
  })
)

const yellow: string = '#F5D79D'

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: yellow, // color to be used
      },
      '&:hover fieldset': {
        borderColor: yellow,
        borderWidth: 2,
      },
      '&.Mui-focused fieldset': {
        borderColor: yellow,
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
        <Grid item className={classes.textBoxCont}>
          <Typography variant="h5">
            {generalStrings.contactPageHeader}
          </Typography>
        </Grid>
        <Grid item className={classes.textBoxCont}>
          <CustomTextField
            label={generalStrings.nameString}
            name="name"
            variant="outlined"
            onChange={handleInputChange}
            value={state.name}
            fullWidth
          />
        </Grid>
        <Grid item className={classes.textBoxCont}>
          <CustomTextField
            label={generalStrings.email}
            name="email"
            variant="outlined"
            onChange={handleInputChange}
            value={state.email}
            fullWidth
          />
        </Grid>
        <Grid item className={classes.textBoxCont}>
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
        </Grid>
        {/* </Grid>
      <Grid container className={classes.rightAlignedCont}> */}
        <Grid item className={classes.rightAlignedItem}>
          <Button name="SEND" color="secondary" />
        </Grid>
        <Grid item className={classes.rightAlignedItem}>
          <Typography variant="subtitle2">
            {generalStrings.orEmailMe}
            {/* //TODO get link to mail client working 
            see https://medium.com/the-couch/adding-a-contact-form-to-your-next-js-app-7a1b5f63f27z*/}
            <Link>
              <a>{generalStrings.emailAddress}</a>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactPage
