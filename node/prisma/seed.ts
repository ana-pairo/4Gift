import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const newUser = await createUser();
  console.log(newUser);
}

async function createUser() {
  return prisma.users.create({
    data: {
      email: "email@teste.com",
      accessToken: "oj7595DkdhsakTY97d",
      displayName: "User Teste",
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
