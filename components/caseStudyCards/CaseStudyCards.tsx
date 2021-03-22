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
      display: 'flex',
      flexDirection: 'column',
    },
    imgCont: {
      minHeight: 200,
      minWidth: 200,
    },
  })
)

interface Props {}

export const CaseStudyCards: React.FC<Props> = ({}) => {
  const classes = useStyles()

  const imgWrapper = (children: JSX.Element): JSX.Element => {
    return <Box className={classes.imgCont}>{children}</Box>
  }

  return (
    <div className={classes.root}>
      <div>
        <Link
          href="/case-studies/bottoms-up"
          style={{ textDecoration: 'none' }}
        >
          <CaseStudyCard
            image={
               imgWrapper(
               <Image
                  src="/assets/images/bottomsUp/3_phone_mockup.png"
                  alt="3 phones displaying bottoms up card"
                  height={250}
                  width={297}
                  layout="intrinsic"
                />
               )
            }
            theme={bottomsUpTheme}
            title="Bottoms Up!"
            subtitle="End to end project for a Udacity course."
          />
        </Link>
      </div>

      <div>
        <Link
          href="/case-studies/plain-sailing-driving-school"
          style={{ textDecoration: 'none' }}
        >
          <CaseStudyCard
            image={
              imgWrapper(
                <Image
                  src="/assets/images/psds/case_study.png"
                  alt="2 phones displaying Plain Sailing Driving School"
                  height={286}
                  width={286}
                  layout="intrinsic"
                />
              )
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
