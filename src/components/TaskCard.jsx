export default function TaskCard({ title, priority, description }) {
  const priorityStyles = {
    low: { bg: "bg-lowbg", text: "text-lowtext" },
    medium: { bg: "bg-mediumbg", text: "text-mediumtext" },
    high: { bg: "bg-highbg", text: "text-hightext" },
  };

  const { bg: priorityBgColor, text: priorityTextColor } =
    priorityStyles[priority];
  return (
    <>
      <div className="flex-reverse rounded-lg  bg-white p-5 mb-5">
        <div className="flex justify-between">
          <div
            className={`text-xs font-medium rounded-md inline-block p-1 ${priorityBgColor} ${priorityTextColor}  `}
          >
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
        <p className="text-xs font-normal text-fontgray">{description}</p>
      </div>
    </>
  );
}
