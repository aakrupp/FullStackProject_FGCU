// PrismaComponent.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEvent(eventData) {
  try {
    const newEvent = await prisma.event.create({
      data: eventData,
    });
    return newEvent;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
