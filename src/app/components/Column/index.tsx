import { IColumn } from "./interfaces";

export const Column = ({ title, children, tasksNumber, icon }: IColumn) => {
  return (
    <div
      style={{
        maxHeight: tasksNumber != 0 ? "38rem" : "4rem",
      }}
      id={title}
      className={`bg-gray-100 rounded p-4`}
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          {icon}
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
        </div>
        <div className="text-sm flex items-center justify-center w-6 h-6 rounded-md bg-black text-white">
          {tasksNumber}
        </div>
      </div>
      <div
        className="space-y-2 overflow-y-auto"
        style={{
          maxHeight: "34rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};
