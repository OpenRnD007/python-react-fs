import axios, { AxiosError } from "axios";

export const makePostApiCall = async (url: string, data: Object, abortController: AbortController) => {

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Token ${import.meta.env.VITE_API_TOKEN}` ,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            signal: abortController.signal // Pass the abort signal to axios
        });
        return response.data
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axios.isCancel(axiosError)) {
            // Handle the cancellation of the request
            console.log('Fetch products request canceled:', axiosError.message);
        } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error setting up the request:', error);
        }
    }
}