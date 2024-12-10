export default function TaskCard({ title, priority, Description }) {
  return (
    <>
      <div className="flex-reverse rounded-lg w-90 bg-white p-5">
        <div className="flex justify-between">
          <div className="text-xs font-medium rounded-md bg-lowbg inline-block p-1 text-lowtext">
            {priority}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hover: cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-xs font-normal text-fontgray">{Description}</p>
      </div>
    </>
  );
}
