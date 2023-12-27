import axios from "axios";

async function fetchData(url: string) {
  try {
    const response = await axios.get(url);
    // Assuming the data you want is in the response.data property
    return response.data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export { fetchData };
