import { bottomsUpTheme } from '../../theme'


//theme
export const THEME = bottomsUpTheme
// title
export const TITLE = {title:"/assets/images/bottomsUp/title/header_web@2x.png"}

// Roll info
export const ROLL_INFO = ["design research", "Prototype", "ui/ux design", "user testing"]


// tools used
export const TOOLS_USED = ["Miro", "Lookback", "Zeplin", "Figma"]

//tool icons
export const TOOL_ICONS = ["/assets/images/bottomsUp/Image 2.png", "/assets/images/bottomsUp/lookback.png", "/assets/images/bottomsUp/zeplin.png", "/assets/images/bottomsUp/Image 1.png"]
export const TOOL_INCON_WIDTH= { 0:{w:60, h:60}, 1:{w:84, h:40}, 2:{w:60, h:60}, 3:{w:60, h:60}}

//intro paragraph
export const INTO_PARA = "Whilst doing a three-month Udacity nano-degree on UX design, I chose this project because I felt that there were some issues and frustrations in the hospitality sectors due to Covid-19, that could be resolved."


//the challenge

export const THE_CHALLANGE ={
    intro:[
        <p>Due to the Covid-19 pandemic, it has become increasingly difficult for customers in pubs and bars around Brighton and the UK to have the same experiences as before. Even though some of the reasons for this cannot be fixed by technology it can decrease some stresses and frustrations that customers have.<span style={{color:'#EF3D4C', fontWeight:"bold"}}> BottomsUp!</span>  provides a safe and easy way for customers to be able to order and pay for their drinks throughout the night without the hassle of waiting for someone to take their order.</p>
    ],
    subheading:"Starting From Scratch",
    image1:{
        imagesrc:'/assets/images/bottomsUp/Research image 2.png',
        width:774,
        height: 580,
    },
    image2:{
        imagesrc:'/assets/images/bottomsUp/Reasearch image.png',
        width:798,
        height: 599,
    },
    image3:{
        imagesrc:'/assets/images/bottomsUp/Image 12.png',
        width:1721,
        height: 877,
    },
    text1:[
        <p>"I started researching on this project by wanting to understand the pains and frustrations of users. I conducted user interviews with people of different ages, to get a determine if they had the same pain points.  This allowed me to get a better overall view of the <span style={{color:'#EF3D4C', fontWeight:"bold"}}>Jobs-to-be-done</span>  I needed to include.</p>
    ],
    text2:[
    <p>Using my recorded notes I mapped the information given and used that to synthesis my research into different findings.</p>
    ], 
     
}


//research findings
export const RESEARCH_FINDINGS = {
    1:"Ordering drinks in a pub on digital products needs to be simple and easy to start otherwise people won’t use them.",
    2:"People don’t want to download multiple apps on their phone.",
    3:"People are not going to the pubs because they are uncertain if they will get in or the pub/bar is even open."
}



//ideation

export const IDEATION ={
    image1:{
        imagesrc:'/assets/images/bottomsUp/Ideation/Image 9.png',
        width:1050,
        height: 504,
    },
    image2:{
        imagesrc:'/assets/images/bottomsUp/Ideation/Image 10.png',
        width:1226,
        height: 663,
    },
    image3:{
        imagesrc:'/assets/images/bottomsUp/Ideation/Image 11@2x.png',
        width:1206,
        height: 710,
    },
    text1:"Using my research finding, I came up with ten ideas for features.",
    text2:"Then with the help of an engineer, we discussed and sorted each feature idea into a value vs complexity quadrants graph. We did this so that we could discard and ideas that wouldn’t bring much value and complicated to build.",
    text3:[
    <p>Using the <span style={{color:'#EF3D4C', fontWeight:"bold"}}>crazy-8 technique</span> I sketched out eight different screens with no longer than a minute on each one.</p> 
    ],
}

//wireframes

export const WIREFRAME_LINK ="https://google.co.uk"

