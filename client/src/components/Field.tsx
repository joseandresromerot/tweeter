"use client";

export interface FieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  containerClassName: string
}

const Field = ({ containerClassName, ...props }: FieldProps) => {
  return (
    <div className={containerClassName}>
      <input {...props} />
    </div>
  );
};

export default Field;