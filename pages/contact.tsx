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
import { contactStrings } from '../public/assets/strings/contact-strings'
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

interface IMessage {
  name: string
  email: string
  message: string
}

interface IStatus {
  submitted: boolean
  submitting: boolean
  info: { error: boolean; msg: string }
}

//TODO if user presses send before all fields are filled in, display error fields
const ContactPage: React.FC<Props> = ({}) => {
  const classes = useStyles()
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState<IMessage>({
    name: '',
    email: '',
    message: '',
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: status.submitted,
        submitting: status.submitting,
        info: { error: true, msg: msg },
      })
    }
  }

  const handleInputChange = (e) => {
    e.persist()
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    const res = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  //TODO add email api stuff. see: https://docs-git-success-185-add-nextjs-sengrid-guide.zeit.now.sh/guides/deploying-nextjs-nodejs-and-sendgrid-with-zeit-now

  return (
    <div className={classes.root} id='contact-root'>
      <Grid container className={classes.container} direction="column">
        <Grid item className={classes.textBoxCont}>
          <Typography variant="h5">
            {contactStrings.contactPageHeader}
          </Typography>
        </Grid>
        <Grid item className={classes.textBoxCont}>
          <CustomTextField
            id={'name'}
            label={contactStrings.nameString}
            name="name"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.name}
            fullWidth
          />
        </Grid>
        <Grid item className={classes.textBoxCont}>
          <CustomTextField
            id={'email'}
            label={contactStrings.email}
            name="email"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.email}
            fullWidth
          />
        </Grid>
        <Grid item className={classes.textBoxCont}>
          <CustomTextField
            id={'message'}
            label={contactStrings.message}
            name="message"
            variant="outlined"
            onChange={handleInputChange}
            value={inputs.message}
            fullWidth
            multiline
            rows={8}
          />
        </Grid>
        {/* </Grid>
      <Grid container className={classes.rightAlignedCont}> */}
        <Grid item className={classes.rightAlignedItem}>
          <Button
            onClick={handleOnSubmit}
            name={
              !status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting'
            }
            color="secondary"
            disabled={status.submitting}
          />
        </Grid>
        <Grid item className={classes.rightAlignedItem}>
          <Typography variant="subtitle2">
            {contactStrings.orEmailMe}
            {/* //TODO get link to mail client working 
            see https://medium.com/the-couch/adding-a-contact-form-to-your-next-js-app-7a1b5f63f27z*/}
            <Link>
              <a>{contactStrings.emailAddress}</a>
            </Link>
          </Typography>
        </Grid>
      </Grid>
      {
        //TODO build out error msg and error display
      }
    </div>
  )
}

export default ContactPage
