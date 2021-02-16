import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
    },
  })
)

const CaseStudyFooterBar = () => {
    const classes = useStyles()

    return(
        <div>
            {/* css- flex box row */}
            <div>
                {/* box one containing pic email and social media links. css- flex box column */}
                <div>
                    {/* picture */}
                </div>
                <div>
                    {/* email */}
                </div>
                <div>
                    {/* media links css- flex box row*/}
                    <div>
                        {/* linkedin */}
                    </div>
                    <div>
                        {/* instagram */}
                    </div>
                </div>
            </div>
            <div>
                {/* more of my work and card css- flex box column */}
                <div>
                    {/* more of my work */}
                </div>
                <div>
                    {/* card grid? for pic and title */}
                </div>

            </div>
        </div>

    )
}

export default CaseStudyFooterBar;