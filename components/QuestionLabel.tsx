interface QuestionLabelProp {
  children: React.ReactNode;
}

export default function QuestionLabel({ children }: QuestionLabelProp) {
  return (
    <label className="flex items-center hover:bg-blue-200 rounded-md">
      {children}
    </label>
  );
}
