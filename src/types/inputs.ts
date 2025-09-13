export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export interface DropDownProps<T extends string | number> {
  options: T[];
  value: T;
  onChange: (val: T) => void;
}
