const axios = require("axios");

async function getToken() {
  try {
    const {
      data: { token },
    } = await axios.post("https://argocd.amrio.nl/api/v1/session", {
      username: "admin",
      password: "Maxie2001@",
    });
    return token;
  } catch (error) {
    console.error(error.response);
  }
}

async function syncApp(token) {
  try {
    const { data } = await axios.post(
      "https://argocd.amrio.nl/api/v1/applications/streamwizard-endpoint/sync",
      {
        prune: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error.response);
  }
}

async function main() {
  try {
    const token = await getToken();
    const result = await syncApp(token);
  } catch (error) {
    console.error(error);
  }
}

main();
