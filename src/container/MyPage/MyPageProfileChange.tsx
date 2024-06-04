import { useState, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Noimage from "../../../public/MyPageImage/Noimage.jpg";
import camera from "../../../public/MyPageImage/camera.png";
import right from "../../../public/MyPageImage/right.png";
import router from "next/router";
import Footer from "../../components/footer";

const MyPageProfileChange = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [nickname, setNickname] = useState("정지호");
  const [uploadedImage, setUploadedImage] = useState(null);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleProfileChange = (): void => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = e.target.files ? e.target.files[0] : null;
    if (file) {
      const imageUrl: string = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    setNickname(inputValue);
    setIsEditing(false);
  };

  const handleMyPrivacy = () => {
    router.push("/mypage/mypageprivacy");
  };

  const handleMyInterest = () => {
    router.push("/mypage/mypageinterest");
  };

  const handleLogOutClick = () => {
    alert("로그아웃 되었습니다!");
    router.push("/");
  };

  const handleAccountOutClick = () => {
    // 계정탈퇴 아직 구현 X
    alert("계정 탈퇴 페이지로 이동");
    router.push("/");
  };

  return (
    <div>
      <StyleProfileChange>
        <ProfileChangeName>내 프로필 수정</ProfileChangeName>
        <MyProfile>
          <UserProfile>
            <NoImageWrapper>
              <NoImage
                src={uploadedImage || Noimage}
                width={130}
                height={130}
              />
              <Camera src={camera} onClick={handleProfileChange} />
              <input
                type="file"
                ref={imageInputRef}
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </NoImageWrapper>
          </UserProfile>
        </MyProfile>
        <UserNameId>
          <UserName>
            <EatItName>EatIt 닉네임</EatItName>
            {isEditing ? (
              <SaveButton onClick={handleSaveClick}>저장</SaveButton>
            ) : (
              <EditButton onClick={handleEditClick}>수정</EditButton>
            )}
          </UserName>
          {isEditing ? (
            <UserInput
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          ) : (
            <UserText>{nickname}</UserText>
          )}
        </UserNameId>
        <MyPrivacy onClick={handleMyPrivacy}>
          <MyPrivacyTitle>개인 정보 관리</MyPrivacyTitle>
          <MyPrivacyCheck>
            <CheckTitle>본인 인증 필요해요</CheckTitle>
            <RightImage src={right}></RightImage>
          </MyPrivacyCheck>
        </MyPrivacy>
        <MyInterest onClick={handleMyInterest}>
          <InterestTitle>내 관심 태그 설정</InterestTitle>
          <RightImage src={right}></RightImage>
        </MyInterest>
        <UserManagement>
          <LogOut onClick={handleLogOutClick}>로그아웃 ㅣ</LogOut>
          <AccountOut onClick={handleAccountOutClick}>계정탈퇴</AccountOut>
        </UserManagement>
      </StyleProfileChange>
      <Footer />
    </div>
  );
};

export default MyPageProfileChange;

const StyleProfileChange = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  height: 800px;
`;

const ProfileChangeName = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  font-weight: bold;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const MyProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  height: 180px;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EatItName = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

const EditButton = styled.button`
  font-weight: bold;
  color: #978eff;
`;

const SaveButton = styled.button`
  font-weight: bold;
  color: #978eff;
`;

const UserInput = styled.input`
  border: none;
  padding: 5px 0px 5px 2px;
  border-bottom: 1.5px #c6c6c6 solid;
  outline: none;
  color: black;
`;

const UserText = styled.div`
  font-size: 19px;
  border: none;
  padding: 5px 0px 5px 2px;
  border-bottom: 1.5px #c6c6c6 solid;
  outline: none;
  color: black;
`;

const NoImageWrapper = styled.div`
  position: relative;
`;

const NoImage = styled(Image)`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid rgba(229, 229, 229, 0.5);
`;

const Camera = styled(Image)`
  position: absolute;
  padding: 5px;
  border-radius: 50%;
  background-color: white;
  width: 40px;
  height: 40px;
  bottom: 2px;
  right: 13px;
  border: 1px solid rgba(229, 229, 229, 0.5);
  cursor: pointer;
`;

const RightImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

const MyPrivacy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  border: none;
  padding: 5px 0px 5px 2px;
  border-bottom: 1.5px #c6c6c6 solid;
  outline: none;
  margin-top: 100px;
  align-items: center;
  cursor: pointer;
`;

const MyPrivacyTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
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

const MyInterest = styled.div`
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

const InterestTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const UserManagement = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
`;

const LogOut = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #b3b3b3;
  cursor: pointer;
`;

const AccountOut = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #b3b3b3;
  margin-left: 5px;
  cursor: pointer;
`;
