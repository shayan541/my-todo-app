import React from "react";
import { useForm } from "react-hook-form";
import type { Data } from "../../../types/table";
import FormItem from "./FormItem";

const Form: React.FC<{ onSubmit: (data: Data) => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  return (
    <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        errorMsg="Title is required"
        label="Title"
        id="title"
        register={register}
        errors={errors}
        placeholder="Title"
        required
        type="text"
      />
      <FormItem
        errorMsg="Category is required"
        label="Category"
        id="category"
        register={register}
        errors={errors}
        placeholder="Category"
        required
        type="text"
      />
      <FormItem
        errorMsg="Priority is required"
        label="Priority"
        id="priority"
        register={register}
        errors={errors}
        placeholder="Priority"
        required
        type="number"
      />
      <FormItem
        errorMsg="Completed is required"
        label="Completed"
        id="completed"
        register={register}
        errors={errors}
        placeholder="Completed"
        required={false}
        type="checkBox"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
