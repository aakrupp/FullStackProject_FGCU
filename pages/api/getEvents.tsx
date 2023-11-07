
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getEventsForUser(userId: number) {
  try {
    const events = await prisma.event.findMany({
      where: {
        sign_ups: {
          some: {
            user_id: userId,
          },
        },
      },
    });

    return events;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export default getEventsForUser;
