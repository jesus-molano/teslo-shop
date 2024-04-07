import clsx from "clsx";
import { FieldError, UseFormRegister } from "react-hook-form";

type FormData = {
  email: string;
  name: string;
  password: string;
};

type FormFieldProps = {
  className?: string;
  label?: string;
  type: string;
  placeholder?: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  autoFocus?: boolean;
};
type ValidFieldNames = "email" | "name" | "password";

const FormField: React.FC<FormFieldProps> = ({
  className,
  type,
  placeholder = "",
  label = "",
  name,
  register,
  error,
  autoFocus = false,
}) => (
  <>
    <span className="text-xs text-red-600 h-4">{error && error?.message}</span>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type={type}
      className={clsx(className, { "border-red-600": error })}
      placeholder={placeholder}
      autoFocus={autoFocus}
      {...register(name)}
    />
  </>
);
export default FormField;
