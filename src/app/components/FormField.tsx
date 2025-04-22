import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from '../page.module.css';

interface FormFieldProps {
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  label: string;
}

const FormField = ({
  type,
  id,
  placeholder,
  register,
  error,
  label,
}: FormFieldProps) => {
  return (
    <div className={styles.inputFieldContainer}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default FormField;
