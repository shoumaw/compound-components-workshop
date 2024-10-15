import { useCallback, useRef, useState } from "react";

export function useControlled<T>({ value, initialValue }: { value?: T; initialValue: T }): [T, (newValue: T) => void] {
  const { current: isUncontrolled } = useRef(value === undefined);

  const [localValue, setLocalValue] = useState<T>(initialValue);

  const refinedValue = isUncontrolled ? localValue : value;

  const setValue = useCallback((newValue: T) => {
    if (isUncontrolled) {
      setLocalValue(newValue);
    }
  }, []);

  return [refinedValue as T, setValue];
}
