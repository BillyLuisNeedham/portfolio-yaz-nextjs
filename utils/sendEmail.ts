import fetch from 'node-fetch'

const SENDGRID_API = process.env.SENDGRID_API
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ name }) => {
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
                    subject: 'Demo success :)'
                }
            ],
            from: {
                email: 'billy@tealsquid.com',
                name: 'Test SendGrid'
            },
            content: [
                {
                    type: 'text/html',
                    value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
                }
            ]
        })
    });
}

export { sendEmail };