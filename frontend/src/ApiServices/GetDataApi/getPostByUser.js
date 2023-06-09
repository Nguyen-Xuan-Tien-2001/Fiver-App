import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getPostByUserUrl = '/post/get-post-user'



export const GetPostByUserService = () => {
    const { response: getPostByUserResponse,
        isLoading: getPostByUserIsLoading,
        error: getPostByUserError,
        refetch: getRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getPostByUserUrl,
            requestConfig: {}
        });
    return {getPostByUserResponse, getPostByUserIsLoading, getPostByUserError,getRefetch}
}


