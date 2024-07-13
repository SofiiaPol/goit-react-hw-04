import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const PARAMS = {
  client_id: "ZzTwiQ7oQoHLmWKR8dN2NaH-uHb94Zqp2oAVk06x040",
};

const getSearchParams = (searchInputValue, page, perPage) => {
  const parameters = new URLSearchParams(PARAMS);
  parameters.append("query", searchInputValue);
  parameters.append("page", page);
  parameters.append("per_page", perPage);
  parameters.append("client_id", PARAMS.client_id);
  return parameters;
};

export const searchImages = async (searchQuery, page = 1, perPage = 15) => {
  const url = `${BASE_URL}/search/photos?${getSearchParams(
    searchQuery,
    page,
    perPage
  )}`;
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.status : error.message);
  }
};
