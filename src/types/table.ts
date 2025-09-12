export interface TableProps {
  columns: string[];
  data: Data[];
  editHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
}
export type Data = {
  id: number;
  title: string;
  category: "Personal" | "Work" | "Shopping";
  priority?: "High" | "Medium" | "Low";
  completed: boolean;
};
