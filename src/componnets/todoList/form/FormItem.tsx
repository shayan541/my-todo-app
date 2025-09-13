import type { FormItemProps } from "../../../types/popup";
import type { FieldValues } from "react-hook-form";

const FormItem = <T extends FieldValues>({
  label,
  id,
  register,
  errors,
  placeholder,
  errorMsg,
  required,
  type,
  value,
  className,
}: FormItemProps<T>) => {
  const getInputValue = (val: unknown, type: string) => {
    if (type === "checkbox") return undefined;
    if (typeof val === "number") return val;
    if (typeof val === "string") return val;
  };
  return (
    <div className={`mb-4 ${className} ${type === "checkbox" ? "flex gap-2 items-center" : ""}`}>
      <label htmlFor={id as string} className="block mb-1 font-medium text-black">
        {label}:
      </label>
      {/* if type is checkbox return this element else return another */}
      {type === "checkbox" ? (
        <input
          type="checkbox"
          id={id as string}
          {...register(id, { required })}
          defaultChecked={Boolean(value)}
          className="h-4 w-4 border cursor-pointer border-gray-300 rounded bg-white text-gold-500 checked:bg-gold-200 checked:border-gold-500 focus:outline-none appearance-none checked:after:content-['✔'] checked:after:block checked:after:text-white checked:after:text-sm checked:after:leading-none checked:after:text-center"
        />
      ) : (
        <input
          type={type}
          id={id as string}
          {...register(id, { required })}
          defaultValue={getInputValue(value, type)}
          placeholder={placeholder}
          className="w-full border bg-white text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-200 focus:border-transparent"
        />
      )}
      {/* error message */}
      {errors?.[id] && <span className="text-red-700 text-sm mt-1 block">{errorMsg}</span>}
    </div>
  );
};

export default FormItem;
