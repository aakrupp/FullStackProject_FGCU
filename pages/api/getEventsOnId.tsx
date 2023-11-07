import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getEventDetails(eventId: number) {
  try {
    const eventDetails = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        sign_ups: true,
      },
    });
    return eventDetails;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
