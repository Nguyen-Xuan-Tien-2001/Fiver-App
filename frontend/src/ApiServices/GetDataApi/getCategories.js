import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getCategoriesUrl = '/post/get-categories'



export const GetCategoriesService = () => {
    const { response: getCategoriesResponse,
        isLoading: getCategoriesIsLoading,
        error: getCategoriesError,
        refetch: getRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getCategoriesUrl,
            requestConfig: {}
        });
    return {getCategoriesResponse, getCategoriesIsLoading, getCategoriesError,getRefetch}
}


