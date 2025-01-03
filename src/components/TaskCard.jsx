import CheckBox from "./CheckBox";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/Todo";

export default function TaskCard({ id, title, description, dueDate, status }) {
  const setTodo = useSetRecoilState(todoAtom);
  const deleteTask = () => {
    const token = localStorage.getItem("authToken");

    axios
      .delete(`http://localhost:3000/api/task/todo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTodo((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
        console.log("Task deleted successfully", response);
      })
      .catch((error) => {
        console.error("Error deleting task", error);
      });
  };

  return (
    <div className="flex shadow-md rounded-md justify-between mx-auto w-3/4 ">
      <div className="flex items-center p-1.5">
        <div>
          <CheckBox
            id={id}
            title={title}
            description={description}
            dueDate={dueDate}
            status={status}
          />
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="flex items-center">
        <div className="bg-red-200 p-1.5 rounded-md text-red-700 font-medium">
          {dueDate}
        </div>
        <button className="rounded-md m-2" onClick={deleteTask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <button className="rounded-md m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
