import React from "react";
import { Controller, useForm } from "react-hook-form";
import type { Data } from "../../../types/table";
import FormItem from "./FormItem";
import DropDown from "../../ui/DropDown";
import Button from "../../ui/Button";
import { categories, priority } from "../../../utils/constants";

const Form: React.FC<{ onSubmit: (data: Data) => void; data?: Data; onEdit?: (data: Data) => void }> = ({ onSubmit, onEdit, data }) => {
  const {
    register,
    handleSubmit,
    control,
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
      <label htmlFor="" className="block mb-1 font-medium">
        Category:
      </label>
      <Controller
        name="category" // name of field in form
        control={control}
        defaultValue="Personal"
        rules={{ required: "Category is required" }}
        render={({ field }) => <DropDown options={categories} value={field.value!} onChange={field.onChange} />}
      />
      <label htmlFor="" className="block mb-1 font-medium mt-4">
        Priority:
      </label>
      <Controller
        name="priority" // name of field in form
        control={control}
        defaultValue="High"
        rules={{ required: "Priority is required" }}
        render={({ field }) => <DropDown options={priority} value={field.value!} onChange={field.onChange} />}
      />
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
        className="mt-2"
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
