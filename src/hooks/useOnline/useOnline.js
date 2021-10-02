import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", function () {
      setOnline(true);
    });

    window.addEventListener("offline", function () {
      setOnline(false);
    });
  }, []);
  return online;
};

export default useOnline;
