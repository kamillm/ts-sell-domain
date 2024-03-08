// import { PrismaClient, Chain } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";

// // pages/api/createEntry.js

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     try {
//       // Parse incoming data from request body
//       //   const { chainName, userName, userEmail, domainName } = req.body;

//       //   Create chain entry
//       // await prisma.chains.create({
//       //   data: {
//       //     name: Chain.ZETA
//       //   }
//       // });

//       //   // Create user entry
//       const user = await prisma.user.create({
//         data: {
//           walletAddress: "dummy_wallet_address2",
//           email: "userEmail2@gmail.com",
//           chain: { connect: { name: Chain.ZETA } }
//         }
//       });

//       //   Create domain entry
//       const domain = await prisma.domain.create({
//         data: {
//           domainName: "devtest123qwerty1231",
//           User: { connect: { walletAddress: "dummy_wallet_address2" } }
//         }
//       });

//       res.status(201).json({ message: "Entry created successfully", data: { user } });
//     } catch (error) {
//       console.error("Error creating entry:", error);
//       res.status(500).json({ error: "Could not create entry" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
