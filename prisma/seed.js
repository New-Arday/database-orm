const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // const createdCustomer = await prisma.customer.create({
  //   data: {
  //     name: "Alice",
  //   },
  // });
  // console.log("Customer created", createdCustomer);
  const createdMovie = await prisma.movie.create({
    data: {
      title: "Toy story",
      runtimeMins: 90,
    },
  });
  console.log("Movie created", createdMovie);

  // const createContact = await prisma.contact.create({
  //   data: {
  //     phone: "7799678565",
  //     email: "create@ffyt.com",
  //     customerId: createdCustomer.id,
  //   },
  // });
  const createScreening = await prisma.screening.create({
    data: {
      movieId: createdMovie.id,
    },
  });
  console.log("see screening created", createScreening);
  // Don't edit any of the code below this line
  process.exit(0);
}
seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
