"use client";

import Field, { FieldProps } from "../Field";

interface AuthFieldProp extends FieldProps {}

const AuthField = ({ containerClassName, ...props }: AuthFieldProp) => (
  <Field
    containerClassName={`flex flex-col items-stretch justify-center border-white border-[1px] p-2 rounded-lg h-[50px] ${containerClassName}`}
    className="bg-transparent focus:outline-none font-sans placeholder:text-gray-500"
    {...props}
  />
);

export default AuthField;