import { FC } from "react";

interface FormInputProps {
  type: string;
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}

const FormInput: FC<FormInputProps> = ({
  type,
  name,
  id,
  value,
  placeholder,
  className,
}) => {
  return (
    <>
      <input
        type={type}
        name={name !== "" ? name : ""}
        id={id !== "" ? id : ""}
        value={value !== "" ? value : ""}
        placeholder={placeholder !== "" ? placeholder : ""}
        className={`${
          className
            ? className
            : "border-2 border-mrk-chambray text-mrk-chambray p-5 rounded-lg focus:bg-slate-200 text-2xl"
        }`}
        required
      />
    </>
  );
};

export default FormInput;
