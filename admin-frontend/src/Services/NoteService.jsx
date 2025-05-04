import axios from "axios";

const BASE_URL = "http://localhost:5000/api/servicecontents";

export const getAllServiceTexts = () => axios.get(BASE_URL);
export const getServiceTextById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addServiceText = (data) => axios.post(BASE_URL, data);
export const updateServiceText = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
