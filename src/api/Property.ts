import api from "./api";

const getAllProperty = () => api().get("/property/get-all");

const createProperty = (data: any) => api().postForm("/property/create", data);

const updateProperty = (data: any) => api().put("/property/update", data);

export { getAllProperty, createProperty, updateProperty };
