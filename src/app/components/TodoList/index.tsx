import { getTodos } from "@/app/services";

export const TodoList = async () => {
  const data = await getTodos();

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
