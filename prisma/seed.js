const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();

async function main() {
  // Create Roles
  const immigrantRole = await prisma.role.create({
    data: {
      name: 'Immigrant',
    },
  });
  const realtorRole = await prisma.role.create({
    data: {
      name: 'Realtor',
    },
  });

  const carRole = await prisma.role.create({
    data: {
      name: 'Car Dealership',
    },
  });

  const consultantRole = await prisma.role.create({
    data: {
      name: 'Immigration Consultant',
    },
  });





}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
