import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "doe2",
  //     },
  //   });

  // create article and connect to john
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "doe2 first article",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  // get all users
  const users = await prisma.user.findMany({ include: { articles: true } });
  users.map((user) =>
    console.log(`name: ${user.name}; articles:${JSON.stringify(user.articles)}`)
  );

  // disconnect
  await prisma.$disconnect();
};

main();
