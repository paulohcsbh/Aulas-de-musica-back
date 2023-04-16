import prisma from "../database/db";

async function getAllTracks(){
    return await prisma.track.findMany();
}


const trackRepository = {
    getAllTracks
}

export default trackRepository;