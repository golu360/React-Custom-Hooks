import { useState, useCallback } from "react";

const useToggle = (toggled = false) => {
  const [toggle, setToggle] = useState(toggled);

  const toggleChange = useCallback(() => setToggle((toggle) => !toggle), []);
  return [toggle, toggleChange];
};

export default useToggle;
