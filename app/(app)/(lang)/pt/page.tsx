export default function PortuguesePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Olá Mundo!
                </h1>
                <p className="mt-3 text-2xl">
                    Idioma atual: <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pt</code>
                </p>
            </main>
        </div>
    )
} 