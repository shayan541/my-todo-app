import React from "react";
import { useForm } from "react-hook-form";
import type { Data } from "../../../types/table";
import FormItem from "./FormItem";
// import DropDown from "../DropDown";

const Form: React.FC<{ onSubmit: (data: Data) => void; data?: Data; onEdit?: (data: Data) => void }> = ({ onSubmit, onEdit, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  return (
    <form
      className="flex flex-col mt-4"
      onSubmit={
        onEdit
          ? handleSubmit((formData) => {
              onEdit({ ...formData, id: data!.id });
            })
          : handleSubmit(onSubmit)
      }
    >
      <FormItem
        errorMsg="Title is required"
        label="Title"
        id="title"
        register={register}
        errors={errors}
        placeholder="Title"
        required
        type="text"
        value={data?.title}
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
        value={data?.category}
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
        value={data?.priority}
      />
      {/* <DropDown onChange={} options={["High", "Medium", "Low"]} value={} /> */}
      <FormItem
        errorMsg="Completed is required"
        label="Completed"
        id="completed"
        register={register}
        errors={errors}
        placeholder="Completed"
        required={false}
        type="checkbox"
        value={data?.completed}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
