import React, { FunctionComponent } from 'react'
import MuiButton from '@material-ui/core/Button'

interface Props {
  color: 'primary' | 'secondary'
  name: string
  disabled: boolean
}

const Button: FunctionComponent<Props> = ({ color, name, disabled }) => {
  return (
    <>
      <MuiButton color={color} variant="contained" disabled={disabled} >
        {name}
      </MuiButton>
    </>
  )
}
export { Button }
