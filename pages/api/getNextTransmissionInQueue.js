
import prisma from '../../shared/Utils/dbORM';


export default async function handler(req, res) {

    const transmissions = await prisma.Transmission.findMany({
        where : {
            OR : [
                {transcription : ""},
                {transcription : undefined},
            ]
        }
    });

    res.status(200).json(transmissions)
}
