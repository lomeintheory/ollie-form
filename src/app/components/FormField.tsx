import { FieldError, UseFormRegister } from 'react-hook-form';
import styles from './form-field.module.css';
import { useState } from 'react';

interface FormFieldProps {
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  label: string;
  passwordRequirements?: string;
  optional?: boolean;
}

const FormField = ({
  type,
  id,
  placeholder,
  register,
  error,
  label,
  passwordRequirements,
  optional,
}: FormFieldProps) => {
  const [touched, setTouched] = useState(false);

  const registerProps = register(id);

  return (
    <div
      role='group'
      aria-label='Input Field'
      className={styles.inputFieldContainer}>
      <label htmlFor={id}>
        {label}
        {optional && <span className={styles.optionalLabel}> (optional)</span>}
      </label>
      <input
        type={type}
        id={id}
        className={styles.inputField}
        placeholder={placeholder}
        {...registerProps}
        onBlur={e => {
          if (registerProps.onBlur) {
            registerProps.onBlur(e);
          }

          setTouched(true);
        }}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
      {!touched && !error && passwordRequirements && (
        <p className={styles.passwordRequirements}>{passwordRequirements}</p>
      )}
    </div>
  );
};

export default FormField;
