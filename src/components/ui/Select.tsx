import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  id: string;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  id,
  className = '',
  required,
  placeholder = 'Select an option',
  ...props
}) => {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-bold text-sidqly-navy">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={errorId}
        className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sidqly-green-soft focus:ring-offset-1 text-sm transition-all ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-200 focus:ring-sidqly-green-soft'
        } ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
