import React, { useState } from "react";
import styled from "styled-components";
import Tag from "./components/Tag";
import { usePostSubmit } from "@/hooks/usePost";
import { PostData } from "@/api/controller/post";
import { CategoryName } from "@/api/controller/post";

interface MenuTypes {
  $isSelected: boolean;
}
interface Role {
  checked: boolean;
}

const menuItems = [
  { label: "스터디", value: CategoryName.Study },
  { label: "프로젝트", value: CategoryName.Project },
  { label: "멘토링", value: CategoryName.Mentoring },
];

const WritingPage = () => {
  const [menuState, setMenuState] = useState<number>(0);
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]); // 추가

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const contentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files));
    }
  };

  const { mutate: submitPost } = usePostSubmit();

  const handleSubmit = () => {
    const postData: PostData = {
      title,
      content,
      categoryName: menuItems[menuState].value,
      tags,
      mentor: checked,
      startDate,
      endDate,
      images,
    };
    submitPost(postData);
  };

  return (
    <Wrapper>
      <WriteWrapper>
        <MenuWrapper>
          {menuItems.map((item, index) => (
            <MenuDiv
              key={index}
              $isSelected={menuState === index}
              onClick={() => setMenuState(index)}
            >
              {item.label}
            </MenuDiv>
          ))}
        </MenuWrapper>
        <InfoWrapper>
          <ToggleDiv>
            <label htmlFor="toggle" className="toggleSwitch">
              <ToggleInput
                type="checkbox"
                id="toggle"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <ToggleContainer checked={checked}>
                <ToggleButton checked={checked} />
              </ToggleContainer>
            </label>
            {checked ? "멘토링" : "멘티"}
          </ToggleDiv>
          <TitleBox value={title} placeholder="제목" onChange={titleChange} />
          <Tag onChange={handleTagsChange} />
          <MentoringInfo
            value={content}
            placeholder="스터디, 프로젝트, 멘토링 개요 "
            onChange={contentChange}
          />
          <ImageInput type="file" multiple onChange={handleImageChange} />
          <DueBox>
            <p>모집 기간</p>
            <DueInput
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />{" "}
            ~
            <DueInput
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </DueBox>
          <ConfirmBox>
            <ConfirmButton onClick={handleSubmit}>글 작성</ConfirmButton>
          </ConfirmBox>
        </InfoWrapper>
      </WriteWrapper>
    </Wrapper>
  );
};

export default WritingPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  row-gap: 30px;
  flex-direction: column;
  margin-top: 20px;
`;

const WriteWrapper = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 50px;
  border: 2px solid #bababa;
  border-radius: 30px;
  padding: 30px;
`;

const MenuWrapper = styled.div`
  min-width: 450px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10%;
`;

const MenuDiv = styled.div<MenuTypes>`
  width: 70px;
  font-size: 20px;
  color: ${(props) => (props.$isSelected ? "#5649ea" : "black")};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
const TitleBox = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
`;
const ToggleDiv = styled.div`
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ToggleContainer = styled.div<Role>`
  width: 100px;
  height: 50px;
  display: block;
  position: relative;
  border-radius: 30px;
  background: ${(props) => (props.checked ? "#5649ea" : "white")};
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.3);
  }
`;

const ToggleButton = styled.span<Role>`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.checked ? "calc(100% - 44px)" : "4px")};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${(props) => (props.checked ? "#fff" : "#5649ea")};
  transition: left 0.2s ease-in, background 0.2s ease-in;
`;
const ToggleInput = styled.input`
  display: none;
`;

const DueBox = styled.div`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const DueInput = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 20%;
  padding: 0px 10px 0px 10px;
  color: black;
`;

const ImageInput = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  color: black;
`;

const MentoringInfo = styled.textarea`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 20px;
  height: 300px;
  color: black;
  resize: none;
`;
const ConfirmButton = styled.div`
  width: 220px;
  height: 70px;
  background-color: #5649ea;
  color: white;
  border-radius: 40px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ConfirmBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
