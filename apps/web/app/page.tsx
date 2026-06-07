"use client"

import { useQuery } from "convex/react"
import { api } from "@workspace/db/convex/_generated/api"

export default function Page() {
  const tasks = useQuery(api.tasks.get)

  return (
    <div>
      {tasks?.map((task) => (
        <div key={task._id}>{task.text}</div>
      ))}
    </div>
  )
}
