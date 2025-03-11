import type { CollectionConfig } from 'payload';

const UploadthingFiles: CollectionConfig = {
    slug: 'uploadthing-files',
    admin: {
        useAsTitle: 'filename',
        description: 'Files uploaded through uploadthing',
    },
    upload: {
        filesRequiredOnCreate: true,
        disableLocalStorage: true,
        mimeTypes: ['image/*', 'application/pdf'],
        resizeOptions: {
            width: 400,
            height: 300,
            position: 'centre',
        },
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: false,
            defaultValue: ({ data }: { data?: { filename?: string } }) => data?.filename || 'Uploaded file',
            admin: {
                description: 'Alternative text for the image',
            },
        },
        {
            name: 'filename',
            type: 'text',
            admin: {
                readOnly: true,
            },
        },
    ],
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
};

export default UploadthingFiles; 