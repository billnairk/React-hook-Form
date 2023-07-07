interface QuestionTitleSpanProp {
  children: React.ReactNode;
}

export default function QuestionTitleSpan({ children }: QuestionTitleSpanProp) {
  return <span className="text-lg font-semibold">{children}</span>;
}
