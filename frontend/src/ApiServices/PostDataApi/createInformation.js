import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const createInforUrl = '/user/create-information'



export const CreateInforService = () => {
    const { response: createInforResponse,
        error: createInforError,
        isLoading: createInforIsLoading,
        axiosFetch: createInforRefetch } = useAxiosFunction();

    const callCreateInforRefetch = (data) => {

        createInforRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: createInforUrl,
            requestConfig: {data: data}
        })
    }  


    return { createInforResponse, createInforIsLoading, createInforError, callCreateInforRefetch }
}


