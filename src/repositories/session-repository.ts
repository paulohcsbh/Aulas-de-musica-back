import prisma from "../database/db";

async function allSessions() {
     return await prisma.session.findMany();    
}

async function create(email: string, token: string) {
    await prisma.session.create({
        data: {
          email,
          token
        },
      });
    }




const sessionRepository = {
    allSessions,
    create
}



export default sessionRepository;