'use client';

import { useState } from 'react';
import { uploadFile } from '../actions/uploadFile';

export default function PayloadUpload() {
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.[0]) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const result = await uploadFile(formData);
            if (result.url) {
                setImageUrl(result.url);
            }
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