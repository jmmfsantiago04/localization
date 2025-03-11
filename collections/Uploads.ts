import type { CollectionConfig } from 'payload'

export const Uploads: CollectionConfig = {
    slug: 'uploads',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'url',
            type: 'text',
            required: true,
        },
        {
            name: 'filename',
            type: 'text',
            required: true,
        },
        {
            name: 'size',
            type: 'number',
            required: true,
        },
        {
            name: 'uploadedBy',
            type: 'text',
            required: true,
        },
        {
            name: 'key',
            type: 'text',
            required: true,
        },
        {
            name: 'type',
            type: 'text',
            required: true,
        }
    ],
    timestamps: true,
} 