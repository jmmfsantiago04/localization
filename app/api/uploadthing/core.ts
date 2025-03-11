import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    })
        .middleware(async () => {
            try {
                // You can add authentication here if needed
                return { uploadedBy: "user" };
            } catch (err) {
                console.error("Middleware error:", err);
                throw new Error("Failed to process upload");
            }
        })
        .onUploadComplete(async ({ file }) => {
            try {
                console.log('Upload complete:', file.url);
                return { url: file.url };
            } catch (err) {
                console.error("Upload error:", err);
                throw new Error("Failed to process upload");
            }
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 