import type { Category, Priority } from "../types/table";

export const columns: string[] = ["ID", "Title", "Category", "Completed", "Priority", ""];

export const rowsPerPageOptionsConstant = [5, 10, 20];

export const priority: Priority[] = ["High", "Medium", "Low"];

export const categories: Category[] = ["Personal", "Work", "Shopping"];
