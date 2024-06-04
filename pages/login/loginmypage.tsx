import Image from "next/image";
import MainPage from "@/container/mainPage/MainPage";
import MypageHeader from "../../src/container/MyPage/MyPageHeader";

export default function Home() {
  return (
    <div>
      <MypageHeader />
      <MainPage />
    </div>
  );
}
