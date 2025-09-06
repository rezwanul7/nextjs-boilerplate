import React from "react";
import {cn} from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    className?: string;
}

export default function PageHeader({title, description, actions, className}: PageHeaderProps) {
    return (
        <div className={cn('mb-2 flex flex-wrap items-center justify-between space-y-2', className)}>
            <div>
                <h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
                {description && <p className='text-muted-foreground mt-1'>{description}</p>}
            </div>
            <div className='flex gap-2'>
                {actions}
            </div>
        </div>
    );
}