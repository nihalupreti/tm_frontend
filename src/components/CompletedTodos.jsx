import { useRecoilValue } from "recoil";
import { completedTodos } from "../store/atoms/Todo";
import TaskCard from "./TaskCard";
import { format, isToday, isYesterday } from "date-fns";

export default function CompletedTodos() {
  const todos = useRecoilValue(completedTodos); // Get the filtered todos with status true

  function formateDate(dateString) {
    const parsedDate = new Date(dateString);
    return isToday(parsedDate)
      ? "Today"
      : isYesterday(parsedDate)
      ? "Yesterday"
      : format(parsedDate, "EEEE, MMM d");
  }
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TaskCard
            key={todo._id}
            id={todo._id}
            title={todo.title}
            description={todo.description}
            status={todo.status}
            dueDate={formateDate(todo.dueDate)}
          />
        ))
      ) : (
        <h1>No completed todos found.</h1>
      )}
    </div>
  );
}
