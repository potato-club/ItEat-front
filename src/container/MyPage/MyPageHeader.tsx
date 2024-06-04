import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { IoMdSearch } from "react-icons/io";
import router from "next/router";
import Image from "next/image";
import Noimage from "../../../public/MyPageImage/Noimage.jpg";
import Downimage from "../../../public/MyPageImage/down.png";
import Upimage from "../../../public/MyPageImage/up.png";
import SearchModal from "../../components/SearchModal";

interface MenuTypes {
  $isSelected: boolean;
}

const MyPageHeader: React.FC = () => {
  const [menuState, setMenuState] = useState<number | undefined>(undefined);
  const [searchState, setSearchState] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleMyPageClick = () => {
    router.push("/mypage/mypage");
  };

  const handleEstimatePageClick = () => {
    router.push("/mypage/mypageestimate");
  };

  const handleAlarmCheck = () => {
    alert("도착한 알림이 없습니다.");
  };

  const handleLogOutClick = () => {
    alert("로그아웃 되었습니다!");
    router.push("/");
  };

  const handleMainClick = () => {
    router.push("/");
    setMenuState(undefined);
  };

  const mentoringClick = () => {
    setMenuState(2);
    router.push("/mentoringPage");
  };

  const toggleNav = (show: boolean) => {
    setShowNav(show);
  };

  const NoImage = (props: any) => (
    <StyledNoImage {...props} onClick={() => toggleNav(true)} />
  );

  const DownImage = (props: any) => (
    <StyledDownImage {...props} onClick={() => toggleNav(true)} />
  );

  const UpImage = (props: any) => (
    <StyledUpImage {...props} onClick={() => toggleNav(false)} />
  );

  const NickName = "정지호";

  return (
    <>
      {searchState && (
        <>
          <SearchWrapper>
            <CloseBtn onClick={() => setSearchState(false)}>닫기</CloseBtn>
            <SearchModal />
          </SearchWrapper>
          <GlobalStyle />
        </>
      )}
      <Wrapper>
        <Typo onClick={handleMainClick}>EatIt</Typo>
        <MenuWrapper>
          <MenuDiv
            $isSelected={menuState === 0}
            onClick={() => setMenuState(0)}
          >
            스터디
          </MenuDiv>
          <MenuDiv
            $isSelected={menuState === 1}
            onClick={() => setMenuState(1)}
          >
            프로젝트
          </MenuDiv>
          <MenuDiv $isSelected={menuState === 2} onClick={mentoringClick}>
            멘토링
          </MenuDiv>
          <MenuDiv
            $isSelected={menuState === 3}
            onClick={() => setMenuState(3)}
          >
            커뮤니티
          </MenuDiv>
        </MenuWrapper>
        <LogSignBox>
          <SearchDiv>
            <IoMdSearch
              onClick={() => setSearchState(!searchState)}
              size={30}
              color="black"
            />
          </SearchDiv>
          <EstimateBtn onClick={handleEstimatePageClick}>견적관리</EstimateBtn>
          <AlarmBtn onClick={handleAlarmCheck}>알림</AlarmBtn>
          <ImageDiv>
            {showNav ? (
              <UpImage src={Upimage} />
            ) : (
              <>
                <NoImage src={Noimage} />
                <DownImage src={Downimage} />
              </>
            )}
          </ImageDiv>
        </LogSignBox>
      </Wrapper>
      {showNav && (
        <NavWrapper>
          <NavName>{NickName}님</NavName>
          <NavItem onClick={handleMyPageClick}>마이페이지</NavItem>
          <NavItem onClick={handleEstimatePageClick}>견적 관리</NavItem>
          <NavItem onClick={handleLogOutClick}>로그아웃</NavItem>
        </NavWrapper>
      )}
    </>
  );
};

export default MyPageHeader;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 5%;
  justify-content: space-between;
`;

const Typo = styled.div`
  font-size: 48px;
  color: #5649ea;
  font-style: italic;
  font-weight: 700;
  margin-left: 10%;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  width: 450px;
  min-width: 450px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10%;
`;

const MenuDiv = styled.div<MenuTypes>`
  width: 70px;
  font-size: 20px;
  color: ${(props) => (props.$isSelected ? "#5649ea" : "black")};
  font-weight: 500;
  cursor: pointer;
`;

const LogSignBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-right: 50px;
  align-items: center;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 100px;
  transition: height 0.3s ease;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const CloseBtn = styled.div`
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: right;
`;

const SearchDiv = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #d0d0d0;
    border-radius: 50%;
  }
`;

const EstimateBtn = styled.div`
  width: 70px;
  font-size: 20px;
  color: #5649ea;
  font-weight: 500;
  cursor: pointer;
`;

const AlarmBtn = styled.div`
  width: 70px;
  font-size: 20px;
  color: #5649ea;
  font-weight: 500;
  cursor: pointer;
`;

const StyledNoImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(229, 229, 229, 0.5);
  cursor: pointer;
`;

const StyledDownImage = styled(Image)`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const StyledUpImage = styled(Image)`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  align-items: center;
  position: relative;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 200px;
  right: 0;
  width: 190px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 10;
`;

const NavName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  height: 70px;
`;

const NavItem = styled.div`
  color: #5649ea;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`;
