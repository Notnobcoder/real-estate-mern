import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { Input } from '@chakra-ui/react'

interface InputProps {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  id: string;
  required: boolean;
  errors: FieldErrors
  disabled: boolean
  label?: string
  type?: "text" | "password" | "email"
}

export const InputComponent: React.FC<InputProps> = ({ placeholder, register, type, required, id, disabled, errors }) => {
  return (

    <>
      <Input
        autoComplete="off"
        className="w-full"
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        type={type}
        {...register(id, { required })}
      />
      {errors?.[id] && (
        <p className="text-xs text-red-600">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </ >
  )
}
