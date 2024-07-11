import { useMutation } from "react-query";
import { signUp } from "@/api/controller/signUp";

export const useSignUp = (
  name: string,
  email: string,
  userRole: string,
  password: string,
  tags: string
) => {
  const { mutate: signUpMutate } = useMutation(
    () => signUp(name, email, password, tags),
    {
      onSuccess: () => {
        alert("회원가입에 성공하였습니다");
      },
      onError: (error) => {
        alert("회원가입중 오류가 발생했습니다");
      },
    }
  );
  return signUpMutate;
};
