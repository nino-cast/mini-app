import { ReactNode } from 'react';

type Props = {
  id: string;
  label: string;
  children: ReactNode;
  error?: string;
  currentlength?: number;
  action?: ReactNode;
  maxLength?: number;
  required?: boolean;
};

const FieldGroup = ({
  error,
  label,
  currentlength,
  action,
  required,
  maxLength,
  children,
  id,
}: Props) => {
  return (
    <div>
      <div>
        <label htmlFor={id}>
          {label}
          {required && <sup className="text-red-500">*</sup>}
        </label>
      </div>
      <div className="flex space-x-2">
        {children}
        {action}
      </div>
      <div className="flex text-sm space-x-4">
        {error && <p className="text-red-500 flex-1">{error}</p>}
        {maxLength && (
          <p className="text-gray-500 ml-auto">
            {currentlength || 0} / {maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default FieldGroup;
