"use client";

const connectReddit = () => {
    const url = new URL("https://www.reddit.com/api/v1/authorize");
    url.searchParams.set("client_id", process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID!);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("state", "secureRandomState1234"); // store in session if needed
    url.searchParams.set("redirect_uri", process.env.NEXT_PUBLIC_REDDIT_REDIRECT_URI!);
    url.searchParams.set("duration", "permanent");
    url.searchParams.set("scope", "identity read");

    console.log(url.toString())

    window.open(url.toString(), "_self")
};

function ConnectRedditButton() {
    return (
        <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={connectReddit}>
            Connect Reddit
        </button>
    );
}

export default function ConnectPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Connect to Reddit</h1>
            <p className="text-gray-600 mb-6">
                Click the button below to connect your Reddit account.
                This will allow you to access your Reddit data and perform actions on your behalf.
            </p>
            <ConnectRedditButton/>
        </div>
    );
}



