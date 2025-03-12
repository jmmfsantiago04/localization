import { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'content',
            type: 'textarea',
            required: true,
            localized: true,
        }
    ],
} 