import React, { useState } from "react";
import { styled } from "styled-components";
import Category from "../../components/Cetegory";

interface MenuTypes {
  $isSelected: boolean;
}

const MentoringPage = () => {
  const [menuState, setMenuState] = useState<number>(0);
  return (
    <Wrapper>
      <MenuBar>
        <MenuBtn $isSelected={menuState === 0} onClick={() => setMenuState(0)}>
          멘토 구함
        </MenuBtn>
        <MenuBtn $isSelected={menuState === 1} onClick={() => setMenuState(1)}>
          멘티 구함
        </MenuBtn>
        <WritingBtn>글쓰기</WritingBtn>
      </MenuBar>
      <Category />
      <PostWrapper>
        <PostBox>
          <TitleLine>
            <UserImage />
            <TitleWrapper>
              <TitleBox>
                <PostTitle>여기에 제목을 적을겁니다</PostTitle>
                <PostTags>여기에는 태그들을 넣을겁니다</PostTags>
              </TitleBox>
              <PostInfo> 12시간전 | 조회수 : 40 |좋아요 : 12 </PostInfo>
            </TitleWrapper>
          </TitleLine>
          <PostcontentLine>
            이러러럴럴러러ㅓ러러ㅓ러러케케케ㅔㅋ케ㅔ켘케ㅔ케케케켘케
          </PostcontentLine>
        </PostBox>
      </PostWrapper>
      <PostWrapper>
        <PostBox>
          <TitleLine>
            <UserImage />
            <TitleWrapper>
              <TitleBox>
                <PostTitle>여기에 제목을 적을겁니다</PostTitle>
                <PostTags>여기에는 태그들을 넣을겁니다</PostTags>
              </TitleBox>
              <PostInfo> 12시간전 | 조회수 : 40 |좋아요 : 12 </PostInfo>
            </TitleWrapper>
          </TitleLine>
          <PostcontentLine>
            이러러럴럴러러ㅓ러러ㅓ러러케케케ㅔㅋ케ㅔ켘케ㅔ케케케켘케
          </PostcontentLine>
        </PostBox>
      </PostWrapper>
      <PostWrapper>
        <PostBox>
          <TitleLine>
            <UserImage />
            <TitleWrapper>
              <TitleBox>
                <PostTitle>여기에 제목을 적을겁니다</PostTitle>
                <PostTags>여기에는 태그들을 넣을겁니다</PostTags>
              </TitleBox>
              <PostInfo> 12시간전 | 조회수 : 40 |좋아요 : 12 </PostInfo>
            </TitleWrapper>
          </TitleLine>
          <PostcontentLine>
            이러러럴럴러러ㅓ러러ㅓ러러케케케ㅔㅋ케ㅔ켘케ㅔ케케케켘케
          </PostcontentLine>
        </PostBox>
      </PostWrapper>
      <PostWrapper>
        <PostBox>
          <TitleLine>
            <UserImage />
            <TitleWrapper>
              <TitleBox>
                <PostTitle>여기에 제목을 적을겁니다</PostTitle>
                <PostTags>여기에는 태그들을 넣을겁니다</PostTags>
              </TitleBox>
              <PostInfo> 12시간전 | 조회수 : 40 |좋아요 : 12 </PostInfo>
            </TitleWrapper>
          </TitleLine>
          <PostcontentLine>
            이러러럴럴러러ㅓ러러ㅓ러러케케케ㅔㅋ케ㅔ켘케ㅔ케케케켘케
          </PostcontentLine>
        </PostBox>
      </PostWrapper>
    </Wrapper>
  );
};

export default MentoringPage;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

const MenuBar = styled.div`
  width: 70%;
  display: flex;
  margin-top: 50px;
`;
const MenuBtn = styled.button<MenuTypes>`
  width: 150px;
  border-color: red;
  color: ${(props) => (props.$isSelected ? "#5649ea" : "#B6B6B6")};
  font-size: 25px;
  font-weight: 600;
`;
const WritingBtn = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  color: white;
  margin-left: auto;
  background-color: #b6b6b6;
  border-radius: 30px;
  &:hover {
    background-color: #5649ea;
  }
`;

const PostWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

const PostBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #eaeaea;
  border-radius: 50px;
  padding: 40px;
  color: black;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
const TitleLine = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: blue;
`;
const TitleWrapper = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleBox = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
`;
const PostTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
const PostTags = styled.div``;
const PostInfo = styled.div`
  font-size: 18px;
`;
const PostcontentLine = styled.div`
  width: 100%;
  display: flex;
`;
