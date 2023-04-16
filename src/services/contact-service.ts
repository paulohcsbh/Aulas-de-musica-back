import contactRepository from "../repositories/contact-repository";
import userService, { createUser } from "./user-service";

async function sendMessage(text: string, authorId: number) {
   
  await contactRepository.sendText(
      text,
      authorId
    );
  }

  async function allTexts(userId: number) {
    const texts = await contactRepository.getAllTexts(userId);
    return texts;
  }

  const contactService = {
    sendMessage,
    allTexts
  }

  export default contactService;