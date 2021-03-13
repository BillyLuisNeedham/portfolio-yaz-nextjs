import fetch from 'node-fetch'

const SENDGRID_API = process.env.SENDGRID_API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ name, email, message }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [
                        {
                            email: 'billyluisneedham@gmail.com',
                        }
                    ],
                    subject: 'Yazmin Portfolio Message'
                }
            ],
            from: {
                email: 'billy@tealsquid.com',
                name: 'Yazmin Portfolio Admin'
            },
            content: [
                {
                    type: 'text/html',
                    value: `Message received from <b>${name}</b>, email: <b>${email}</b> 
                    
                    <b>Message:</b> ${message}`
                }
            ]
        })
    });
}

export { sendEmail };