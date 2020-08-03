import { useState, useEffect } from "react";

const useShow = (delay = 150) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  }, [delay]);

  return show;
};

export default useShow;
