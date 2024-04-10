import React, { useState } from "react";
import SignUpContainer from "../SignUpContainer";
import SignUpTags from "../SignUpTags";

interface ModalProps {
  state: number;
}

const ModalComponent: React.FC<ModalProps> = ({ state }) => {
  return state === 1 ? <SignUpContainer /> : <SignUpTags />;
};

export default ModalComponent;
