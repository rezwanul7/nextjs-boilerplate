'use client';
import {Button} from "@/components/ui/button";
import ClientComponent from "@/app/test/_component/client-component";
import CounterComponent from "@/app/test/_component/counter-component";

export default function Page() {
    return (
        <div>
            <div>Test Page [ 'use client' | Client Page] (still renders on server)</div>
            <div>'use client' doesn't mean - render when mounted in client</div>
            <div>You can see it on view source / network tab</div>
            <ClientComponent/>
            <CounterComponent/>
            <Button>Hello</Button>
        </div>
    );
}