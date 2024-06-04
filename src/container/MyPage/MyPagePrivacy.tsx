import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";
import router, { Router } from "next/router";
import Footer from "../../components/footer";
import right from "../../../public/MyPageImage/right.png";

const MypagePrivacy = () => {
  const handleChangeEmailClick = () => {
    router.push("/mypage/mypageemailchange");
  };

  const handleChangePwClick = () => {
    router.push("/mypage/mypagepwchange");
  };

  const handleChangePersonalData = () => {
    router.push("/mypage/mypagepersonaldata");
  };

  //임의로 닉네임 및 이름 설정
  const UserEmail = "hoo6710@naver.com";

  return (
    <div>
      <StyleMyPagePrivacy>
        <PrivacyPageName>개인 정보 관리 </PrivacyPageName>
        {/* <PrivacyPhone onClick={handleFindIdClick}>
          <PrivacyUpTitle>
            <PrivacyPhoneTitle>휴대전화 번호</PrivacyPhoneTitle>
          </PrivacyUpTitle>
          <PrivacyPhoneCheck>미인증</PrivacyPhoneCheck>
        </PrivacyPhone> */}
        <PrivacyEmail onClick={handleChangeEmailClick}>
          <PrivacyUpTitle>
            <PrivacyEmailTitle>이메일</PrivacyEmailTitle>
            <MyPrivacyCheck>
              <CheckTitle>본인 인증 필요해요</CheckTitle>
              <RightImage src={right}></RightImage>
            </MyPrivacyCheck>
          </PrivacyUpTitle>
          <PrivacyEmailCheck>{UserEmail}</PrivacyEmailCheck>
        </PrivacyEmail>
        <PrivacyPw onClick={handleChangePwClick}>
          <PrivacyPwTitle>비밀번호</PrivacyPwTitle>
          <RightImage src={right}></RightImage>
        </PrivacyPw>
        <PrivacyPw onClick={handleChangePersonalData}>
          <PrivacyPwTitle>개인정보 수정</PrivacyPwTitle>
          <RightImage src={right}></RightImage>
        </PrivacyPw>
      </StyleMyPagePrivacy>
      <Footer />
    </div>
  );
};

export default MypagePrivacy;
const PrivacyEmailCheck = styled.div`
  color: black;
  font-weight: bold;
  font-size: 17px;
`;

const StyleMyPagePrivacy = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  height: 800px;
`;

const PrivacyPageName = styled.div`
  display: flex;
  font-size: 40px;
  color: black;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 48px;
`;

// const PrivacyPhone = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 90px;
//   border: none;
//   padding: 5px 0px 5px 2px;
//   border-bottom: 1.5px #c6c6c6 solid;
//   outline: none;
//   margin-top: 100px;
//   cursor: pointer;
// `;

// const PrivacyPhoneTitle = styled.div`
//   color: black;
//   font-weight: bold;
//   font-size: 20px;
// `;

// const PrivacyPhoneCheck = styled.div`
//   color: black;
//   font-weight: bold;
//   font-size: 17px;
// `;
const PrivacyUpTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const MyPrivacyCheck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 148px;
`;

const CheckTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding: 6px;
  border-radius: 5px;
  background-color: #fff2f3;
  color: #fa5963;
`;

const PrivacyEmail = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  border: none;
  padding: 5px 0px 5px 2px;
  border-bottom: 1.5px #c6c6c6 solid;
  outline: none;
  margin-top: 50px;
  cursor: pointer;
`;

const PrivacyEmailTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const PrivacyPw = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  border: none;
  padding: 5px 0px 5px 2px;
  border-bottom: 1.5px #c6c6c6 solid;
  outline: none;
  margin-top: 40px;
  align-items: center;
  cursor: pointer;
`;

const PrivacyPwTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const RightImage = styled(Image)`
  width: 20px;
  height: 20px;
`;
