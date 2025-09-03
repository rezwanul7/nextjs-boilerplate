import axios from "axios";

export default async function Page(props: { params: Promise<{ accessToken: string }> }) {
    const params = await props.params;
    const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzUyNjY0OTI4LjE3MDMxLCJpYXQiOjE3NTI1Nzg1MjguMTcwMzEsImp0aSI6IkdkSkpNaUdRTzM0ZHFfeVB3VjNuWDc0NWxHc0xEdyIsImNpZCI6InJzZC1MX21rQUN0TUVnMi1VYlY4SFEiLCJsaWQiOiJ0Ml9ncmlwdzJoYyIsImFpZCI6InQyX2dyaXB3MmhjIiwibGNhIjoxNjM3NDcxNjk1MDAwLCJzY3AiOiJlSnlLVmlwS1RVeFIwbEhLVEVuTks4a3NxVlNLQlFRQUFQX19QZW9HY3ciLCJyY2lkIjoiX1FJeEYxOW1PcDNUYzA5UGVudlBOcVhyZEh1OTB0bTRNU2UxeHI1ckVqQSIsImZsbyI6OH0.m5cNw7jK-3uGqhFDnrF5w3cWGnl5g5NutG43ZpbMMJk8VxE8h7Hx7pBEyjOJxZm1eg9o8IE5uYVrWdKK8XXQuV2M65uJXnNxkceC_rtQNTJ9BnatGTFXAhYirMeRO3kQ5yZ84mIiUEpdqRU045mApBjJqMUy4P-wfWnJwpRyl2V_0KApK1FPxY0Ht2CduSE2ZnGz-kwjUH2lp7pgRzJItPotB6WoCLu6cy9_TKcnxaWb6hp4P-fdmWcZP3eu---TvE1KmBYCSXKAWl7YOAI4DRqQ1ckPWOxqJqaqOa1VHhkLzVdxdZg0PTOqhU_Ht0jvOO1YqxqcZo1-BLYkWa2JVA"; //params.accessToken;

    // // Server-side data fetching
    // const testCase = await fetchTestCase(Number(id));
    //
    // if (!testCase) return notFound();
    //
    // const attachmentService = new AttachmentService()
    // const attachments = await attachmentService.findByEntity(EntityType.TestCase, testCase.id.toString());

    const user = await getUser(accessToken);

    return (
        <>
            <main className="w-full p-6 min-h-screen bg-background">
                <div className="pb-6">
                    {accessToken}
                </div>
                <pre>
                    <code>
                        {JSON.stringify(user, null, 2)}
                    </code>
                </pre>
            </main>
        </>
    );
}


const getUser = async (access_token: string) => {
    const data = await axios.get("https://oauth.reddit.com/api/v1/me", {
        headers: {
            Authorization: `Bearer ${access_token}`,
            content_type: "application/json",
        },
    });

    return data.data;
};