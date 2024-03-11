import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { followerId, followingId } = req.body;

    // const followerId = 9;
    // const followingId = 11;

    try {
      // Ensure both followerId and followingId are provided
      if (!followerId || !followingId) {
        return res.status(400).json({ error: "followerId and followingId are required" });
      }

      // Check if the domain IDs exist
      const followingExists = await prisma.domain.findUnique({
        where: { id: followerId }
      });

      const followerExists = await prisma.domain.findUnique({
        where: { id: followingId }
      });

      if (!followerExists || !followingExists) {
        return res.status(404).json({ error: "One or both of the domains do not exist" });
      }

      // Update follower and following lists using transactions for data consistency
      await prisma.$transaction([
        prisma.domain.update({
          where: { id: followerId },
          data: {
            followingIds: {
              set: followingExists.followingIds.filter((id) => id !== followingId)
            }
          }
        }),
        prisma.domain.update({
          where: { id: followingId },
          data: {
            followerIds: {
              set: followingExists.followerIds.filter((id) => id !== followerId)
            }
          }
        })
      ]);

      res.status(200).json({ message: "Unfollowed successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
