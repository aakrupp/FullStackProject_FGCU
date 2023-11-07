import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserDetails(username: string) {
  try {
    const userDetails = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return userDetails;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}