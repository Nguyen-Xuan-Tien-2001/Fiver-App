import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getOrderByFreelancerUrl = '/order/find-order-detail-list-freelancer'



export const GetOrderByFreelancerService = () => {
    const { response: getOrderByFreelanceResponse,
        isLoading: getOrderByFreelanceIsLoading,
        error: getOrderByFreelanceError,
        refetch: getOrderByFreelanceRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getOrderByFreelancerUrl,
            requestConfig: {}
        });
    return {getOrderByFreelanceResponse, getOrderByFreelanceIsLoading, getOrderByFreelanceError,getOrderByFreelanceRefetch}
}


