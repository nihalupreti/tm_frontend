import StatusBoard from "./StatusBoard";
import AddTask from "./AddTask";

export default function DashBoard() {
  return (
    <>
      <div className="flex-reverse w-full m-10">
        <AddTask />
        <StatusBoard boardName="Todos" />
        <StatusBoard boardName="ongoing" />
        <StatusBoard boardName="Due" />
        <div className="flex justify-between "></div>
      </div>
    </>
  );
}
