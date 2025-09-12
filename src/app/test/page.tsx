import ClientComponent from "@/app/test/_component/client-component";
import CounterComponent from "@/app/test/_component/counter-component";

export default async function Page() {
    return (
        <div>
            <div>Test Page (Server Rendered)</div>
            <div>You can see it on view source / network tab</div>
            <ClientComponent/>
            <CounterComponent/>
        </div>
    );
}