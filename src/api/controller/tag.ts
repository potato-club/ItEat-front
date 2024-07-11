import sendApi from "../sendApi";

export const getTag = () => {
  sendApi.get("/post/tag");
};
