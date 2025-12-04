import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;
const prisma = new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = prisma;
  }
  prisma = globalForPrisma.prisma;
}

export default prisma;