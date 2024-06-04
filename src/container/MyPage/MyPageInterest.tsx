import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const MypageInterest = () => {
  const NickName = "정지호";
  const [selectedColor, setSelectedColor] = useState(""); // 상태 추가
  const [selectedYear, setSelectedYear] = useState(""); // 선택된 년도 상태 추가
  const [isYearSelected, setIsYearSelected] = useState(false); // 클릭 여부 상태 추가
  const [selectedRegion, setSelectedRegion] = useState(""); // 선택된 지역 상태 추가
  const [clickedLanguages, setClickedLanguages] = useState<string[]>([]); // 클릭된 언어 상태 추가

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 선택된 성별에 따라 스타일을 동적으로 설정하는 함수
  const getColorStyle = (colors: any) => {
    if (colors === selectedColor) {
      return {
        color: "white",
        backgroundColor: "#978eff",
        border: "#978eff solid 1px",
      };
    }
    return {};
  };

  // 성별 버튼 클릭 시 상태 업데이트
  const handleColorChange = (colors: any) => {
    setSelectedColor(colors);
    setIsYearSelected(true);
  };

  // 년도 선택 시 상태 업데이트
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
    setIsYearSelected(true);
  };

  // 지역 선택 시 상태 업데이트
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  // 언어 버튼 클릭 시 상태 업데이트
  const handleLanguageButtonClick = (language: string) => {
    if (clickedLanguages.includes(language)) {
      setClickedLanguages(clickedLanguages.filter((item) => item !== language));
    } else {
      setClickedLanguages([...clickedLanguages, language]);
    }
  };

  const onSubmit = (data: any) => {
    router.push("/mypage/mypageprofilechange");
    alert("내 관심 태그가 저장되었습니다.");
  };

  return (
    <div>
      <StyleMyPageInterest>
        <InterestPageName>{NickName}님 관심 태그 설정 </InterestPageName>
        <BoxLine></BoxLine>
        <InterestBox>
          <LangyageBox>
            <LanguageName>Web</LanguageName>
            <LanguageBoxBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("React")}
                onClick={() => handleLanguageButtonClick("React")}
              >
                React
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("Next.js")}
                onClick={() => handleLanguageButtonClick("Next.js")}
              >
                Next.js
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("Redux")}
                onClick={() => handleLanguageButtonClick("Redux")}
              >
                Redux
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("Node.js")}
                onClick={() => handleLanguageButtonClick("Node.js")}
              >
                Node.js
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다1")}
                onClick={() => handleLanguageButtonClick("example입니다1")}
              >
                example입니다1
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다2")}
                onClick={() => handleLanguageButtonClick("example입니다2")}
              >
                example입니다2
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다3")}
                onClick={() => handleLanguageButtonClick("example입니다3")}
              >
                example입니다3
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다4")}
                onClick={() => handleLanguageButtonClick("example입니다4")}
              >
                example입니다4
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다5")}
                onClick={() => handleLanguageButtonClick("example입니다5")}
              >
                example입니다5
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다6")}
                onClick={() => handleLanguageButtonClick("example입니다6")}
              >
                example입니다6
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다7")}
                onClick={() => handleLanguageButtonClick("example입니다7")}
              >
                example입니다7
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다8")}
                onClick={() => handleLanguageButtonClick("example입니다8")}
              >
                example입니다8
              </LanguageBtn>
            </LanguageBoxBtn>
          </LangyageBox>
          <BoxLine></BoxLine>
          <LangyageBox>
            <LanguageName>DataBase</LanguageName>
            <LanguageBoxBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("MySQL")}
                onClick={() => handleLanguageButtonClick("MySQL")}
              >
                MySQL
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("Oracle")}
                onClick={() => handleLanguageButtonClick("Oracle")}
              >
                Oracle
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("SQLite")}
                onClick={() => handleLanguageButtonClick("SQLite")}
              >
                SQLite
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("lowdb")}
                onClick={() => handleLanguageButtonClick("lowdb")}
              >
                lowdb
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다9")}
                onClick={() => handleLanguageButtonClick("example입니다9")}
              >
                example입니다9
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다10")}
                onClick={() => handleLanguageButtonClick("example입니다10")}
              >
                example입니다10
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다11")}
                onClick={() => handleLanguageButtonClick("example입니다11")}
              >
                example입니다11
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다12")}
                onClick={() => handleLanguageButtonClick("example입니다12")}
              >
                example입니다12
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다13")}
                onClick={() => handleLanguageButtonClick("example입니다13")}
              >
                example입니다13
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다14")}
                onClick={() => handleLanguageButtonClick("example입니다14")}
              >
                example입니다14
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다15")}
                onClick={() => handleLanguageButtonClick("example입니다15")}
              >
                example입니다15
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다16")}
                onClick={() => handleLanguageButtonClick("example입니다16")}
              >
                example입니다16
              </LanguageBtn>
            </LanguageBoxBtn>
          </LangyageBox>
          <BoxLine></BoxLine>
          <LangyageBox>
            <LanguageName>언어</LanguageName>
            <LanguageBoxBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("Python")}
                onClick={() => handleLanguageButtonClick("Python")}
              >
                Python
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("JavaScript")}
                onClick={() => handleLanguageButtonClick("JavaScript")}
              >
                JavaScript
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("PHP")}
                onClick={() => handleLanguageButtonClick("PHP")}
              >
                PHP
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("TypeScript")}
                onClick={() => handleLanguageButtonClick("TypeScript")}
              >
                TypeScript
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다17")}
                onClick={() => handleLanguageButtonClick("example입니다17")}
              >
                example입니다17
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다18")}
                onClick={() => handleLanguageButtonClick("example입니다18")}
              >
                example입니다18
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다19")}
                onClick={() => handleLanguageButtonClick("example입니다19")}
              >
                example입니다19
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다20")}
                onClick={() => handleLanguageButtonClick("example입니다20")}
              >
                example입니다20
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다21")}
                onClick={() => handleLanguageButtonClick("example입니다21")}
              >
                example입니다21
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다22")}
                onClick={() => handleLanguageButtonClick("example입니다22")}
              >
                example입니다22
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다23")}
                onClick={() => handleLanguageButtonClick("example입니다23")}
              >
                example입니다23
              </LanguageBtn>
              <LanguageBtn
                clicked={clickedLanguages.includes("example입니다24")}
                onClick={() => handleLanguageButtonClick("example입니다24")}
              >
                example입니다24
              </LanguageBtn>
            </LanguageBoxBtn>
          </LangyageBox>
        </InterestBox>
        <BoxLine></BoxLine>
        <InterestChangeBtnBox>
          <InterestChangeCancelBtn>취소</InterestChangeCancelBtn>
          <InterestChangeCheckBtn
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            저장하기
          </InterestChangeCheckBtn>
        </InterestChangeBtnBox>
      </StyleMyPageInterest>
      <Footer />
    </div>
  );
};

export default MypageInterest;

const LangyageBox = styled.div`
  margin-top: 25px;
`;

const LanguageName = styled.div`
  color: #3e3e3e;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const LanguageBoxBtn = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
const LanguageBtn = styled.button<{ clicked: boolean }>`
  border: ${({ clicked }) =>
    clicked ? "1px solid #978eff" : "1px solid #cac5ff"};
  padding: 6px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  color: ${({ clicked }) => (clicked ? "white" : "#978eff")};
  background-color: ${({ clicked }) => (clicked ? "#978eff" : "white")};
  margin: 0px 10px 10px 0px;
`;

const StyleMyPageInterest = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  height: 1230px;
`;

const InterestPageName = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 25px;
`;

const InterestBox = styled.div``;
const InterestName = styled.div`
  color: #3e3e3e;
  font-size: 16px;
  font-weight: bold;
`;

const InterestChangeBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 45px;
`;

const InterestChangeCancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
  background-color: white;
  color: #978eff;
  font-weight: bold;
`;

const InterestChangeCheckBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  border-radius: 5px;
  outline: none;
  background-color: #978eff;
  color: white;
  font-weight: bold;
`;

const BoxLine = styled.hr``;
