import sendApi from "../sendApi";

export enum CategoryName {
  Study = "스터디",
  Project = "프로젝트",
  Mentoring = "멘토링",
}

export interface PostData {
  title: string;
  content: string;
  categoryName: CategoryName;
  tags: string[];
  mentor: boolean;
  startDate: string;
  endDate: string;
  images: File[];
}

export const getHotPost = () => {
  sendApi.get(`/post/like`);
};

export const getTag = () => {
  sendApi.get("/post/tag");
};
export const postSubmit = async (postData: PostData) => {
  const response = await sendApi.post(`/post`, postData);
  return response.data;
};
