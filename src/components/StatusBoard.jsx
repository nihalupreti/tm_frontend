import { useQuery } from "@tanstack/react-query";

import TaskBoard from "./TaskBoard";
import TaskLoading from "./animations/TaskLoading";
import TaskCard from "./TaskCard";
import { fetchTasks } from "../util/http";

export default function StatusBoard({ boardName }) {
  const { data, isPending } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  const statusMap = {
    Todos: "scheduled",
    ongoing: "ongoing",
    completed: "completed",
  };

  const filteredData =
    data?.filter((task) => task.status === statusMap[boardName]) || [];

  return (
    <>
      <TaskBoard boardName={boardName} totalTasks={4}>
        {isPending ? (
          <TaskLoading />
        ) : (
          filteredData.map((task) => (
            <TaskCard
              key={task._id}
              title={task.title}
              priority={task.priority}
              description={task.description}
            />
          ))
        )}
      </TaskBoard>
    </>
  );
}
