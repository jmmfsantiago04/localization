'use server'

import { getPayloadClient } from "../_utilities/getPayload"
import { Page } from "@/payload-types"

export type SupportedLocale = 'en' | 'pt' | 'es'

export async function getPages(locale: SupportedLocale = 'en'): Promise<Page[]> {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
        collection: 'pages',
        locale: locale,
    })
    return docs
} 