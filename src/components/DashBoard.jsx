import SideBar from "./SideBar";
import TaskCard from "./TaskCard";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  todoAtom,
  filterTodo,
  totalCompletedSelector,
} from "../store/atoms/Todo";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { format, isToday, isYesterday } from "date-fns";
import AddTodo from "./AddTodo";
import TodoForm from "./TodoForm";

function formateDate(dateString) {
  const parsedDate = new Date(dateString);
  return isToday(parsedDate)
    ? "Today"
    : isYesterday(parsedDate)
    ? "Yesterday"
    : format(parsedDate, "EEEE, MMM d");
}

export default function DashBoard() {
  const filteredTodos = useRecoilValue(filterTodo);
  const setTodo = useSetRecoilState(todoAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalCompleted = useRecoilValue(totalCompletedSelector);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchTodos = () => {
      const token = localStorage.getItem("authToken"); // Retrieve JWT token from localStorage

      axios
        .get("http://localhost:3000/api/task/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTodo((prevTodos) => [...prevTodos, ...response.data]); // Update todos
        })
        .catch((error) => {
          console.error(
            "Error fetching todos:",
            error.response?.status || error.message
          );
        });
    };

    fetchTodos(); // Call the fetch function
  }, []);

  return (
    <>
      <div className="flex">
        <SideBar name={"Nihal upreti"} pendingTodo={totalCompleted} />
        <div className="bg-gray100 flex-1 flex-column">
          <AddTodo openModal={openModal} />
          <TodoForm isOpen={isModalOpen} closeModal={closeModal} />
          {filteredTodos.map((todo) => {
            return (
              <TaskCard
                dueDate={formateDate(todo.dueDate)}
                key={todo._id}
                id={todo._id}
                title={todo.title}
                description={todo.description}
                status={todo.status}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
