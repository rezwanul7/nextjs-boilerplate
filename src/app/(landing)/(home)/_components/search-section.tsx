import {Search} from "lucide-react";
import SearchInput from "@/app/(landing)/(home)/_components/search-input";
import {Button} from "@/components/ui/button";

export default function SearchSection() {
    return (
        <div className="max-w-3xl mx-auto my-10">
            <div className="relative group">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div
                    className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border border-white/20">
                    <div className="flex items-center">
                        <div
                            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-3 shadow-lg">
                            <Search className="h-5 w-5 text-white"/>
                        </div>
                        <SearchInput/>
                        <Button
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 h-10 rounded-xl shadow-lg font-medium transition-all duration-200 hover:shadow-xl">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}