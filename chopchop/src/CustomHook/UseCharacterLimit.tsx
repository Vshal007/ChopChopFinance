import { useState } from "react";

type UseCharacterLimitProps = {
  initialValue?: string;
  maxLength: number;
};

function useCharacterLimit({
  initialValue = "",
  maxLength,
}: UseCharacterLimitProps) {
  const [value, setValue] = useState<string>(initialValue.slice(0, maxLength));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.slice(0, maxLength);
    setValue(newValue);
  };

  return { value, handleChange };
}

export default useCharacterLimit;
