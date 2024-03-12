import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import type { NextApiResponse, NextApiRequest } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;
  const body = request.body as HandleUploadBody;

  try {
    if (!isNaN(Number(id))) {
      let updatedDomain;
      await handleUpload({
        body,
        request,
        onBeforeGenerateToken: async () =>
          /* clientPayload */
          {
            // Generate a client token for the browser to upload the file
            // ⚠️ Authenticate and authorize users before generating the token.
            // Otherwise, you're allowing anonymous uploads.

            return {
              allowedContentTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
              maxFileSize: 6 * 1024 * 1024, // 10mb
              tokenPayload: JSON.stringify({
                domainId: id
              })
            };
          },
        onUploadCompleted: async ({ blob, tokenPayload }) => {
          console.log("blob upload completed", blob, tokenPayload);

          try {
            // Run any logic after the file upload completed
            // const { userId } = JSON.parse(tokenPayload);
            updatedDomain = await prisma.domain.update({
              where: {
                id: Number(id)
              },
              data: {
                mainImgUrl: blob.url
              }
            });
            // await db.update({ avatar: blob.url, userId });
          } catch (error) {
            throw new Error("Could not update user");
          }
        }
      });

      return response.status(200).json(updatedDomain);
    }
  } catch (error) {
    // The webhook will retry 5 times waiting for a 200
    return response.status(400).json({ error: (error as Error).message });
  }
}
