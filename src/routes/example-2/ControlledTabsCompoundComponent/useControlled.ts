import { useCallback, useRef, useState } from "react";

function useControlled({
  value,
  initialValue,
}: {
  value?: number;
  initialValue: number;
}): [number | undefined, (newValue: number) => void] {
  const { current: isUncontrolled } = useRef(value === undefined);

  const [localValue, setLocalValue] = useState(initialValue);

  const safeValue = isUncontrolled ? localValue : value;
  const safeSetValue = useCallback((newValue: number) => {
    if (isUncontrolled) {
      setLocalValue(newValue);
    }
  }, []);

  return [safeValue, safeSetValue];
}
export default useControlled;
