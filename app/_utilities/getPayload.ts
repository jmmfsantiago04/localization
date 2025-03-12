import payload from 'payload'
import config from '../../payload.config'

let cached = (global as any).payload

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    }
}

export const getPayloadClient = async (): Promise<typeof payload> => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is missing')
    }

    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            config,
        })
    }

    try {
        cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    return cached.client
} 