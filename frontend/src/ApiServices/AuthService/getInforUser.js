import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getInforUserUrl = '/user/get-user'



export const GetInforUserService = () => {
    const { response: getInforUserResponse,
        isLoading: getInforUserIsLoading,
        error: getInforUserError,
        refetch: getRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getInforUserUrl,
            requestConfig: {}
        });
    return {getInforUserResponse, getInforUserIsLoading, getInforUserError,getRefetch}
}


