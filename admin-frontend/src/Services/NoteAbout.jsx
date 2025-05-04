import axios from "axios";

const BASE_URL = "http://localhost:5000/api/aboutcontents";

export const getAllAboutTexts = () => axios.get(BASE_URL);
export const getAboutTextById = (id) => axios.get(`${BASE_URL}/${id}`);
export const addAboutText = (data) => axios.post(BASE_URL, data);
export const updateAboutText = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
