export function PostItemShimmer() {
    return (
        <div className="lg:col-span-3">
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                    <div className="mb-4">
                        <div className="inline-flex items-center gap-2">
                            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-black text-sm">...</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-2 text-balance">Loading...</h1>
                    <p className="text-blue-100 text-sm">Please wait</p>
                </div>
            </div>
            <div className="p-6 overflow-y-auto h-[352px]">
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>...</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>...</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>...</span>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Techn
                        ologies</h3>
                    <div className="flex flex-wrap gap-2">
                        <span
                            className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600">...</span>
                        <span
                            className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600">...</span>
                        <span
                            className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600">...</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">Loading content...</p>
                    <p className="text-gray-700 dark:text-gray-300">Please wait while we fetch the data.</p>
                    <p className="text-gray-700 dark:text-gray-300">This might take a few seconds.</p>
                </div>
            </div>
        </div>
    )
}