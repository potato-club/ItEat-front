import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { TiDelete } from "react-icons/ti";

const Category = () => {
  const categories = [
    "a",
    "ab",
    "abc",
    "bade",
    "bfgeds",
    "grfdaefeg",
    "fdsagegaf",
    "awfevad",
    "java",
    "c++",
    "html",
    "adgadfa",
    "gdfadgadfhgeqf",
    "grafdgqdq",
    "gfgvfqh4gf",
    "database",
    "frontend",
    "backend",
  ];
  const [input, setInput] = useState("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filteredTags = categories.filter((tag) =>
      tag.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredTags(filteredTags);
  }, [input]);

  const handleTagClick = (tag: string) => {
    const formattedTag = `#${tag}`;
    if (selectedTags.includes(formattedTag)) {
      setInput("");
    } else {
      setSelectedTags([...selectedTags, formattedTag]);
      setInput("");
    }
  };
  const deleteTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  return (
    <Wrapper>
      <KeywordP>키워드</KeywordP>
      <SelectedTags>
        {selectedTags.map((tag, index) => (
          <Keyword key={index}>
            {tag}
            <IconDiv>
              <TiDelete onClick={() => deleteTag(tag)} />
            </IconDiv>
          </Keyword>
        ))}
      </SelectedTags>
      <div>
        <TagInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="키워드 추가"
          ref={focusRef}
        />
        {filteredTags.length > 0 && (
          <FilteredTagWrapper>
            {filteredTags.map((tag, index) => (
              <FilteredTag key={index} onClick={() => handleTagClick(tag)}>
                {tag}
              </FilteredTag>
            ))}
          </FilteredTagWrapper>
        )}
      </div>
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #bababa;
  border-radius: 50px;
  padding: 30px;
  gap: 10px;
`;

const Keyword = styled.div`
  background-color: #5649ea;
  color: white;
  height: 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding: 10px;
`;
const KeywordP = styled.div`
  color: black;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const TagInput = styled.input`
  color: black;
  border: 2px solid black;
`;

const SelectedTags = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 150px;
  flex-wrap: wrap;

  justify-content: center;
`;
const DeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: black;
`;

const FilteredTagWrapper = styled.div`
  width: 100px;
  min-height: 150px;
  max-height: 230px;
  background-color: #bababa;
  flex-direction: column;
  display: flex;
  overflow-y: scroll;
  position: absolute;
`;

const FilteredTag = styled.div`
  width: 100%;
  height: 20px;
  &:hover {
    background-color: #5649ea;
  }
  cursor: pointer;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
