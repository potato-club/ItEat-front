import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";
import Noimage from "../../../public/MyPageImage/Noimage.jpg";
import correction from "../../../public/MyPageImage/correction.png";
import router, { Router } from "next/router";
import Footer from "../../components/footer";

const MyPageContainer = () => {
  const handleProfileChange = () => {
    router.push("/mypage/mypageprofilechange");
  };

  //임의로 닉네임 및 이름 설정
  const NickName = "정지호";
  const UserEmail = "hoo6710@naver.com";
  return (
    <div>
      <StyleMyPage>
        <UserInfo>
          내 프로필
          <MyProfile>
            <UserProfile>
              <NoImage src={Noimage} />
              <UserNameId>
                <UserName>{NickName}님</UserName>
                <UserId>{UserEmail}</UserId>
              </UserNameId>
            </UserProfile>
            <ProfileChange>
              <Correction src={correction} onClick={handleProfileChange} />
              <ProfileChangeBtn onClick={handleProfileChange}>
                수정
              </ProfileChangeBtn>
            </ProfileChange>
          </MyProfile>
        </UserInfo>
      </StyleMyPage>
      <Footer />
    </div>
  );
};

export default MyPageContainer;

const StyleMyPage = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 600px;
  font-size: 22px;
  color: black;
  font-weight: bold;
`;

const MyProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  width: 500px;
  height: 180px;
  border: 2px #808080 solid;
  margin-top: 20px;
  border-radius: 20px;
  background-color: white;
  justify-content: space-between;
`;
const ProfileChange = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  border: 2px #5649ea solid;
  padding: 5px 8px 5px 8px;
`;

const ProfileChangeBtn = styled.button`
  font-size: 15px;
  color: #5649ea;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const UserNameId = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 2px;
`;

const UserId = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const NoImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

const Correction = styled(Image)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;
