'use client';
import {useEffect, useState} from 'react';
import CounterComponent from "@/app/test/_component/counter-component";

export default function Page() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // render nothing on server

    return (
        <div>
            <div>Test Page</div>
            <div>This page is client-side rendered only.</div>
            <div>You will not be able see it on view source / network tab</div>
        </div>
    );
}
