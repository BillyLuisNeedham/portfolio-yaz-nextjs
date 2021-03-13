import { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name } = req.body;
        await sendEmail({ name });
        console.log(`message success`)
        return res.status(200).end();
    }
    console.log(`message failure`)
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}