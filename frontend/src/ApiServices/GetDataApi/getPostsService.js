import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getPostsUrl = "/post/get-posts"


export const GetPostsService = () => {
    const { response: getPostResponse,
        isLoading: getPostIsLoading,
        error: getPostError,
        refetch: getPostRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getPostsUrl,
            requestConfig: {}
        });
    return {getPostResponse, getPostIsLoading, getPostError,getPostRefetch}
}


