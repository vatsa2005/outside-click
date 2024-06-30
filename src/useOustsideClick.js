import { useState, useEffect } from "react";

function useOutsideClick(ref, displayClass, display) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    function outSideClick() {
      ref.current.classList.remove(displayClass);
      ref.current.classList.add("hidden");
      document.querySelector(".hidden").style.display = "none";
    }
    !flag && document.addEventListener("click", outSideClick);
    return () => {
      document.removeEventListener("click", outSideClick);
      setFlag(false);
    };
  });
  return () => {
    setFlag(true);
    ref.current.classList.remove("hidden");
    ref.current.classList.add(displayClass);
    document.querySelector(`.${displayClass}`).style.display = display;
  };
}

export default useOutsideClick;
