import { IColumn } from "./interfaces";

export const Column = ({ title, children }: IColumn) => {
  return (
    <div className="bg-gray-100 rounded p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
};
