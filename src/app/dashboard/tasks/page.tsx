import {promises as fs} from "fs"
import path from "path"
import {Metadata} from "next"
import {z} from "zod"

import {columns} from "./components/columns"
import {DataTable} from "../../../components/dt/data-table"
import {taskSchema} from "./data/schema"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "src/app/dashboard/tasks/data/tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
    const tasks = await getTasks()

    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="p-6">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Welcome back!
                                </h2>
                                <p className="text-muted-foreground">
                                    Here&apos;s a list of your tasks for this month.
                                </p>
                            </div>
                            <DataTable data={tasks} columns={columns}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
