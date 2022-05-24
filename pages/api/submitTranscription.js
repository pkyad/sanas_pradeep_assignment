
import prisma from '../../shared/Utils/dbORM';


export default async function handler(req, res) {

    const transmissions = await prisma.Transmission.update({
        where : {
            id : req.body.id
        },
        data : {
            transcription : req.body.transcription
        }

    });

    res.status(200).json(transmissions)
}
