import { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { classNames } from '../lib/class-names';
import FieldGroup from './field-group';

type Props = {
  label: string;
  error?: string;
  currentlength?: number;
  action?: ReactNode;
  register: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  error,
  label,
  currentlength,
  register,
  action,
  className,
  ...props
}: Props) => {
  return (
    <FieldGroup
      label={label}
      error={error}
      currentlength={currentlength}
      action={action}
      maxLength={props.maxLength}
      required={props.required}
      id={register.name}
    >
      <input
        id={register.name}
        className={classNames(
          'flex-1 border rounded px-2 py-1 w-full',
          className
        )}
        {...register}
        {...props}
      />
    </FieldGroup>
  );
};

export default InputField;
