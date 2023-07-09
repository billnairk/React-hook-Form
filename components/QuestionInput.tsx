import { UseFormRegister } from "react-hook-form";

interface QuestionInputProps {
  register: UseFormRegister<any>;
  name: string;
  value: string;
}

export default function QuestionInput({
  register,
  name,
  value,
}: QuestionInputProps) {
  return (
    <input
      {...register(`${name}`, {
        required: "필수 선택 항목입니다.",
      })}
      name={name}
      value={value}
      type="radio"
      className="m-1"
    />
  );
}
