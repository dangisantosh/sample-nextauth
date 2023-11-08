const axios = require("axios");

async function gettoken(loggerEmail) {
  try {
    const response = await axios.post("api/gettoken", {
        loggerEmail: loggerEmail,
    });

    if (response.data.valid) {
      return true; // Token is valid
    }
  } catch (error) {
    // Handle errors or invalid tokens
  }

  return false; // Token is invalid
}
