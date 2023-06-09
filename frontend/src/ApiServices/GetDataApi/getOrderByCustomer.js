import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const getOrderByCustomerUrl = '/order/find-order-detail-list-customer'



export const GetOrderByCustomerService = () => {
    const { response: getOrderByCustomerResponse,
        isLoading: getOrderByCustomerIsLoading,
        error: getOrderByCustomerError,
        refetch: getOrderByCustomerRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getOrderByCustomerUrl,
            requestConfig: {}
        });
    return {getOrderByCustomerResponse, getOrderByCustomerIsLoading, getOrderByCustomerError,getOrderByCustomerRefetch}
}


