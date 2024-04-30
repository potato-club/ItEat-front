import React, { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import PageButton from "./components/PageButton";

const SignUpMain: React.FC = () => {
  const [modalState, setModalState] = useState<number>(0);

  const onNext = () => {
    setModalState((prevState) => prevState + 1);
  };

  const onPrev = () => {
    setModalState((prevState) => prevState - 1);
  };

  const handleButtonClick = () => {
    setModalState((prevState) => (prevState === 0 ? 1 : 0));
  };

  return (
    <div>
      <ModalComponent state={modalState} />
      <PageButton onClick={handleButtonClick} isLeft={modalState === 1} />
    </div>
  );
};

export default SignUpMain;