export const WIREFRAMES ={
    image1:{
        imagesrc:'/assets/images/bottomsUp/Wireframes/Group 59.png',
        width:1214,
        height: 825,
    },
    image2:{
        imagesrc:'/assets/images/bottomsUp/Wireframes/Group -1.png',
        width:414,
        height: 199,
    },
    image3:{
        imagesrc:'/assets/images/bottomsUp/Wireframes/Group 15.png',
        width:408,
        height: 201,
    },
    image4:{
        imagesrc:'/assets/images/bottomsUp/Wireframes/Group 58.png',
        width:1219,
        height: 844,

    },
    text1:[
        <p>Using the tool Figma I created wireframes for the pages that would best solve the research finding.</p>,
        <p>Developing a low fidelity prototype to be able to use for user testing.</p>
    ],
    text2:"I recruited people to do moderated user testing to collect qualitative data on confusions/misunderstanding they have with my designs.",
    text3:"From the results of 2 rounds of users testing, I had some iterations to do to both the bottom and the top navigation bar.",
    text4:"BottomsUp! will be able to locate pubs and bars around the user, providing them with a list of options they can select from; using their phones GPS.",
    text5:"This informs the user how much availability the pub has left.", 
    text6:"The updated opening hours of the pub.",
     
}


//VISUAL_DESIGN

export const VISUAL_DESIGN = {
    image1:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/drinks_home_mockup.png',
        width:347,
        height: 700,
    },
    image2:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/location_mockup.png',
        width:347,
        height: 700,
    },
    image3:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/Group 61.png',
        width:616,
        height: 664,
    },
    image4:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/pattern_library@2x.png',
        width:616,
        height:945,

    },
    image5:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/Group 63.png',
        width:600,
        height:230,
    },
    image6:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/location_pre-iteration_mockup.png',
        width:495,
        height:1000,
    },
    image7:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/location_mockup.png',
        width:495,
        height:1000,
    },
    image8:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/drinks_pre-iteration_mockup.png',
        width:495,
        height:1000,
    },
    image9:{
        imagesrc:'/assets/images/bottomsUp/visualDesign/drinks_selection_screen@2x.png',
        width:495,
        height:1000,
    },
    text1:"To maintain consistency throughout, I created a style guide and pattern library, consisting of reusable components and their states.",
    text2:"Designing buttons, cards and lists that can be rearranged and combined with other components; whilst keeping the same consistency.",
    text3:"Using lookback I conducted unmoderated user testing to get quantitative and qualitative data to identify and issues not indicated in the first round of user testing.",
    text4:"On conclusion of the results data, I decided that the Key Performance Indicator (KPI) I wanted to improve on was:",
    text5:"To decrease the amount of time taken to complete an order.",
    text6:"34% of confusion was users not know where to click on to select the pub. So I changed the way the information was presented by using a card system with other pubs nearby to make it clearer to the user that it is clickable. Plus it will give them the option to look at places nearby if there is no availability left.",
    text7:"67% of the users found it hard to find the filter button. Because of the wide variety of user ages I have decided to iterate the icon filter button to words. I have also added a search button so that it will be easier for the users to find the drink they want without stress and confusion.", 
}


//conclusion

export const CONCLUSION = {
    text1:"As this project was done for a Udacity course it has not yet been built. ",
    text2:" However, the project would be built as a progressive web application for phones as customers are unlikely to carry a laptop to the pub.",
    text3:"BottomsUp will provide the users of updates of the capacity limit and new opening hours. It provides users with ease of location by using the phones GPS.",
    text4:"During this project I have learned so much from research techniques through to the final design solutions on a high fidelity prototype and user testing. ",
    text5:"From working on this project, I have learned that accessing your scope early on is especially important, especially working by yourself. Scope creep will always be inevitable as you collect more data and come up with better ways of designing.",
    text6:" Research and user testing early on important and will save time and money down the line.",
}

//Footer card info

export const FOOTER_CARD= {
    image:{
        imagesrc:'/assets/images/psds/Homepage.png',
        width:107,
        height: 107,
    },
    title:"Plain Sailing Driving School",
    casestudypage:"pages/case-studies/plain-sailing-driving-school.tsx"

}