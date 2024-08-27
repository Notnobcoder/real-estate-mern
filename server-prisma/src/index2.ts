import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()



const mainCheck = async () => {
  // const data = await prisma.product.findMany({
  //   where: {
  //     name: "product1"
  //   },
  //   include: {
  //     brand: true
  //   }
  // })
  // // @ts-ignore
  // console.log(data)
  //
  // const result = await prisma.brand.create({
  //   data: {
  //     name: "Rebook",
  //     slug: "rebook123332",
  //     description: "this is the rebook brand",
  //     isActive: true,
  //     image: "hello image",
  //     Product: {
  //       connect: {
  //         id: "66b3807fae29e76d23cf36fe"
  //       }
  //     }
  //   }
  //
  // })

  const product = await prisma.product.create({
    data: {
      name: "product1"
    }
  })

  console.log(product)

}


mainCheck()

//   {
//     id: '66b3807fae29e76d23cf36fe',
//     name: 'product1',
//     created: 2024-08-07T14:11:10.781Z,
//     updated: 2024-08-07T14:11:10.781Z,
//     categoryId: null
//     items:{
//     [
//     "name" :"tushar",
//     "email" :"vishal@gmail.com",
//     "number" :"vishal@gmail.com",
//     ],
//
//     [
//     "name" :"tushar",
//     "email" :"vishal@gmail.com",
//     "number" :"vishal@gmail.com",
//     ],
//     }
//   },

