export interface TableProps {
  columns: string[];
  data: Data[];
}
export type Data = {
  id: number;
  title: string;
  category: "Personal" | "Work" | "Shopping";
  priority?: "High" | "Medium" | "Low";
  completed: boolean;
};
