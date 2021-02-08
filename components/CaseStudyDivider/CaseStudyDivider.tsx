import { Typography } from '@material-ui/core'
import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)
interface Props {
  title: string
}

const CaseStudyDivider: React.FC<Props> = ({ title }) => (
  <div data-testid="CaseStudyDivider">
    <Typography variant="h6">
      {title}
    </Typography>
  </div>
)

export default CaseStudyDivider
