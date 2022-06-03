import { useRef } from "react";

const useToggle = (showClass) => {
  const container__Ref = useRef(null);
  const overlay__Ref = useRef(null);

  const openToggle = () => {
    container__Ref.current && container__Ref.current.classList.add(showClass);
    overlay__Ref.current && overlay__Ref.current.classList.add("show");
  };

  const closeToggle = () => {
    container__Ref.current && container__Ref.current.classList.remove(showClass);
    overlay__Ref.current && overlay__Ref.current.classList.remove("show");
  };

  const ContainerToggle = ({ children }) => {
    return (
      <>
        {children}
        <div onClick={closeToggle} className="overlay" ref={overlay__Ref}></div>
      </>
    );
  };

  return [container__Ref, openToggle, closeToggle, ContainerToggle];
};

export default useToggle;
