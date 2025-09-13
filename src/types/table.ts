export interface TableProps {
  columns: string[];
  data: Data[];
  editHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
}
export type Category = "Personal" | "Work" | "Shopping";
export type Priority = "High" | "Medium" | "Low";

export type Data = {
  id: number;
  title: string;
  category: Category;
  priority?: Priority;
  completed: boolean;
};
