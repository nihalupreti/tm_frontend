export default function TaskBoard({ boardName, totalTasks, children }) {
  return (
    <div className="rounded-lg bg-smokewhite w-auto h-auto inline-block p-5">
      <div className="flex justify-center items-center mb-2.5">
        <h4 className="font-medium mr-2">{boardName}</h4>
        <span className="flex items-center justify-center rounded-full w-4 h-4 text-[#625F6D] bg-[#E0E0E0]">
          {totalTasks}
        </span>
      </div>
      <hr className="w-11/12  mx-auto border-t-2 border-blue-500 mb-4 " />
      {children}
    </div>
  );
}
