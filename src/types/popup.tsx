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
  onClose: () => void;
}

export interface FormModalProps {
  data?: Data;
  isShown: boolean;
  onSubmit: (data: Data) => void;
  onEdit?: (data: Data) => void;
  onClose: () => void;
}

export interface FormItemProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  placeholder: string;
  errorMsg: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  required: boolean;
  type: "text" | "number" | "checkbox";
  value?: string | boolean;
}

export interface ModalProps {
  children: React.ReactNode;
  isShown: boolean;
  onClose: () => void;
}
