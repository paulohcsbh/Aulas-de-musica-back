import prisma from "../src/database/db";

async function main() {
    await prisma.track.create({
        data: {            
            "name": "Chalana",
            "link1": "https://www.youtube.com/embed/IV_vx9xnKwo",
            "link2": "https://www.youtube.com/embed/zdi4ICSeK9w",
            "link3": "https://www.youtube.com/embed/OfqUBM19tPU",
            "link4": "https://www.youtube.com/embed/HjzucPuO4jg"        
        }
    })
}
main()
    .then(() =>{
        console.log("Registro feito com sucesso!");
    }) 
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    })