import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import { bottomsUpTheme, psdsTheme } from '../../theme'
import CaseStudyCard from './caseStudyCard/CaseStudyCard'
import { Box } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1
    },
  })
)

interface Props {
    screenWidth: number
}

export const CaseStudyCards: React.FC<Props> = ({ screenWidth }) => {
    const classes = useStyles()

  return (
    <div className={classes.root}>
      <CaseStudyCard
        screenWidth={screenWidth}
        image={
          <Image
            src="/assets/images/bottomsUp/3_phone_mockup.png"
            alt="3 phones displaying bottoms up card"
            height={125}
            width={150}
          />
        }
        theme={bottomsUpTheme}
        title="Bottoms Up!"
        subtitle="End to end project for a Udacity course."
      />
      <Box p={1} />
      <CaseStudyCard
        screenWidth={screenWidth}
        image={
          <Image
            src="/assets/images/psds/case_study.png"
            alt="3 phones displaying bottoms up card"
            height={155}
            width={155}
          />
        }
        theme={psdsTheme}
        title="Plain Sailing Driving School"
        subtitle="A start up company looking to go digital."
      />
    </div>
  )
}
