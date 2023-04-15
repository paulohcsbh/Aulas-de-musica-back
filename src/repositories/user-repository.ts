import prisma from "../database/db";

async function create(name: string, email: string, password: string) {
  await prisma.user.create({
      data: {
        name,
        email,
        password
      },
    });
  }

  async function getUserByEmail(email: string){
    return await prisma.user.findFirst({
      where:{ email }
    });   
}

async function getUserAll(){
  return await prisma.user.findMany();   
}


  const userRepository = {
    create,
    getUserByEmail,
    getUserAll   
}

export default userRepository;