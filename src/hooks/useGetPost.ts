import { getHotPost } from "@/api/controller/post";
import React, { useState } from "react";
import { useQuery } from "react-query";
export const useGetHotPost = async () => {
  const { isLoading, data, isError, error } = useQuery("get-product");
};
