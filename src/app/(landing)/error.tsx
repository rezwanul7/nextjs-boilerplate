"use client";
export default function Error({error, reset,}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Something went wrong!</h2>
            <p className="mb-4 text-center">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Try again
            </button>
        </div>
    );
}