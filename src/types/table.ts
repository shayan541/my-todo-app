
export type Data = {
  id: number;
  title: string;
  category: "Personal" | "Work" | "Shopping";
  priority?: "High" | "Medium" | "Low";
  completed: boolean;
};

