// pages/api/fetchDomain.js

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import getChainEnum from "@/utils/api/getChainEnum";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { domainName, walletAddress, chain } = req.body;

      const domain = await prisma.domain.findFirst({
        where: {
          domainName,
          User: {
            walletAddress,
            chain: {
              name: getChainEnum(chain)
            }
          }
        }
      });

      res.status(200).json({ domain });
    } catch (error) {
      console.error("Error fetching domain:", error);
      res.status(500).json({ error: "Could not fetch domain" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
