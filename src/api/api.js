import apiClient from "./apiClient";


export async function getPosts(queryParams=""){
  const res = await apiClient.get(`posts${queryParams ? `?${queryParams}`: ""}`);
  return res.data
};

export async function getEvents(){
  const res = await apiClient.get("events");
  return res.data
};

export async function getArtists(){
  const res = await apiClient.get("artists");
  return res.data
};


