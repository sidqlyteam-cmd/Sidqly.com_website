import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = '',
  required,
  ...props
}) => {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="block text-sm font-bold text-sidqly-navy">
          {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
        </label>
      </div>
      <input
        id={id}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={errorId}
        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sidqly-green-soft focus:ring-offset-1 text-sm transition-all placeholder:text-gray-400 ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-200 focus:ring-sidqly-green-soft'
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
