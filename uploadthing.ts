import { createUploadthing } from "uploadthing/next";
import type { FileRouter } from "uploadthing/next";

const f = createUploadthing({
    token: process.env.UPLOADTHING_TOKEN,
});

export const uploadRouter = {
    mediaUploader: f({
        image: { maxFileSize: "4MB", maxFileCount: 1 },
        pdf: { maxFileSize: "4MB", maxFileCount: 1 },
    })
        .middleware(async () => {
            return { uploadedBy: "admin" };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.uploadedBy);
            console.log("file url", file.url);
            return { url: file.url };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter; 