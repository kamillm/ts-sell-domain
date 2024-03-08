import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import getChainEnum from "@/utils/api/getChainEnum";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Parse incoming data from request body
      const { chainName, walletAddress } = req.body;

      // Fetch user details based on wallet address and chainId
      const user = await prisma.user.findFirst({
        where: {
          walletAddress: walletAddress,
          chain: {
            name: getChainEnum(chainName)
          }
        },
        include: {
          chain: true
        }
      });

      // // // Fetch user details based on wallet address and chainId
      // const user = await prisma.user.findFirst({
      //   where: {
      //     walletAddress: "dummy_wallet_address2",
      //     chain: {
      //       name: Chain.X1
      //     }
      //   },
      //   include: {
      //     chain: true
      //   }
      // });

      res.status(201).json({ message: "Entry retreived successfully", data: { user } });
    } catch (error) {
      console.error("Error retreiving entry:", error);
      res.status(500).json({ error: "Could not retreive entry" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
