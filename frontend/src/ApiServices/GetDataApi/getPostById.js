import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetPostsByIDService = (id) => {
    let getPostsByIDUrl = `/post/get-posts/${id}`
    const { response: getPostRByIDResponse,
        isLoading: getPostIByIDsLoading,
        error: getPostEByIDError,
        refetch: getPostRByIDRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getPostsByIDUrl,
            requestConfig: {}
        });
    return {getPostRByIDResponse, getPostIByIDsLoading, getPostEByIDError,getPostRByIDRefetch}
}


