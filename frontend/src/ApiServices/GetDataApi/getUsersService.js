import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getUsersUrl = '/user/get-users'



export const GetUsersService = () => {
    const { response: getUserResponse,
        isLoading: getUserIsLoading,
        error: getUserError,
        refetch: getUserRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getUsersUrl,
            requestConfig: {}
        });
    return {getUserResponse, getUserIsLoading, getUserError,getUserRefetch}
}


