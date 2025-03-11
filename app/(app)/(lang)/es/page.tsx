import PayloadUpload from '@/app/components/PayloadUpload'

export default function SpanishPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    ¡Hola Mundo!
                </h1>

                <p className="mt-3 text-2xl">
                    Idioma actual: <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">es</code>
                </p>
                <div className="mt-8">
                    <PayloadUpload />
                </div>
            </main>
        </div>
    )
} 