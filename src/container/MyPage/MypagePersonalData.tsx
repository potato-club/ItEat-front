import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const MypagePersonalData = () => {
  const NickName = "정지호";
  const [selectedColor, setSelectedColor] = useState(""); // 상태 추가
  const [selectedYear, setSelectedYear] = useState(""); // 선택된 년도 상태 추가
  const [isYearSelected, setIsYearSelected] = useState(false); // 클릭 여부 상태 추가
  const [selectedRegion, setSelectedRegion] = useState(""); // 선택된 지역 상태 추가

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

  const onSubmit = (data: any) => {
    router.push("/mypage/mypageprivacy");
    alert("내 개인 정보가 수정되었습니다.");
  };

  return (
    <div>
      <StyleMyPagePersonalData>
        <InterestPageName>{NickName}님 정보 수정 </InterestPageName>
        <BoxLine></BoxLine>
        <PrivacyBox>
          <PrivacyGender>
            <GenderName>성별</GenderName>
            <GenderBtn>
              <GenderMan
                style={getColorStyle("남성")}
                onClick={() => handleColorChange("남성")}
              >
                남성
              </GenderMan>
              <GenderWoman
                style={getColorStyle("여성")}
                onClick={() => handleColorChange("여성")}
              >
                여성
              </GenderWoman>
            </GenderBtn>
          </PrivacyGender>
          <PrivacyAge>
            <AgeName>출생년도</AgeName>
            <AgeSelect
              {...register("year")}
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="">년도 선택</option>
              {Array.from({ length: 2024 - 1950 + 1 }, (_, index) => (
                <option key={index} value={2024 - index}>
                  {2024 - index}년
                </option>
              ))}
            </AgeSelect>
          </PrivacyAge>
          <PrivacyRegion>
            <RegionName>지역</RegionName>
            <RegionSelect
              {...register("region")}
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">지역 선택</option>
              <>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="인천">인천</option>
              </>
              {"}"}
            </RegionSelect>
          </PrivacyRegion>
        </PrivacyBox>
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
      </StyleMyPagePersonalData>
      <Footer />
    </div>
  );
};

export default MypagePersonalData;

const StyleMyPagePersonalData = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  height: 1230px;
`;

const PrivacyBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InterestPageName = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 48px;
  margin-bottom: 45px;
`;

const PrivacyGender = styled.div`
  margin-top: 45px;
  margin-bottom: 25px;
`;
const GenderName = styled.div`
  color: #3e3e3e;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const GenderBtn = styled.div`
  margin-bottom: 20px;
`;
const GenderMan = styled.button`
  border: #cac5ff solid 1px;
  padding: 6px 10px 6px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  color: #978eff;
  background-color: white;
`;
const GenderWoman = styled.button`
  border: #cac5ff solid 1px;
  padding: 6px 10px 6px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  color: #978eff;
  margin-left: 10px;
  background-color: white;
`;

const PrivacyAge = styled.div`
  margin-bottom: 45px;
`;

const AgeName = styled.div`
  color: #3e3e3e;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const AgeSelect = styled.select`
  border: #cac5ff solid 1px;
  padding: 6px 10px 6px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  color: #978eff;
`;

const PrivacyRegion = styled.div`
  margin-bottom: 45px;
`;
const RegionName = styled.div`
  color: #3e3e3e;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const RegionSelect = styled.select`
  border: #cac5ff solid 1px;
  padding: 6px 10px 6px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  color: #978eff;
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
