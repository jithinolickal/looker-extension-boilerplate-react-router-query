// @ts-nocheck
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxiosGet, useAxiosPost } from "../hooks/useApi";

const fetchPosts = async (params) => {
  const { data } = await useAxiosGet(
    `https://jsonplaceholder.typicode.com/posts/1`
  );
  return data;
};

const createPosts = async (body) => {
  const { data } = await useAxiosPost(
    `https://jsonplaceholder.typicode.com/posts`,
    body
  );
  console.log("Post Created -------", data);

  return data;
};

export const useGetPosts = (params = null) => {
  return useQuery<User, Error>({
    queryKey: ["postsGET"],
    queryFn: () => fetchPosts(params),
  });
};

export const usePostPost = (data) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createPosts(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["postsGET"], { exact: true });
      console.log("Data returned--", data);
    },
  });
};

// export const useGetPost=(postId) => {}
// export const usePutPost=() => {}
// export const useDeletePost=() => {}
