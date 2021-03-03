import React from "react"
import Image from 'next/image'

interface Props {
    
}

const About: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <Image
            src="/assets/images/Group 68@2x.png"
            width={300}
            height={50}
            layout="intrinsic"
          />
        </div>
    )
}

export default About