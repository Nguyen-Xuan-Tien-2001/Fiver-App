import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetPostDetailByIDService = (id) => {
    let getPostDetailByIDUrl = `/post/get-post/${id}`
    const { response: getPostDetailByIDResponse,
        isLoading: getPostDetailByLoading,
        error: getPostDetailByIDError,
        refetch: getPostDetailByIDRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getPostDetailByIDUrl,
            requestConfig: {}
        });
    return {getPostDetailByIDResponse, getPostDetailByLoading, getPostDetailByIDError,getPostDetailByIDRefetch}
}


