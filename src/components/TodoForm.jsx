import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css"; //for default style of datepicker
import DatePicker from "react-datepicker";
import Modal from "react-modal";

import { postForm } from "../util/http";
import FormElement from "./FormElement";

export default function TodoForm({ isOpen, closeModal }) {
  const formInput = useRef();
  const [selectedDate, setSelectedDate] = useState();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: postForm,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formInput.current);
    formData.append("dueDate", selectedDate);
    const formDataJson = Object.fromEntries(formData);

    mutate({ data: formDataJson, endPoint: "task/todo" });
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="form modal"
      ariaHideApp={false}
      className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50"
    >
      <form
        className="max-w-sm mx-auto "
        onSubmit={handleSubmit}
        ref={formInput}
      >
        <FormElement
          label="Title"
          name="title"
          placeholder="Go to Gym"
          type="text"
        />
        <FormElement
          label="Description"
          name="description"
          placeholder="Do some cardio in gym"
          type="text"
        />
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Due Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            isClearable
            placeholderText="Select a date"
            showYearDropdown
            scrollableMonthYearDropdown
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
