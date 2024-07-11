import React, { useState } from "react";
import styled from "styled-components";
import Select, { ValueType, OptionTypeBase } from "react-select";
import tags from "../../../../public/data/tags.json";

interface TagProps {
  onChange: (selectedTags: string[]) => void;
}

const Tag: React.FC<TagProps> = ({ onChange }) => {
  const [selectedTags, setSelectedTags] =
    useState<ValueType<OptionTypeBase> | null>(null);

  const options = tags.map((tag: any) => ({
    value: tag.name,
    label: tag.name,
  }));

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#5649ea" : "#ccc",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#5649ea",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "white",
      ":hover": {
        backgroundColor: "#321fdb",
      },
    }),
  };

  const handleChange = (selectedOption: ValueType<OptionTypeBase>) => {
    setSelectedTags(selectedOption);
    onChange(
      (selectedOption as OptionTypeBase[]).map((option) => option.value)
    );
  };

  return (
    <TagBox>
      <Select
        options={options}
        value={selectedTags}
        onChange={handleChange}
        isMulti
        placeholder="원하는 태그를 선택해주세요"
        styles={customStyles}
      />
    </TagBox>
  );
};

export default Tag;

const TagBox = styled.div`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
`;
