


import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const user = await prisma.User.upsert({ 
            where: {
                firstName : req.body.firstName,
            }, 
            update: {
                lastName: req.body.lastName,
                nickName: req.body.nickName,
            },
            create:req.body,
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' });
    }

}
