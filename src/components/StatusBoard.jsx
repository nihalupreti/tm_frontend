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

  const filterData = (boardName) => {
    switch (boardName) {
      case "Todos":
        return data.filter((task) => task.status === "scheduled");
      case "ongoing":
        return data.filter((task) => task.status === "ongoing");
      case "completed":
        return data.filter((task) => task.status === "completed");
    }
  };

  const filteredData = filterData(boardName) || [];

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
              priority="low"
              Description={task.description}
            />
          ))
        )}
      </TaskBoard>
    </>
  );
}
