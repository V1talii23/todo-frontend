import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.baseURL = baseUrl;

const getTasks = async (search: string, page: number) => {
  const { data } = await axios.get("/tasks", { params: { search, page } });
  console.log(data);
  return data;
};

export { getTasks };
