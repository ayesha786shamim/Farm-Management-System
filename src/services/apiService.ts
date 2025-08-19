import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getData = async <Response>(endpoint: string) => {
    try {
        const response = await axios.get<Response>(`${url}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        return null;
    }
};


export const addData = async<Request, Response>(endpoint: string, data: Request) => {
    try {
        const response = await axios.post<Response>(`${url}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error posting data to ${endpoint}:`, error);
        return null;
    }

}


export const updateData = async <Request, Response>(endpoint: string, data: Partial<Request>) => {
    try {
        const response = await axios.put<Response>(`${url}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating data at ${endpoint}:`, error);
        return null;
    }
};


export const deleteData = async (endpoint: string) => {
    try {
        await axios.delete(`${url}/${endpoint}`);
        return true;
    } catch (error) {
        console.error(`Error deleting resource from ${endpoint}:`, error);
        return false;
    }
};
