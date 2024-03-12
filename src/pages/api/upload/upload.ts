// // pages/api/upload.js

// import { NextApiRequest, NextApiResponse } from "next";
// import formidable from "formidable";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const config = {
//   api: {
//     // bodyParser: false,
//     responseLimit: false
//   }
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const form = formidable();

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         console.error("Error parsing form data:", err);
//         res.status(500).json({ error: "Error parsing form data" });
//         return;
//       }

//       try {
//         const file = files.file;
//         // const file = req.body;
//         console.log("File from API:", file);

//         // Execute the upload function
//         const secureUrl = (await upload(file)) as string;

//         const updatedDomain = await prisma.domain.update({
//           where: {
//             id: 28
//           },
//           data: {
//             mainImgUrl: secureUrl
//           }
//         });

//         // Send the response
//         res.status(200).json({ updatedDomain });
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         res.status(500).json({ error: "Error uploading file" });
//       }
//     });
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

// async function upload(file: File) {
//   return new Promise((resolve, reject) => {
//     const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
//     const unsignedUploadPreset = process.env.NEXT_PUBLIC_PRESET;

//     const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     // Convert file to a Blob object
//     // const blob = new Blob([file]);

//     const fd = new FormData();
//     const uploadPreset = unsignedUploadPreset || ""; // Ensure uploadPreset is defined
//     fd.append("upload_preset", uploadPreset);
//     fd.append("file", file);

//     fetch(url, {
//       method: "POST",
//       body: fd
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data.secure_url);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
