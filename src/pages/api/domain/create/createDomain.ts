import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Parse incoming data from request body
      const { domainName, userID } = req.body;

      //   Create domain entry
      const domain = await prisma.domain.create({
        data: {
          domainName: domainName,
          User: { connect: { id: userID } }
        }
      });

      //   //   Create domain entry
      //   const domain = await prisma.domain.create({
      //     data: {
      //       domainName: "devtest123qwerty1231",
      //       User: { connect: { id: 9 } }
      //     }
      //   });

      res.status(201).json({ message: "Entry created successfully", data: { domain } });
    } catch (error) {
      console.error("Error creating entry:", error);
      res.status(500).json({ error: "Could not create entry" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
