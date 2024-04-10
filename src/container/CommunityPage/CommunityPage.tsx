import React from "react";
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

const CommunityPage: React.FC = () => {
  const posts: Post[] = postsData as Post[];
  const hotPosts = posts.filter((post) => post.viewCount >= 140);

  return (
    <Wrapper>
      <Title>커뮤니티 페이지</Title>
      <Separator />
      <HotPostsContainer>
        <HotPostsTitle>Hot 게시글</HotPostsTitle>
        {hotPosts.map((post) => (
          <HotPost key={post.id}>
            <HotPostTitle>{post.title}</HotPostTitle>
            <HotPostInfo>
              작성자: {post.author} | 날짜: {post.date} | 조회수:{" "}
              {post.viewCount}
            </HotPostInfo>
          </HotPost>
        ))}
      </HotPostsContainer>
      <Separator />
      <Table>
        <thead>
          <tr>
            <Th>글 ID</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>날짜</Th>
            <Th>조회수</Th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.author}</Td>
              <Td>{post.date}</Td>
              <Td>{post.viewCount}</Td>
            </tr>
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
  background-color: #f2f2f2;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 20px;
`;

const Separator = styled.hr`
  width: 100%;
  margin-bottom: 20px;
`;

const HotPostsContainer = styled.div`
  width: 60%;
  margin-bottom: 20px;
`;

const HotPostsTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
`;

const HotPost = styled.div`
  background-color: #ffeded;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const HotPostTitle = styled.h3`
  font-size: 1.4rem;
  color: #000000;
`;

const HotPostInfo = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Table = styled.table`
  width: 60%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #bebebe;
  color: white;
`;

const Td = styled.td`
  padding: 10px;
  background-color: white;
`;
