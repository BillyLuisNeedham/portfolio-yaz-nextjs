import { Typography } from '@material-ui/core'
import React from 'react'

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
