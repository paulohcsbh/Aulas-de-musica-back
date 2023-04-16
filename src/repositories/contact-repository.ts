import prisma from "../database/db";

async function sendText(text : string, authorId: number) {    
    await prisma.contact.create({
        data: {
            text, 
            authorId          
        }, 
    });
}

async function getAllTexts(userId: number) {
    return await prisma.contact.findMany({
        where: {
            authorId: userId
        }
    });
    
}

const contactRepository = {
    sendText,
    getAllTexts
}

export default contactRepository;