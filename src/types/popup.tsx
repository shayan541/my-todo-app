import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import type { Data } from "./table";

export interface QuestionPopOpType {
  cancelHandler: () => void;
  yesHandler: () => void;
  title: string;
  question: string;
}

export interface ConfirmModalProps extends QuestionPopOpType {
  isShown: boolean;
}

export interface FormModalProps {
  isShown: boolean;
  onSubmit: (data: Data) => void;
}

export interface FormItemProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  placeholder: string;
  errorMsg: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  required: boolean;
  type: "text" | "number" | "checkBox";
}
