// import { PrismaClient } from '@prisma/client';

// // src/lib/db.js - 修复版
// import 'dotenv/config';

// const globalForPrisma = global;
// const prisma = new PrismaClient();

// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma;
// }

// export { prisma };
// export default prisma;


// src/lib/db.js - Prisma 7 写法
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';  // ✅ PrismaPg，不是 PrismaAdapter

const globalForPrisma = global;

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});

const prisma = new PrismaClient({ 
  adapter 
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export { prisma };
export default prisma;