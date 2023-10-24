// const authService = require("../service/auth.service");
// const queryService = require("../service/query.service");

const services = require("../service");

//http://localhost:8000/auth/initiate-auth
const initiateAuthentication = async (req, res) => {
  try {
    const scopes = [
      "https://www.googleapis.com/auth/profile.emails.read",
      "https://www.googleapis.com/auth/user.gender.read",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ];

    const options = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: "http://localhost:8000/auth/validate",
      response_type: "code",
      scope: scopes.join(" "),
      access_type: "offline",
    };

    const qs = new URLSearchParams(options);
    const url = `https://accounts.google.com/o/oauth2/v2/auth?${qs.toString()}`;

    return res.redirect(302, url);
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
};

const validateCallback = async (req, res) => {
  try {
    const { code } = req.query;
    console.log(req.query);

    //get access token
    const { accessToken, expirytime } =
      await services.authService.getAccessToken(code);

    // get profile data
    const profileData = await services.authService.getProfileData(accessToken);

    const displayName = profileData.names[0].displayName;
    const image = profileData.photos[0].url;
    const email = profileData.emailAddresses[0].value;

    console.log({ displayName, image, email, expirytime });
    await services.queryService.saveUserProfile(
      displayName,
      email,
      image,
      accessToken,
      expirytime
    );

    //generate jwt token
    const token = await services.tokenService.generateJwt({ email });
    //send jwt token to user
    res
      .status(200)
      .json({
        message: "user successfully autheticated",
        token,
        success: true,
      });
  } catch (err) {
    if (err?.response?.error) console.log(err.response.error);
    else console.log(err);

    res.status(500).send("something went wrong, please try again");
  }
};
module.exports = { initiateAuthentication, validateCallback };
