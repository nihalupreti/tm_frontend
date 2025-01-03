import TaskCard from "./TaskCard";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { todoAtom, filterTodo } from "../store/atoms/Todo";
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
  const resetTodo = useResetRecoilState(todoAtom); // Reset state on unmount
  const setTodo = useSetRecoilState(todoAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    return () => {
      resetTodo(); // Reset the todos state when the component unmounts
    };
  }, [resetTodo]);

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem("authToken");

      const response = await axios.get("http://localhost:3000/api/task/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTodo((prevTodos) => [...prevTodos, ...response.data.data]);
    };

    fetchTodos();
  }, [setTodo]);

  return (
    <>
      <div className="flex">
        {/* <SideBar name={userName} /> */}
        <div className="bg-gray100 flex-1 flex-column">
          <AddTodo openModal={openModal} />
          <TodoForm isOpen={isModalOpen} closeModal={closeModal} />
          {filteredTodos.map((todo, index) => {
            return (
              <TaskCard
                dueDate={formateDate(todo.dueDate)}
                key={todo._id + (index + 1)}
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
