'use client';

import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export default function FileUpload() {
    const [imageUrl, setImageUrl] = useState<string>("");

    return (
        <div className="flex flex-col items-center gap-4">
            <UploadButton<OurFileRouter, "imageUploader">
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if (res?.[0]) {
                        setImageUrl(res[0].url);
                        alert("Upload completed");
                    }
                }}
                onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                }}
            />

            {imageUrl && (
                <div className="mt-4">
                    <img
                        src={imageUrl}
                        alt="Uploaded file"
                        className="max-w-sm rounded-lg shadow-md"
                    />
                </div>
            )}
        </div>
    );
} 