'use client';

import { useState } from 'react';

export default function PayloadUpload() {
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.[0]) return;

        setUploading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/uploadthing-files', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Upload failed');
            }

            const data = await response.json();
            setImageUrl(data.doc.url);
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload file');
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                <input
                    type="file"
                    className="hidden"
                    onChange={handleUpload}
                    accept="image/*,application/pdf"
                    disabled={uploading}
                />
                {uploading ? 'Uploading...' : 'Upload File'}
            </label>

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