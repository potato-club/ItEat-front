import React, { useState } from "react";
import styled from "styled-components";
import postsData from "../../../public/data/posts.json";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  viewCount: number;
}

interface MenuTypes {
  $isSelected: boolean;
}

const categories = ["전체글", "질문", "정보", "잡담", "기타"];

const CommunityPage: React.FC = () => {
  const posts: Post[] = postsData as Post[];
  const [cateState, setCateState] = useState<number>(0);
  const hotPosts = posts.filter((post) => post.viewCount >= 140).slice(0, 5); // 상위 5개만 선택

  return (
    <Wrapper>
      <HotPostsContainer>
        <HotPostsTitle> 인기글 </HotPostsTitle>

        {hotPosts.map((post) => (
          <HotPost key={post.id}>
            <HotPostTitle>{post.title}</HotPostTitle>
            <HotPostInfo>
              날짜: {post.date} | 작성자: {post.author}
            </HotPostInfo>
          </HotPost>
        ))}
      </HotPostsContainer>
      <CateBtnWrapper>
        {categories.map((category, index) => (
          <CateBtn
            key={index}
            $isSelected={cateState === index}
            onClick={() => setCateState(index)}
          >
            {category}
          </CateBtn>
        ))}
      </CateBtnWrapper>

      <Table>
        <thead>
          <PostInfo>
            {Object.keys(posts[0]).map((key) => (
              <PostColumn key={key}>{key}</PostColumn>
            ))}
          </PostInfo>
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostInfo key={post.id}>
              {Object.values(post).map((value, index) => (
                <PostCell key={index}>{value}</PostCell>
              ))}
            </PostInfo>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default CommunityPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CateBtn = styled.button<MenuTypes>`
  width: 80px;
  color: ${(props) => (props.$isSelected ? "#5649ea" : "#B6B6B6")};
  font-size: 20px;
  font-weight: 600;
`;

const CateBtnWrapper = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const HotPostsContainer = styled.div`
  width: 60%;
  border-radius: 30px;
  padding: 20px;
`;

const HotPostsTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`;

const HotPost = styled.div`
  padding: 5px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`;
const HotPostTitle = styled.h3`
  flex: 1;
  font-size: 20px;
  color: #333333;
  margin-right: 10px;
`;

const HotPostInfo = styled.p`
  font-size: 15px;
  color: #666666;
`;
const Table = styled.table`
  width: 60%;
  border-collapse: collapse;
`;

const PostInfo = styled.tr`
  background-color: #bebebe;
  color: black;
`;

const PostColumn = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #bebebe;
  color: white;
`;

const PostCell = styled.td`
  padding: 10px;
  background-color: white;
`;
