import React from "react";
import type { FormItemProps } from "../../../types/popup";
import type { FieldValues } from "react-hook-form";

const FormItem = <T extends FieldValues>({ label, id, register, errors, placeholder, errorMsg, required, type }: FormItemProps<T>) => {
  return (
    <div className="mb-4">
      <label htmlFor={id as string} className="block mb-1 font-medium">
        {label}:
      </label>
      <input
        type={type}
        id={id as string}
        {...register(id, { required: required })}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors?.[id] && <span className="text-red-700 text-sm mt-1 block">{errorMsg}</span>}
    </div>
  );
};

export default FormItem;
