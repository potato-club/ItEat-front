import { useMutation, useQueryClient } from "react-query";
import { postSubmit, PostData } from "../api/controller/post";

export const usePostSubmit = (postdata: PostData) => {
  const queryClient = useQueryClient();

  const { mutate: putUnFollowMutate } = useMutation(
    () => postSubmit(postdata),
    {
      onSuccess: () => {
        alert("게시글이 작성되었습니다");
      },
      onError: (error) => {
        alert("작성중 오류가 발생했습니다.잠시후에 시도해주세요");
      },
    }
  );
  // return useMutation(postSubmit, {
  //   onSuccess: () => {
  //     alert("게시글 작성이 완료되었습니다.");
  //     // 필요한 경우 데이터 다시 가져오기 또는 페이지 이동 등의 추가 작업 수행
  //     queryClient.invalidateQueries("posts"); // 예: posts 쿼리 무효화
  //   },
  //   onError: (error: any) => {
  //     console.error("게시글 작성 오류:", error);
  //     alert("게시글 작성 중 오류가 발생했습니다.");
  //   },
  // });
};
