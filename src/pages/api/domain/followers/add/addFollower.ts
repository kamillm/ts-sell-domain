import { PrismaClient, Domain } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // const { followerId, followingId } = req.body;
    const followerId = 11;
    const followingId = 6;

    try {
      // Ensure both followerId and followingId are provided
      if (!followerId || !followingId) {
        return res.status(400).json({ error: "followerId and followingId are required/same" });
      }

      const followerExists = (await prisma.domain.findUnique({
        where: { id: followerId }
      })) as Domain; // Explicitly cast to your Domain type

      const followingExists = (await prisma.domain.findUnique({
        where: { id: followingId }
      })) as Domain; // Explicitly cast to your Domain type

      if (!followerExists || !followingExists) {
        return res.status(404).json({ error: "One or both of the domains do not exist" });
      }

      // if (followerExists.followingIds.length > 0 && followerExists.followingIds.length > 0) {
      // Check if followerId already exists in followingIds array
      if (!followerExists.followingIds.includes(followingId) && !followingExists.followerIds.includes(followerId)) {
        await prisma.$transaction([
          // Update follower list
          prisma.domain.update({
            where: { id: followingId },
            data: {
              followerIds: {
                push: followerId
              }
            }
          }),

          prisma.domain.update({
            where: { id: followerId },
            data: {
              followingIds: {
                push: followingId
              }
            }
          })
        ]);
      }
      // }
      res.status(200).json({ message: "Followed successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
