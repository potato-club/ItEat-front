import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";
import router, { Router } from "next/router";
import Footer from "../../components/footer";

const MypageEstimate = () => {
  const handleProfileChange = () => {
    router.push("/");
  };

  //임의로 닉네임 및 이름 설정
  const NickName = "정지호";
  const UserEmail = "hoo6710@naver.com";
  return (
    <div>
      <StyleMyPageEstimate>견적관리 페이지입니다.</StyleMyPageEstimate>
      <Footer />
    </div>
  );
};

export default MypageEstimate;

const StyleMyPageEstimate = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
