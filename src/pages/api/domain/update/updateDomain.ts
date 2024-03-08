import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import getCategoryEnum from "@/utils/api/getCategoryEnum";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT" || req.method === "PATCH") {
    try {
      const {
        id,
        mainImgUrl,
        bannerURL,
        location,
        bio,
        name,
        category,
        website,
        discord,
        youtube,
        twitter,
        telegram,
        instagram,
        linkedin
      } = req.body;

      // Find the domain to be updated
      const domain = await prisma.domain.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!domain) {
        return res.status(404).json({ error: "Domain not found" });
      }

      // Create an object with only provided values
      const dataToUpdate: any = {
        mainImgUrl,
        bannerURL,
        location,
        bio,
        name,
        category,
        website,
        discord,
        youtube,
        twitter,
        telegram,
        instagram,
        linkedin
      };

      // Remove keys with undefined or null values
      Object.keys(dataToUpdate).forEach(
        (key) => dataToUpdate[key] === undefined || (dataToUpdate[key] === null && delete dataToUpdate[key])
      );

      dataToUpdate.category = getCategoryEnum(dataToUpdate.category);

      // Update the domain in the database
      const updatedDomain = await prisma.domain.update({
        where: {
          id: Number(id)
        },
        data: dataToUpdate
      });

      res.status(200).json({ message: "Domain updated successfully", data: updatedDomain });
    } catch (error) {
      console.error("Error updating domain:", error);
      res.status(500).json({ error: "Could not update domain" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
