const serverUrl = "https://zjd7nc7ttczq.usemoralis.com:2053/server";
const appId = "s5uqq94zGuGYYCEjWatcy0Eqx2JKtdDSfx9lSY8c";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" });
      document.write(user);
      document.write(user.get("ethAddress"));
    } catch (error) {
      console.log(error);
    }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
