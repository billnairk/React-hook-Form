interface FormChildDivProp {
  subject: string;
  children?: React.ReactNode;
}

export default function FormChildDiv({ subject, children }: FormChildDivProp) {
  return <div className={`${subject} flex flex-col`}>{children}</div>;
}
