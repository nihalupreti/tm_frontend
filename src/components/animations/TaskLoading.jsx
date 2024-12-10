export default function TaskLoading() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="h-2 w-14 rounded bg-slate-700"></div>
            <div className="h-2 w-3/4 rounded bg-slate-700"></div>
            <div className="h-2 rounded bg-slate-700"></div>
            <div className="flex">
              <div className="h-10 w-10 rounded-full bg-slate-700"></div>
              <div className="h-10 w-10 rounded-full bg-slate-700"></div>
              <div className="h-10 w-10 rounded-full bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
