const axios = require("axios");

const fetchData = async (url) => {
  try {
    const res = await axios.get(url);

    return res?.data;
  } catch (err) {
    console.log(`faild to fetch data. error: ${err}`);
    throw new Error("server error");
  }
};

module.exports = { fetchData };
