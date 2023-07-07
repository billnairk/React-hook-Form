import { FieldErrors } from "react-hook-form";

interface NotSelectedErrorMsgProp {
  name: string;
  errors: FieldErrors;
}

export default function NotSelectedErrorMsg({
  errors,
  name,
}: NotSelectedErrorMsgProp) {
  return (
    <span className="text-red-600 font-semibold text-xs">
      {errors[name]?.message}
    </span>
  );
}
