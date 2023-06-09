import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getCategoryDetailUrl = '/post/get-category-details'



export const GetCategoryDetailService = () => {
    const { response: getCatDetailResponse,
        isLoading: getCatDetailIsLoading,
        error: getCatDetailError,
        refetch: getCatDetailRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getCategoryDetailUrl,
            requestConfig: {}
        });
    return {getCatDetailResponse, getCatDetailIsLoading, getCatDetailError,getCatDetailRefetch}
}


