import axios from "axios";

export async function fetchTasks() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}task/todos`,
    { withCredentials: true }
  );

  return response.data.data;
}

export async function postForm(data) {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}user/signin`,
    data,
    { withCredentials: true }
  );

  return response.data;
}
