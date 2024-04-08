import clsx from "clsx";
import { FieldError, UseFormRegister } from "react-hook-form";

type FormFieldProps = {
  className?: string;
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  options?: { id: string; name: string }[];
  autoFocus?: boolean;
  required?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  className,
  type,
  placeholder = "",
  label = "",
  name,
  register,
  error,
  options,
  autoFocus = false,
  required = false,
}) => {
  if (type === "select" && options) {
    return (
      <>
        <span className="text-xs text-red-600 h-4">
          {error && error?.message}
        </span>
        {label && (
          <label htmlFor={name}>
            {required && <span className="text-red-600">*</span>}
            {label}
          </label>
        )}
        <select
          className={clsx(className, { "border-red-600": error })}
          autoFocus={autoFocus}
          defaultValue={""}
          {...register(name)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  }

  return (
    <>
      <span className="text-xs text-red-600 h-4">
        {error && error?.message}
      </span>
      {label && (
        <label htmlFor={name}>
          {required && <span className="text-red-600">*</span>}
          {label}
        </label>
      )}
      <input
        type={type}
        className={clsx(className, { "border-red-600": error })}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...register(name)}
      />
    </>
  );
};
export default FormField;
