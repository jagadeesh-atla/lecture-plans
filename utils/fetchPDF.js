import axios from "axios";

export default async function fetchPDF(url) {
  try {
    const { data } = await axios.get(url, { responseType: "arraybuffer" });

    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
