const axios = require("axios");

const getAccessToken = async (code) => {
  try {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const url = "https://oauth2.googleapis.com/token";

    const data = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:8000/auth/validate",
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    const response = await axios(url, config);
    // console.log(response.data);
    const accessToken = response.data.access_token;
    const expirytime = response.data.expires_in;
    return { accessToken, expirytime };
  } catch (err) {
    console.log("error while generating access token");
    throw err;
  }
};
const getProfileData = async (accessToken) => {
  try {
    const uri = `https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos,genders`;
    const configs = {
      method: "get",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    const profile_data_res = await axios(uri, configs);

    // console.dir({ profile_data_res: profile_data_res.data }, { depth: null });

    return profile_data_res.data;
  } catch (err) {
    console.log("error in getting profile data");
    throw err;
  }
};
module.exports = { getAccessToken, getProfileData };
