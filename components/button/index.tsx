import React, { FunctionComponent } from 'react'
import MuiButton from '@material-ui/core/Button'

interface Props {
  color: 'primary' | 'secondary'
  name: string
  disabled: boolean
  onClick: any
}

const Button: FunctionComponent<Props> = ({
  color,
  name,
  disabled,
  onClick,
}) => {
  return (
    <>
      <MuiButton
        color={color}
        variant="contained"
        disabled={disabled}
        onClick={onClick}
      >
        {name}
      </MuiButton>
    </>
  )
}
export { Button }
