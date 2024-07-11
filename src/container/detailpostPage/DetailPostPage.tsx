import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Comment from "./Comment";

const DetailPostPage = () => {
  return (
    <Wrapper>
      <PostWrapper>
        <MainBox>
          <TagLine>ad</TagLine>
          <TitleBox>
            <UserImage />
            <InfoBox>
              <Title>제목을 입력할겁니다</Title>
              <InfoLine>
                작성자 : 룰루랄라
                <LookLike>150, 30</LookLike>
              </InfoLine>
            </InfoBox>
          </TitleBox>
        </MainBox>
        <ContentBox>
          <ContentImage />
          <Content>
            이런식으로 더미데이터를 이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
            더미데이터를 넣을겁니다이런식으로 더미데이터를 넣을겁니다이런식으로
          </Content>
          <BtnBox>
            <Button>❤️ 좋아요</Button>
            <Button>⭐️ 즐겨찾기</Button>
          </BtnBox>
        </ContentBox>
      </PostWrapper>
      <Comment />
    </Wrapper>
  );
};

export default DetailPostPage;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;
const PostWrapper = styled.div`
  width: 80%;
  height: 1000px;
  border-radius: 20px;
  border: 1px solid #bababa;
  margin-top: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const MainBox = styled.div`
  height: 200px;
  border-bottom: 2px solid #bababa;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
const TagLine = styled.div`
  color: #5649ea;
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
`;
const TitleBox = styled.div`
  display: flex;
  gap: 20px;
  height: 100px;
`;
const InfoBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: blue;
`;
const ImageBox = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: black;
`;
const InfoLine = styled.div`
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;
const LookLike = styled.div``;

const ContentBox = styled.p`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
const ContentImage = styled.div`
  width: 95%;
  height: 500px;
  background-color: #bababa;
`;
const Content = styled.div`
  width: 95%;
  color: #bababa;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 50px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #bababa;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
