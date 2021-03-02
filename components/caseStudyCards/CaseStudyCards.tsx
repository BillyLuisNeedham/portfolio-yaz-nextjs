import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import { bottomsUpTheme, psdsTheme } from '../../theme'
import CaseStudyCard from './caseStudyCard/CaseStudyCard'
import { Box, Link } from '@material-ui/core'
import { NavRoutes } from '../../utils/constants/navRoutes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height:"100%",
      display:"flex",
      flexFlow:"column nowrap",
      justifyContent:"center",
    },
  })
)

interface Props {
}

export const CaseStudyCards: React.FC<Props> = ({  }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <Link href="/case-studies/bottoms-up" style={{ textDecoration: 'none' }}>
          <CaseStudyCard
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
        </Link>
      </div>
      
      {/* <Box p={1} /> */}
      <div>
        <Link
          href="/case-studies/plain-sailing-driving-school"
          style={{ textDecoration: 'none' }}
        >
          <CaseStudyCard
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
        </Link>
      </div>
      
    </div>
  )
}
