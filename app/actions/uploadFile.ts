'use server'

import { getPayloadClient } from "../_utilities/getPayload"

export async function uploadFile(formData: FormData) {
    const file = formData.get('file') as File
    if (!file) {
        throw new Error('No file provided')
    }

    const payload = await getPayloadClient()
    const result = await payload.create({
        collection: 'uploadthing-files',
        data: {
            file,
        },
    })

    return result
} 