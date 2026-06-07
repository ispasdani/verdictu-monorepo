"use client"

import { useQuery } from "convex/react"
import { api } from "@workspace/db/convex/_generated/api"

export default function Page() {
  const tasks = useQuery(api.tasks.get)

  return (
    <div className="flex min-h-svh p-6">
      <div>
        {tasks?.map((task) => (
          <div key={task._id}>{task.title}</div>
        ))}
      </div>
    </div>
  )
}
