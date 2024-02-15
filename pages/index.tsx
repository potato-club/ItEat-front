import Image from "next/image";
import { Inter } from "next/font/google";
import Login from '../pages/login'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Login/>
      <h1 style={{ fontSize: 50 }}> 메인 페이지 입니다.</h1>
      <div>asd</div>
    </>
  );
}
