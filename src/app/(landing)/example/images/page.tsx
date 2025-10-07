import {PlaceholderImage} from "@/components/images/placeholder-image";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <PlaceholderImage width={120} height={120} className="opacity-60 mb-4" />

            <div className="w-120 h-40 rounded-lg overflow-hidden bg-gray-100">
                <PlaceholderImage />
            </div>

            <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden">
                <PlaceholderImage />
            </div>
            <p className="text-gray-500">No image available</p>
        </div>
    );
}